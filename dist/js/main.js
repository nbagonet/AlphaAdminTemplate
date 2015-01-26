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

  // Moved footer to main container begin
  if ($(".footer")[0] && $(".main")[0]) {
    $(".footer").appendTo(".main").show();
  }
  // Moved footer to main container end

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

  // Initialize responsive-tabs begin
  if (typeof(fakewaffle) != "undefined") {
    fakewaffle.responsiveTabs(['xs', 'sm', 'md']);
    $(".panel-group").on("shown.bs.collapse", function(e) {
      var _this = $(this).find(".panel-collapse.in").prev(".panel-heading");
      $("body,html").stop().animate({
        scrollTop: _this.offset().top
      }, 500);
    });
  }
  // Initialize responsive-tabs end

  // Sidebar slimscroll begin
  var SMInit = function() {
    $(".sidebar-inner").slimScroll({
      width: "100%",
      height: "100%",
      size: '5px',
      position: 'right',
      color: '#555',
      railColor: '#555',
      railOpacity: 0.4,
      railVisible: false,
      wheelStep: 10
    });
  };
  SMInit();
  var SMDestroy = function() {
    $(".sidebar-inner").slimScroll({
      destroy: true
    }).removeAttr('style');;
  };
  // Sidebar slimscroll end

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

    SMDestroy();
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

    SMInit();
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
  $("window,.main").scroll(function(e) {
    var _winH = $(this).height(),
      _scrollTOP = $(this).scrollTop();

    $("#scroll-to-top").on("click", function(e) {
      $("body,html,.main").stop().animate({
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
  // function fixPageWapperHeight() {
  //   if ($(".page-wrapper").outerHeight(true) < $(window).height()) {
  //     $(".page-wrapper").height($(window).height());
  //   }
  // }
  // $(window).on("resize", function(e) {
  //   fixPageWapperHeight();
  // });
  // fixPageWapperHeight();
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
  if (CKEDITOR) {
    CKEDITOR.disableAutoInline = true;
  }
  //END CKEDITOR

  // Initialze Bootstrap WYSIWYG5 Editors begin
  if ($(".wysihtml5").length > 0) {
    $(".wysihtml5").wysihtml5();
  }
  // Initialze Bootstrap WYSIWYG5 Editors end

  // Initialze Summernote begin
  if ($(".summernote-demo").length > 0) {
    $(".summernote-demo").summernote();
  }
  // Initialze Summernote end

  // Notific8 Test begin
  if ($('#notific8Test').length > 0) {
    $('#notific8Test').on('click', function(event) {
      var params = {
          life: $('#notific8Life').find('option:selected').val(),
          theme: $('#notific8Theme').val(),
          sticky: $('#notific8Sticky').is(':checked'),
          horizontalEdge: $('#notific8horizontal').find('option:selected').val(),
          verticalEdge: $('#notific8vertical').find('option:selected').val()
        },
        text = $('#notific8Text').val(),
        $heading = $('#notific8Heading'),
        $closeText = $('#notific8CloseText'),
        $icon = $('#notific8Icon');

      if ($.trim($heading.val()) !== '') {
        params.heading = $heading.val();
      }
      if ($.trim($icon.val()) !== '') {
        params.icon = $icon.val();
      }
      if ($.trim($closeText.val()) !== '') {
        params.closeText = $closeText.val();
      }

      // show notification
      $.notific8(text, params);
    });
  }
  // Notific8 Test end

  // Sco.Message.js Test begin
  if ($("#scoMsgInfoTest").length > 0) {
    $('#scoMsgInfoTest').on('click', function(e) {
      e.preventDefault();
      $.scojs_message('This is an info message', $.scojs_message.TYPE_OK);
    });
  }
  if ($("#scoMsgErrTest").length > 0) {
    $('#scoMsgErrTest').on('click', function(e) {
      e.preventDefault();
      $.scojs_message('This is an error message', $.scojs_message.TYPE_ERROR);
    });
  }
  // Sco.Message.js Test end

  // Bootstrap Switch begin
  if ($(".switch").length > 0) {
    $(".switch").bootstrapSwitch();
  }
  // Bootstrap Switch end

  // Bootstrap File Input begin
  // Must have "file-inputs" className.
  $('.file-inputs').bootstrapFileInput();
  // Bootstrap File Input end

  // jQuery Validation used on Bootstrap's form, include "success"&"error" begin
  if (typeof($.fn.validate) != "undefined") {
    jQuery.validator.setDefaults({
      highlight: function(element) {
        $(element).closest('.form-group').removeClass('has-success');
        $(element).closest('.form-group').addClass('has-error has-feedback');
        $(element).closest('.form-group').find(".glyphicon-remove,.glyphicon-ok").remove();
        $(element).after('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');
      },
      unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
        $(element).closest('.form-group').addClass('has-success has-feedback');
        $(element).closest('.form-group').find(".glyphicon-remove,.glyphicon-ok").remove();
        $(element).after('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');
      },
      errorElement: 'small',
      errorClass: 'help-block fadeIn animated',
      errorPlacement: function(error, element) {
        if (element.parent('.input-group').length) {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      }
    });
  }
  // jQuery Validation... end

  // Table check all begin
  if ($(".checkall")[0]) {
    $('.checkall').on('ifChecked ifUnchecked', function(event) {
      if (event.type == 'ifChecked') {
        $(this).closest('table').find('input[type=checkbox]').iCheck('check');
      } else {
        $(this).closest('table').find('input[type=checkbox]').iCheck('uncheck');
      }
    });
  }
  // Table check all end

  // Table Sorter begin
  if ($("table.tablesorter")[0]) {
    $("table.tablesorter").each(function(index, el) {
      var _this = $(this);
      if (_this.find(".checkall").length > 0) {
        _this.tablesorter({
          headers: {
            0: {
              sorter: false
            }
          }
        });
      } else {
        _this.tablesorter();
      }
    });
  }
  // Table Sorter end

  // Table Fixed Header begin
  if ($("table.table-fixed-header")[0]) {
    $("table.table-fixed-header").stickyTableHeaders();
  }
  // Table Fixed Header end

  // Invoice begin
  if ($(".invoice")[0]) {

    // Hide something...
    $(".sidebar,.head-wrapper,.scroll-to-top,.layouts-title-breadcrumb").addClass("hidden-print");

  }
  // Invoice end

  // Signin Page begin
  if ($("body").hasClass("signin")) {
    // signin box's animate
    $(".signin-box").addClass("animated fadeInDown");

    // show footer
    $(".footer").appendTo(".center-box-inner > div").show();
  }
  // Signin Page end

  // Signup Page begin
  if ($("body").hasClass("signup")) {
    // signin box's animate
    $(".signup-box").addClass("animated fadeInDown");

    // show footer
    $(".footer").appendTo(".center-box-inner > div").show();
  }
  // Signup Page end

  // Forgot password Page begin
  if ($("body").hasClass("forgot-password")) {
    // signin box's animate
    $(".forgot-password-box").addClass("animated fadeInDown");

    // show footer
    $(".footer").appendTo(".center-box-inner > div").show();
  }
  // Forgot password Page end

  // Lock Screen Page begin
  if ($("body").hasClass("lock-screen")) {
    // signin box's animate
    $(".lock-screen-box").addClass("animated fadeInDown");

    // show footer
    $(".footer").appendTo(".center-box-inner > div").show();
  }
  // Lock Screen Page end

  // Error Page begin
  if ($("body").hasClass("error-page")) {
    // show footer
    $(".footer").appendTo(".center-box-inner > div").show();
  }
  // Error Page end

});