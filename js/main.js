(function($) {
  var slider = $(".slider-main").flickity({
    // options
    cellAlign: "left",
    contain: true,
    pageDots: false
  });

  //Update paginate onload
  $(document).ready(function() {
    var sr = $(".slider").length,
      ra = (1 / sr) * 100,
      lr = $(".line-ratio");
    lr.css({ transform: "translateX(" + ra + "%)" });
  });

  slider.on("change.flickity", function(event, index) {
    barPagination($(this), index);
  });

  function barPagination(e, i) {
    var $this = e,
      cellElements = $this.flickity("getCellElements"),
      c = i + 1,
      t = cellElements.length,
      r = (c / t) * 100,
      s = -100,
      e = $(".line-ratio"),
      f = s + r;
    e.css({ transform: "translateX(" + f + "%)" });
  }
})(jQuery);
