'use strict';


//Smoothscrolling
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        //Update the menu selection
        $('.left-col ul li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.length) {
                var top = refElement.position().top - 100
                if (top <= scrollPos && top + refElement.outerHeight() > scrollPos) {
                    $('.left-col ul li a').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            }
        });
    }
    $(window).scroll(onScroll);

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            });
        }
        }
    });


var s,
    ListWidget = {
        settings: {
            appContainer: $('#thelist'),
            listingAdd: '.addButton'
        },

        actionBinding: function () {
            s.appContainer.on('click', s.listingOpen, this.revealListing);
            //s.appContainer.on('click', s.listingAdd, this.selectListing);
        },
		
        init: function init() {
            s = this.settings;
            this.actionBinding();
        },
		
        selectListing: function (event) {
            //Select this listing
            var thislisting = $(event.target).closest('.listing');
            if (thislisting.hasClass('selected')){
                //Close the currently open tab
                $(thislisting).removeClass('selected');
            } else {
                //Open this listing
                $(thislisting).addClass('selected');
            }
        }
    },
    FormatWidget = {
        settings: {},

        init: function init() {
            //this.checkVenueLink(); // Check if any listing has a venue name instead of id
            //this.checkVenueExist(); //Check if any venue is null, and create it
            //this.checkVenueLinkDelete(); // If venue doesn't link, delete it for now
            //this.formatAllDates(); //Check if date is a real date format
        },

        checkVenueLink: function () {

            console.log('Checking the venues');

            var List,
                Venues;

            $.ajax({
                    url: '/list/alllistings'
                })
                .done((data) => {

                    List = data;

                    $.ajax({
                            url: '/venues'
                        })
                        .done((data) => {

                            Venues = data;

                            var promises = [];


                            for (var i in List) {
                                for (var j in Venues) {
                                    if (List[i].venue === Venues[j].name) {


                                        console.log('MATCH FOUND');

                                        var newListing = {
                                            _id: List[i]._id,
                                            venue: Venues[j]._id
                                        }

                                        var eventString = JSON.stringify(newListing);

                                        // Use AJAX to update the object
                                        var request = $.ajax({
                                            type: 'POST',
                                            data: eventString,
                                            url: '/list/update',
                                            dataType: 'json',
                                            contentType: "application/json; charset=utf-8"
                                        });

                                        promises.push(request);


                                    } //End if
                                } //End Venue for
                            } // End list for

                            $.when.apply(null, promises).done(function () {
                                alert('All done')
                            })
                        });

                })
        },

        checkVenueExist: function () {

            console.log('Checking the listings venue');

            var List;

            $.ajax({
                    url: '/list/alllistings'
                })
                .done((data) => {

                    List = data;

                    var promises = [];


                    for (var i in List) {
                        if (!List[i].venue) {

                            console.log('Venue Missing');

                            var newListing = {
                                _id: List[i]._id,
                                venue: '0'
                            }

                            var eventString = JSON.stringify(newListing);

                            // Use AJAX to update the object
                            var request = $.ajax({
                                type: 'POST',
                                data: eventString,
                                url: '/list/update',
                                dataType: 'json',
                                contentType: "application/json; charset=utf-8"
                            });

                            promises.push(request);

                        } //End if
                    } // End list for

                    $.when.apply(null, promises).done(function () {
                        alert('All done')
                    })

                })
        },

        checkVenueLinkDelete: function () {

            console.log('Checking the venues');

            var List,
                Venues;

            $.ajax({
                    url: '/list/alllistings'
                })
                .done((data) => {

                    List = data;

                    $.ajax({
                            url: '/venues'
                        })
                        .done((data) => {

                            Venues = data;

                            var promises = [],
                                counter = 0;


                            for (var i in List) {

                                var match = 0;

                                for (var j in Venues) {
                                    if (List[i].venue === Venues[j]._id) {


                                        console.log('MATCH FOUND');

                                        match = match + 1;

                                    } //End if

                                } //End Venue for


                                if (match == 0) {

                                    counter = counter + 1;

                                    var IDtoDelete = List[i]._id;

                                    // Use AJAX to update the object
                                    var request = $.ajax({
                                        type: 'POST',
                                        url: '/list/delete/' + IDtoDelete,
                                        dataType: 'json',
                                        contentType: "application/json; charset=utf-8"
                                    });

                                    promises.push(request);
                                }


                            } // End list for
                            $.when.apply(null, promises).done(function () {
                                alert('All done')
                            })
                            console.log(counter + ' POSTS DELETED')
                        });

                })
        },

        formatAllDates: function () {

            var List;

            $.ajax({
                    url: '/list/alllistings'
                })
                .done((data) => {

                    List = data;

                    var promises = [],
                        counter = 0;

                    for (var i in List) {
                        if (typeof List[i].end === 'string') {

                            console.log('MATCH FOUND');

                            counter = counter + 1;

                            var newStartDate = new Date(List[i].start);
                            var newEndDate = new Date(List[i].end);
                            var newReceptionDate;
                            if (List[i].reception) {
                                newReceptionDate = new Date(List[i].reception);
                            }

                            var newListing = {
                                _id: List[i]._id,
                                start: newStartDate,
                                end: newEndDate,
                                reception: newReceptionDate,
                            }

                            var eventString = JSON.stringify(newListing);

                            // Use AJAX to update the object
                            var request = $.ajax({
                                type: 'POST',
                                data: eventString,
                                url: '/list/update',
                                dataType: 'json',
                                contentType: "application/json; charset=utf-8"
                            });

                            promises.push(request);

                        } //End if

                    }

                    $.when.apply(null, promises).done(function () {
                        alert('All done')
                    })

                    console.log(counter + 'rows affected');

                });



            var start = new Date(this.props.start);
        }
    };

FormatWidget.init();
ListWidget.init();