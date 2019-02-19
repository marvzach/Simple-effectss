$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});



$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").slideToggle();
    $(".walrus-hidden").slideToggle();
  });
});

$(document).ready(function() {
      $(".clickable").click(function() {
        $(".walrus-showing").slideToggle();
        $(".walrus-hidden").slideToggle();
      });
    });

    //
    // for id
    $(document).ready(function() {
          $(".clickable").click(function() {
            $("#walrus-showing").slideToggle();
            $("#walrus-hidden").slideToggle();
          });
        });
        // fadeIn()
        // fadeOut()
        // slideToggle()         jqueery effects
        // slideDown()
        // slideUp()
        // slideToggle()
