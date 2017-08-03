'use strict';


// Render the components
React.renderComponent(
    <Listapp />, 
    document.getElementById('thelist')
);

var s,
    ListWidget = {
    settings: {},

    init: function init() {
        ListWidget.displayPlaces();
    },

    // Function to DISPLAY all places in database ================================

    displayPlaces: function displayPlaces() {

        // jQuery AJAX call for JSON

        $.getJSON('/currentlistings', function (data) {

            // For each item in our JSON, add a marker
            $.each(data, function (i) {

                console.log(data[i].name);
            });
        });
    }
};

ListWidget.init();