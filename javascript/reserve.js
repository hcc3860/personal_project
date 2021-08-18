var checkIn = document.getElementsByClassName("check-in");
var checkOut = document.getElementsByClassName("check-out");

function checkInDate() {
  checkIn.value = "getFullYear()-getMonth()-getDate()" ;
}
