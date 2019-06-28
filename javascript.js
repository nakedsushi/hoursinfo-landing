function emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email)
}

$(document).ready(function() {
  var $form = $('#waitlist'),
    url = 'https://script.google.com/macros/s/AKfycbw9Uyi-eqKYMfX8s72wNAfOGTkZtalGq22paMKncw9NDQhYdUPB/exec';

  $('#email').focus(function() {
    $('#email-invalid').hide();
  });

  $form.submit(function(e) {
    e.preventDefault();
    if (emailIsValid($('#email').val())) {
      $('.leader__image').hide();
      $('.pre-submit').hide();
      $('.text').hide();
      $('.explanation').fadeOut();
      $('.submitting').show();
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serialize(),
        success: function() {
          $('.submitting').hide();
          $('#thanks').show();
        }
      });
    } else {
      $('#email-invalid').show();
    }
  });
});
