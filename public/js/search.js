$("#searchButton").click(function() {
  $(".search-box").addClass("search-box-viewable");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest("#searchButton,.search-box").length) {
    $("body")
      .find(".search-box")
      .removeClass("search-box-viewable");
    console.log("close");
  }
});
