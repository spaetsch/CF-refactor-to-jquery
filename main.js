// function verifyEmail() {
//   var status= document.getElementById('emailStatus');
//   var emailPattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
//   if (emailPattern.test(subscribeField.value)) {
//     status.classList.remove("notApproved");
//     status.classList.add("approved");
//   } else {
//     status.classList.remove("approved");
//     status.classList.add("notApproved");
//   }
// }
// var elEmail = document.getElementById('subscribeField')
// elEmail.addEventListener('keyup', verifyEmail, false);

$("#subscribeField").keyup(function(){
  var emailPattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

  if (emailPattern.test(subscribeField.value)) {
    $("#emailStatus").removeClass("notApproved");
    $("#emailStatus").addClass("approved");
  } else {
    $("#emailStatus").removeClass("approved");
    $("#emailStatus").addClass("notApproved");
  }
});

// function submitMessage (e) {
//   e.preventDefault();
//   var submitMsg = document.getElementById('message');
//   submitMsg.textContent = 'Thank you. We will now sell your email to spammers.';
// }
//var submitButton = document.getElementById('submit')
// submitButton.addEventListener('click', submitMessage, false);

$("#submit").click(function(event){
  event.preventDefault();
  $("#message").text('Thank you. We will now sell your email to spammers.');
});


// function changeColor () {
//   form.classList.add("completed")
// }
// var form = document.getElementById('formsection')
// form.addEventListener('click', changeColor, false)

$("#formsection").click(function(){
  console.log("invoked");
  $("#formsection").addClass("completed");
});
