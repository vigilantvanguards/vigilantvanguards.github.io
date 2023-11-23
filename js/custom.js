// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: false,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$(".team_owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: false,
  navText: [],
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1100: {
      items: 4,
    },
  },
});

/** google_map js **/
function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

/** send_email **/
function sendEmail() {
  var to = document.getElementById("recipient").value;
  var subject = document.getElementById("subject").value;
  var customer = document.getElementById("customer").value;
  var company = document.getElementById("company").value;
  var message = document.getElementById("message").value;

  var body =
    "Customer: " + customer + "\nCompany: " + company + "\nMessage: " + message;

  var mailtoLink =
    "mailto:" +
    to +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  window.location.href = mailtoLink;

  document.getElementById("customer").value = "";
  document.getElementById("company").value = "";
  document.getElementById("message").value = "";
  $("#requestsoc").modal("hide");
}

// Reset the form when modal close
$("#requestsoc").one("hidden.bs.modal", function () {
  document.getElementById("customer").value = "";
  document.getElementById("company").value = "";
  document.getElementById("message").value = "";
});

// function validateForm() {
//     // your validation logic here
//     if (/* validation fails */) {
//         alert("Please fill in all required fields.");
//         return false;
//     }
//     return true;
// }
