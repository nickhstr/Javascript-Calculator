// DISCLAIMER: This app was built early-on in my programming journey, hence the lack of organization
var answer = "";
var calculation = "";
var clear = false;

$(document).ready(function() {
  $('.button').hover(
    function() {
      $(this).addClass('active');
    },
    function() {
      $(this).removeClass('active');
    }
  );
  $('.button').click(function() {
    var entry = $(this).attr('value');
    if (parseInt(entry, 10) == entry || entry === "%" || entry === "/" || entry === "*" || entry === "-" || entry === "+" || entry === ".") {
      calculation += entry;
      $('.output').text(calculation);
    } else if (entry === "AC") {
      calculation = "";
      $('.output').text(calculation);
    } else if (entry === "CE") {
      calculation = calculation.slice(0, -1);
      $('.output').text(calculation);
    } else if (entry === "Ans") {
      calculation += answer;
      $('.output').text(calculation);
    } else if (entry === "=") {
      answer = eval(calculation);
      $('.output').text(answer);
      calculation = "";
    }
  })
});