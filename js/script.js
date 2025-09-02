jQuery(function ($) {
  "use strict",
    // menu

    $(document).ready(function () {
      $menuLeft = $(".pushmenu-left");
      $nav_list = $("#nav_list");

      $nav_list.click(function () {
        $(this).toggleClass("active");
        $(".pushmenu-push").toggleClass("pushmenu-push-toright");
        $menuLeft.toggleClass("pushmenu-open");
      });

      // User feedback submission - To WhatsApp
      $("#feedback-submit").click(function () {
        var userName = $("#user-name").val().trim();
        var userPhone = $("#user-phone").val().trim();
        var userEmail = $("#user-email").val().trim();
        var userFeedback = $("#user-feedback").val().trim();
        if (userName && userPhone) {
          var whatsAppMessage = `Name: ${userName}\nPhone: ${userPhone}\nEmail: ${userEmail}\nFeedback: ${userFeedback}`;
          var whatsappUrl =
            "https://wa.me/919995028299?text=" +
            encodeURIComponent(whatsAppMessage);
          window.open(whatsappUrl, "_blank");
        } else {
          alert("Please enter your Name and Contact number before submitting.");
        }
      });
    });

  (function (e, t, n, r) {
    e.fn.doubleTapToGo = function (r) {
      if (
        !("ontouchstart" in t) &&
        !navigator.msMaxTouchPoints &&
        !navigator.userAgent.toLowerCase().match(/windows phone os 7/i)
      )
        return false;
      this.each(function () {
        var t = false;
        e(this).on("click", function (n) {
          var r = e(this);
          if (r[0] != t[0]) {
            n.preventDefault();
            t = r;
          }
        });
        e(n).on("click touchstart MSPointerDown", function (n) {
          var r = true,
            i = e(n.target).parents();
          for (var s = 0; s < i.length; s++) if (i[s] == t[0]) r = false;
          if (r) t = false;
        });
      });
      return this;
    };
  })(jQuery, window, document);

  $(function () {
    $("#nav li:has(ul)").doubleTapToGo();
  });

  // menu fixed

  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 50) {
      $("header").css({
        position: "fixed",
        top: "0px",
        width: "100%",
        "z-index": "9999",
        "background-color": "#fff",
        "box-shadow": "1px 3px 7px rgba(0,0,0,0.3)",
      });
    } else {
      $("header").css({
        position: "relative",
        "box-shadow": "none",
      });
    }
  });

  $(".flexslider").flexslider({
    animation: "slide",
    start: function (slider) {
      $(".flexslider").resize();
    },
  });

  // testimonial

  $(document).ready(function () {
    //carousel options
    $("#quote-carousel").carousel({
      pause: true,
      interval: 4000,
    });
  });

  //accodition tab

  $("#accordion1").click(function (e) {
    $(".panel-group").on("hidden.bs.collapse", toggleIcon);
    $(".panel-group").on("shown.bs.collapse", toggleIcon);
  });

  //bottom accodition

  $("#accordion2").click(function (e) {
    $(".panel-group").on("hidden.bs.collapse", toggleIcon);
    $(".panel-group").on("shown.bs.collapse", toggleIcon);
  });

  // blog

  $(".blog-full").isotope({
    // options
    itemSelector: ".blog-box-mob",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: ".blog-box-mob",
    },
  });

  //back to top

  if ($("#back-to-top").length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#back-to-top").addClass("show");
        } else {
          $("#back-to-top").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $("#back-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }
});
