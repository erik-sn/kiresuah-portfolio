$(document).ready(function() {
      $('.img-me').fadeIn(2000);
  
    $('#about-button').click(function() {
      scrollToAbout();
    })
    
    $('#portfolio-button').click(function() {
      scrollToPortfolio();
    })
    
    $('#contact-button').click(function() {
      scrollToContact();
    })
});

function scrollToPortfolio() {
  $('html, body').animate({scrollTop: '375px'}, 800);
}

function scrollToAbout() {
  $('html, body').animate({scrollTop: '0px'}, 800);
}

function scrollToContact() {
  $('html, body').animate({scrollTop: '1680px'}, 800);
}

function sendMessage() {
  var name = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  var message = $('#message').val();
  console.log(name, email, phone, message);
  if(message && (name || email || phone)) {
    $.ajax({
      method: "POST",
      url: "http://localhost:8000/api/message/",
      data: { name: name, email: email, phoneNumber: phone, message: message }
    })
    .done(function( msg ) {
      $('#alert-container').html('Your message has been submitted successfully!');
    })
    .fail(function( jqXHR, textStatus ) {
      $('#alert-container').html('There was a problem submitting your message - please try again later.');
    });
  } else {
    $('#alert-container').html('A name/email address/phone number and a message is required!');
  }
}