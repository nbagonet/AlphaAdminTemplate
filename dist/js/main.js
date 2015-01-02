;
$(function() {

  //Toggle Search begin
  $('.search-toogle').on('click', function(e) {
    if (!$(this).hasClass("open")) {
      $(this).addClass('open');
      setTimeout($(this).find('.form-control').focus(), 1000);

      $('.search-toogle .form-control').on('blur', function(e) {
        $(this).closest('.search-toogle').removeClass('open');
        $(this).unbind('blur');
      });
    }
  });
  //Toggle Search end

  //Find use simscroll elements begin
  var SCElm = $("*[data-scroll='slimscroll'][data-scroll-size]");
  SCElm.each(function(index, element) {
    var _this = $(this),
      _width = _this.data("scroll-size").split("|")[0],
      _height = _this.data("scroll-size").split("|")[1];

    if (_height > 0) {
      _this.slimScroll({
        width: _width,
        height: _height,
        size: '5px',
        position: 'right',
        color: '#999',
        railVisible: false,
        railOpacity: 0.2,
        wheelStep: 30
      });
    }
  });
  //Find use simscroll element end

  //Initialize tooltips begin
  $("*[data-hover='tooltip']").tooltip();
  $("*[data-toggle='tooltip']").tooltip();
  //Initialize tooltips end

  //Initialize popovers begin
  $("*[data-toggle='popover']").popover();
  //Initialize popovers end

  //Small sidebar sub-menu toggle begin
  var SMCurIdx = $(".side-menu > li > a").index($("a.active"));

  function smallSidebarEvents() {
    $("body").addClass("small-sidebar");

    $(".side-menu > li > a[data-trigger='collapse']").on("click", function(e) {
      return false;
    }).on("mouseenter", function(e) {
      $(this).next(".collapsible").stop().fadeIn("fast");
    }).on("mouseleave", function(e) {
      $(this).next(".collapsible").stop().fadeOut("fast");
    });

    $(".side-menu > li > a[data-trigger='collapse']").next(".collapsible").on("mouseenter", function(e) {
      if ($(".side-menu > li > a").index($(this).prev("a[data-trigger='collapse']")) != SMCurIdx) {
        $(this).prev("a[data-trigger='collapse']").addClass("active");
      }
      $(this).stop().fadeIn("fast");
    }).on("mouseleave", function(e) {
      if ($(".side-menu > li > a").index($(this).prev("a[data-trigger='collapse']")) != SMCurIdx) {
        $(this).prev("a[data-trigger='collapse']").removeClass("active");
      }
      $(this).stop().fadeOut("fast");
    });
  }

  /**
   * [defaultSidebarEvents description]
   * @return {[type]} [description]
   */
  function defaultSidebarEvents() {
    $("body").removeClass("small-sidebar");

    $(".side-menu > li > a[data-trigger='collapse']").off("click mouseenter mouseleave");

    $(".side-menu > li > a[data-trigger='collapse']").next(".collapsible").off("mouseenter mouseleave");

    $(".side-menu > li > a[data-trigger='collapse'][class='active']").next(".collapsible").show();
  }

  if ($("body").hasClass("small-sidebar")) {
    smallSidebarEvents();
  }

  $("#smallsidebar-toggle").on("click", function(e) {
    e.preventDefault();
    if ($("body").hasClass("small-sidebar")) {
      defaultSidebarEvents();
    } else {
      smallSidebarEvents();
    }
  });
  //Small sidebar sub-menu toggle end

  //Topheader Multi level menu begin
  $(".horizontal-menu *[data-toggle='multi-level-menu']").on("mouseenter", function(e) {
    $(this).next(".multi-level-menu").stop().fadeIn();
  }).on("mouseleave", function(e) {
    $(this).next(".multi-level-menu").stop().fadeOut();
  });

  $(".horizontal-menu .multi-level-menu").on("mouseenter", function(e) {
    $(this).stop().fadeIn();
  }).on("mouseleave", function(e) {
    $(this).stop().fadeOut();
  });
  //Topheader Multi level menu end

  //Initialize Scroll to top begin
  $(window).scroll(function(e) {
    var _winH = $(this).height(),
      _scrollTOP = $(this).scrollTop();

    $("#scroll-to-top").on("click", function(e) {
      $("body,html").stop().animate({
        scrollTop: 0
      }, 500);
    });

    if (_scrollTOP > _winH / 3) {
      $("#scroll-to-top").stop().fadeIn();
    } else {
      $("#scroll-to-top").stop().fadeOut();
    }
  });
  //Initialize Scroll to top end

  //Initialize iCheck begin
  $('input.icheck').iCheck({
    checkboxClass: 'icheckbox_minimal-grey',
    radioClass: 'iradio_minimal-grey',
    increaseArea: '20%' // optional
  });
  //Initialize iCheck end

  //Fix ".page-wrapper" height begin
  function fixPageWapperHeight() {
    if ($(".page-wrapper").outerHeight(true) < $(window).height()) {
      $(".page-wrapper").height($(window).height());
    }
  }
  $(window).on("resize", function(e) {
    fixPageWapperHeight();
  });
  fixPageWapperHeight();
  //Fix ".page-wrapper" height end

  //Initialize Progress Bar begin
  $(".progress[data-init!='false']").each(function(index, element) {
    if ($(this).hasClass("progress-center-text")) {
      $(this).find(".progress-bar").progressbar({
        display_text: 'center'
      });
    } else if ($(this).hasClass("progress-fill-text")) {
      $(this).find(".progress-bar").progressbar({
        display_text: 'fill'
      });
    } else if ($(this).hasClass("progress-fill-text-nonpercentage")) {
      $(this).find(".progress-bar").progressbar({
        display_text: 'fill',
        use_percentage: false
      });
    } else if ($(this).hasClass("progress-centered-text-nonpercentage")) {
      $(this).find(".progress-bar").progressbar({
        display_text: 'center',
        use_percentage: false
      });
    } else {
      $(this).find(".progress-bar").progressbar();
    }
  });
  //Initialize Progress Bar end

  // Initialize Skycons begin
  if ($(".skycons").length > 0) {
    var skycons = new Skycons({
        "color": "white"
      }),
      list = [
        "clear-day", "clear-night", "partly-cloudy-day",
        "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
        "fog"
      ],
      i;
    for (i = list.length; i--;)
      skycons.set(list[i], list[i]);

    skycons.play();
  }
  // Initialize Skycons end

  //BEGIN CKEDITOR
  CKEDITOR.disableAutoInline = true;
  //END CKEDITOR

  // Initialze Bootstrap WYSIWYG5 Editors begin
  if($(".wysihtml5").length>0){
    $(".wysihtml5").wysihtml5();
  }
  // Initialze Bootstrap WYSIWYG5 Editors end

  // Initialze Summernote begin
  if($(".summernote-demo").length>0){
    $(".summernote-demo").summernote();
  }
  // Initialze Summernote end

});