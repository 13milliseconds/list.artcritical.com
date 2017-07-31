//Amazon SDK configuration
var AWS = require('aws-sdk');

AWS.config.update({
    region: "us-east-2",
    endpoint: "https://dynamodb.us-east-2.amazonaws.com"
});

var docClient = new AWS.DynamoDB.DocumentClient();



exports.getAllListings = function () {

    var params = {
        TableName: "listings",
    };

    docClient.scan(params, function (err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {


            data.Items.forEach(function (listing) {
                console.log('The scan: ' + listing.listingName);
            });

            // continue scanning if we have more movies, because
            // scan can retrieve a maximum of 1MB of data
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }
        }
    })

}



exports.getCurrentListings = function () {

    var dateNow = Date.now() / 1000;
    var params = {
        TableName: "listings",
        IndexName: "listingEnd-index",
        KeyConditionExpression: "#type = :type and #end > :end",
        ExpressionAttributeNames: {
            "#type": "listingType",
            "#end": "listingEnd"
        },
        ExpressionAttributeValues: {
            ":type": "exhibition",
            ":end": dateNow
        }
    };

    console.log('Date: ' + dateNow);
    
    docClient.query(params, function (err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {


            data.Items.forEach(function (listing) {
                console.log('The query: ' + listing.listingName);
            });

            // continue scanning if we have more movies, because
            // scan can retrieve a maximum of 1MB of data
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }
        }
    });

};