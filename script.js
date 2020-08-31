
var date = moment().format("MMM Do YYYY");

$("#currentDay").append(date);

var timeOfday = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
updatetime();


function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {

    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");


    }
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: powderblue");

    }
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #fc665e");
    
    }
  }
}

$(".rowBtn").on("click", function() {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

$("#7am").children("input").val(localStorage.getItem("7am"));

$("#8am").children("input").val(localStorage.getItem("8am"));

$("#9am").children("input").val(localStorage.getItem("9am"));

$("#10am").children("input").val(localStorage.getItem("10am"));

$("#11am").children("input").val(localStorage.getItem("11am"));

$("#12pm").children("input").val(localStorage.getItem("12pm"));

$("#1pm").children("input").val(localStorage.getItem("1pm"));

$("#2pm").children("input").val(localStorage.getItem("2pm"));

$("#3pm").children("input").val(localStorage.getItem("3pm"));

$("#4pm").children("input").val(localStorage.getItem("4pm"));

$("#5pm").children("input").val(localStorage.getItem("5pm"));

$("#6pm").children("input").val(localStorage.getItem("6pm"));

$("#7pm").children("input").val(localStorage.getItem("7pm"));

$("#8pm").children("input").val(localStorage.getItem("8pm"));