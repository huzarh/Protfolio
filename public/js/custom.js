(function ($) {
  "use strict";

  // COUNTER NUMBERS
  jQuery(".counter-thumb").appear(function () {
    jQuery(".counter-number").countTo();
  });

  // BACKSTRETCH SLIDESHOW
  $(".hero-section").backstretch(
    [
      "https://scontent.fkco5-1.fna.fbcdn.net/v/t39.30808-6/337032211_1236620197293332_7970949390493723550_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I-quusnw7gMAX-O1E58&_nc_ht=scontent.fkco5-1.fna&oh=00_AfDDbsDTPgSov8XmvYTv1JRf16FEpjoij6txA5IJT2FPdg&oe=6437561E",
      "https://scontent.fkco5-1.fna.fbcdn.net/v/t39.30808-6/332068646_5685572611547853_7196547105423599698_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=E4odioGIiI0AX-I2rVB&_nc_ht=scontent.fkco5-1.fna&oh=00_AfBSm5tLzFHLlJuhKT2tsH0uOjQbz-tDXX3ufdeuE2_JfA&oe=6437724D",
      "https://scontent.fkco5-1.fna.fbcdn.net/v/t1.6435-9/186549634_315276466900715_7563678693471072356_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=3MwPPQpVA64AX_JKa0t&_nc_ht=scontent.fkco5-1.fna&oh=00_AfC0kw0pmzaQS4V4_Wz_DCLS---nswuIECpE1t81Ffl73A&oe=6459CD06",
    ],
    { duration: 2000, fade: 750 }
  );

  // CUSTOM LINK
  $(".smoothscroll").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);

    scrollToDiv(elWrapped);
    return false;

    function scrollToDiv(element) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });
})(window.jQuery);
