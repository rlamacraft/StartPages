$(document).ready( function() {

  $(".icon").click(function() {
    var link = $(this).data("href");
    window.location = link;
  });

  setTimeout(function() {
    $(".js-search").focus();
    console.log("focus!");
  }, 50);

  $(".js-search").keypress(function(ev) {
    if(ev.charCode == 13)
      window.location = "https://duckduckgo.com/?q=" + $(this).val();
  })
} );
