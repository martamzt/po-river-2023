/* INIZIALIZZAZIONE MAPBOX */
var next;
var prev;
var id;

mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGFtZXp6ZXR0aSIsImEiOiJjbGh0MHM0ZmowNnA4M2puMzdxdDA4a3VsIn0.3ANiEbNc0KJWDpT8raXhuw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/martamezzetti/clht6qvof002201quh7gig8yn',
    center: [10.694916836811924,45.01628050107499],
    zoom: 8
});

/* CLICK SUI MARKER */

map.on('click', (event) => {
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['tappe-fiume-po'] 
    });
    if (!features.length) {
        return;
    }
    const feature = features[0];
    var name = feature.properties.place_name;
    var group = feature.properties.Group;
    id = feature.properties.ID;
    jQuery(".section").removeClass("visible");
    jQuery(".section#section-" + id).addClass("visible");
    if (id == 1) {
        map.flyTo({
            center: [7.09241, 44.70051],
            essential: true,
            zoom: 12
        });
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", 2);
    }
    if (id == 2) {
        map.flyTo({
            center: [7.18842, 44.69229],
            essential: true,
            zoom: 12
        });
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", 3);
    }
    if (id == 3) {
        map.flyTo({
            center: [7.68676, 45.05445],
            essential: true,
            zoom: 12
        });
        jQuery(".button-prev").data("prev", 2);
        jQuery(".button-next").data("next", 4);
    }
    if (id == 4) {
        map.flyTo({
            center: [8.59441, 45.17658],
            essential: true,
            zoom: 12
        });
        jQuery(".button-prev").data("prev", 3);
        jQuery(".button-next").data("next", 5);
    }
});

jQuery(".section .close").on("click", function(){
    jQuery(".section").removeClass("visible");
});

/* BOTTONE NEXT */

jQuery(".button-next").click(function(){
    next = jQuery(this).data("next");
    console.log("prev: " + prev +  "id: " + id + " next: " + next);
    // id = next;
    if (next == 1) {
        map.flyTo({
            center: [7.09241, 44.70051],
            essential: true,
            zoom: 12
        });
        jQuery(".section").removeClass("visible");
        jQuery(".section#section-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", next + 1);
    }
    if (next == 2) {
        map.flyTo({
            center: [7.18842, 44.69229],
            essential: true,
            zoom: 12
        });
        jQuery(".section").removeClass("visible");
        jQuery(".section#section-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 1);
        jQuery(".button-next").data("next", next + 1);
    }
    if (next == 3) {
        map.flyTo({
            center: [7.68676, 45.05445],
            essential: true,
            zoom: 12
        });
        jQuery(".section").removeClass("visible");
        jQuery(".section#section-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 2);
        jQuery(".button-next").data("next", next + 1);
    }
    if (next == 4) {
        map.flyTo({
            center: [8.59441, 45.17658],
            essential: true,
            zoom: 12
        });
        jQuery(".section").removeClass("visible");
        jQuery(".section#section-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 3);
        jQuery(".button-next").data("next", next + 1);
    }
    if (next == 5) {
        map.flyTo({
            center: [9.15823, 45.18459],
            essential: true,
            zoom: 12
        });
        jQuery(".section").removeClass("visible");
        jQuery(".section#section-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 4);
        jQuery(".button-next").data("next", next + 1);
    }
    if (next == 6) {
        map.flyTo({
            center: [9.22652, 45.14035],
            essential: true,
            zoom: 12
        });
        jQuery(".section").removeClass("visible");
        jQuery(".section#section-" + next).addClass("visible");
        //jQuery(this).data("next", id + 1);
        jQuery(".button-prev").data("prev", 5);
        jQuery(".button-next").data("next", next + 1);
    }
    if (next == 7) {
        map.flyTo({
            center: [9.346085, 45.101792],
            essential: true,
            zoom: 12
        });
        jQuery(".section").removeClass("visible");
        jQuery(".section#section-" + next).addClass("visible");
        //jQuery(this).data("next", 1);
        jQuery(".button-prev").data("prev", 6);
        jQuery(".button-next").data("next", next + 1);
    }
});


/* BOTTONE PREV */

jQuery(".button-prev").click(function(){
    prev = jQuery(this).data("prev");
    jQuery(".section").removeClass("visible");
    // id = next - 1;
    jQuery(".section#section-" + prev).addClass("visible");
    jQuery(".button-prev").data("prev", prev);
    console.log("prev: " + prev + " id: " + id + " next: " + next);
    if (prev == 1) {
        map.flyTo({
            center: [7.09241, 44.70051],
            essential: true,
            zoom: 12
        });
        jQuery(".button-prev").data("prev", prev);
        jQuery(".button-next").data("next", 2);
    }
    if (prev == 2) {
        map.flyTo({
            center: [7.18842, 44.69229],
            essential: true,
            zoom: 12
        });
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 3);
    }
    if (prev == 3) {
        map.flyTo({
            center: [7.68676, 45.05445],
            essential: true,
            zoom: 12
        });
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 4);
    }
    if (prev == 4) {
        map.flyTo({
            center: [8.59441, 45.17658],
            essential: true,
            zoom: 12
        });
        jQuery(".button-prev").data("prev", prev - 1);
        jQuery(".button-next").data("next", 5);
    }
});

// CLICK SUL BOTTONE SCOPRI

jQuery(".scopri").click(function(){
    var modal = jQuery(this).data("modal");
    jQuery(".modal#modal-" + modal).addClass("visible");
});

jQuery(".modal .close").click(function(){
    jQuery(".modal").removeClass("visible");
});
