if($(window).width() > 1340) {
  $(document).ready( function() {
    $("#dvid").hide(); //hide your div initially
    var topOfOthDiv = $("#othdiv").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#dvid").show(); //reached the desired point -- show div
        }
    });
});
}

$(function() {
  $('nav a').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault()
      var scrollTo = $(this).attr('href')
      var whitespace = scrollTo == '#h2-user-research' ? 120 : 80
      $('html,body').animate({
        scrollTop: $(scrollTo).offset().top - whitespace
      }, 1000)
    })
  })
})
