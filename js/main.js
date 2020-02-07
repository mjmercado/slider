(function($) {
  var slider = $(".slider-main").flickity({
    // options
    cellAlign: "left",
    contain: true,
    pageDots: false
  });

  slider.on("change.flickity", function(event, index) {
    var $this = $(this),
      cellElements = $this.flickity("getCellElements"),
      c = index + 1,
      t = cellElements.length,
      r = (c / t) * 100,
      s = -100,
      e = $(".line-ratio"),
      f = s + r;

    // $(cellElements).each(function(i, el) {
    //   //   var a = el.css("left");
    // });
    console.log(e);
    e.css({ transform: "translateX(" + f + "%)" });
  });
})(jQuery);
