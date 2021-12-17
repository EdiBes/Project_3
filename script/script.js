jQuery(document).ready(function ($) {
  $(".gototop").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      { scrollTop: $(this.hash).offset().top },
      600,
      "swing"
    );
    $(".scroll li").removeClass("active");
    $(this).parents("li").toggleClass("active");
  });
});

/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, "load", init);

var locations = [
  ["Hausmattweg 9 (BL)", 47.5346119, 7.71293],
  ["Surentalstrasse 10 6210 Sursee (LU)", 47.17805, 8.11033],
  ["Bellerivestrasse 10 8008 Zürich", 47.36038, 8.54807],
  ["Gewerbestrasse 5 6330 Cham", 47.18838, 8.47334],
  ["Bornweg 2 4800 Zofingen", 47.29361, 7.93867],
  ["Eymatt 4 3930 Visp", 46.2977283, 7.8789424],
  ["Schönmattstrasse 8 4153 Reinach BL", 47.4961307, 7.5979502],
];
var map;
var markers = [];

function init() {
  map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 7,
    center: new google.maps.LatLng(46.2977283, 7.8789424),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  var num_markers = locations.length;
  for (var i = 0; i < num_markers; i++) {
    markers[i] = new google.maps.Marker({
      position: { lat: locations[i][1], lng: locations[i][2] },
      map: map,
      html: locations[i][0],
      id: i,
    });

    google.maps.event.addListener(markers[i], "click", function () {
      var infowindow = new google.maps.InfoWindow({
        id: this.id,
        content: this.html,
        position: this.getPosition(),
      });
      google.maps.event.addListenerOnce(infowindow, "closeclick", function () {
        markers[this.id].setVisible(true);
      });
      this.setVisible(false);
      infowindow.open(map);
    });
  }
}

init();
// ========== END GOOGLE MAP ========== //

/* ==========  START IMAGES HOVER ========== */
$(document).ready(function () {
  $("#krankenkasse").mouseover(function () {
    document.getElementById("krankenkasse_img").src =
      "images/angebote/kk_icon_hover.svg"; //
  });
  $("#krankenkasse").mouseout(function () {
    document.getElementById("krankenkasse_img").src =
      "images/angebote/kk_icon.svg";
  });

  $("#autoversicherung").mouseover(function () {
    document.getElementById("autoversicherung_img").src =
      "images/angebote/av_icon_hover.svg"; //
  });
  $("#autoversicherung").mouseout(function () {
    document.getElementById("autoversicherung_img").src =
      "images/angebote/av_icon.svg";
  });

  $("#hausratversicherung").mouseover(function () {
    document.getElementById("hausratversicherung_img").src =
      "images/angebote/hv_icon_hover.svg"; //
  });
  $("#hausratversicherung").mouseout(function () {
    document.getElementById("hausratversicherung_img").src =
      "images/angebote/hv_icon.svg";
  });

  $("#privathaftpflicht").mouseover(function () {
    document.getElementById("privathaftpflicht_img").src =
      "images/angebote/pp_icon_hover.svg"; //
  });
  $("#privathaftpflicht").mouseout(function () {
    document.getElementById("privathaftpflicht_img").src =
      "images/angebote/pp_icon.svg";
  });

  $("#rechtsschutz").mouseover(function () {
    document.getElementById("rechtsschutz_img").src =
      "images/angebote/rs_icon_hover.svg"; //
  });
  $("#rechtsschutz").mouseout(function () {
    document.getElementById("rechtsschutz_img").src =
      "images/angebote/rs_icon.svg";
  });

  $("#lebensversicherung").mouseover(function () {
    document.getElementById("lebensversicherung_img").src =
      "images/angebote/lifeinsurance_icon_hover.svg"; //
  });
  $("#lebensversicherung").mouseout(function () {
    document.getElementById("lebensversicherung_img").src =
      "images/angebote/lifeinsurance_icon.svg";
  });

  $("#reiseversicherung").mouseover(function () {
    document.getElementById("reiseversicherung_img").src =
      "images/angebote/travel_icon_hover.svg"; //
  });
  $("#reiseversicherung").mouseout(function () {
    document.getElementById("reiseversicherung_img").src =
      "images/angebote/travel_icon.svg";
  });

  $("#gebaudeversicherung").mouseover(function () {
    document.getElementById("gebaudeversicherung_img").src =
      "images/angebote/building_icon_hover.svg"; //
  });
  $("#gebaudeversicherung").mouseout(function () {
    document.getElementById("gebaudeversicherung_img").src =
      "images/angebote/building_icon.svg";
  });

  $("#kautionsversicherung").mouseover(function () {
    document.getElementById("kautionsversicherung_img").src =
      "images/angebote/kaution_icon_hover.svg"; //
  });
  $("#kautionsversicherung").mouseout(function () {
    document.getElementById("kautionsversicherung_img").src =
      "images/angebote/kaution_icon.svg";
  });

  $("#saule").mouseover(function () {
    document.getElementById("saule_img").src =
      "images/angebote/3pillar_icon_hover.svg"; //
  });
  $("#saule").mouseout(function () {
    document.getElementById("saule_img").src =
      "images/angebote/3pillar_icon.svg";
  });

  $("#erwerbsunfahigkeit").mouseover(function () {
    document.getElementById("erwerbsunfahigkeit_img").src =
      "images/angebote/disabled_icon_hover.svg"; //
  });
  $("#erwerbsunfahigkeit").mouseout(function () {
    document.getElementById("erwerbsunfahigkeit_img").src =
      "images/angebote/disabled_icon.svg";
  });

  $("#hypothek").mouseover(function () {
    document.getElementById("hypothek_img").src =
      "images/angebote/hypothek_icon_hover.svg"; //
  });
  $("#hypothek").mouseout(function () {
    document.getElementById("hypothek_img").src =
      "images/angebote/hypothek_icon.svg";
  });

  $(".bevertungen").mouseover(function () {
    document.getElementById("bevertungen_img").src =
      "images/logos/goto_hover.svg"; //
  });
  $(".bevertungen").mouseout(function () {
    document.getElementById("bevertungen_img").src = "images/logos/goto.svg";
  });

  $("#fb_img").mouseover(function () {
    document.getElementById("fb_img").src = "images/logos/fb_hover.svg"; //
  });
  $("#fb_img").mouseout(function () {
    document.getElementById("fb_img").src = "images/logos/fb.svg";
  });

  $("#insta_img").mouseover(function () {
    document.getElementById("insta_img").src = "images/logos/in_hover.svg"; //
  });
  $("#insta_img").mouseout(function () {
    document.getElementById("insta_img").src = "images/logos/in.svg";
  });

  $("#link_img").mouseover(function () {
    document.getElementById("link_img").src = "images/logos/link_hover.svg"; //
  });
  $("#link_img").mouseout(function () {
    document.getElementById("link_img").src = "images/logos/link.svg";
  });

  /* ==========  POPUP OVERLAY ========== */
  $(".popdown").popdown({
    /* width: 1850*/
  });
});
/* ==========  END IMAGES HOVER ========== */

var wow = new WOW({
  boxClass: "wowload", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
});
wow.init();

$(".carousel").swipe({
  swipeLeft: function () {
    $(this).carousel("next");
  },
  swipeRight: function () {
    $(this).carousel("prev");
  },
  allowPageScroll: "vertical",
});
