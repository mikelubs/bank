var deposit = parseInt($("input#initial-deposit").val());
var deposit2 = parseInt($("input#deposit").val());
var withdraw = parseInt($("input#withdraw").val());
var text = "";


var balance2 = deposit + deposit2;
var balance3 = balance2 - withdraw;

var depositBal = function(deposit) {
  var balance1;
  if (deposit < 10) {
    return text += "The Minimum Deposit is Kshs. 10";
    $(this).remove();
  }
  else {
    var balance1 = deposit;
    return text += "Your New Balance is Kshs. " + deposit;
    $(this).remove();
  }
};

var depositBal2 = function(balance) {
  if (deposit2 < 10) {
    text += "The Minimum Deposit is Kshs. 10";
  }
  else {
    text += "Your New Balance is Kshs. " + balance2;
  }
};

var withdrawalBal = function(balance) {
  if (Balance3<0) {
    text += "Your Balance is insuffecient, Top up to continuue enjoying  our Services";
  }
  else {
    text += "You have withdrawn Kshs. " + withdraw + ". Your New Balance is Kshs. " + balance3;
  }
};

$(document).ready(function(){
  $("form#bank").submit(function (event) {
    var firstName = $("input#firstname").val();
    var deposit = parseInt($("input#initial-deposit").val());
    var lastName = $("input#lastname").val();
    var idNumber = $("input#idnumber").val();
    var phoneNumber = $("input#phonenumber").val();
    var result1 = depositBal(deposit);
    document.getElementById("result1").innerHTML = result1;
    event.preventDefault();
  });
});
