// THIS SCRIPT IS DEMO

;
$(function() {

  /**
   * Load Theme Control Panel begin
   */
  $("body").append('<div id="theme-control"></div>');
  $('#theme-control').load("theme-control/theme-control.html", function(response, status, xhr) {

    var _this = $(this);

    // Set button's hover animation
    _this.find(".tc-btn").on('mouseenter', function(event) {
      event.preventDefault();
      $(this).find(".fa").addClass('fa-spin');
    }).on('mouseleave', function(event) {
      event.preventDefault();
      $(this).find(".fa").removeClass('fa-spin');
    });

    // Init Show/Hide
    _this.find(".tc-btn").on('click', function(event) {
      event.preventDefault();
      if (_this.hasClass('active')) {
        _this.removeClass('active');
      } else {
        _this.addClass('active');
      }
    });

    // Init tooltips
    $('#theme-control .tc-theme li a').tooltip('toggle');
    $('#theme-control .tc-theme li a').tooltip('hide');

    // Init Theme Choose
    $('#theme-control .tc-theme li a').on('click', function(event) {
      event.preventDefault();

      // Change Theme
      var _css = $(this).data('css');
      $("#curStyle").attr('href', _css);

      // Set Cookie
      $.cookie('curStyle', _css, {
        expires: 7,
        path: '/'
      });
    });

  });
  /**
   * Load Theme Control Panel end
   */

  // Load Current Theme begin
  if ($("#curStyle")[0]) {
    var _curTheme = $.cookie('curStyle');
    var _defTheme = $("#curStyle").attr('href');
    if (_curTheme != "undefined" && _curTheme != "" && _curTheme != _defTheme) {
      $("#curStyle").attr('href', _curTheme);
    }
  }
  // Load Current Theme end

  /**
   * ViewDemo begin
   */
  var DEMOElm = $("*[data-trigger='viewdemo'][data-target]");
  DEMOElm.each(function(index, element) {
    var _this = $(this),
      _width = _this.width(),
      _height = _this.height(),
      _HTML = _this.html(),
      _CLASS = _this.attr("class"),
      _target = _this.data("target"),
      _BTN = '<div id="demoBtn" class="animated fadeIn" style="position:absolute; width:' + _width + 'px; height:' + _height + 'px; overflow:hidden; top:0; left:0; z-index:9999; /*background:rgba(0,0,0,.2);*/"><button type="button" class="btn btn-xs btn-danger" style="position:absolute; top:50%; left:50%; z-index:9999; margin-top:-11px; margin-left:-45px;"><i class="fa fa-eye"></i> View Demo</button></div>';

    if (_target != "" && _width > 0 && _height > 0 && _HTML != "") {
      _this.on("mouseenter", function(e) {
        $("#demoBtn").remove();
        _this.append(_BTN);
        $("#demoBtn > button").one("click", function(e) {
          e.preventDefault();
          $(_target).css("visibility", "hidden").html(_HTML).attr("class", _CLASS);
          $("body, html").animate({
            scrollTop: 0
          }, 200, function() {
            //$( _target ).fadeOut("fast").fadeIn("fast");
            $(_target).css('visibility', 'visible').addClass('animated fadeInDown');
          });
        });
        $("#demoBtn").one("mouseenter", function(e) {
          $(this).show();
        }).on("mouseleave", function() {
          $(this).remove();
        });
      });
    }
  });
  /**
   * ViewDemo end
   */

  /**
   * View Proload Fullscreen Demo begin
   */
  var PLDEMOElm = $("button[data-tigger='view-loader-fullscreen']");
  PLDEMOElm.each(function(index, element) {
    var _this = $(this),
      _CLASS = 'preloader-fc',
      PLElm = _this.parent().prev('div');
    _this.on('click', function(event) {
      PLElm.addClass(_CLASS).one('click', function(event) {
        $(this).removeClass(_CLASS);
      });
    });
  });
  /**
   * View Proload Fullscreen Demo end
   */

});

/**
 * Progress Bar Demo begin
 */
$(document).ready(function() {

  // Transition delay begin
  $('#m-delay-start').click(function() {
    $('#m-delay .progress-bar').each(function() {
      var $pb = $(this);
      $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
      $pb.progressbar({
        transition_delay: 3000
      });
    });
  });
  $('#m-delay-reset').click(function() {
    $('#m-delay .progress-bar').attr('data-transitiongoal', 0).progressbar({
      transition_delay: 3000
    });
  });
  // Transition delay end

  // Refresh speed begin
  $('#m-refresh-speed-start').click(function() {
    $('#m-refresh-speed .progress-bar').each(function() {
      var $pb = $(this);
      $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
      $pb.progressbar({
        display_text: 'center',
        use_percentage: false,
        refresh_speed: 3000
      });
    });
  });
  $('#m-refresh-speed-reset').click(function() {
    $('#m-refresh-speed .progress-bar').attr('data-transitiongoal', 0).progressbar({
      display_text: 'center',
      use_percentage: false,
      refresh_speed: 3000
    });
  });
  // Refresh speed end

  // Custom percent format begin
  $('#m-custom-percentage-format-start').click(function() {
    $('#m-custom-percentage-format .progress-bar').each(function() {
      var $pb = $(this);
      $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
      $pb.progressbar({
        display_text: 'center',
        percent_format: function(p) {
          return p + ' percent';
        }
      });
    });
  });
  $('#m-custom-percentage-format-reset').click(function() {
    $('#m-custom-percentage-format .progress-bar').attr('data-transitiongoal', 0).progressbar({
      display_text: 'center',
      percent_format: function(p) {
        return p + ' percent';
      }
    });
  });
  // Custom percent format end

  // Custom amount format begin
  $('#m-custom-amount-format-start').click(function() {
    $('#m-custom-amount-format .progress-bar').each(function() {
      var $pb = $(this);
      $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
      $pb.progressbar({
        display_text: 'center',
        use_percentage: false,
        amount_format: function(p, t) {
          return p + ' of ' + t;
        }
      });
    });
  });
  $('#m-custom-amount-format-reset').click(function() {
    $('#m-custom-amount-format .progress-bar').attr('data-transitiongoal', 0).progressbar({
      display_text: 'center',
      use_percentage: false,
      amount_format: function(p, t) {
        return p + ' of ' + t;
      }
    });
  });
  // Custom amount format end

  // Custom amount format with min value begin
  $('#m-custom-amount-format-with-min-value-start').click(function() {
    $('#m-custom-amount-format-with-min-value .progress-bar').each(function() {
      var $pb = $(this);
      $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
      $pb.progressbar({
        display_text: 'center',
        use_percentage: false,
        amount_format: function(p, max, min) {
          return 'min: ' + min + ' current: ' + p + ' max: ' + max;
        }
      });
    });
  });
  $('#m-custom-amount-format-with-min-value-reset').click(function() {
    $('#m-custom-amount-format-with-min-value .progress-bar').attr('data-transitiongoal', 0).progressbar({
      display_text: 'center',
      use_percentage: false,
      amount_format: function(p, max, min) {
        return 'min: ' + min + ' current: ' + p + ' max: ' + max;
      }
    });
  });
  // Custom amount format with min value end

  // Callback begin
  $('#m-callback-start').click(function() {
    $('#m-callback-update').html('');
    $('#m-callback-done').html('');
    var $pb = $('#m-callback .progress-bar');
    $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
    $pb.progressbar({
      update: function(current_percentage) {
        $('#m-callback-update').html(current_percentage);
      },
      done: function() {
        $('#m-callback-done').html('yeah! done!');
      }
    });
  });
  $('#m-callback-reset').click(function() {
    $('#m-callback-update').html('');
    $('#m-callback-done').html('');
    $('#m-callback .progress-bar').attr('data-transitiongoal', 0).progressbar({
      update: function(current_percentage) {
        $('#m-callback-update').html(current_percentage);
      },
      done: function() {
        $('#m-callback-done').html('yeah! done!');
      }
    });
  });
  // Callback end

  // callbacks using $this begin
  // thanks:
  // http://stackoverflow.com/questions/5833624/increase-css-brightness-color-on-click-with-jquery-javascript
  // http://jsfiddle.net/K8cMX/7/
  function HsvToRgb(h, s, v) {
    h = h / 360;
    s = s / 100;
    v = v / 100;

    if (s == 0) {
      var val = Math.round(v * 255);
      return {
        r: val,
        g: val,
        b: val
      };
    }
    hPos = h * 6;
    hPosBase = Math.floor(hPos);
    base1 = v * (1 - s);
    base2 = v * (1 - s * (hPos - hPosBase));
    base3 = v * (1 - s * (1 - (hPos - hPosBase)));
    if (hPosBase == 0) {
      red = v;
      green = base3;
      blue = base1
    } else if (hPosBase == 1) {
      red = base2;
      green = v;
      blue = base1
    } else if (hPosBase == 2) {
      red = base1;
      green = v;
      blue = base3
    } else if (hPosBase == 3) {
      red = base1;
      green = base2;
      blue = v
    } else if (hPosBase == 4) {
      red = base3;
      green = base1;
      blue = v
    } else {
      red = v;
      green = base1;
      blue = base2
    };

    red = Math.round(red * 255);
    green = Math.round(green * 255);
    blue = Math.round(blue * 255);
    return {
      r: red,
      g: green,
      b: blue
    };
  }
  $('#m-callback-this-start').click(function() {
    var $pb = $('#m-callback-this .progress-bar');
    $pb.attr('data-transitiongoal', $pb.attr('data-transitiongoal-backup'));
    $pb.progressbar({
      update: function(current_percentage, $this) {
        var color_helper = Math.round(current_percentage * 1.2); // red to green == 0 to 120 degree
        var colors = HsvToRgb(color_helper, 100, 100);
        $this.parent().parent().css('background-color', 'rgb(' + colors['r'] + ', ' + colors['g'] + ', ' + colors['b'] + ')');
      }
    });
  });
  $('#m-callback-this-reset').click(function() {
    $('#m-callback-this .progress-bar').attr('data-transitiongoal', 0).progressbar();
  });
  // callbacks using $this end

  // error begin
  $('#m-error-start').click(function() {
    $('#m-error .progress-bar').progressbar({
      fail: function(error) {
        $('#m-callback-error').html(error);
      }
    });
  });
  // error end

  // multi trigger begin
  $('#m-multi-trigger-0').click(function() {
    $('#m-multi-trigger .progress-bar').attr('data-transitiongoal', 0).progressbar({
      display_text: 'center'
    });
  });
  $('#m-multi-trigger-50').click(function() {
    $('#m-multi-trigger .progress-bar').attr('data-transitiongoal', 50).progressbar({
      display_text: 'center'
    });
  });
  $('#m-multi-trigger-100').click(function() {
    $('#m-multi-trigger .progress-bar').attr('data-transitiongoal', 100).progressbar({
      display_text: 'center'
    });
  });
  // multi trigger end

});
/**
 * Progress Bar Demo end
 */


/**
 * jQuery UI Sliders begin
 */
$(function() {

  // Default functionality begin
  if ($("#slider-default-functionality").length > 0) {
    $("#slider-default-functionality").slider();
  }
  // Default functionality end

  // Multiple sliders begin
  if ($("#slider-multiple-sliders > span").length > 0) {
    $("#slider-multiple-sliders > span").each(function() {
      // read initial values from markup and remove that
      var value = parseInt($(this).text(), 10);
      $(this).empty().slider({
        value: value,
        range: "min",
        animate: true,
        orientation: "vertical"
      });
    });
  }
  // Multiple sliders end

  // Range slider begin
  if ($("#slider-range-slider").length > 0) {
    $("#slider-range-slider").slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function(event, ui) {
        $("#amount-range-slider").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount-range-slider").val("$" + $("#slider-range-slider").slider("values", 0) +
      " - $" + $("#slider-range-slider").slider("values", 1));
  }
  // Range slider end

  // Range with fixed maximum begin
  if ($("#slider-range-max").length > 0) {
    $("#slider-range-max").slider({
      range: "max",
      min: 1,
      max: 10,
      value: 2,
      slide: function(event, ui) {
        $("#amount-range-max").val(ui.value);
      }
    });
    $("#amount-range-max").val($("#slider-range-max").slider("value"));
  }
  // Range with fixed maximum end

  // Range with fixed minimum begin
  if ($("#slider-range-min").length > 0) {
    $("#slider-range-min").slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function(event, ui) {
        $("#amount-range-min").val("$" + ui.value);
      }
    });
    $("#amount-range-min").val("$" + $("#slider-range-min").slider("value"));
  }
  // Range with fixed minimum end

  // Snap to increments begin
  if ($("#slider-snap-to-increments").length > 0) {
    $("#slider-snap-to-increments").slider({
      value: 100,
      min: 0,
      max: 500,
      step: 50,
      slide: function(event, ui) {
        $("#amount-snap-to-increments").val("$" + ui.value);
      }
    });
    $("#amount-snap-to-increments").val("$" + $("#slider-snap-to-increments").slider("value"));
  }
  // Snap to increments end

  // Vertical range slider begin
  if ($("#slider-vertical-range-slider").length > 0) {
    $("#slider-vertical-range-slider").slider({
      orientation: "vertical",
      range: true,
      values: [17, 67],
      slide: function(event, ui) {
        $("#amount-vertical-range-slider").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount-vertical-range-slider").val("$" + $("#slider-vertical-range-slider").slider("values", 0) +
      " - $" + $("#slider-vertical-range-slider").slider("values", 1));
  }
  // Vertical range slider end

  // Vertical slider begin
  if ($("#slider-vertical").length > 0) {
    $("#slider-vertical").slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function(event, ui) {
        $("#amount-vertical").val(ui.value);
      }
    });
    $("#amount-vertical").val($("#slider-vertical").slider("value"));
  } // Vertical slider end

  // Color Options begin
  if ($("#slider-color-primary,#slider-color-success,#slider-color-info,#slider-color-warning,#slider-color-danger,#slider-color-red,#slider-color-orange,#slider-color-yellow,#slider-color-green,#slider-color-black,#slider-color-blue,#slider-color-violet,#slider-color-pink,#slider-color-grey").length > 0) {
    $("#slider-color-primary,#slider-color-success,#slider-color-info,#slider-color-warning,#slider-color-danger,#slider-color-red,#slider-color-orange,#slider-color-yellow,#slider-color-green,#slider-color-black,#slider-color-blue,#slider-color-violet,#slider-color-pink,#slider-color-grey").each(function() {
      $(this).slider({
        range: "min",
        value: parseInt(Math.random() * 90 + 10),
        min: 1,
        max: 100
      });
    });
  }
  // Color Options end

});
/**
 * jQuery UI Sliders end
 */

/**
 * noUISlider begin
 */
$(document).ready(function() {

  // Handles begin
  if ($('#noui-slider-handles').length > 0) {
    $('#noui-slider-handles').noUiSlider({
      start: [4000, 8000],
      range: {
        'min': [2000],
        'max': [10000]
      }
    });
  }
  // Handles end

  // Range begin
  if ($('#noui-slider-range').length > 0) {
    $('#noui-slider-range').noUiSlider({
      start: [4000],
      range: {
        'min': [2000],
        'max': [10000]
      }
    }).Link('lower').to($('#noui-slider-range-value'));
  }
  // Range end

  // Stepping and snapping to values begin
  if ($('#noui-slider-step').length > 0) {
    $('#noui-slider-step').noUiSlider({
      start: [4000],
      step: 1000,
      range: {
        'min': [2000],
        'max': [10000]
      }
    }).Link('lower').to($('#noui-slider-step-value'));
  }
  // Stepping and snapping to values end

  // Non-linear sliders begin
  if ($('#noui-slider-non-linear').length > 0) {
    $('#noui-slider-non-linear').noUiSlider({
      start: [4000],
      range: {
        'min': [2000],
        '30%': [4000],
        '70%': [8000],
        'max': [10000]
      }
    }).Link('lower').to($("#noui-slider-non-linear-value"));
  }
  // Non-linear sliders end

  // Stepping in non-linear sliders begin
  if ($('#noui-slider-non-linear-step').length > 0) {
    $('#noui-slider-non-linear-step').noUiSlider({
      start: [500, 4000],
      range: {
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [10000]
      }
    }).Link('lower').to($('#noui-slider-non-linear-step-value'));
  }
  // Stepping in non-linear sliders end

  // Snapping between steps begin
  if ($('#noui-slider-snap').length > 0) {
    $('#noui-slider-snap').noUiSlider({
      start: [0, 500],
      snap: true,
      connect: true,
      range: {
        'min': 0,
        '10%': 50,
        '20%': 100,
        '30%': 150,
        '40%': 500,
        '50%': 800,
        'max': 1000
      }
    }).Link('lower').to($('#noui-slider-snap-value-lower')).Link('upper').to($('#noui-slider-snap-value-upper'));
  }
  // Snapping between steps end

  // Getting and setting slider values begin
  if ($('#noui-slider-set-and-read').length > 0) {
    $('#noui-slider-set-and-read').noUiSlider({
      start: [80],
      range: {
        'min': [0],
        'max': [100]
      }
    });
    // Set the slider value to 20
    $("#noui-slider-set-and-read-write-button").click(function() {
      $('#noui-slider-set-and-read').val(20);
    });
    // Read the slider value.
    $("#noui-slider-set-and-read-read-button").click(function() {
      alert($('#noui-slider-set-and-read').val());
    });
  }
  // Getting and setting slider values end

  // Tap begin
  if ($("#noui-slider-tap").length > 0) {
    $("#noui-slider-tap").noUiSlider({
      start: 40,
      behaviour: 'tap',
      connect: 'upper',
      range: {
        'min': 20,
        'max': 80
      }
    });
  }
  // Tap end

  // Drag begin
  if ($("#noui-slider-drag").length > 0) {
    $("#noui-slider-drag").noUiSlider({
      start: [40, 60],
      behaviour: 'drag',
      connect: true,
      range: {
        'min': 20,
        'max': 80
      }
    });
  }
  // Drag end

  // Fixed dragging begin
  if ($("#noui-slider-drag-fixed").length > 0) {
    $("#noui-slider-drag-fixed").noUiSlider({
      start: [40, 60],
      behaviour: 'drag-fixed',
      connect: true,
      range: {
        'min': 20,
        'max': 80
      }
    });
  }
  // Fixed dragging end

  // Snap begin
  if ($("#noui-slider-snap-2").length > 0) {
    $("#noui-slider-snap-2").noUiSlider({
      start: 40,
      behaviour: 'snap',
      connect: 'lower',
      range: {
        'min': 20,
        'max': 80
      }
    });
  }
  // Snap end

  // Combined options begin
  if ($("#noui-slider-combined").length > 0) {
    $("#noui-slider-combined").noUiSlider({
      start: [40, 60],
      behaviour: 'drag-tap',
      connect: true,
      range: {
        'min': 20,
        'max': 80
      }
    });
  }
  // Combined options end

  // Colorpicker begin
  if ($("#noui-red,#noui-green,#noui-blue").length > 0) {
    /**
     * [setColor description]
     */
    function setColor() {

      // Get the slider values,
      // stick them together.
      var color = 'rgb(' +
        $("#noui-red").val() + ',' +
        $("#noui-green").val() + ',' +
        $("#noui-blue").val() + ')';

      // Fill the color box.
      $(".result").css({
        background: color,
        color: color
      });
    }

    $("#noui-red,#noui-green,#noui-blue").noUiSlider({
      start: 127,
      connect: "lower",
      orientation: "vertical",
      range: {
        'min': 0,
        'max': 255
      },
      format: wNumb({
        decimals: 0
      })
    }).on('slide', setColor);
  }
  // Colorpicker end

  // Using HTML5 input elements begin
  if ($('#noui-slider-html5').length > 0) {
    // Append the option elements
    for (var i = -20; i <= 40; i++) {
      $('#noui-slider-input-select').append(
        '<option value="' + i + '">' + i + '</option>'
      );
    }

    $('#noui-slider-html5').noUiSlider({
      start: [10, 30],
      connect: true,
      range: {
        'min': -20,
        'max': 40
      }
    });

    // A select element can't show any decimals
    $('#noui-slider-html5').Link('lower').to($('#noui-slider-input-select'), null, wNumb({
      decimals: 0
    }));

    $('#noui-slider-html5').Link('upper').to($('#noui-slider-input-number'));

  }
  // Using HTML5 input elements end

  // Non linear slider begin
  if ($("#noui-slider-nonlinear").length > 0) {
    $("#noui-slider-nonlinear").noUiSlider({
      connect: true,
      behaviour: 'tap',
      start: [500, 4000],
      range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [10000]
      }
    });

    // Write the CSS 'left' value to a span.
    /**
     * [leftValue description]
     * @param  {[type]} value  [description]
     * @param  {[type]} handle [description]
     * @param  {[type]} slider [description]
     * @return {[type]}        [description]
     */
    function leftValue(value, handle, slider) {
      $(this).text(handle.parent()[0].style.left);
    }

    // Bind two elements to the lower handle.
    // The first item will display the slider value, 
    // the second shows how far the handle moved
    // from the left edge of the slider.
    $("#noui-slider-nonlinear").Link('lower').to($('#noui-slider-lower-value'));
    $("#noui-slider-nonlinear").Link('lower').to($('#noui-slider-lower-offset'), leftValue);


    // Do the same for the upper handle.
    $("#noui-slider-nonlinear").Link('upper').to($('#noui-slider-upper-value'));
    $("#noui-slider-nonlinear").Link('upper').to($('#noui-slider-upper-offset'), leftValue);
  }
  // Non linear slider end

  // Locking sliders together begin
  if ($("#noui-slider-lock-1").length > 0) {

    // Store the locked state and slider values.
    var lockedState = false,
      values = [60, 80],
      slider1 = $("#noui-slider-lock-1"),
      slider2 = $("#noui-slider-lock-2");

    // When the button is clicked, the locked
    // state is inverted.
    $("#noui-slider-lock-btn").click(function() {
      lockedState = !lockedState;
      $(this).text(lockedState ? 'unlock' : 'lock');
    });

    /**
     * [crossUpdate description]
     * @param  {[type]} value  [description]
     * @param  {[type]} handle [description]
     * @param  {[type]} slider [description]
     * @return {[type]}        [description]
     */
    function crossUpdate(value, handle, slider) {

      // If the sliders aren't interlocked, don't
      // cross-update.
      if (!lockedState) return;

      // Select whether to increase or decrease
      // the other slider value.
      var lValue = slider1.is(slider) ? 1 : 0,
        hValue = lValue ? 0 : 1;

      // Modify the slider value.
      value -= (values[hValue] - values[lValue]);

      // Set the value
      $(this).val(value);
    }



    slider1.noUiSlider({
      start: 60,

      // Disable animation on value-setting,
      // so the sliders respond immediately.
      animate: false,
      range: {
        min: 50,
        max: 100
      }
    });

    slider2.noUiSlider({
      start: 80,
      animate: false,
      range: {
        min: 50,
        max: 100
      }
    });

    // When a slider changes, store the new values.
    $("#noui-slider-lock-1,#noui-slider-lock-2").on('set', function() {

      // The .val() function returns a string,
      // but we wan't to do substractions, so
      // convert the values to numbers.
      values = [
        Number(slider1.val()),
        Number(slider2.val())
      ];
    });

    // The value will be send to the other slider,
    // using a custom function as the serialization
    // method. The function uses the global 'lockedState'
    // variable to decide whether the other slider is updated.

    slider1.Link('lower').to(slider2, crossUpdate);
    slider1.Link('lower').to($("#noui-slider-lock-1-p"));

    slider2.Link('lower').to(slider1, crossUpdate);
    slider2.Link('lower').to($("#noui-slider-lock-2-p"));

  }
  // Locking sliders together end

  // Skipping steps begin
  if ($("#noui-slider-skipstep").length > 0) {

    $("#noui-slider-skipstep").noUiSlider({
      range: {
        'min': 0,
        '10%': 10,
        '20%': 20,
        '30%': 30,
        // Nope, 40 is no fun.
        '50%': 50,
        '60%': 60,
        '70%': 70,
        // I never liked 80.
        '90%': 90,
        'max': 100
      },
      snap: true,
      start: [20, 90]
    });

    $("#noui-slider-skipstep").Link('lower').to($("#noui-slider-skip-value-lower"));
    $("#noui-slider-skipstep").Link('upper').to($("#noui-slider-skip-value-upper"));

  }
  // Skipping steps end

  // Working with dates begin
  if ($("#noui-slider-date").length > 0) {

    // Create a new date from a string, return as a timestamp.
    /**
     * [timestamp description]
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    function timestamp(str) {
      return new Date(str).getTime();
    }

    $("#noui-slider-date").noUiSlider({
      // Create two timestamps to define a range.
      range: {
        min: timestamp('2010'),
        max: timestamp('2016')
      },

      // Steps of one week
      step: 7 * 24 * 60 * 60 * 1000,

      // Two more timestamps indicate the handle starting positions.
      start: [timestamp('2011'), timestamp('2015')],

      // No decimals
      format: wNumb({
        decimals: 0
      })
    });

    // Create a list of day and monthnames.
    var weekdays = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday",
        "Saturday"
      ],
      months = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

    // Append a suffix to dates.
    // Example: 23 => 23rd, 1 => 1st.
    /**
     * [nth description]
     * @param  {[type]} d [description]
     * @return {[type]}   [description]
     */
    function nth(d) {
      if (d > 3 && d < 21) return 'th';
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    // Create a string representation of the date.
    /**
     * [formatDate description]
     * @param  {[type]} date [description]
     * @return {[type]}      [description]
     */
    function formatDate(date) {
      return weekdays[date.getDay()] + ", " +
        date.getDate() + nth(date.getDate()) + " " +
        months[date.getMonth()] + " " +
        date.getFullYear();
    }

    // Write a date as a pretty value.
    /**
     * [setDate description]
     * @param {[type]} value [description]
     */
    function setDate(value) {
      $(this).html(formatDate(new Date(+value)));
    }

    $("#noui-slider-date").Link('lower').to($("#noui-slider-event-start"), setDate);
    $("#noui-slider-date").Link('upper').to($("#noui-slider-event-end"), setDate);

  }
  // Working with dates end

  // Creating a toggle begin
  if ($("#noui-slider-toggle").length > 0) {

    /**
     * [toggle description]
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    function toggle(value) {
      $(this).toggleClass('off', value === "1");
    }

    $("#noui-slider-toggle").noUiSlider({
      orientation: "vertical",
      start: 0,
      range: {
        'min': [0, 1],
        'max': 1
      },
      format: wNumb({
        decimals: 0
      })
    })

    $("#noui-slider-toggle").addClass('toggle');
    $("#noui-slider-toggle").Link('lower').to(toggle);

  }
  // Creating a toggle end

  // Slider with Tooltips begin
  if ($("#noui-slider-tooltip").length > 0) {

    $("#noui-slider-tooltip").noUiSlider({
      start: [40, 50],
      range: {
        'min': 30,
        '30%': 40,
        'max': 50
      }
    });

    // When no HTML is provided, noUiSlider creates an empty <div>
    $("#noui-slider-tooltip").Link('lower').to('-inline-');

    // Tags after '-inline-' are inserted as HTML.
    // noUiSlider writes to the first element it finds.
    $("#noui-slider-tooltip").Link('upper').to('-inline-<div class="noui-tooltip"></div>', function(value) {

      // The tooltip HTML is 'this', so additional
      // markup can be inserted here.
      $(this).html(
        '<strong>Value: </strong>' +
        '<span>' + value + '</span>'
      );
    });

  }
  // Slider with Tooltips end

  // Events begin
  if ($("#noui-slider-events").length > 0) {

    /**
     * [tShow description]
     * @param  {[type]} x [description]
     * @return {[type]}   [description]
     */
    $.fn.tShow = function(x) {
      var s = $(this).removeClass("label-default").addClass('label-primary');
      setTimeout(function() {
        s.removeClass('label-primary').addClass('label-default');
      }, x);
    };

    $("#noui-slider-setter1").click(function() {
      $("#noui-slider-events").val([5, 15]);
    });

    $("#noui-slider-events").noUiSlider({
      start: [0, 10],
      range: {
        'min': [0],
        'max': [20]
      }
    });

    $("#noui-slider-events").Link('lower').to($("#noui-slider-input-log"));

    $("#noui-slider-events").on({
      slide: function() {
        $("#noui-slider-l-slide").tShow(450);
      },
      set: function() {
        $("#noui-slider-l-set").tShow(450);
      },
      change: function() {
        $("#noui-slider-l-change").tShow(450);
      }
    });


  }
  // Events end

  // libLink support begin
  if ($("#noui-slider-link").length > 0) {
    $("#noui-slider-link").noUiSlider({
      start: [20],
      step: 10,
      range: {
        'min': [20],
        'max': [80]
      }
    });

    $("#noui-slider-link").Link('lower').to($('#noui-slider-link-val'));
    $("#noui-slider-link").Link('lower').to($('#noui-slider-link-input'));

  }
  // libLink support end

  // Feature overview begin
  if ($("#moneyForm").length > 0) {

    $("#noui-slider-mf-rangeSlider").noUiSlider({
      start: [950, 5060],
      range: {
        'min': 50,
        'max': 5960
      },
      connect: true,
      // Set some default formatting options.
      // These options will be applied to any Link
      // that doesn't overwrite these values.
      format: wNumb({
        decimals: 1
      })
    });

    // Place the value in the #value element,
    // using the text method.
    $("#noui-slider-mf-rangeSlider").Link('lower').to($("#noui-slider-mf-value"), "text");

    // Any selector is acceptable, so we'll
    // select both inputs.
    $("#noui-slider-mf-rangeSlider").Link('lower').to($("#noui-slider-mf-one,#noui-slider-mf-one, #noui-slider-mf-one,#noui-slider-mf-two"), null, wNumb({
      // Prefix the value with an Euro symbol
      prefix: '\u20AC',
      // Write the value without decimals
      decimals: 0,
      postfix: ',-'
    }));

    /**
     * [setText description]
     * @param {[type]} value         [description]
     * @param {[type]} handleElement [description]
     * @param {[type]} slider        [description]
     */
    function setText(value, handleElement, slider) {
      $("#noui-slider-mf-someElement").text(value);
    }

    // Link accepts functions too.
    // The arguments are the slider value,
    // the .noUi-handle element and the slider instance.
    $("#noui-slider-mf-rangeSlider").Link('upper').to(setText);

    // When you pass a string to a link,
    // it will create a hidden input.
    // You'll see the value appear when you
    // alert the form contents.
    $("#noui-slider-mf-rangeSlider").Link('upper').to("inputName");

    $('#noui-slider-mf-btn').click(function() {
      // Use jQuery to make get the values from the form.
      // We'll decode the generated URL to keep it readable.
      alert(decodeURIComponent($("#moneyForm").serialize()));

      // Don't submit the form.
      return false;
    });

  }
  // Feature overview end


  // Pips Add-On begin
  var range_all_sliders = {
    'min': [0],
    '10%': [500, 500],
    '50%': [4000, 1000],
    'max': [10000]
  };

  // Range begin
  if ($("#noui-slider-pips-range").length > 0) {
    $("#noui-slider-pips-range").noUiSlider({
      range: range_all_sliders,
      start: 0
    }).noUiSlider_pips({
      mode: 'range',
      density: 3
    });
  }

  if ($("#noui-slider-pips-range-rtl").length > 0) {
    $("#noui-slider-pips-range-rtl").noUiSlider({
      range: range_all_sliders,
      start: 0,
      direction: 'rtl'
    }).noUiSlider_pips({
      mode: 'range',
      density: 3
    });
  }

  if ($("#noui-slider-pips-range-vertical").length > 0) {
    $("#noui-slider-pips-range-vertical").noUiSlider({
      range: range_all_sliders,
      start: 0,
      orientation: 'vertical'
    }).noUiSlider_pips({
      mode: 'range',
      density: 3
    });
  }

  if ($("#noui-slider-pips-range-vertical-rtl").length > 0) {
    $("#noui-slider-pips-range-vertical-rtl").noUiSlider({
      range: range_all_sliders,
      start: 0,
      orientation: 'vertical',
      direction: 'rtl'
    }).noUiSlider_pips({
      mode: 'range',
      density: 3
    });
  }
  // Range end

  // Steps begin
  if ($("#noui-slider-pips-steps").length > 0) {
    /**
     * [filter500 description]
     * @param  {[type]} value [description]
     * @param  {[type]} type  [description]
     * @return {[type]}       [description]
     */
    function filter500(value, type) {
      return value % 1000 ? 2 : 1;
    }

    $("#noui-slider-pips-steps").noUiSlider({
      range: range_all_sliders,
      start: 0
    }).noUiSlider_pips({
      mode: 'steps',
      density: 3,
      filter: filter500,
      format: wNumb({
        decimals: 2,
        prefix: '$'
      })
    });
  }
  // Steps end

  // Positions begin
  if ($("#noui-slider-pips-positions").length > 0) {
    $("#noui-slider-pips-positions").noUiSlider({
      range: range_all_sliders,
      start: 0
    }).noUiSlider_pips({
      mode: 'positions',
      values: [0, 25, 50, 75, 100],
      density: 4
    });
  }
  if ($("#noui-slider-pips-positions-stepped").length > 0) {
    $("#noui-slider-pips-positions-stepped").noUiSlider({
      range: range_all_sliders,
      start: 0
    }).noUiSlider_pips({
      mode: 'positions',
      values: [0, 25, 50, 75, 100],
      density: 4,
      stepped: true
    });
  }
  // Positions end

  // Count begin
  if ($("#noui-slider-pips-count").length > 0) {
    $("#noui-slider-pips-count").noUiSlider({
      range: range_all_sliders,
      start: 0
    }).noUiSlider_pips({
      mode: 'count',
      values: 6,
      density: 4
    });
  }
  if ($("#noui-slider-pips-count-stepped").length > 0) {
    $("#noui-slider-pips-count-stepped").noUiSlider({
      range: range_all_sliders,
      start: 0
    }).noUiSlider_pips({
      mode: 'count',
      values: 6,
      density: 4,
      stepped: true
    });
  }
  // Count end

  // Values begin
  if ($("#noui-slider-pips-values").length > 0) {
    $("#noui-slider-pips-values").noUiSlider({
      range: range_all_sliders,
      start: 0
    }).noUiSlider_pips({
      mode: 'values',
      values: [50, 552, 2251, 3200, 5000, 7080, 9000],
      density: 4
    });
  }
  if ($("#noui-slider-pips-values-stepped").length > 0) {
    $("#noui-slider-pips-values-stepped").noUiSlider({
      range: range_all_sliders,
      start: 0
    }).noUiSlider_pips({
      mode: 'values',
      values: [50, 552, 4651, 4952, 5000, 7080, 9000],
      density: 4,
      stepped: true
    });
  }
  // Values end

  // Pips Add-On end

  // Disabling a slider begin
  if ($("#noui-slider-disable").length > 0) {
    var slider_disable = $('#noui-slider-disable'),
      slider_disable_checkbox = $("#noui-slider-disable-checkbox");

    /**
     * [toggle_disable description]
     * @return {[type]} [description]
     */
    function toggle_disable() {

      // If the checkbox is checked, disabled the slider.
      // Otherwise, re-enable it.
      if (slider_disable_checkbox.prop("checked")) {
        slider_disable.attr('disabled', 'disabled');
      } else {
        slider_disable.removeAttr('disabled');
      }
    }

    slider_disable.noUiSlider({
      start: 80,
      connect: 'lower',
      range: {
        min: 0,
        max: 100
      }
    });

    $('#noui-slider-disable').nextAll("label").click(toggle_disable);
  }
  // Disabling a slider end

  // Color Options begin
  if ($('.noui-slider').length > 0) {
    $('.noui-slider').noUiSlider({
      connect: true,
      start: [4000, 8000],
      range: {
        'min': [2000],
        'max': [10000]
      }
    });
  }
  // Color Options end

});
/**
 * noUISlider end
 */



/**
 * Ion.Range Slider begin
 */
$(document).ready(function() {

  // Start without params begin
  if ($("#range_01").length > 0) {
    $("#range_01").ionRangeSlider();
  }
  // Start without params end

  // Set min value, max value and start point begin
  if ($("#range_02").length > 0) {
    $("#range_02").ionRangeSlider({
      min: 100,
      max: 1000,
      from: 550
    });
  }
  // Set min value, max value and start point end

  // Set type to double and specify range, also showing grid and adding prefix "$" begin
  if ($("#range_03").length > 0) {
    $("#range_03").ionRangeSlider({
      type: "double",
      grid: true,
      min: 0,
      max: 1000,
      from: 200,
      to: 800,
      prefix: "$"
    });
  }
  // Set type to double and specify range, also showing grid and adding prefix "$" end

  // Set up range with negative values begin
  if ($("#range_04").length > 0) {
    $("#range_04").ionRangeSlider({
      type: "double",
      grid: true,
      min: -1000,
      max: 1000,
      from: -500,
      to: 500
    });
  }
  // Set up range with negative values end

  // Using step 250 begin
  if ($("#range_05").length > 0) {
    $("#range_05").ionRangeSlider({
      type: "double",
      grid: true,
      min: -1000,
      max: 1000,
      from: -500,
      to: 500,
      step: 250
    });
  }
  // Using step 250 end

  // Set up range with fractional values, using fractional step begin
  if ($("#range_06").length > 0) {
    $("#range_06").ionRangeSlider({
      type: "double",
      grid: true,
      min: -12.8,
      max: 12.8,
      from: -3.2,
      to: 3.2,
      step: 0.1
    });
  }
  // Set up range with fractional values, using fractional step end

  // Set up you own numbers begin
  if ($("#range_07").length > 0) {
    $("#range_07").ionRangeSlider({
      type: "double",
      grid: true,
      from: 1,
      to: 5,
      values: [0, 10, 100, 1000, 10000, 100000, 1000000]
    });
  }
  // Set up you own numbers end

  // Using any strings as your values begin
  if ($("#range_08").length > 0) {
    $("#range_08").ionRangeSlider({
      grid: true,
      from: 5,
      values: [
        "zero", "one",
        "two", "three",
        "four", "five",
        "six", "seven",
        "eight", "nine",
        "ten"
      ]
    });
  }
  // Using any strings as your values end

  // One more example with strings begin
  if ($("#range_09").length > 0) {
    $("#range_09").ionRangeSlider({
      grid: true,
      from: 3,
      values: [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ]
    });
  }
  // One more example with strings end

  // No prettify. Big numbers are ugly and unreadable begin
  if ($("#range_10").length > 0) {
    $("#range_10").ionRangeSlider({
      grid: true,
      min: 1000,
      max: 1000000,
      from: 100000,
      step: 1000,
      prettify_enabled: false
    });
  }
  // No prettify. Big numbers are ugly and unreadable end

  // Prettify enabled. Much better! begin
  if ($("#range_11").length > 0) {
    $("#range_11").ionRangeSlider({
      grid: true,
      min: 1000,
      max: 1000000,
      from: 200000,
      step: 1000,
      prettify_enabled: true
    });
  }
  // Prettify enabled. Much better! end

  // Don't like space as separator? Use anything you like! begin
  if ($("#range_12").length > 0) {
    $("#range_12").ionRangeSlider({
      grid: true,
      min: 1000,
      max: 1000000,
      from: 300000,
      step: 1000,
      prettify_enabled: true,
      prettify_separator: "."
    });
  }
  // Don't like space as separator? Use anything you like! end

  // You don't like default prettify function? Use your own! begin
  if ($("#range_13").length > 0) {
    $("#range_13").ionRangeSlider({
      grid: true,
      min: 1000,
      max: 1000000,
      from: 400000,
      step: 1000,
      prettify_enabled: true,
      prettify: function(num) {
        return (Math.random() * num).toFixed(0);
      }
    });
  }
  // You don't like default prettify function? Use your own! end

  // Using prefixes begin
  if ($("#range_14").length > 0) {
    $("#range_14").ionRangeSlider({
      type: "double",
      grid: true,
      min: 0,
      max: 10000,
      from: 1000,
      step: 9000,
      prefix: "$"
    });
  }
  // Using prefixes end

  // Using postfixes begin
  if ($("#range_15").length > 0) {
    $("#range_15").ionRangeSlider({
      type: "single",
      grid: true,
      min: -90,
      max: 90,
      from: 0,
      postfix: "°"
    });
  }
  // Using postfixes end

  // Whant to show that max number is not the biggest one? begin
  if ($("#range_16").length > 0) {
    $("#range_16").ionRangeSlider({
      grid: true,
      min: 18,
      max: 70,
      from: 30,
      prefix: "Age ",
      max_postfix: "+"
    });
  }
  // Whant to show that max number is not the biggest one? end

  // Taking care about how from and to values connect? Use decorate_both option: begin
  if ($("#range_17").length > 0) {
    $("#range_17").ionRangeSlider({
      type: "double",
      min: 100,
      max: 200,
      from: 145,
      to: 155,
      prefix: "Weight: ",
      postfix: " million pounds",
      decorate_both: true
    });
  }
  // Taking care about how from and to values connect? Use decorate_both option: end

  // Remove double decoration begin
  if ($("#range_18").length > 0) {
    $("#range_18").ionRangeSlider({
      type: "double",
      min: 100,
      max: 200,
      from: 145,
      to: 155,
      prefix: "Weight: ",
      postfix: " million pounds",
      decorate_both: false
    });
  }
  // Remove double decoration end

  // Use your own separator symbol with values_separator option. Like → begin
  if ($("#range_19").length > 0) {
    $("#range_19").ionRangeSlider({
      type: "double",
      min: 100,
      max: 200,
      from: 148,
      to: 152,
      prefix: "Weight: ",
      postfix: " million pounds",
      values_separator: " → "
    });
  }
  // Use your own separator symbol with values_separator option. Like → end

  // Or " to ": begin
  if ($("#range_20").length > 0) {
    $("#range_20").ionRangeSlider({
      type: "double",
      min: 100,
      max: 200,
      from: 148,
      to: 152,
      prefix: "Range: ",
      postfix: " light years",
      decorate_both: false,
      values_separator: " to "
    });
  }
  // Or " to ": end

  // disable all the sliders visual details begin
  if ($("#range_21").length > 0) {
    $("#range_21").ionRangeSlider({
      type: "double",
      min: 1000,
      max: 2000,
      from: 1200,
      to: 1800,
      hide_min_max: true,
      hide_from_to: true,
      grid: false
    });
  }
  // disable all the sliders visual details end

  // hide any part you wish begin
  if ($("#range_22").length > 0) {
    $("#range_22").ionRangeSlider({
      type: "double",
      min: 1000,
      max: 2000,
      from: 1200,
      to: 1800,
      hide_min_max: true,
      hide_from_to: true,
      grid: true
    });
  }
  if ($("#range_23").length > 0) {
    $("#range_23").ionRangeSlider({
      type: "double",
      min: 1000,
      max: 2000,
      from: 1200,
      to: 1800,
      hide_min_max: false,
      hide_from_to: true,
      grid: false
    });
  }
  if ($("#range_24").length > 0) {
    $("#range_24").ionRangeSlider({
      type: "double",
      min: 1000,
      max: 2000,
      from: 1200,
      to: 1800,
      hide_min_max: true,
      hide_from_to: false,
      grid: false
    });
  }
  // hide any part you wish end

});
/**
 * Ion.Range Slider end
 */


/**
 * iCheck Demo begin
 */
if ($("#icheck-demo").length > 0) {
  $(document).ready(function() {

    $('.skin-minimal input').iCheck({
      checkboxClass: 'icheckbox_minimal',
      radioClass: 'iradio_minimal',
      increaseArea: '20%'
    });

    $('.skin-square input').iCheck({
      checkboxClass: 'icheckbox_square-green',
      radioClass: 'iradio_square-green',
      increaseArea: '20%'
    });

    $('.skin-flat input').iCheck({
      checkboxClass: 'icheckbox_flat-red',
      radioClass: 'iradio_flat-red'
    });

    $('.skin-line input').each(function() {
      var self = $(this),
        label = self.next(),
        label_text = label.text();

      label.remove();
      self.iCheck({
        checkboxClass: 'icheckbox_line-blue',
        radioClass: 'iradio_line-blue',
        insert: '<div class="icheck_line-icon"></div>' + label_text
      });
    });

    $('.skin-polaris input').iCheck({
      checkboxClass: 'icheckbox_polaris',
      radioClass: 'iradio_polaris',
      increaseArea: '-10%'
    });

    $('.skin-futurico input').iCheck({
      checkboxClass: 'icheckbox_futurico',
      radioClass: 'iradio_futurico',
      increaseArea: '20%'
    });


    $('.colors li').click(function() {
      var self = $(this);

      if (!self.hasClass('active')) {
        self.siblings().removeClass('active');

        var skin = self.closest('.skin'),
          color = self.attr('class') ? '-' + self.attr('class') : '',
          checkbox = skin.data('icheckbox'),
          radio = skin.data('iradio'),
          checkbox_default = 'icheckbox_minimal',
          radio_default = 'iradio_minimal';

        if (skin.hasClass('skin-square')) {
          checkbox_default = 'icheckbox_square', radio_default = 'iradio_square';
          checkbox == undefined && (checkbox = 'icheckbox_square-green', radio = 'iradio_square-green');
        };

        if (skin.hasClass('skin-flat')) {
          checkbox_default = 'icheckbox_flat', radio_default = 'iradio_flat';
          checkbox == undefined && (checkbox = 'icheckbox_flat-red', radio = 'iradio_flat-red');
        };

        if (skin.hasClass('skin-line')) {
          checkbox_default = 'icheckbox_line', radio_default = 'iradio_line';
          checkbox == undefined && (checkbox = 'icheckbox_line-blue', radio = 'iradio_line-blue');
        };

        checkbox == undefined && (checkbox = checkbox_default, radio = radio_default);

        skin.find('input, .skin-states .state').each(function() {
          var element = $(this).hasClass('state') ? $(this) : $(this).parent(),
            element_class = element.attr('class').replace(checkbox, checkbox_default + color).replace(radio, radio_default + color);

          element.attr('class', element_class);
        });

        skin.data('icheckbox', checkbox_default + color);
        skin.data('iradio', radio_default + color);
        self.addClass('active');
      };
    });

  });
}
/**
 * iCheck Demo end
 */


/**
 * Icon color demo begin
 */
if ($(".demo-icons").length > 0) {
  $(function() {
    var iconColorClass = ['primary', 'success', 'info', 'warning', 'danger', 'red', 'orange', 'yellow', 'green', 'black', 'blue', 'violet', 'pink', 'grey'];
    $(".demo-icons .fa, .demo-icons .glyphicon, .demo-icons [class|='ti'], .demo-icons [class|='entypo']").parent("a").each(function() {
      $(this).addClass("link-" + iconColorClass[Math.floor(Math.random() * iconColorClass.length)]);
    });
  });
}
/**
 * Icon color demo end
 */


/**
 * Summernote Click to edit Demo begin
 */
if ($("#summernote-demo-edit").length > 0) {
  $('#summernote-demo-edit').click(function() {
    $('#summernote-demo-edit-con').summernote({
      focus: true
    });
  });
  $('#summernote-demo-save').click(function() {
    var aHTML = $('#summernote-demo-edit-con').code(); //save HTML If you need(aHTML: array).
    $('#summernote-demo-edit-con').destroy();
  });

  if ($(".summernote-demo").length > 0) {
    $(".summernote-demo").summernote();
  }
}
/**
 * Summernote Click to edit Demo end
 */


/**
 * Medium Editor demo begin
 */
if ($(".editable").length > 0) {
  $(function() {
    var editor = new MediumEditor('.editable');
  });
}
/**
 * Medium Editor demo end
 */


/**
 * Sortable demo begin
 */
$(function() {
  //Default begin
  if ($("#demo-sortable-default").length > 0) {
    $("#demo-sortable-default").sortable();
  }
  //Default end
});

$(function() {
  // Connected lists with drop animation begin
  if ($(".demo-sortable-simple_with_animation").length > 0) {
    var adjustment;

    $(".demo-sortable-simple_with_animation").sortable({
      group: 'demo-sortable-simple_with_animation',
      pullPlaceholder: false,
      // animation on drop
      onDrop: function(item, targetContainer, _super) {
        var clonedItem = $('<li/>').css({
          height: 0
        });
        item.before(clonedItem);
        clonedItem.animate({
          'height': item.height()
        });

        item.animate(clonedItem.position(), function() {
          clonedItem.detach();
          _super(item);
        });
      },

      // set item relative to cursor position
      onDragStart: function($item, container, _super) {
        var offset = $item.offset(),
          pointer = container.rootGroup.pointer;

        adjustment = {
          left: pointer.left - offset.left,
          top: pointer.top - offset.top
        };

        _super($item, container);
      },
      onDrag: function($item, position) {
        $item.css({
          left: position.left - adjustment.left,
          top: position.top - adjustment.top
        })
      }
    });
  }
  // Connected lists with drop animation end
});

$(function() {
  // Sort handle and limited drag/drop begin
  if ($(".demo-sortable-simple_with_drop").length > 0) {
    $(".demo-sortable-simple_with_drop").sortable({
      group: 'no-drop',
      handle: 'i.fa-arrows',
      onDragStart: function(item, container, _super) {
        // Duplicate items of the no drop area
        if (!container.options.drop) {
          item.clone().insertAfter(item);
        }
        _super(item);
      }
    });
    $(".demo-sortable-simple_with_no_drop").sortable({
      group: 'no-drop',
      drop: false
    });
    $(".demo-sortable-simple_with_no_drag").sortable({
      group: 'no-drop',
      drag: false
    });
  }
  // Sort handle and limited drag/drop end
});

$(function() {
  // Connected lists with limited drop targets begin
  if ($("#serialize_output").length > 0) {
    var group = $(".demo-sortable-limited_drop_targets").sortable({
      group: 'demo-sortable-limited_drop_targets',
      isValidTarget: function(item, container) {
        if (item.is(".list-group-item-success"))
          return true;
        else {
          return item.parent("ul")[0] == container.el[0];
        }
      },
      onDrop: function(item, container, _super) {
        $('#serialize_output').text(group.sortable("serialize").get().join("\n"));
        _super(item, container);
      },
      serialize: function(parent, children, isContainer) {
        return isContainer ? children.join() : parent.text()
      },
      tolerance: 6,
      distance: 10
    });
  }
  // Connected lists with limited drop targets end
});

$(function() {
  // Serialization and delay begin
  if ($(".demo-sortable-serialization").length > 0) {
    var group2 = $(".demo-sortable-serialization").sortable({
      group: 'demo-sortable-serialization',
      delay: 500,
      onDrop: function(item, container, _super) {
        var data = group2.sortable("serialize").get();

        var jsonString = JSON.stringify(data, null, ' ');

        $('#serialize_output2').text(jsonString);
        _super(item, container);
      }
    });
  }
  // Serialization and delay end
});

$(function() {
  // Sort tables
  // Sortable rows
  $('.demo-sortable-sorted_table').sortable({
    containerSelector: 'table',
    itemPath: '> tbody',
    itemSelector: 'tr',
    placeholder: '<tr class="placeholder"/>'
  });
  // Sortable column heads
  var oldIndex;
  $('.sorted_head tr').sortable({
    containerSelector: 'tr',
    itemSelector: 'th',
    placeholder: '<th class="placeholder"/>',
    vertical: false,
    onDragStart: function(item, group, _super) {
      oldIndex = item.index();
      item.appendTo(item.parent());
      _super(item);
    },
    onDrop: function(item, container, _super) {
      var field,
        newIndex = item.index();

      if (newIndex != oldIndex) {
        item.closest('table').find('tbody tr').each(function(i, row) {
          row = $(row);
          field = row.children().eq(oldIndex);
          if (newIndex) {
            field.before(row.children()[newIndex]);
          } else {
            row.prepend(field);
          }
        })
      }

      _super(item);
    }
  })
});
/**
 * Sortable demo end
 */

/**
 * Netsable List demo begin
 */
$(function() {
  if ($(".demo-netsable").length > 0) {

    var updateOutput = function(e) {
      var list = e.length ? e : $(e.target),
        output = list.data('output');
      if (window.JSON) {
        output.html(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
      } else {
        output.html('JSON browser support required for this demo.');
      }
    };

    // activate Nestable for list 1
    $('#nestable').nestable({
      group: 1
    }).on('change', updateOutput);

    // activate Nestable for list 2
    $('#nestable2').nestable({
      group: 1
    }).on('change', updateOutput);

    // output initial serialised data
    updateOutput($('#nestable').data('output', $('#nestable-output')));
    updateOutput($('#nestable2').data('output', $('#nestable2-output')));

    $('#nestable-menu').on('click', function(e) {
      var target = $(e.target),
        action = target.data('action');
      if (action === 'expand-all') {
        $('.dd').nestable('expandAll');
      }
      if (action === 'collapse-all') {
        $('.dd').nestable('collapseAll');
      }
    });

    $('#nestable3').nestable();

  }
});
/**
 * Netsable List demo end
 */


/**
 * Select2 Dropdowns Demos begin
 */
$(function() {

  //The Basics begin
  if ($("#e1").length > 0) {
    $("#e1").select2();
  }
  //The Basics end

  //Multi-Value Select Boxes begin
  if ($("#e9").length > 0) {
    $("#e9").select2();
  }
  //Multi-Value Select Boxes end

  //Placeholders begin
  if ($("#e2").length > 0) {
    $("#e2").select2({
      placeholder: "Select a State",
      allowClear: true
    });
  }
  if ($("#e2_2").length > 0) {
    $("#e2_2").select2({
      placeholder: "Select a State"
    });
  }
  //Placeholders end

  //Minimum Input begin
  if ($("#e3").length > 0) {
    $("#e3").select2({
      minimumInputLength: 2
    });
  }
  //Minimum Input end

  //Templating begin
  if ($("#e4").length > 0) {
    function format(state) {
      if (!state.id) return state.text; // optgroup
      return "<img width='15' height='10' src='img/us_flag/" + state.id.toLowerCase() + ".png' class='mright5'>" + state.text;
    }
    $("#e4").select2({
      formatResult: format,
      formatSelection: format,
      escapeMarkup: function(m) {
        return m;
      }
    });
  }
  //Templating end

  //Loading Data begin
  if ($("#e5").length > 0) {
    $("#e5").select2({
      minimumInputLength: 1,
      query: function(query) {
        var data = {
            results: []
          },
          i, j, s;
        for (i = 1; i < 5; i++) {
          s = "";
          for (j = 0; j < i; j++) {
            s = s + query.term;
          }
          data.results.push({
            id: query.term + i,
            text: s
          });
        }
        query.callback(data);
      }
    });
  }
  //Loading Data end

  //Maximum Selection Size begin
  if ($("#e19").length > 0) {
    $("#e19").select2({
      maximumSelectionSize: 3
    });
  }
  //Maximum Selection Size end

  //Loading Array Data begin
  if ($("#e10").length > 0) {
    $("#e10").select2({
      data: [{
        id: 0,
        text: 'enhancement'
      }, {
        id: 1,
        text: 'bug'
      }, {
        id: 2,
        text: 'duplicate'
      }, {
        id: 3,
        text: 'invalid'
      }, {
        id: 4,
        text: 'wontfix'
      }]
    });
  }
  if ($("#e10_2").length > 0) {
    var data = [{
      id: 0,
      tag: 'enhancement'
    }, {
      id: 1,
      tag: 'bug'
    }, {
      id: 2,
      tag: 'duplicate'
    }, {
      id: 3,
      tag: 'invalid'
    }, {
      id: 4,
      tag: 'wontfix'
    }];

    function format(item) {
      return item.tag;
    }

    $("#e10_2").select2({
      data: {
        results: data,
        text: 'tag'
      },
      formatSelection: format,
      formatResult: format
    });
  }
  if ($("#e10_3").length > 0) {
    $("#e10_3").select2({
      data: {
        results: data,
        text: function(item) {
          return item.tag;
        }
      },
      formatSelection: format,
      formatResult: format
    });
  }
  if ($("#e10_4").length > 0) {
    $("#e10_4").select2({
      data: function() {
        return {
          text: 'tag',
          results: data
        };
      },
      formatSelection: format,
      formatResult: format
    });
  }
  //Loading Array Data end

  //Loading Remote Data begin
  function repoFormatResult(repo) {
    var markup = '<div class="media clearfix ptop10 pbottom10">' +
      '<div class="pull-left"><img src="' + repo.owner.avatar_url + '" class="media-object" width="64" /></div>' +
      '<div class="media-body">' +
      '<div class="">' +
      '<span class="mright20">' + repo.full_name + '</span>' +
      '<span class="mright20"><i class="fa fa-code-fork"></i> ' + repo.forks_count + '</span>' +
      '<span class="mright20"><i class="fa fa-star"></i> ' + repo.stargazers_count + '</span>' +
      '</div>';

    if (repo.description) {
      markup += '<div>' + repo.description + '</div>';
    }

    markup += '</div></div>';

    return markup;
  }

  function repoFormatSelection(repo) {
    return repo.full_name;
  }

  if ($("#e6").length > 0) {
    $("#e6").select2({
      placeholder: "Search for a repository",
      minimumInputLength: 1,
      ajax: { // instead of writing the function to execute the request we use Select2's convenient helper
        url: "https://api.github.com/search/repositories",
        dataType: 'json',
        quietMillis: 250,
        data: function(term, page) {
          return {
            q: term, // search term
          };
        },
        results: function(data, page) { // parse the results into the format expected by Select2.
          // since we are using custom formatting functions we do not need to alter the remote JSON data
          return {
            results: data.items
          };
        },
        cache: true
      },
      initSelection: function(element, callback) {
        // the input tag has a value attribute preloaded that points to a preselected repository's id
        // this function resolves that id attribute to an object that select2 can render
        // using its formatResult renderer - that way the repository name is shown preselected
        var id = $(element).val();
        if (id !== "") {
          $.ajax("https://api.github.com/repositories/" + id, {
            dataType: "json"
          }).done(function(data) {
            callback(data);
          });
        }
      },
      formatResult: repoFormatResult, // omitted for brevity, see the source of this page
      formatSelection: repoFormatSelection, // omitted for brevity, see the source of this page
      dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
      escapeMarkup: function(m) {
          return m;
        } // we do not want to escape markup since we are displaying html in results
    });
  }
  //Loading Remote Data end

  //Infinite Scroll with Remote Data begin
  if ($("#e7").length > 0) {
    $("#e7").select2({
      placeholder: "Search for a repository",
      minimumInputLength: 3,
      ajax: {
        url: "https://api.github.com/search/repositories",
        dataType: 'json',
        quietMillis: 250,
        data: function(term, page) { // page is the one-based page number tracked by Select2
          return {
            q: term, //search term
            page: page // page number
          };
        },
        results: function(data, page) {
          var more = (page * 30) < data.total_count; // whether or not there are more results available

          // notice we return the value of more so Select2 knows if more results can be loaded
          return {
            results: data.items,
            more: more
          };
        }
      },
      formatResult: repoFormatResult, // omitted for brevity, see the source of this page
      formatSelection: repoFormatSelection, // omitted for brevity, see the source of this page
      dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
      escapeMarkup: function(m) {
          return m;
        } // we do not want to escape markup since we are displaying html in results
    });
  }
  //Infinite Scroll with Remote Data end

  //Programmatic Access begin
  if ($("#e8").length > 0) {
    $("#e8").select2();
    $("#e8_get").click(function() {
      alert("Selected value is: " + $("#e8").select2("val"));
    });
    $("#e8_set").click(function() {
      $("#e8").select2("val", "CA");
    });
    $("#e8_cl").click(function() {
      $("#e8").select2("val", "");
    });
    $("#e8_get2").click(function() {
      var data = $("#e8").select2("data");
      delete data.element;
      alert("Selected data is: " + JSON.stringify(data));
    });
    $("#e8_set2").click(function() {
      $("#e8").select2("data", {
        id: "CA",
        text: "California"
      });
    });
    $("#e8_open").click(function() {
      $("#e8").select2("open");
    });
    $("#e8_close").click(function() {
      $("#e8").select2("close");
    });
  }
  if ($("#e8_2").length > 0) {
    $("#e8_2").select2({
      placeholder: "Select a state"
    });
    $("#e8_2_get").click(function() {
      alert("Selected value is: " + $("#e8_2").select2("val"));
    });
    $("#e8_2_set").click(function() {
      $("#e8_2").select2("val", ["CA", "MA"]);
    });
    $("#e8_2_get2").click(function() {
      alert("Selected value is: " + JSON.stringify($("#e8_2").select2("data")));
    });
    $("#e8_2_set2").click(function() {
      $("#e8_2").select2("data", [{
        id: "CA",
        text: "California"
      }, {
        id: "MA",
        text: "Massachusetts"
      }]);
    });
    $("#e8_2_cl").click(function() {
      $("#e8_2").select2("val", "");
    });
    $("#e8_2_open").click(function() {
      $("#e8_2").select2("open");
    });
    $("#e8_2_close").click(function() {
      $("#e8_2").select2("close");
    });
  }
  //Programmatic Access end

  //Events begin
  function log(e) {
    var e = $("<p>" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + " -> " + e + "</p>");
    $("#events_11").prepend(e);
    // e.animate({
    //   opacity: 1
    // }, 10000, 'linear', function() {
    //   e.animate({
    //     opacity: 0
    //   }, 20000, 'linear', function() {
    //     e.remove();
    //   });
    // });
  }
  if ($("#e11").length > 0) {
    $("#e11").select2({
      placeholder: "Select report type",
      allowClear: true,
      data: [{
        id: 0,
        text: 'story'
      }, {
        id: 1,
        text: 'bug'
      }, {
        id: 2,
        text: 'task'
      }]
    });
    $("#e11")
      .on("change", function(e) {
        log("change " + JSON.stringify({
          val: e.val,
          added: e.added,
          removed: e.removed
        }));
      })
      .on("select2-opening", function() {
        log("opening");
      })
      .on("select2-open", function() {
        log("open");
      })
      .on("select2-close", function() {
        log("close");
      })
      .on("select2-highlight", function(e) {
        log("highlighted val=" + e.val + " choice=" + JSON.stringify(e.choice));
      })
      .on("select2-selecting", function(e) {
        log("selecting val=" + e.val + " choice=" + JSON.stringify(e.choice));
      })
      .on("select2-removing", function(e) {
        log("removing val=" + e.val + " choice=" + JSON.stringify(e.choice));
      })
      .on("select2-removed", function(e) {
        log("removed val=" + e.val + " choice=" + JSON.stringify(e.choice));
      })
      .on("select2-loaded", function(e) {
        log("loaded (data property omitted for brevity)");
      })
      .on("select2-focus", function(e) {
        log("focus");
      })
      .on("select2-blur", function(e) {
        log("blur");
      });
  }
  if ($("#e11_2").length > 0) {
    $("#e11_2").select2({
      createSearchChoice: function(term, data) {
        if ($(data).filter(function() {
            return this.text.localeCompare(term) === 0;
          }).length === 0) {
          return {
            id: term,
            text: term
          };
        }
      },
      multiple: true,
      data: [{
        id: 0,
        text: 'story'
      }, {
        id: 1,
        text: 'bug'
      }, {
        id: 2,
        text: 'task'
      }]
    });
    $("#e11_2")
      .on("change", function(e) {
        log("change " + JSON.stringify({
          val: e.val,
          added: e.added,
          removed: e.removed
        }));
      })
      .on("select2-opening", function() {
        log("opening");
      })
      .on("select2-open", function() {
        log("open");
      })
      .on("select2-close", function() {
        log("close");
      })
      .on("select2-highlight", function(e) {
        log("highlighted val=" + e.val + " choice=" + JSON.stringify(e.choice));
      })
      .on("select2-selecting", function(e) {
        log("selecting val=" + e.val + " choice=" + JSON.stringify(e.choice));
      })
      .on("select2-removing", function(e) {
        log("removing val=" + e.val + " choice=" + JSON.stringify(e.choice));
      })
      .on("select2-removed", function(e) {
        log("removed val=" + e.val + " choice=" + JSON.stringify(e.choice));
      })
      .on("select2-loaded", function(e) {
        log("loaded (data property omitted for brevity)");
      })
      .on("select2-focus", function(e) {
        log("focus");
      })
      .on("select2-blur", function(e) {
        log("blur");
      });
  }
  //Events end

  //Tagging Support begin
  if ($("#e12").length > 0) {
    $("#e12").select2({
      tags: ["red", "green", "blue"]
    });
  }
  if ($("#e23").length > 0) {
    $("#e23").select2({
      tags: ["red", "green", "blue"],
      maximumInputLength: 10
    });
  }
  if ($("#e20").length > 0) {
    $("#e20").select2({
      tags: ["red", "green", "blue"],
      tokenSeparators: [",", " "]
    });
  }
  //Tagging Support end

  //Reacting to external value changes begin
  if ($("#e13").length > 0) {
    $("#e13").select2();
    $("#e13_ca").click(function() {
      $("#e13").val("CA").trigger("change");
    });
    $("#e13_ak_co").click(function() {
      $("#e13").val(["AK", "CO"]).trigger("change");
    });
  }
  //Reacting to external value changes end

  //Select2 Lifecycle begin
  if ($("#e14").length > 0) {
    $("#e14").val(["AL", "AZ"]).select2();
    $("#e14_init").click(function() {
      $("#e14").select2();
    });
    $("#e14_destroy").click(function() {
      $("#e14").select2("destroy");
    });
  }
  //Select2 Lifecycle end

  //Select2 Disabled Mode begin
  if ($("#e16").length > 0) {
    $("#e16").select2();
    $("#e16_2").select2();
    $("#e16_enable").click(function() {
      $("#e16,#e16_2").select2("enable", true);
    });
    $("#e16_disable").click(function() {
      $("#e16,#e16_2").select2("enable", false);
    });
    $("#e16_readonly").click(function() {
      $("#e16,#e16_2").select2("readonly", true);
    });
    $("#e16_writable").click(function() {
      $("#e16,#e16_2").select2("readonly", false);
    });
  }
  //Select2 Disabled Mode end

  //Lock selections begin
  if ($("#e21").length > 0) {
    var preload_data = [{
      id: 'user0',
      text: 'Disabled User',
      locked: true
    }, {
      id: 'user1',
      text: 'Jane Doe'
    }, {
      id: 'user2',
      text: 'John Doe',
      locked: true
    }, {
      id: 'user3',
      text: 'Robert Paulson',
      locked: true
    }, {
      id: 'user5',
      text: 'Spongebob Squarepants'
    }, {
      id: 'user6',
      text: 'Planet Bob'
    }, {
      id: 'user7',
      text: 'Inigo Montoya'
    }];
    $('#e21').select2({
      multiple: true,
      query: function(query) {
        var data = {
          results: []
        };

        $.each(preload_data, function() {
          if (query.term.length == 0 || this.text.toUpperCase().indexOf(query.term.toUpperCase()) >= 0) {
            data.results.push({
              id: this.id,
              text: this.text
            });
          }
        });

        query.callback(data);
      }
    });
    $('#e21').select2('data', preload_data);
  }
  //Lock selections end

});
/**
 * Select2 Dropdowns Demos end
 */


/**
 * Multi Select Demo begin
 */
$(function() {

  // Pre-selected options begin
  if ($('#pre-selected-options').length > 0) {
    $('#pre-selected-options').multiSelect();
  }
  // Pre-selected options end

  // Callbacks begin
  if ($('#callbacks').length > 0) {
    $('#callbacks').multiSelect({
      afterSelect: function(values) {
        alert("Select value: " + values);
      },
      afterDeselect: function(values) {
        alert("Deselect value: " + values);
      }
    });
  }
  // Callbacks end

  // Keep Order begin
  if ($('#keep-order').length > 0) {
    $('#keep-order').multiSelect({
      keepOrder: true
    });
  }
  // Keep Order end

  // Public methods begin
  if ($('#public-methods').length > 0) {
    var public_methods_arr = [];
    for (var i = 0; i < 100; i++) {
      public_methods_arr[i] = 'elem_' + (i + 1);
    }

    $('#public-methods').multiSelect({});
    $('#refresh').on('click', function() {
      $('#public-methods').multiSelect('refresh');
      return false;
    });
    $('#select-all').click(function() {
      $('#public-methods').multiSelect('select_all');
      return false;
    });
    $('#deselect-all').click(function() {
      $('#public-methods').multiSelect('deselect_all');
      return false;
    });
    $('#select-100').click(function() {
      $('#public-methods').multiSelect('select', public_methods_arr);
      return false;
    });
    $('#deselect-100').click(function() {
      $('#public-methods').multiSelect('deselect', public_methods_arr);
      return false;
    });

    $('#add-option').on('click', function() {
      $('#public-methods').multiSelect('addOption', {
        value: 42,
        text: 'test 42',
        index: 0
      });
      return false;
    });
  }
  // Public methods end

  // Optgroup begin
  if ($('#optgroup').length > 0) {
    $('#optgroup').multiSelect({
      selectableOptgroup: true
    });
  }
  // Optgroup end

  // Disabled attribute begin
  if ($('#disabled-attribute').length > 0) {
    $('#disabled-attribute').multiSelect();
  }
  // Disabled attribute end

  // Custom headers and footers begin
  if ($('#custom-headers').length > 0) {
    $('#custom-headers').multiSelect({
      selectableHeader: "<h5 class='text-center p10 no-m text-green'>Selectable items</h5>",
      selectionHeader: "<h5 class='text-center p10 no-m text-red'>Selection items</h5>",
      selectableFooter: "<div class='text-center p10 no-m text-green'>Selectable footer</div>",
      selectionFooter: "<div class='text-center p10 no-m text-red'>Selection footer</div>"
    });
  }
  // Custom headers and footers end

});
/**
 * Multi Select Demo end
 */


/**
 * Toastr Notifications Demo begin
 */
if ($("#toastrCfg").length > 0) {
  $(function() {
    var i = -1;
    var toastCount = 0;
    var $toastlast;

    var getMessage = function() {
      var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!',
        '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',
        'Are you the six fingered man?',
        'Inconceivable!',
        'I do not think that means what you think it means.',
        'Have fun storming the castle!'
      ];
      i++;
      if (i === msgs.length) {
        i = 0;
      }

      return msgs[i];
    };
    $('#showtoast').click(function() {
      var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
      var msg = $('#message').val();
      var title = $('#title').val() || '';
      var $showDuration = $('#showDuration');
      var $hideDuration = $('#hideDuration');
      var $timeOut = $('#timeOut');
      var $extendedTimeOut = $('#extendedTimeOut');
      var $showEasing = $('#showEasing');
      var $hideEasing = $('#hideEasing');
      var $showMethod = $('#showMethod');
      var $hideMethod = $('#hideMethod');
      var toastIndex = toastCount++;

      toastr.options = {
        closeButton: $('#closeButton').prop('checked'),
        debug: $('#debugInfo').prop('checked'),
        progressBar: $('#progressBar').prop('checked'),
        positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
        onclick: null
      };

      if ($('#addBehaviorOnToastClick').prop('checked')) {
        toastr.options.onclick = function() {
          alert('You can perform some custom action after a toast goes away');
        };
      }

      if ($showDuration.val().length) {
        toastr.options.showDuration = $showDuration.val();
      }

      if ($hideDuration.val().length) {
        toastr.options.hideDuration = $hideDuration.val();
      }

      if ($timeOut.val().length) {
        toastr.options.timeOut = $timeOut.val();
      }

      if ($extendedTimeOut.val().length) {
        toastr.options.extendedTimeOut = $extendedTimeOut.val();
      }

      if ($showEasing.val().length) {
        toastr.options.showEasing = $showEasing.val();
      }

      if ($hideEasing.val().length) {
        toastr.options.hideEasing = $hideEasing.val();
      }

      if ($showMethod.val().length) {
        toastr.options.showMethod = $showMethod.val();
      }

      if ($hideMethod.val().length) {
        toastr.options.hideMethod = $hideMethod.val();
      }

      if (!msg) {
        msg = getMessage();
      }

      $('#toastrOptions').text('Command: toastr["' + shortCutFunction + '"]("' + msg + (title ? '", "' + title : '') + '")\n\ntoastr.options = ' + JSON.stringify(toastr.options, null, 2));

      var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
      $toastlast = $toast;
      if ($toast.find('#okBtn').length) {
        $toast.delegate('#okBtn', 'click', function() {
          alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
          $toast.remove();
        });
      }
      if ($toast.find('#surpriseBtn').length) {
        $toast.delegate('#surpriseBtn', 'click', function() {
          alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
        });
      }
    });

    function getLastToast() {
      return $toastlast;
    }
    $('#clearlasttoast').click(function() {
      toastr.clear(getLastToast());
    });
    $('#cleartoasts').click(function() {
      toastr.clear();
    });
  })
}
/**
 * Toastr Notifications Demo end
 */


/**
 * JsTree demo begin
 */
$(function() {

  //Basic markup
  if ($("#jstree01").length > 0) {
    $('#jstree01').jstree();
  }

  //Nodes with children
  if ($("#jstree02").length > 0) {
    $('#jstree02').jstree();
  }

  //Setting initial state with classes
  if ($("#jstree03").length > 0) {
    $('#jstree03').jstree();
  }

  //Setting initial state with data attribute
  if ($("#jstree04").length > 0) {
    $('#jstree04').jstree();
  }

  //Loading with AJAX
  if ($("#jstree05").length > 0) {
    $('#jstree05').jstree({
      'core': {
        'data': {
          'url': './ajax/jstree-ajax-1.html',
          'data': function(node) {
            return {
              'id': node.id
            };
          }
        }
      }
    });
  }

  //Using JSON
  if ($("#jstree06").length > 0) {
    $('#jstree06').jstree({
      'core': {
        'data': [{
          'text': 'Simple root node',
          'icon': 'ti-tablet'
        }, {
          'text': 'Root node 2',
          'icon': 'ti-mobile',
          'state': {
            'opened': true,
            'selected': true
          },
          'children': [{
            'text': 'Child 1',
            'icon': 'ti-email'
          }, {
            'text': 'Child 2',
            'icon': 'ti-star'
          }]
        }]
      }
    });
  }

  // Using the alternative JSON format
  if ($("#jstree07").length > 0) {
    $('#jstree07').jstree({
      'core': {
        'data': [{
          "id": "ajson1",
          "parent": "#",
          "text": "Simple root node",
          'icon': 'ti-spray'
        }, {
          "id": "ajson2",
          "parent": "#",
          "text": "Root node 2",
          'icon': 'ti-signal',
          "state": {
            "opened": true
          }
        }, {
          "id": "ajson3",
          "parent": "ajson2",
          "text": "Child 1",
          'icon': 'ti-shopping-cart'
        }, {
          "id": "ajson4",
          "parent": "ajson2",
          "text": "Child 2",
          "icon": "ti-shopping-cart-full"
        }]
      }
    });
  }

  // Using AJAX
  if ($("#jstree08").length > 0) {
    $('#jstree08').jstree({
      'core': {
        'data': {
          'url': function(node) {
            return node.id === '#' ? './ajax/jstree-ajax-2.json' : './ajax/jstree-ajax-3.json';
          },
          'data': function(node) {
            return {
              'id': node.id
            };
          }
        }
      }
    });
  }

  // Using a function
  if ($("#jstree09").length > 0) {
    $('#jstree09').jstree({
      'core': {
        'data': function(obj, callback) {
          callback.call(this, [{
            'text': 'Root 1',
            'icon': 'ti-ruler'
          }, {
            'text': 'Root 2',
            'icon': 'ti-ruler-alt-2'
          }]);
        }
      }
    });
  }

  // Listening for events
  if ($("#jstree10").length > 0) {
    $('#jstree10').on('changed.jstree', function(e, data) {
      var i, j, r = [];
      for (i = 0, j = data.selected.length; i < j; i++) {
        r.push(data.instance.get_node(data.selected[i]).text);
      }
      $('#event_result').html('Selected:<br /> ' + r.join(', '));
    }).jstree();
  }

  // Invoking methods on an instance
  if ($("#jstree11").length > 0) {
    $('#jstree11').jstree();
    $("#jstree11-btn-1").on("click", function(e) {
      $('#jstree11').jstree(true).select_node('mn1');
    });
    $("#jstree11-btn-2").on("click", function(e) {
      $('#jstree11').jstree(true).select_node('mn2');
    });
    $("#jstree11-btn-3").on("click", function(e) {
      $('#jstree11').jstree(true).select_node('mn3');
    });
  }

  // Controls & Search
  if ($("#jstree12").length > 0) {
    function demo_create() {
      var ref = $('#jstree12').jstree(true),
        sel = ref.get_selected();
      if (!sel.length) {
        return false;
      }
      sel = sel[0];
      sel = ref.create_node(sel, {
        "type": "file"
      });
      if (sel) {
        ref.edit(sel);
      }
    };

    function demo_rename() {
      var ref = $('#jstree12').jstree(true),
        sel = ref.get_selected();
      if (!sel.length) {
        return false;
      }
      sel = sel[0];
      ref.edit(sel);
    };

    function demo_delete() {
      var ref = $('#jstree12').jstree(true),
        sel = ref.get_selected();
      if (!sel.length) {
        return false;
      }
      ref.delete_node(sel);
    };

    $(function() {
      var to = false;
      $('#jstree12-search').keyup(function() {
        if (to) {
          clearTimeout(to);
        }
        to = setTimeout(function() {
          var v = $('#jstree12-search').val();
          $('#jstree12').jstree(true).search(v);
        }, 250);
      });

      $("#jstree12-btn-create").on("click", function(e) {
        demo_create();
      });
      $("#jstree12-btn-rename").on("click", function(e) {
        demo_rename();
      });
      $("#jstree12-btn-delete").on("click", function(e) {
        demo_delete();
      });

      $('#jstree12')
        .jstree({
          "core": {
            "animation": 0,
            "check_callback": true,
            "themes": {
              "stripes": true
            },
            'data': {
              'url': function(node) {
                return node.id === '#' ? './ajax/jstree-ajax-2.json' : './ajax/jstree-ajax-3.json';
              },
              'data': function(node) {
                return {
                  'id': node.id
                };
              }
            }
          },
          "types": {
            "#": {
              "max_children": 1,
              "max_depth": 4,
              "valid_children": ["root"]
            },
            "root": {
              //"icon": "/static/3.0.8/assets/images/tree_icon.png",
              "valid_children": ["default"]
            },
            "default": {
              "valid_children": ["default", "file"]
            },
            "file": {
              "icon": "ti-file",
              "valid_children": []
            }
          },
          "plugins": ["contextmenu", "dnd", "search", "state", "types", "wholerow"]
        });
    });
  }

  // Checkbox plugin
  if ($("#jstree13").length > 0) {
    $("#jstree13").jstree({
      "checkbox": {
        "keep_selected_style": false
      },
      "plugins": ["checkbox"]
    });
  }

  // Contextmenu plugin
  if ($("#jstree14").length > 0) {
    $("#jstree14")
      .jstree({
        "core": {
          "check_callback": true
        },
        "plugins": ["contextmenu"]
      });
  }

  // Drag & drop plugin
  if ($("#jstree15").length > 0) {
    $("#jstree15").jstree({
      "core": {
        "check_callback": true
      },
      "plugins": ["dnd"]
    });
  }

  // Search plugin
  if ($("#jstree16").length > 0) {
    $("#jstree16").jstree({
      "plugins": ["search"]
    });
    var to = false;
    $('#jstree16-search').keyup(function() {
      if (to) {
        clearTimeout(to);
      }
      to = setTimeout(function() {
        var v = $('#jstree16-search').val();
        $('#jstree16').jstree(true).search(v);
      }, 250);
    });
  }

  // Sort plugin
  if ($("#jstree17").length > 0) {
    $("#jstree17").jstree({
      "plugins": ["sort"]
    });
  }

  // State plugin
  if ($("#jstree18").length > 0) {
    $("#jstree18").jstree({
      "state": {
        "key": "demo2"
      },
      "plugins": ["state"]
    });
  }

  // Types plugin
  if ($("#jstree19").length > 0) {
    $("#jstree19").jstree({
      "types": {
        "default": {
          "icon": "glyphicon glyphicon-flash"
        },
        "demo": {
          "icon": "glyphicon glyphicon-ok"
        }
      },
      "plugins": ["types"]
    });
  }

  // Unique plugin
  if ($("#jstree20").length > 0) {
    $("#jstree20").jstree({
      "core": {
        "check_callback": true
      },
      "plugins": ["unique", "dnd"]
    });
  }

  // Wholerow plugin
  if ($("#jstree21").length > 0) {
    $("#jstree21").jstree({
      "plugins": ["wholerow"]
    });
  }

});
/**
 * JsTree demo end
 */

/**
 * jQuery treetable begin
 */
$(function() {

  // example-basic
  if ($("#example-basic").length > 0) {
    $("#example-basic").treetable({
      expandable: true
    });
  }

  // Basic Static Tree
  if ($("#example-basic-static").length > 0) {
    $("#example-basic-static").treetable();
  }

  // Basic Expandable Tree
  if ($("#example-basic-expandable").length > 0) {
    $("#example-basic-expandable").treetable({
      expandable: true
    });
  }

  // Complex Tree With Drag and Drop
  if ($("#example-advanced").length > 0) {

    $("#example-advanced").treetable({
      expandable: true
    });

    // Highlight selected row
    $("#example-advanced tbody").on("mousedown", "tr", function() {
      $(".selected").not(this).removeClass("selected");
      $(this).toggleClass("selected");
    });

    // Drag & Drop Example Code
    $("#example-advanced .file, #example-advanced .folder").draggable({
      helper: "clone",
      opacity: .75,
      refreshPositions: true,
      revert: "invalid",
      revertDuration: 300,
      scroll: true
    });

    $("#example-advanced .folder").each(function() {
      $(this).parents("#example-advanced tr").droppable({
        accept: ".file, .folder",
        drop: function(e, ui) {
          var droppedEl = ui.draggable.parents("tr");
          $("#example-advanced").treetable("move", droppedEl.data("ttId"), $(this).data("ttId"));
        },
        hoverClass: "accept",
        over: function(e, ui) {
          var droppedEl = ui.draggable.parents("tr");
          if (this != droppedEl[0] && !$(this).is(".expanded")) {
            $("#example-advanced").treetable("expandNode", $(this).data("ttId"));
          }
        }
      });
    });

    $("form#reveal").submit(function() {
      var nodeId = $("#revealNodeId").val()

      try {
        $("#example-advanced").treetable("reveal", nodeId);
      } catch (error) {
        alert(error.message);
      }

      return false;
    });

  }

});
/**
 * jQuery treetable end
 */


/**
 * Bootstarp Tree demo begin
 */
$(function() {
  if ($(".tree").length > 0) {
    $(document).ready(function() {
      $('.tree > ul').attr('role', 'tree').find('ul').attr('role', 'group');
      $('.tree').find('li:has(ul)').addClass('parent_li').attr('role', 'treeitem').find(' > span').attr('title', 'Collapse this branch').on('click', function(e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(':visible')) {
          children.hide('fast');
          $(this).attr('title', 'Expand this branch').find(' > i').addClass('entypo-plus-sign').removeClass('entypo-minus-sign');
        } else {
          children.show('fast');
          $(this).attr('title', 'Collapse this branch').find(' > i').addClass('entypo-minus-sign').removeClass('entypo-plus-sign');
        }
        e.stopPropagation();
      });
    });
  }
});
/**
 * Bootstrap Tree demo end
 */


/**
 * Animations demo begin
 */
$(function() {
  if ($("#animations-type").length > 0) {
    $("#animations-type").select2();
  }

  function testAnim(x) {
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      $(this).removeClass();
    });
  };

  $(document).ready(function() {
    $('.js--animations').change(function() {
      var anim = $(this).val();
      testAnim(anim);
    });
  });

});
/**
 * Animations demo end
 */


/**
 * Mask Input demo begin
 */
$(function() {
  if ($("#maskInput-date").length > 0) {
    $("#maskInput-date").mask("99/99/9999");
  }
  if ($("#maskInput-phone").length > 0) {
    $("#maskInput-phone").mask("(999) 999-9999");
  }
  if ($("#maskInput-credit-card").length > 0) {
    $("#maskInput-credit-card").mask("9999-9999-9999-9999");
  }
  if ($("#maskInput-product-key").length > 0) {
    $("#maskInput-product-key").mask("a*-999-9999-aaaa9999");
  }
});
/**
 * Mask Input demo end
 */


/**
 * Character Count demo begin
 */
$(function() {
  if ($("#countableArea").length > 0) {
    function text(e, t) {
      "textContent" in document.body ? e.textContent = t : e.innerText = t;
    }
    var fields = {
      paragraphs: document.getElementById("result__paragraphs"),
      words: document.getElementById("result__words"),
      characters: document.getElementById("result__characters"),
      all: document.getElementById("result__all")
    };

    Countable.live(document.getElementById("countableArea"), function(e) {
      for (var t in fields) text(fields[t], e[t]);
    });
  }
});
/**
 * Character Count demo end
 */


/**
 * Knob Dial demo begin
 */
$(function() {
  if ($(".knob").length > 0) {
    $(".knob").knob({
      /*change : function (value) {
          //console.log("change : " + value);
      },
      release : function (value) {
          console.log("release : " + value);
      },
      cancel : function () {
          console.log("cancel : " + this.value);
      },*/
      draw: function() {

        // "tron" case
        if (this.$.data('skin') == 'tron') {

          var a = this.angle(this.cv) // Angle
            ,
            sa = this.startAngle // Previous start angle
            ,
            sat = this.startAngle // Start angle
            ,
            ea // Previous end angle
            , eat = sat + a // End angle
            ,
            r = true;

          this.g.lineWidth = this.lineWidth;

          this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

          if (this.o.displayPrevious) {
            ea = this.startAngle + this.angle(this.value);
            this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
            this.g.beginPath();
            this.g.strokeStyle = this.previousColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
            this.g.stroke();
          }

          this.g.beginPath();
          this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
          this.g.stroke();

          this.g.lineWidth = 2;
          this.g.beginPath();
          this.g.strokeStyle = this.o.fgColor;
          this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
          this.g.stroke();

          return false;
        }
      }
    });

    // Example of infinite knob, iPod click wheel
    var v, up = 0,
      down = 0,
      i = 0,
      $idir = $("div.idir"),
      $ival = $("div.ival"),
      incr = function() {
        i++;
        $idir.show().html("+").fadeOut();
        $ival.html(i);
      },
      decr = function() {
        i--;
        $idir.show().html("-").fadeOut();
        $ival.html(i);
      };
    $("input.infinite").knob({
      min: 0,
      max: 20,
      stopper: false,
      change: function() {
        if (v > this.cv) {
          if (up) {
            decr();
            up = 0;
          } else {
            up = 1;
            down = 0;
          }
        } else {
          if (v < this.cv) {
            if (down) {
              incr();
              down = 0;
            } else {
              down = 1;
              up = 0;
            }
          }
        }
        v = this.cv;
      }
    });

    clock();
  }
});

function clock() {
    var $s = $(".second"),
      $m = $(".minute"),
      $h = $(".hour");
    d = new Date(),
      s = d.getSeconds(),
      m = d.getMinutes(),
      h = d.getHours();
    $s.val(s).trigger("change");
    $m.val(m).trigger("change");
    $h.val(h).trigger("change");
    setTimeout("clock()", 1000);
  }
  /**
   * Knob Dial demo end
   */


/**
 * X-editable demo begin
 */
function getURL(name) {
  var searchString = window.location.search.substring(1),
    i, val, params = searchString.split("&");
  for (i = 0; i < params.length; i++) {
    val = params[i].split("=");
    if (val[0] == name) {
      return unescape(val[1]);
    }
  }
  return null;
}
$(function() {
  if ($("#x-editable-demo").length > 0) {

    //ajax mocks
    $.mockjaxSettings.responseTime = 500;

    $.mockjax({
      url: '/post',
      response: function(settings) {
        log(settings, this);
      }
    });

    $.mockjax({
      url: '/error',
      status: 400,
      statusText: 'Bad Request',
      response: function(settings) {
        this.responseText = 'Please input correct value';
        log(settings, this);
      }
    });

    $.mockjax({
      url: '/status',
      status: 500,
      response: function(settings) {
        this.responseText = 'Internal Server Error';
        log(settings, this);
      }
    });

    $.mockjax({
      url: '/groups',
      response: function(settings) {
        this.responseText = [{
          value: 0,
          text: 'Guest'
        }, {
          value: 1,
          text: 'Service'
        }, {
          value: 2,
          text: 'Customer'
        }, {
          value: 3,
          text: 'Operator'
        }, {
          value: 4,
          text: 'Support'
        }, {
          value: 5,
          text: 'Admin'
        }];
        log(settings, this);
      }
    });

    function log(settings, response) {
      var s = [],
        str;
      s.push(settings.type.toUpperCase() + ' url = "' + settings.url + '"');
      for (var a in settings.data) {
        if (settings.data[a] && typeof settings.data[a] === 'object') {
          str = [];
          for (var j in settings.data[a]) {
            str.push(j + ': "' + settings.data[a][j] + '"');
          }
          str = '{ ' + str.join(', ') + ' }';
        } else {
          str = '"' + settings.data[a] + '"';
        }
        s.push(a + ' = ' + str);
      }
      s.push('RESPONSE: status = ' + response.status);

      if (response.responseText) {
        if ($.isArray(response.responseText)) {
          s.push('[');
          $.each(response.responseText, function(i, v) {
            s.push('{value: ' + v.value + ', text: "' + v.text + '"}');
          });
          s.push(']');
        } else {
          s.push($.trim(response.responseText));
        }
      }
      s.push('--------------------------------------\n');
      $('#console').val(s.join('\n') + $('#console').val());
    }

    //defaults
    $.fn.editable.defaults.inputclass = 'form-control';
    $.fn.editable.defaults.url = '/post';

    if (getURL('mode') == 'inline') {
      $("#inline-editing").iCheck('check');
      $.fn.editable.defaults.mode = 'inline';
    } else {
      $("#inline-editing").iCheck('uncheck');
      $.fn.editable.defaults.mode = 'popup';
    }

    //editables
    $('#username').editable({
      url: '/post',
      type: 'text',
      pk: 1,
      name: 'username',
      title: 'Enter username'
    });

    $('#firstname').editable({
      validate: function(value) {
        if ($.trim(value) == '') return 'This field is required';
      }
    });

    $('#sex').editable({
      prepend: "not selected",
      source: [{
        value: 1,
        text: 'Male'
      }, {
        value: 2,
        text: 'Female'
      }],
      display: function(value, sourceData) {
        var colors = {
            "": "gray",
            1: "green",
            2: "blue"
          },
          elem = $.grep(sourceData, function(o) {
            return o.value == value;
          });

        if (elem.length) {
          $(this).text(elem[0].text).css("color", colors[value]);
        } else {
          $(this).empty();
        }
      }
    });

    $('#status').editable();

    $('#group').editable({
      showbuttons: false
    });

    $('#vacation').editable({
      datepicker: {
        todayBtn: 'linked'
      }
    });

    $('#dob').editable();

    $('#event').editable({
      placement: 'right',
      combodate: {
        firstItem: 'name'
      }
    });

    $('#meeting_start').editable({
      format: 'yyyy-mm-dd hh:ii',
      viewformat: 'dd/mm/yyyy hh:ii',
      validate: function(v) {
        if (v && v.getDate() == 10) return 'Day cant be 10!';
      },
      datetimepicker: {
        todayBtn: 'linked',
        weekStart: 1
      }
    });

    $('#comments').editable({
      showbuttons: 'bottom'
    });

    $('#note').editable();
    $('#pencil').click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      $('#note').editable('toggle');
    });

    $('#state').editable({
      source: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    });

    $('#state2').editable({
      value: 'California',
      typeahead: {
        name: 'state',
        local: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      }
    });

    $('#fruits').editable({
      pk: 1,
      limit: 3,
      source: [{
        value: 1,
        text: 'banana'
      }, {
        value: 2,
        text: 'peach'
      }, {
        value: 3,
        text: 'apple'
      }, {
        value: 4,
        text: 'watermelon'
      }, {
        value: 5,
        text: 'orange'
      }]
    });

    $('#tags').editable({
      inputclass: 'input-large',
      select2: {
        tags: ['html', 'javascript', 'css', 'ajax'],
        tokenSeparators: [",", " "]
      }
    });

    var countries = [];
    $.each({
      "BD": "Bangladesh",
      "BE": "Belgium",
      "BF": "Burkina Faso",
      "BG": "Bulgaria",
      "BA": "Bosnia and Herzegovina",
      "BB": "Barbados",
      "WF": "Wallis and Futuna",
      "BL": "Saint Bartelemey",
      "BM": "Bermuda",
      "BN": "Brunei Darussalam",
      "BO": "Bolivia",
      "BH": "Bahrain",
      "BI": "Burundi",
      "BJ": "Benin",
      "BT": "Bhutan",
      "JM": "Jamaica",
      "BV": "Bouvet Island",
      "BW": "Botswana",
      "WS": "Samoa",
      "BR": "Brazil",
      "BS": "Bahamas",
      "JE": "Jersey",
      "BY": "Belarus",
      "O1": "Other Country",
      "LV": "Latvia",
      "RW": "Rwanda",
      "RS": "Serbia",
      "TL": "Timor-Leste",
      "RE": "Reunion",
      "LU": "Luxembourg",
      "TJ": "Tajikistan",
      "RO": "Romania",
      "PG": "Papua New Guinea",
      "GW": "Guinea-Bissau",
      "GU": "Guam",
      "GT": "Guatemala",
      "GS": "South Georgia and the South Sandwich Islands",
      "GR": "Greece",
      "GQ": "Equatorial Guinea",
      "GP": "Guadeloupe",
      "JP": "Japan",
      "GY": "Guyana",
      "GG": "Guernsey",
      "GF": "French Guiana",
      "GE": "Georgia",
      "GD": "Grenada",
      "GB": "United Kingdom",
      "GA": "Gabon",
      "SV": "El Salvador",
      "GN": "Guinea",
      "GM": "Gambia",
      "GL": "Greenland",
      "GI": "Gibraltar",
      "GH": "Ghana",
      "OM": "Oman",
      "TN": "Tunisia",
      "JO": "Jordan",
      "HR": "Croatia",
      "HT": "Haiti",
      "HU": "Hungary",
      "HK": "Hong Kong",
      "HN": "Honduras",
      "HM": "Heard Island and McDonald Islands",
      "VE": "Venezuela",
      "PR": "Puerto Rico",
      "PS": "Palestinian Territory",
      "PW": "Palau",
      "PT": "Portugal",
      "SJ": "Svalbard and Jan Mayen",
      "PY": "Paraguay",
      "IQ": "Iraq",
      "PA": "Panama",
      "PF": "French Polynesia",
      "BZ": "Belize",
      "PE": "Peru",
      "PK": "Pakistan",
      "PH": "Philippines",
      "PN": "Pitcairn",
      "TM": "Turkmenistan",
      "PL": "Poland",
      "PM": "Saint Pierre and Miquelon",
      "ZM": "Zambia",
      "EH": "Western Sahara",
      "RU": "Russian Federation",
      "EE": "Estonia",
      "EG": "Egypt",
      "TK": "Tokelau",
      "ZA": "South Africa",
      "EC": "Ecuador",
      "IT": "Italy",
      "VN": "Vietnam",
      "SB": "Solomon Islands",
      "EU": "Europe",
      "ET": "Ethiopia",
      "SO": "Somalia",
      "ZW": "Zimbabwe",
      "SA": "Saudi Arabia",
      "ES": "Spain",
      "ER": "Eritrea",
      "ME": "Montenegro",
      "MD": "Moldova, Republic of",
      "MG": "Madagascar",
      "MF": "Saint Martin",
      "MA": "Morocco",
      "MC": "Monaco",
      "UZ": "Uzbekistan",
      "MM": "Myanmar",
      "ML": "Mali",
      "MO": "Macao",
      "MN": "Mongolia",
      "MH": "Marshall Islands",
      "MK": "Macedonia",
      "MU": "Mauritius",
      "MT": "Malta",
      "MW": "Malawi",
      "MV": "Maldives",
      "MQ": "Martinique",
      "MP": "Northern Mariana Islands",
      "MS": "Montserrat",
      "MR": "Mauritania",
      "IM": "Isle of Man",
      "UG": "Uganda",
      "TZ": "Tanzania, United Republic of",
      "MY": "Malaysia",
      "MX": "Mexico",
      "IL": "Israel",
      "FR": "France",
      "IO": "British Indian Ocean Territory",
      "FX": "France, Metropolitan",
      "SH": "Saint Helena",
      "FI": "Finland",
      "FJ": "Fiji",
      "FK": "Falkland Islands (Malvinas)",
      "FM": "Micronesia, Federated States of",
      "FO": "Faroe Islands",
      "NI": "Nicaragua",
      "NL": "Netherlands",
      "NO": "Norway",
      "NA": "Namibia",
      "VU": "Vanuatu",
      "NC": "New Caledonia",
      "NE": "Niger",
      "NF": "Norfolk Island",
      "NG": "Nigeria",
      "NZ": "New Zealand",
      "NP": "Nepal",
      "NR": "Nauru",
      "NU": "Niue",
      "CK": "Cook Islands",
      "CI": "Cote d'Ivoire",
      "CH": "Switzerland",
      "CO": "Colombia",
      "CN": "China",
      "CM": "Cameroon",
      "CL": "Chile",
      "CC": "Cocos (Keeling) Islands",
      "CA": "Canada",
      "CG": "Congo",
      "CF": "Central African Republic",
      "CD": "Congo, The Democratic Republic of the",
      "CZ": "Czech Republic",
      "CY": "Cyprus",
      "CX": "Christmas Island",
      "CR": "Costa Rica",
      "CV": "Cape Verde",
      "CU": "Cuba",
      "SZ": "Swaziland",
      "SY": "Syrian Arab Republic",
      "KG": "Kyrgyzstan",
      "KE": "Kenya",
      "SR": "Suriname",
      "KI": "Kiribati",
      "KH": "Cambodia",
      "KN": "Saint Kitts and Nevis",
      "KM": "Comoros",
      "ST": "Sao Tome and Principe",
      "SK": "Slovakia",
      "KR": "Korea, Republic of",
      "SI": "Slovenia",
      "KP": "Korea, Democratic People's Republic of",
      "KW": "Kuwait",
      "SN": "Senegal",
      "SM": "San Marino",
      "SL": "Sierra Leone",
      "SC": "Seychelles",
      "KZ": "Kazakhstan",
      "KY": "Cayman Islands",
      "SG": "Singapore",
      "SE": "Sweden",
      "SD": "Sudan",
      "DO": "Dominican Republic",
      "DM": "Dominica",
      "DJ": "Djibouti",
      "DK": "Denmark",
      "VG": "Virgin Islands, British",
      "DE": "Germany",
      "YE": "Yemen",
      "DZ": "Algeria",
      "US": "United States",
      "UY": "Uruguay",
      "YT": "Mayotte",
      "UM": "United States Minor Outlying Islands",
      "LB": "Lebanon",
      "LC": "Saint Lucia",
      "LA": "Lao People's Democratic Republic",
      "TV": "Tuvalu",
      "TW": "Taiwan",
      "TT": "Trinidad and Tobago",
      "TR": "Turkey",
      "LK": "Sri Lanka",
      "LI": "Liechtenstein",
      "A1": "Anonymous Proxy",
      "TO": "Tonga",
      "LT": "Lithuania",
      "A2": "Satellite Provider",
      "LR": "Liberia",
      "LS": "Lesotho",
      "TH": "Thailand",
      "TF": "French Southern Territories",
      "TG": "Togo",
      "TD": "Chad",
      "TC": "Turks and Caicos Islands",
      "LY": "Libyan Arab Jamahiriya",
      "VA": "Holy See (Vatican City State)",
      "VC": "Saint Vincent and the Grenadines",
      "AE": "United Arab Emirates",
      "AD": "Andorra",
      "AG": "Antigua and Barbuda",
      "AF": "Afghanistan",
      "AI": "Anguilla",
      "VI": "Virgin Islands, U.S.",
      "IS": "Iceland",
      "IR": "Iran, Islamic Republic of",
      "AM": "Armenia",
      "AL": "Albania",
      "AO": "Angola",
      "AN": "Netherlands Antilles",
      "AQ": "Antarctica",
      "AP": "Asia/Pacific Region",
      "AS": "American Samoa",
      "AR": "Argentina",
      "AU": "Australia",
      "AT": "Austria",
      "AW": "Aruba",
      "IN": "India",
      "AX": "Aland Islands",
      "AZ": "Azerbaijan",
      "IE": "Ireland",
      "ID": "Indonesia",
      "UA": "Ukraine",
      "QA": "Qatar",
      "MZ": "Mozambique"
    }, function(k, v) {
      countries.push({
        id: k,
        text: v
      });
    });
    $('#country').editable({
      source: countries,
      select2: {
        width: 200,
        placeholder: 'Select country',
        allowClear: true
      }
    });

    $('#address').editable({
      inputclass: 'form-control',
      url: '/post',
      value: {
        city: "Moscow",
        street: "Lenina",
        building: "12"
      },
      validate: function(value) {
        if (value.city == '') return 'city is required!';
      },
      display: function(value) {
        if (!value) {
          $(this).empty();
          return;
        }
        var html = '<b>' + $('<div>').text(value.city).html() + '</b>, ' + $('<div>').text(value.street).html() + ' st., bld. ' + $('<div>').text(value.building).html();
        $(this).html(html);
      }
    });

    $('#user .editable').on('hidden', function(e, reason) {
      if (reason === 'save' || reason === 'nochange') {
        var $next = $(this).closest('tr').next().find('.editable');
        if ($('#autoopen').is(':checked')) {
          setTimeout(function() {
            $next.editable('show');
          }, 300);
        } else {
          $next.focus();
        }
      }
    });

    //enable / disable
    $('#enable').on('switchChange.bootstrapSwitch', function(event, state) {
      $('#user .editable').editable('toggleDisabled');
      // console.log(this); // DOM element
      // console.log(event); // jQuery event
      // console.log(state); // true | false
    });

    // inline editing
    $('#inline-editing').on('ifChecked ifUnchecked', function(event) {
      if (event.type == 'ifChecked') {
        window.location.href = 'forms-coustomized_elements.html?mode=inline';
      } else {
        window.location.href = 'forms-coustomized_elements.html';
      }
    });

  }
});
/**
 * X-editable demo end
 */


/**
 * Image cropper demo begin
 */
$(function() {
  if ($("#demo-cropper").length > 0) {
    var console = window.console || {
        log: function() {}
      },
      $alert = $(".docs-alert"),
      $message = $alert.find(".message"),
      showMessage = function(message, type) {
        $message.text(message);
        type && $message.addClass(type);
        $alert.fadeIn();

        setTimeout(function() {
          $alert.fadeOut();
        }, 3000);
      };

    // Overview
    // -------------------------------------------------------------------------

    (function() {
      var $image = $(".img-container img"),
        $dataX = $("#dataX"),
        $dataY = $("#dataY"),
        $dataHeight = $("#dataHeight"),
        $dataWidth = $("#dataWidth"),
        options = {
          aspectRatio: 16 / 9,
          data: {
            x: 480,
            y: 60,
            width: 640,
            height: 360
          },
          preview: ".img-preview",
          done: function(data) {
            $dataX.val(Math.round(data.x));
            $dataY.val(Math.round(data.y));
            $dataHeight.val(Math.round(data.height));
            $dataWidth.val(Math.round(data.width));
          }
        };

      $image.cropper(options).on({
        "build.cropper": function(e) {
          // console.log(e.type);
        },
        "built.cropper": function(e) {
          // console.log(e.type);
        }
      });

      $(document).on("click", "[data-method]", function() {
        var data = $(this).data();

        if (data.method) {
          $image.cropper(data.method, data.option);
        }
      });

      var $inputImage = $("#inputImage");

      if (window.FileReader) {
        $inputImage.change(function() {
          var fileReader = new FileReader(),
            files = this.files,
            file;

          if (!files.length) {
            return;
          }

          file = files[0];

          if (/^image\/\w+$/.test(file.type)) {
            fileReader.readAsDataURL(file);
            fileReader.onload = function() {
              $image.cropper("reset", true).cropper("replace", this.result);
              $inputImage.val("");
            };
          } else {
            showMessage("Please choose an image file.");
          }
        });
      } else {
        $inputImage.addClass("hide");
      }

      $("#download").click(function() {
        window.open($image.cropper("getDataURL"));
      });

      var $zoomWith = $("#zoomWith");

      $("#zoom").click(function() {
        $image.cropper("zoom", $zoomWith.val());
      });


      var $rotateWith = $("#rotateWith");

      $("#rotate").click(function() {
        $image.cropper("rotate", $rotateWith.val());
      });


      var $getDataInto = $("#getDataInto");

      $("#getData").click(function() {
        var data = $image.cropper("getData"),
          val = "";

        try {
          val = JSON.stringify(data);
        } catch (e) {
          console.log(data);
        }

        $getDataInto.val(val);
      });


      var $setDataX = $("#setDataX"),
        $setDataY = $("#setDataY"),
        $setDataWidth = $("#setDataWidth"),
        $setDataHeight = $("#setDataHeight");

      $("#setData").click(function() {
        var data = {
          x: $setDataX.val(),
          y: $setDataY.val(),
          width: $setDataWidth.val(),
          height: $setDataHeight.val()
        };

        $image.cropper("setData", data);
      });


      var $setAspectRatioWith = $("#setAspectRatioWith");

      $("#setAspectRatio").click(function() {
        $image.cropper("setAspectRatio", $setAspectRatioWith.val());
      });


      var $replaceWith = $("#replaceWith");

      $("#replace").click(function() {
        $image.cropper("replace", $replaceWith.val());
      });


      var $getImageDataInto = $("#getImageDataInto");

      $("#getImageData").click(function() {
        var data = $image.cropper("getImageData"),
          val = "";

        try {
          val = JSON.stringify(data);
        } catch (e) {
          console.log(data);
        }

        $getImageDataInto.val(val);
      });


      var $dataURLInto = $("#dataURLInto"),
        $dataURLView = $("#dataURLView");

      $("#getDataURL").click(function() {
        var dataURL = $image.cropper("getDataURL");

        $dataURLInto.text(dataURL);
        $dataURLView.html('<img src="' + dataURL + '">');
      });

      $("#getDataURL2").click(function() {
        var dataURL = $image.cropper("getDataURL", "image/jpeg");

        $dataURLInto.text(dataURL);
        $dataURLView.html('<img src="' + dataURL + '">');
      });

      $("#getDataURL3").click(function() {
        var dataURL = $image.cropper("getDataURL", {
          width: 160,
          height: 90
        });

        $dataURLInto.text(dataURL);
        $dataURLView.html('<img src="' + dataURL + '">');
      });

      $("#getDataURL4").click(function() {
        var dataURL = $image.cropper("getDataURL", {
          width: 320,
          height: 180
        }, "image/jpeg", 0.8);

        $dataURLInto.text(dataURL);
        $dataURLView.html('<img src="' + dataURL + '">');
      });

      $(".docs-options :radio").on("change", function(e) {
        var $this = $(this);

        if ($this.is(":checked")) {
          options[$this.attr("name")] = $this.val() === "true" ? true : false;
          $image.cropper("destroy").cropper(options);
        }
      });

      $("[data-toggle='tooltip']").tooltip();
    }());
  }
});
/**
 * Image cropper demo end
 */


/**
 * Bootstrap Datepicker demo begin
 */
$(function() {

  // Default
  if ($("#bs-datepicker-default")[0]) {
    $("#bs-datepicker-default").datepicker({
      autoclose: true,
      todayHighlight: true
    });
  }

  // Format
  if ($("#bs-datepicker-format")[0]) {
    $("#bs-datepicker-format").datepicker({
      format: "yyyy-mm-dd",
      multidate: false,
      autoclose: true,
      todayHighlight: true
    });
  }

  // Start with years
  if ($("#bs-datepicker-swy")[0]) {
    $("#bs-datepicker-swy").datepicker({
      startView: 1
    });
  }

  // Range
  if ($("#bs-datepicker-range")[0]) {
    $("#bs-datepicker-range").datepicker();
  }

  // Inline
  if ($("#bs-datepicker-inline")[0]) {
    $("#bs-datepicker-inline").datepicker();
  }

});
/**
 * Bootstrap Datepicker demo end
 */


/**
 * Date Range Pickers begin
 */
$(function() {

  // Date
  if ($("#daterange-pickers-date")[0]) {
    $("#daterange-pickers-date").daterangepicker();
  }

  // Date&Time
  if ($("#daterange-pickers-datetime")[0]) {
    $("#daterange-pickers-datetime").daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      format: 'MM/DD/YYYY h:mm A'
    });
  }

  // Advanced
  if ($("#daterange-pickers-advanced")[0]) {
    $("#daterange-pickers-advanced > span").html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('#daterange-pickers-advanced').daterangepicker({
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract('days', 1)],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        },
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        opens: 'left'
      },
      function(start, end) {
        $('#daterange-pickers-advanced > span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        $('#daterange-pickers-advanced input[name="datestart"]').val(start.format("YYYY-MM-DD"));
        $('#daterange-pickers-advanced input[name="endstart"]').val(end.format("YYYY-MM-DD"));
      }
    );
  }

});
/**
 * Date Range Pickers end
 */


/**
 * Color Picker demo begin
 */
$(function() {

  // Default
  if ($("#colorpicker-default")[0]) {
    $("#colorpicker-default").colorpicker().on('changeColor', function(ev) {
      $("#colorpicker-default").css('color', ev.color.toHex());
    });
  }

  // As a Component
  if ($("#colorpicker-component")[0]) {
    $("#colorpicker-component").colorpicker();
  }

  // RGBA Format
  if ($("#colorpicker-rgba")[0]) {
    $("#colorpicker-rgba").colorpicker({
      format: 'rgba'
    });
  }

  // Horizonal mode
  if ($("#colorpicker-horizontal")[0]) {
    $("#colorpicker-horizontal").colorpicker({
      format: 'rgba',
      horizontal: 'true'
    });
  }

});
/**
 * Color Picker demo end
 */


/**
 * Datetime Picker demo begin
 */
$(function() {

  // Default
  if ($("#datetimepicker1")[0]) {
    $("#datetimepicker1").datetimepicker();
  }

  // Disable date
  if ($("#datetimepicker2")[0]) {
    $("#datetimepicker2").datetimepicker({
      pickDate: false
    });
  }

  // Disable time
  if ($("#datetimepicker3")[0]) {
    $("#datetimepicker3").datetimepicker({
      pickTime: false
    });
  }

});
/**
 * Datetime Picker demo end
 */


/**
 * Time Picker demo begin
 */
$(function() {

  // Default
  if ($("#timepicker1")[0]) {
    $('#timepicker1').timepicker({
      minuteStep: 5,
      showInputs: false,
      disableFocus: true
    });
  }

  // 24 Hours
  if ($("#timepicker2")[0]) {
    $('#timepicker2').timepicker({
      autoclose: true,
      minuteStep: 5,
      showSeconds: true,
      showInputs: false,
      showMeridian: false
    });
  }

});
/**
 * Time Picker demo end
 */


/**
 * Clockpicker demo begin
 */
$(function() {

  // Default
  if ($("#clockpicker1")[0]) {
    $("#clockpicker1").clockpicker({
      placement: 'top',
      donetext: 'Done',
      autoclose: true,
      'default': 'now'
    });
  }

});
/**
 * Clockpicker demo end
 */


/**
 * jQuery Validation demo begin
 */
$(document).ready(function() {

  // Validate Types demo
  if ($("#form-validate-type")[0]) {
    $("#form-validate-type").validate({
      rules: {
        email1: {
          required: true,
          email: true
        },
        url1: {
          required: true,
          url: true
        },
        date1: {
          required: true,
          date: true
        },
        date2: {
          required: true,
          date: true
        },
        min1: {
          required: true,
          minlength: 3
        },
        max1: {
          required: true,
          maxlength: 4
        },
        range1: {
          required: true,
          rangelength: [2, 6]
        },
        minnum1: {
          required: true,
          min: 13
        },
        maxnum1: {
          required: true,
          max: 23
        },
        range2: {
          required: true,
          range: [13, 23]
        },
        num1: {
          required: true,
          number: true
        },
        num2: {
          required: true,
          digits: true
        },
        creditcard: {
          required: true,
          creditcard: true
        },
        password: "required",
        cpassword: {
          equalTo: "#password"
        },
        select1: {
          required: true
        }
      },
      messages: {
        email1: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        url1: {
          required: "Please enter a url.",
          email: "Please enter a valid url."
        },
        date1: {
          required: "Please enter date.",
          date: "Please enter a valid date."
        }
      }
    });
  }

  // Signin demo
  if ($("#form-validate-signin")[0]) {
    $("#form-validate-signin").validate({
      rules: {
        'signin_email': {
          required: true,
          email: true
        },
        'signin_password': {
          required: true
        }
      }
    });
  }

  // Signup demo
  if ($("#form-validate-signup")[0]) {
    $("#form-validate-signup").validate({
      rules: {
        'signup_name': {
          required: true,
          rangelength: [2, 20]
        },
        'signup_email': {
          required: true,
          email: true
        },
        'signup_password': {
          required: true,
          rangelength: [6, 32]
        },
        'signup_cpassword': {
          equalTo: "#signup_password",
          rangelength: [6, 32]
        }
      }
    });
  }

});
/**
 * jQuery Validation demo end
 */


/**
 * Wizard demo begin
 */
$(function() {

  // Basic
  if ($("#wizard-basic")[0]) {
    var _form = $("#wizard-basic");
    _form.validate({
      rules: {
        username: {
          required: true
        },
        password: {
          required: true,
          rangelength: [6, 32]
        },
        cpassword: {
          required: true,
          equalTo: "#password",
          rangelength: [6, 32]
        },
        street: {
          required: true
        },
        city: {
          required: true
        },
        checkoutmethod: {
          required: true
        }
      }
    });
    _form.children("div").steps({
      headerTag: "h3",
      bodyTag: "section",
      titleTemplate: "<span class=\"number\"><span class=\"number-inner\">#index#</span></span><span class=\"title\"><span class=\"title-inner\">#title#</span></span>",
      transitionEffect: "slideLeft",
      autoFocus: true,
      labels: {
        finish: "Finish <i class=\"fa fa-check-circle-o\"></i>",
        next: "Next <i class=\"fa fa-arrow-circle-o-right\"></i>",
        previous: "<i class=\"fa fa-arrow-circle-o-left\"></i> Previous"
      },
      onStepChanging: function(event, currentIndex, newIndex) {
        _form.validate().settings.ignore = ":disabled,:hidden";
        return _form.valid();
      },
      onFinishing: function(event, currentIndex) {
        _form.validate().settings.ignore = ":disabled";
        return _form.valid();
      },
      onFinished: function(event, currentIndex) {
        alert("Submitted!");
        _form.submit();
      }

    });
  }

  for (var i = 1; i <= 14; i++) {
    if ($("#wizard-basic-c" + i)[0]) {
      $("#wizard-basic-c" + i).steps({
        headerTag: "h3",
        bodyTag: "section",
        titleTemplate: "<span class=\"number\"><span class=\"number-inner\">#index#</span></span><span class=\"title\"><span class=\"title-inner\">#title#</span></span>",
        transitionEffect: "slideLeft",
        autoFocus: true,
        labels: {
          finish: "Finish <i class=\"fa fa-check-circle-o\"></i>",
          next: "Next <i class=\"fa fa-arrow-circle-o-right\"></i>",
          previous: "<i class=\"fa fa-arrow-circle-o-left\"></i> Previous"
        }
      });
    }
  }

});
/**
 * Wizard demo end
 */


/**
 * Multiple File Upload demo begin
 */
$(function() {
  if ($('#fileupload')[0]) {

    // Initialize the jQuery File Upload widget:
    $('#fileupload').fileupload({
      disableImageResize: false,
      // Uncomment the following to send cross-domain cookies:
      //xhrFields: {withCredentials: true},
      url: 'vendor/jQuery-File-Upload/server/php/'
    });

    // Enable iframe cross-domain access via redirect option:
    $('#fileupload').fileupload(
      'option',
      'redirect',
      window.location.href.replace(
        /\/[^\/]*$/,
        '/cors/result.html?%s'
      )
    );

    // Demo settings:
    $('#fileupload').fileupload('option', {
      url: 'vendor/jQuery-File-Upload/server/php/',
      // Enable image resizing, except for Android and Opera,
      // which actually support image resizing, but fail to
      // send Blob objects via XHR requests:
      disableImageResize: /Android(?!.*Chrome)|Opera/
        .test(window.navigator.userAgent),
      maxFileSize: 5000000,
      acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i
    });
    // Upload server status check for browsers with CORS support:
    if ($.support.cors) {
      $.ajax({
        url: 'vendor/jQuery-File-Upload/server/php/',
        type: 'HEAD'
      }).fail(function() {
        $('<div class="alert alert-danger"/>')
          .text('Upload server currently unavailable - ' +
            new Date())
          .appendTo('#fileupload');
      });
    }

  }
});
/**
 * Multiple File Upload demo end
 */


/**
 * Table Export demo begin
 */
$(function() {
  if ($(".table-export-json")[0]) {
    $(".table-export-json").on("click", function(e) {
      $("#example-export").tableExport({
        type: 'json',
        escape: 'false'
      });
    })
  }
  if ($(".table-export-xml")[0]) {
    $(".table-export-xml").on("click", function(e) {
      $("#example-export").tableExport({
        type: 'xml',
        escape: 'false'
      });
    })
  }
  if ($(".table-export-sql")[0]) {
    $(".table-export-sql").on("click", function(e) {
      $("#example-export").tableExport({
        type: 'sql'
      });
    })
  }
  if ($(".table-export-csv")[0]) {
    $(".table-export-csv").on("click", function(e) {
      $("#example-export").tableExport({
        type: 'csv'
      });
    })
  }
  if ($(".table-export-txt")[0]) {
    $(".table-export-txt").on("click", function(e) {
      $("#example-export").tableExport({
        type: 'txt',
        escape: 'false'
      });
    })
  }
  if ($(".table-export-excel")[0]) {
    $(".table-export-excel").on("click", function(e) {
      $("#example-export").tableExport({
        type: 'excel',
        escape: 'false'
      });
    })
  }
  if ($(".table-export-word")[0]) {
    $(".table-export-word").on("click", function(e) {
      $("#example-export").tableExport({
        type: 'doc',
        escape: 'false'
      });
    })
  }
  if ($(".table-export-powerpoint")[0]) {
    $(".table-export-powerpoint").on("click", function(e) {
      $("#example-export").tableExport({
        type: 'powerpoint',
        escape: 'false'
      });
    })
  }
  if ($(".table-export-pdf")[0]) {
    $(".table-export-pdf").on("click", function(e) {
      $("#example-export").tableExport({
        type: 'pdf',
        escape: 'false',
        pdfFontSize: 9
      });
    })
  }
});
/**
 * Table Export demo end
 */


/**
 * Data Tables demo begin
 */
$(document).ready(function() {

  // Basic
  if ($("#demo-datatables-1")[0]) {
    $("#demo-datatables-1").DataTable();
  }

  // State saving
  if ($("#demo-datatables-2")[0]) {
    $("#demo-datatables-2").DataTable({
      stateSave: true
    });
  }

  // Scroll
  if ($("#demo-datatables-3")[0]) {
    $("#tab-scroll").on('shown.bs.tab', function(e) {
      if ($("#scroll").find(".dataTables_scroll").length < 1) {
        $("#demo-datatables-3").DataTable({
          "scrollY": 200,
          "scrollX": true
        });
      }
    });
  }

  // Ajax
  if ($("#demo-datatables-4")[0]) {
    $("#tab-ajax").on('shown.bs.tab', function(e) {
      if ($("#demo-datatables-4").find("tbody").length < 1) {
        $("#demo-datatables-4").DataTable({
          "ajax": "./ajax/datatable-ajax.json"
        });
      }
    });
  }

});
/**
 * Data Tables demo end
 */


/**
 * Bootstrap Table demo begin
 */

// Disabled checkbox
function stateFormatter(value, row, index) {
  if (index === 2) {
    return {
      disabled: true
    };
  }
  if (index === 0) {
    return {
      disabled: true,
      checked: true
    }
  }
  return value;
}

// Custom Sort
function starsSorter(a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
}

$(function() {

  // Table from data
  if ($("#bs-table-1")[0]) {
    var data1 = [{
      "name": "bootstrap-table",
      "stargazers_count": "526",
      "forks_count": "122",
      "description": "An extended Bootstrap table with radio, checkbox, sort, pagination, and other added features. (supports twitter bootstrap v2 and v3) "
    }, {
      "name": "multiple-select",
      "stargazers_count": "288",
      "forks_count": "150",
      "description": "A jQuery plugin to select multiple elements with checkboxes :)"
    }, {
      "name": "bootstrap-show-password",
      "stargazers_count": "32",
      "forks_count": "11",
      "description": "Show/hide password plugin for twitter bootstrap."
    }, {
      "name": "blog",
      "stargazers_count": "13",
      "forks_count": "4",
      "description": "my blog"
    }, {
      "name": "scutech-redmine",
      "stargazers_count": "6",
      "forks_count": "3",
      "description": "Redmine notification tools for chrome extension."
    }];
    $('#bs-table-1').bootstrapTable({
      data: data1
    });
  }

  // Large Columns
  if ($("#bs-table-6")[0]) {
    function buildTable($el, cells, rows) {
      var i, j, row,
        columns = [],
        data = [];

      for (i = 0; i < cells; i++) {
        columns.push({
          field: 'field' + i,
          title: 'Cell' + i
        });
      }
      for (i = 0; i < rows; i++) {
        row = {};
        for (j = 0; j < cells; j++) {
          row['field' + j] = 'Row-' + i + '-' + j;
        }
        data.push(row);
      }
      $el.bootstrapTable('destroy').bootstrapTable({
        columns: columns,
        data: data
      });
    }
    buildTable($('#bs-table-6'), 50, 50);
  }

  // Editable
  if ($("#bs-table-15")[0]) {
    $('#bs-table-15').bootstrapTable({
      idField: 'name',
      url: './ajax/bs-table-ajax-1.json',
      columns: [{
        field: 'name',
        title: 'Name'
      }, {
        field: 'stargazers_count',
        title: 'Stars',
        editable: {
          type: 'text'
        }
      }, {
        field: 'forks_count',
        title: 'Forks',
        editable: {
          type: 'text'
        }
      }, {
        field: 'description',
        title: 'Description',
        editable: {
          type: 'textarea'
        }
      }]
    });
  }

});
/**
 * Bootstrap Table demo end
 */


/**
 * Google Maps demo begin
 */
//Set Map Size
function setGoogleMapSize() {
  if (($("#sidebar").height() + $(".topheader").height()) > $(window).height()) {
    $("#google_maps_demo").css({
      "height": $("#sidebar").height()
    });
  } else {
    $("#google_maps_demo").css({
      "height": $(window).height() - $(".topheader").height() - $(".layouts-title-breadcrumb").height()
    });
  }
}
$(function() {

  if ($("#google_maps_demo")[0]) {

    $("#google_maps_demo").css({
      "margin-top": -20,
      "margin-bottom": -70,
      "width": "100%"
    });

    setGoogleMapSize();

    $(window).resize(function() {
      setGoogleMapSize();
    });

    // Init
    var map = new GMaps({
      el: '#google_maps_demo',
      lat: 25.0401312,
      lng: 121.5119762
    });
    map.addMarker({
      lat: 25.0401312,
      lng: 121.5119762,
      title: "中华民国总统府",
      details: {
        database_id: 42,
        author: "HPNeo"
      },
      click: function(e) {
        if (console.log) {
          console.log(e);
        }
        alert("You clicked on this marker");
      }
    });
    map.addMarker({
      lat: 25.039398,
      lng: 121.509537,
      title: "Marker with InfoWindow",
      infoWindow: {
        content: "<p>HTML Content</p>"
      }
    });

  }

});
/**
 * Google Maps demo end
 */


/**
 * Jvector Map demo begin
 */
//Set Map Size
// function setJvectorMapSize() {
//   if (($("#sidebar").height() + $(".topheader").height()) > $(window).height()) {
//     $("#world-map-gdp").css({
//       "height": $("#sidebar").height()
//     });
//   } else {
//     $("#world-map-gdp").css({
//       "height": $(window).height() - $(".topheader").height() - $(".layouts-title-breadcrumb").height()
//     });
//   }
// }
$(function() {

  if ($("#world-map-gdp")[0]) {
    // $.getScript('./vendor/jvectormap/jquery-jvectormap-2.0.1.min.js', function(data, textStatus, jqxhr) {
    $.getScript('./vendor/jvectormap/jquery-jvectormap-world-mill-en.js', function(data, textStatus, jqxhr) {

      var gdpData = {
        "AF": 16.63,
        "AL": 11.58,
        "DZ": 158.97,
        "AO": 85.81,
        "AG": 1.1,
        "AR": 351.02,
        "AM": 8.83,
        "AU": 1219.72,
        "AT": 366.26,
        "AZ": 52.17,
        "BS": 7.54,
        "BH": 21.73,
        "BD": 105.4,
        "BB": 3.96,
        "BY": 52.89,
        "BE": 461.33,
        "BZ": 1.43,
        "BJ": 6.49,
        "BT": 1.4,
        "BO": 19.18,
        "BA": 16.2,
        "BW": 12.5,
        "BR": 2023.53,
        "BN": 11.96,
        "BG": 44.84,
        "BF": 8.67,
        "BI": 1.47,
        "KH": 11.36,
        "CM": 21.88,
        "CA": 1563.66,
        "CV": 1.57,
        "CF": 2.11,
        "TD": 7.59,
        "CL": 199.18,
        "CN": 5745.13,
        "CO": 283.11,
        "KM": 0.56,
        "CD": 12.6,
        "CG": 11.88,
        "CR": 35.02,
        "CI": 22.38,
        "HR": 59.92,
        "CY": 22.75,
        "CZ": 195.23,
        "DK": 304.56,
        "DJ": 1.14,
        "DM": 0.38,
        "DO": 50.87,
        "EC": 61.49,
        "EG": 216.83,
        "SV": 21.8,
        "GQ": 14.55,
        "ER": 2.25,
        "EE": 19.22,
        "ET": 30.94,
        "FJ": 3.15,
        "FI": 231.98,
        "FR": 2555.44,
        "GA": 12.56,
        "GM": 1.04,
        "GE": 11.23,
        "DE": 3305.9,
        "GH": 18.06,
        "GR": 305.01,
        "GD": 0.65,
        "GT": 40.77,
        "GN": 4.34,
        "GW": 0.83,
        "GY": 2.2,
        "HT": 6.5,
        "HN": 15.34,
        "HK": 226.49,
        "HU": 132.28,
        "IS": 12.77,
        "IN": 1430.02,
        "ID": 695.06,
        "IR": 337.9,
        "IQ": 84.14,
        "IE": 204.14,
        "IL": 201.25,
        "IT": 2036.69,
        "JM": 13.74,
        "JP": 5390.9,
        "JO": 27.13,
        "KZ": 129.76,
        "KE": 32.42,
        "KI": 0.15,
        "KR": 986.26,
        "UNDEFINED": 5.73,
        "KW": 117.32,
        "KG": 4.44,
        "LA": 6.34,
        "LV": 23.39,
        "LB": 39.15,
        "LS": 1.8,
        "LR": 0.98,
        "LY": 77.91,
        "LT": 35.73,
        "LU": 52.43,
        "MK": 9.58,
        "MG": 8.33,
        "MW": 5.04,
        "MY": 218.95,
        "MV": 1.43,
        "ML": 9.08,
        "MT": 7.8,
        "MR": 3.49,
        "MU": 9.43,
        "MX": 1004.04,
        "MD": 5.36,
        "MN": 5.81,
        "ME": 3.88,
        "MA": 91.7,
        "MZ": 10.21,
        "MM": 35.65,
        "NA": 11.45,
        "NP": 15.11,
        "NL": 770.31,
        "NZ": 138,
        "NI": 6.38,
        "NE": 5.6,
        "NG": 206.66,
        "NO": 413.51,
        "OM": 53.78,
        "PK": 174.79,
        "PA": 27.2,
        "PG": 8.81,
        "PY": 17.17,
        "PE": 153.55,
        "PH": 189.06,
        "PL": 438.88,
        "PT": 223.7,
        "QA": 126.52,
        "RO": 158.39,
        "RU": 1476.91,
        "RW": 5.69,
        "WS": 0.55,
        "ST": 0.19,
        "SA": 434.44,
        "SN": 12.66,
        "RS": 38.92,
        "SC": 0.92,
        "SL": 1.9,
        "SG": 217.38,
        "SK": 86.26,
        "SI": 46.44,
        "SB": 0.67,
        "ZA": 354.41,
        "ES": 1374.78,
        "LK": 48.24,
        "KN": 0.56,
        "LC": 1,
        "VC": 0.58,
        "SD": 65.93,
        "SR": 3.3,
        "SZ": 3.17,
        "SE": 444.59,
        "CH": 522.44,
        "SY": 59.63,
        "TW": 426.98,
        "TJ": 5.58,
        "TZ": 22.43,
        "TH": 312.61,
        "TL": 0.62,
        "TG": 3.07,
        "TO": 0.3,
        "TT": 21.2,
        "TN": 43.86,
        "TR": 729.05,
        "TM": 0,
        "UG": 17.12,
        "UA": 136.56,
        "AE": 239.65,
        "GB": 2258.57,
        "US": 14624.18,
        "UY": 40.71,
        "UZ": 37.72,
        "VU": 0.72,
        "VE": 285.21,
        "VN": 101.99,
        "YE": 30.02,
        "ZM": 15.69,
        "ZW": 5.57
      };

      $("#world-map-gdp").css({
        "margin-top": -20,
        // "margin-bottom": -70,
        "width": "100%",
        "height": $(window).height() - $(".topheader").height() - $(".layouts-title-breadcrumb").height()
      });

      // setJvectorMapSize();

      // $(window).resize(function() {
      //   setJvectorMapSize();
      // });

      $('#world-map-gdp').vectorMap({
        map: 'world_mill_en',
        series: {
          regions: [{
            values: gdpData,
            scale: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial'
          }]
        },
        onRegionTipShow: function(e, el, code) {
          el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
        }
      });

    });
    // });
  }

});
/**
 * Jvector Map demo end
 */


/**
 * Flot Chart demo begin
 */
$(function() {

  // Basic
  if ($("#flot1")[0]) {
    var flot1 = function() {

      var d1 = [];
      for (var i = 0; i < 5; i += 0.5) {
        d1.push([i, Math.sin(i)]);
      }

      var d2 = [
        [0, 3],
        [4, 8],
        [8, 5],
        [9, 13]
      ];

      var d3 = [
        [0, 5],
        [7, 7], null, [7, 2.5],
        [12, 2.5]
      ];

      $.plot("#flot1", [{
        data: d1,
        color: "#BE167E"
      }, {
        data: d2,
        color: "#005093"
      }, {
        data: d3,
        color: "#ECB32B"
      }], {
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        xaxis: {
          tickColor: "#eee",
        },
        yaxis: {
          tickColor: "#eee"
        },
        shadowSize: 0
      });

    }();
  }

  // Series Types
  if ($("#flot2")[0]) {
    var flot2 = function() {
      var d1 = [];
      for (var i = 0; i < 14; i += 0.5) {
        d1.push([i, Math.sin(i)]);
      }

      var d2 = [
        [0, 3],
        [4, 8],
        [8, 5],
        [9, 13]
      ];

      var d3 = [];
      for (var i = 0; i < 14; i += 0.5) {
        d3.push([i, Math.cos(i)]);
      }

      var d4 = [];
      for (var i = 0; i < 14; i += 0.1) {
        d4.push([i, Math.sqrt(i * 10)]);
      }

      var d5 = [];
      for (var i = 0; i < 14; i += 0.5) {
        d5.push([i, Math.sqrt(i)]);
      }

      var d6 = [];
      for (var i = 0; i < 14; i += 0.5 + Math.random()) {
        d6.push([i, Math.sqrt(2 * i + Math.sin(i) + 5)]);
      }

      $.plot("#flot2", [{
        data: d1,
        color: "#e31d18",
        lines: {
          show: true,
          fill: true
        }
      }, {
        data: d2,
        color: "#f1c82d",
        bars: {
          show: true
        }
      }, {
        data: d3,
        color: "#00947d",
        points: {
          show: true
        }
      }, {
        data: d4,
        color: "#fa639e",
        lines: {
          show: true
        }
      }, {
        data: d5,
        color: "#02b4dd",
        lines: {
          show: true
        },
        points: {
          show: true
        }
      }, {
        data: d6,
        color: "#5c2862",
        lines: {
          show: true,
          steps: true
        }
      }], {
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        xaxis: {
          tickColor: "#eee"
        },
        yaxis: {
          tickColor: "#eee"
        },
        shadowSize: 0
      });
    }();
  }

  // Categories
  if ($("#flot3")[0]) {
    var flot3 = function() {
      var data = [
        ["January", 10],
        ["February", 8],
        ["March", 4],
        ["April", 13],
        ["May", 17],
        ["June", 9]
      ];

      $.plot("#flot3", [{
        data: data,
        color: "#00947d"
      }], {
        series: {
          bars: {
            lineWidth: 0,
            show: true,
            barWidth: 0.6,
            align: "center",
            fill: .9
          }
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        xaxis: {
          mode: "categories",
          tickLength: 0
        },
        yaxis: {
          tickColor: "#eee"
        },
        shadowSize: 0
      });
    }();
  }

  // Basic Options
  if ($("#flot4")[0]) {
    var flot4 = function() {
      var d1 = [];
      for (var i = 0; i < Math.PI * 2; i += 0.25) {
        d1.push([i, Math.sin(i)]);
      }

      var d2 = [];
      for (var i = 0; i < Math.PI * 2; i += 0.25) {
        d2.push([i, Math.cos(i)]);
      }

      var d3 = [];
      for (var i = 0; i < Math.PI * 2; i += 0.1) {
        d3.push([i, Math.tan(i)]);
      }

      $.plot("#flot4", [{
        label: "sin(x)",
        data: d1,
        color: "#fa639e"
      }, {
        label: "cos(x)",
        data: d2,
        color: "#5c2862"
      }, {
        label: "tan(x)",
        data: d3,
        color: "#02b4dd"
      }], {
        series: {
          lines: {
            show: true
          },
          points: {
            show: true
          }
        },
        xaxis: {
          ticks: [
            0, [Math.PI / 2, "\u03c0/2"],
            [Math.PI, "\u03c0"],
            [Math.PI * 3 / 2, "3\u03c0/2"],
            [Math.PI * 2, "2\u03c0"]
          ],
          tickColor: "#bbb"
        },
        yaxis: {
          ticks: 10,
          min: -2,
          max: 2,
          tickDecimals: 3,
          tickColor: "#ddd"
        },
        grid: {
          backgroundColor: {
            colors: ["#fff6f3", "#fff6f3"]
          },
          borderColor: "#ccc",
          borderWidth: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
          }
        },
        shadowSize: 0
      });
    }();
  }

  // Adding Annotations
  if ($("#flot5")[0]) {
    var flot5 = function() {
      var d1 = [];
      for (var i = 0; i < 20; ++i) {
        d1.push([i, Math.sin(i)]);
      }

      var data = [{
        data: d1,
        label: "Pressure",
        color: "#5bc0de"
      }];

      var markings = [{
        color: "#f6f6f6",
        yaxis: {
          from: 1
        }
      }, {
        color: "#f6f6f6",
        yaxis: {
          to: -1
        }
      }, {
        color: "#000",
        lineWidth: 1,
        xaxis: {
          from: 2,
          to: 2
        }
      }, {
        color: "#000",
        lineWidth: 1,
        xaxis: {
          from: 8,
          to: 8
        }
      }];

      var placeholder = $("#flot5");

      var plot = $.plot(placeholder, data, {
        bars: {
          show: true,
          barWidth: 0.5,
          fill: 0.9
        },
        xaxis: {
          ticks: [],
          autoscaleMargin: 0.02
        },
        yaxis: {
          min: -2,
          max: 2
        },
        grid: {
          markings: markings,
          borderWidth: 1
        },
        shadowSize: 0
      });

      var o = plot.pointOffset({
        x: 2,
        y: -1.2
      });

      // Append it to the placeholder that Flot already uses for positioning

      placeholder.append("<div style='position:absolute;left:" + (o.left + 4) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>Warming up</div>");

      o = plot.pointOffset({
        x: 8,
        y: -1.2
      });
      placeholder.append("<div style='position:absolute;left:" + (o.left + 4) + "px;top:" + o.top + "px;color:#666;font-size:smaller'>Actual measurements</div>");

      // Draw a little arrow on top of the last label to demonstrate canvas
      // drawing

      var ctx = plot.getCanvas().getContext("2d");
      ctx.beginPath();
      o.left += 4;
      ctx.moveTo(o.left, o.top);
      ctx.lineTo(o.left, o.top - 10);
      ctx.lineTo(o.left + 10, o.top - 5);
      ctx.lineTo(o.left, o.top);
      ctx.fillStyle = "#000";
      ctx.fill();
    }();
  }

  // AJAX
  if ($("#flot6")[0]) {
    var flot6 = function() {
      var options = {
        lines: {
          show: true
        },
        points: {
          show: true
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        xaxis: {
          tickColor: "#eee"
        },
        yaxis: {
          tickColor: "#eee"
        },
        shadowSize: 0
      };

      var data = [];

      $.plot("#flot6", data, options);

      // Fetch one series, adding to what we already have

      var alreadyFetched = {};

      $("button.fetchSeries").click(function() {

        var button = $(this);

        // Find the URL in the link right next to us, then fetch the data

        var dataurl = button.data("source");

        function onDataReceived(series) {

          // Extract the first coordinate pair; jQuery has parsed it, so
          // the data is now just an ordinary JavaScript object

          var firstcoordinate = "(" + series.data[0][0] + ", " + series.data[0][1] + ")";
          button.siblings("span").text("Fetched " + series.label + ", first point: " + firstcoordinate);

          // Push the new data onto our existing data array

          if (!alreadyFetched[series.label]) {
            alreadyFetched[series.label] = true;
            data.push(series);
          }

          $.plot("#flot6", data, options);
        }

        $.ajax({
          url: dataurl,
          type: "GET",
          dataType: "json",
          success: onDataReceived
        });
      });

      // Initiate a recurring data update

      $("button.dataUpdate").click(function() {

        data = [];
        alreadyFetched = {};

        $.plot("#flot6", data, options);

        var iteration = 0;

        function fetchData() {

          ++iteration;

          function onDataReceived(series) {

            // Load all the data in one pass; if we only got partial
            // data we could merge it with what we already have.

            data = [series];
            $.plot("#flot6", data, options);
          }

          // Normally we call the same URL - a script connected to a
          // database - but in this case we only have static example
          // files, so we need to modify the URL.

          $.ajax({
            url: "./ajax/data-eu-gdp-growth-" + iteration + ".json",
            type: "GET",
            dataType: "json",
            success: onDataReceived
          });

          if (iteration < 5) {
            setTimeout(fetchData, 1000);
          } else {
            data = [];
            alreadyFetched = {};
          }
        }

        setTimeout(fetchData, 1000);
      });

      $("button.fetchSeries:first").click();
    }();
  }

  // Real-time updates
  if ($("#flot7")[0]) {
    var flot7 = function() {
      // We use an inline data source in the example, usually data would be fetched from a server

      var data = [],
        totalPoints = 300;

      function getRandomData() {

        if (data.length > 0)
          data = data.slice(1);

        // Do a random walk

        while (data.length < totalPoints) {

          var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

          if (y < 0) {
            y = 0;
          } else if (y > 100) {
            y = 100;
          }

          data.push(y);
        }

        // Zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]])
        }

        return res;
      }

      // Set up the control widget

      var updateInterval = 30;
      $("#updateInterval").val(updateInterval).change(function() {
        var v = $(this).val();
        if (v && !isNaN(+v)) {
          updateInterval = +v;
          if (updateInterval < 1) {
            updateInterval = 1;
          } else if (updateInterval > 2000) {
            updateInterval = 2000;
          }
          $(this).val("" + updateInterval);
        }
      });

      var plot = $.plot("#flot7", [getRandomData()], {
        series: {
          shadowSize: 0 // Drawing is faster without shadows
        },
        yaxis: {
          tickColor: "#eee",
          min: 0,
          max: 100
        },
        xaxis: {
          tickColor: "#eee",
          show: false
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        shadowSize: 0
      });

      function update() {

        plot.setData([getRandomData()]);

        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
      }

      update();
    }();
  }

  // Turning series on/off
  if ($("#flot8")[0]) {
    var flot8 = function() {
      var datasets = {
        "usa": {
          label: "USA",
          data: [
            [1988, 483994],
            [1989, 479060],
            [1990, 457648],
            [1991, 401949],
            [1992, 424705],
            [1993, 402375],
            [1994, 377867],
            [1995, 357382],
            [1996, 337946],
            [1997, 336185],
            [1998, 328611],
            [1999, 329421],
            [2000, 342172],
            [2001, 344932],
            [2002, 387303],
            [2003, 440813],
            [2004, 480451],
            [2005, 504638],
            [2006, 528692]
          ]
        },
        "russia": {
          label: "Russia",
          data: [
            [1988, 218000],
            [1989, 203000],
            [1990, 171000],
            [1992, 42500],
            [1993, 37600],
            [1994, 36600],
            [1995, 21700],
            [1996, 19200],
            [1997, 21300],
            [1998, 13600],
            [1999, 14000],
            [2000, 19100],
            [2001, 21300],
            [2002, 23600],
            [2003, 25100],
            [2004, 26100],
            [2005, 31100],
            [2006, 34700]
          ]
        },
        "uk": {
          label: "UK",
          data: [
            [1988, 62982],
            [1989, 62027],
            [1990, 60696],
            [1991, 62348],
            [1992, 58560],
            [1993, 56393],
            [1994, 54579],
            [1995, 50818],
            [1996, 50554],
            [1997, 48276],
            [1998, 47691],
            [1999, 47529],
            [2000, 47778],
            [2001, 48760],
            [2002, 50949],
            [2003, 57452],
            [2004, 60234],
            [2005, 60076],
            [2006, 59213]
          ]
        },
        "germany": {
          label: "Germany",
          data: [
            [1988, 55627],
            [1989, 55475],
            [1990, 58464],
            [1991, 55134],
            [1992, 52436],
            [1993, 47139],
            [1994, 43962],
            [1995, 43238],
            [1996, 42395],
            [1997, 40854],
            [1998, 40993],
            [1999, 41822],
            [2000, 41147],
            [2001, 40474],
            [2002, 40604],
            [2003, 40044],
            [2004, 38816],
            [2005, 38060],
            [2006, 36984]
          ]
        },
        "denmark": {
          label: "Denmark",
          data: [
            [1988, 3813],
            [1989, 3719],
            [1990, 3722],
            [1991, 3789],
            [1992, 3720],
            [1993, 3730],
            [1994, 3636],
            [1995, 3598],
            [1996, 3610],
            [1997, 3655],
            [1998, 3695],
            [1999, 3673],
            [2000, 3553],
            [2001, 3774],
            [2002, 3728],
            [2003, 3618],
            [2004, 3638],
            [2005, 3467],
            [2006, 3770]
          ]
        },
        "sweden": {
          label: "Sweden",
          data: [
            [1988, 6402],
            [1989, 6474],
            [1990, 6605],
            [1991, 6209],
            [1992, 6035],
            [1993, 6020],
            [1994, 6000],
            [1995, 6018],
            [1996, 3958],
            [1997, 5780],
            [1998, 5954],
            [1999, 6178],
            [2000, 6411],
            [2001, 5993],
            [2002, 5833],
            [2003, 5791],
            [2004, 5450],
            [2005, 5521],
            [2006, 5271]
          ]
        },
        "norway": {
          label: "Norway",
          data: [
            [1988, 4382],
            [1989, 4498],
            [1990, 4535],
            [1991, 4398],
            [1992, 4766],
            [1993, 4441],
            [1994, 4670],
            [1995, 4217],
            [1996, 4275],
            [1997, 4203],
            [1998, 4482],
            [1999, 4506],
            [2000, 4358],
            [2001, 4385],
            [2002, 5269],
            [2003, 5066],
            [2004, 5194],
            [2005, 4887],
            [2006, 4891]
          ]
        }
      };

      // hard-code color indices to prevent them from shifting as countries are turned on/off
      var i = 0;
      $.each(datasets, function(key, val) {
        val.color = i;
        ++i;
      });

      // insert checkboxes
      var choiceContainer = $("#choices");
      $.each(datasets, function(key, val) {
        choiceContainer.append("<input type='checkbox' name='" + key +
          "' checked='checked' id='id" + key + "' class='mright5'>" +
          "<label for='id" + key + "' class='mright15'>" + val.label + "</label>");
      });

      choiceContainer.find("input").click(plotAccordingToChoices);

      function plotAccordingToChoices() {

        var data = [];

        choiceContainer.find("input:checked").each(function() {
          var key = $(this).attr("name");
          if (key && datasets[key]) {
            data.push(datasets[key]);
          }
        });

        if (data.length > 0) {
          $.plot("#flot8", data, {
            series: {
              shadowSize: 0 // Drawing is faster without shadows
            },
            yaxis: {
              tickColor: "#eee",
              min: 0
            },
            xaxis: {
              tickColor: "#eee",
              tickDecimals: 0
            },
            grid: {
              borderColor: "#eee",
              borderWidth: 1
            },
            shadowSize: 0
          });
        }
      }

      plotAccordingToChoices();
    }();
  }

  // Rectangular selection support and zooming
  if ($("#flot9")[0]) {
    var flot9 = function() {
      var data = [{
        label: "United States",
        data: [
          [1990, 18.9],
          [1991, 18.7],
          [1992, 18.4],
          [1993, 19.3],
          [1994, 19.5],
          [1995, 19.3],
          [1996, 19.4],
          [1997, 20.2],
          [1998, 19.8],
          [1999, 19.9],
          [2000, 20.4],
          [2001, 20.1],
          [2002, 20.0],
          [2003, 19.8],
          [2004, 20.4]
        ],
        color: "#e31d18"
      }, {
        label: "Russia",
        data: [
          [1992, 13.4],
          [1993, 12.2],
          [1994, 10.6],
          [1995, 10.2],
          [1996, 10.1],
          [1997, 9.7],
          [1998, 9.5],
          [1999, 9.7],
          [2000, 9.9],
          [2001, 9.9],
          [2002, 9.9],
          [2003, 10.3],
          [2004, 10.5]
        ],
        color: "#f2572d"
      }, {
        label: "United Kingdom",
        data: [
          [1990, 10.0],
          [1991, 11.3],
          [1992, 9.9],
          [1993, 9.6],
          [1994, 9.5],
          [1995, 9.5],
          [1996, 9.9],
          [1997, 9.3],
          [1998, 9.2],
          [1999, 9.2],
          [2000, 9.5],
          [2001, 9.6],
          [2002, 9.3],
          [2003, 9.4],
          [2004, 9.79]
        ],
        color: "#f1c82d"
      }, {
        label: "Germany",
        data: [
          [1990, 12.4],
          [1991, 11.2],
          [1992, 10.8],
          [1993, 10.5],
          [1994, 10.4],
          [1995, 10.2],
          [1996, 10.5],
          [1997, 10.2],
          [1998, 10.1],
          [1999, 9.6],
          [2000, 9.7],
          [2001, 10.0],
          [2002, 9.7],
          [2003, 9.8],
          [2004, 9.79]
        ],
        color: "#00947d"
      }, {
        label: "Denmark",
        data: [
          [1990, 9.7],
          [1991, 12.1],
          [1992, 10.3],
          [1993, 11.3],
          [1994, 11.7],
          [1995, 10.6],
          [1996, 12.8],
          [1997, 10.8],
          [1998, 10.3],
          [1999, 9.4],
          [2000, 8.7],
          [2001, 9.0],
          [2002, 8.9],
          [2003, 10.1],
          [2004, 9.80]
        ],
        color: "#02b4dd"
      }, {
        label: "Sweden",
        data: [
          [1990, 5.8],
          [1991, 6.0],
          [1992, 5.9],
          [1993, 5.5],
          [1994, 5.7],
          [1995, 5.3],
          [1996, 6.1],
          [1997, 5.4],
          [1998, 5.4],
          [1999, 5.1],
          [2000, 5.2],
          [2001, 5.4],
          [2002, 6.2],
          [2003, 5.9],
          [2004, 5.89]
        ],
        color: "#5c2862"
      }, {
        label: "Norway",
        data: [
          [1990, 8.3],
          [1991, 8.3],
          [1992, 7.8],
          [1993, 8.3],
          [1994, 8.4],
          [1995, 5.9],
          [1996, 6.4],
          [1997, 6.7],
          [1998, 6.9],
          [1999, 7.6],
          [2000, 7.4],
          [2001, 8.1],
          [2002, 12.5],
          [2003, 9.9],
          [2004, 19.0]
        ],
        color: "#fa639e"
      }];

      var options = {
        series: {
          lines: {
            show: true
          },
          points: {
            show: true
          }
        },
        legend: {
          noColumns: 2
        },
        yaxis: {
          tickColor: "#eee",
          min: 0
        },
        xaxis: {
          tickColor: "#eee",
          tickDecimals: 0
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        selection: {
          mode: "x"
        },
        shadowSize: 0
      };

      var placeholder = $("#flot9");

      placeholder.bind("plotselected", function(event, ranges) {

        $("#selection").text(ranges.xaxis.from.toFixed(1) + " to " + ranges.xaxis.to.toFixed(1));

        var zoom = $("#zoom").prop("checked");

        if (zoom) {
          $.each(plot.getXAxes(), function(_, axis) {
            var opts = axis.options;
            opts.min = ranges.xaxis.from;
            opts.max = ranges.xaxis.to;
          });
          plot.setupGrid();
          plot.draw();
          plot.clearSelection();
        }
      });

      placeholder.bind("plotunselected", function(event) {
        $("#selection").text("");
      });

      var plot = $.plot(placeholder, data, options);

      $("#clearSelection").click(function() {
        plot.clearSelection();
      });

      $("#setSelection").click(function() {
        plot.setSelection({
          xaxis: {
            from: 1994,
            to: 1995
          }
        });
      });

    }();
  }

  // Zooming with overview
  if ($("#flot10")[0]) {
    var flot10 = function() {
      // setup plot

      function getData(x1, x2) {

        var d = [];
        for (var i = 0; i <= 100; ++i) {
          var x = x1 + i * (x2 - x1) / 100;
          d.push([x, Math.sin(x * Math.sin(x))]);
        }

        return [{
          label: "sin(x sin(x))",
          data: d
        }];
      }

      var options = {
        legend: {
          show: false
        },
        series: {
          lines: {
            show: true
          },
          points: {
            show: true
          }
        },
        yaxis: {
          ticks: 10,
          tickColor: "#eee"
        },
        xaxis: {
          tickColor: "#eee"
        },
        grid: {
          color: "#eee",
          borderWidth: 1
        },
        selection: {
          mode: "xy"
        },
        shadowSize: 0
      };

      var startData = getData(0, 3 * Math.PI);

      var plot = $.plot("#flot10", startData, options);

      // Create the overview plot

      var overview = $.plot("#overview", startData, {
        legend: {
          show: false
        },
        series: {
          lines: {
            show: true,
            lineWidth: 1
          },
          shadowSize: 0
        },
        xaxis: {
          ticks: 4,
          tickColor: "#eee"
        },
        yaxis: {
          ticks: 3,
          min: -2,
          max: 2,
          tickColor: "#eee"
        },
        grid: {
          color: "#ddd",
          borderWidth: 1
        },
        selection: {
          mode: "xy"
        },
        shadowSize: 0
      });

      // now connect the two

      $("#flot10").bind("plotselected", function(event, ranges) {

        // clamp the zooming to prevent eternal zoom

        if (ranges.xaxis.to - ranges.xaxis.from < 0.00001) {
          ranges.xaxis.to = ranges.xaxis.from + 0.00001;
        }

        if (ranges.yaxis.to - ranges.yaxis.from < 0.00001) {
          ranges.yaxis.to = ranges.yaxis.from + 0.00001;
        }

        // do the zooming

        plot = $.plot("#flot10", getData(ranges.xaxis.from, ranges.xaxis.to),
          $.extend(true, {}, options, {
            xaxis: {
              min: ranges.xaxis.from,
              max: ranges.xaxis.to
            },
            yaxis: {
              min: ranges.yaxis.from,
              max: ranges.yaxis.to
            },
            shadowSize: 0
          })
        );

        // don't fire event on the overview to prevent eternal loop

        overview.setSelection(ranges, true);
      });

      $("#overview").bind("plotselected", function(event, ranges) {
        plot.setSelection(ranges);
      });
    }();
  }

  // Interacting with the data points
  if ($("#flot11")[0]) {
    var flot11 = function() {
      var sin = [],
        cos = [];

      for (var i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
      }

      var plot = $.plot("#flot11", [{
        data: sin,
        label: "sin(x)"
      }, {
        data: cos,
        label: "cos(x)"
      }], {
        series: {
          lines: {
            show: true
          },
          points: {
            show: true
          }
        },
        grid: {
          hoverable: true,
          clickable: true,
          borderColor: "#ddd",
          borderWidth: 1
        },
        yaxis: {
          min: -1.2,
          max: 1.2,
          tickColor: "#eee"
        },
        xaxis: {
          tickColor: "#eee"
        },
        shadowSize: 0
      });

      $("<div id='tooltip'></div>").css({
        position: "absolute",
        display: "none",
        border: "1px solid #fdd",
        padding: "2px",
        "background-color": "#fee",
        opacity: 0.80
      }).appendTo("body");

      $("#flot11").bind("plothover", function(event, pos, item) {

        if ($("#enablePosition:checked").length > 0) {
          var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
          $("#hoverdata").text(str);
        }

        if ($("#enableTooltip:checked").length > 0) {
          if (item) {
            var x = item.datapoint[0].toFixed(2),
              y = item.datapoint[1].toFixed(2);

            $("#tooltip").html(item.series.label + " of " + x + " = " + y)
              .css({
                top: item.pageY + 5,
                left: item.pageX + 5
              })
              .fadeIn(200);
          } else {
            $("#tooltip").hide();
          }
        }
      });

      $("#flot11").bind("plotclick", function(event, pos, item) {
        if (item) {
          $("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
          plot.highlight(item.series, item.datapoint);
        }
      });
    }();
  }

  // Panning and zooming
  if ($("#flot12")[0]) {
    var flot12 = function() {
      // generate data set from a parametric function with a fractal look

      function sumf(f, t, m) {
        var res = 0;
        for (var i = 1; i < m; ++i) {
          res += f(i * i * t) / (i * i);
        }
        return res;
      }

      var d1 = [];
      for (var t = 0; t <= 2 * Math.PI; t += 0.01) {
        d1.push([sumf(Math.cos, t, 10), sumf(Math.sin, t, 10)]);
      }

      var data = [d1],
        placeholder = $("#flot12");

      var plot = $.plot(placeholder, data, {
        series: {
          lines: {
            show: true
          },
          shadowSize: 0
        },
        xaxis: {
          zoomRange: [0.1, 10],
          panRange: [-10, 10],
          tickColor: "#eee"
        },
        yaxis: {
          zoomRange: [0.1, 10],
          panRange: [-10, 10],
          tickColor: "#eee"
        },
        zoom: {
          interactive: true
        },
        pan: {
          interactive: true
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        shadowSize: 0
      });

      // show pan/zoom messages to illustrate events 

      placeholder.bind("plotpan", function(event, plot) {
        var axes = plot.getAxes();
        $("#message").html("Panning to x: " + axes.xaxis.min.toFixed(2) + " &ndash; " + axes.xaxis.max.toFixed(2) + " and y: " + axes.yaxis.min.toFixed(2) + " &ndash; " + axes.yaxis.max.toFixed(2));
      });

      placeholder.bind("plotzoom", function(event, plot) {
        var axes = plot.getAxes();
        $("#message").html("Zooming to x: " + axes.xaxis.min.toFixed(2) + " &ndash; " + axes.xaxis.max.toFixed(2) + " and y: " + axes.yaxis.min.toFixed(2) + " &ndash; " + axes.yaxis.max.toFixed(2));
      });

      // add zoom out button

      $("<div class='btn btn-default btn-xs' style='position: absolute;right:20px;top:20px'>zoom out</div>")
        .appendTo(placeholder)
        .click(function(event) {
          event.preventDefault();
          plot.zoomOut();
        });

      // and add panning buttons

      // little helper for taking the repetitive work out of placing
      // panning arrows

      function addArrow(dir, right, top, offset) {
        $("<i class='fa fa-arrow-" + dir + "' style='position: absolute;cursor: pointer;right:" + right + "px;top:" + top + "px'>")
          .appendTo(placeholder)
          .click(function(e) {
            e.preventDefault();
            plot.pan(offset);
          });
      }

      addArrow("left", 55, 60, {
        left: -100
      });
      addArrow("right", 25, 60, {
        left: 100
      });
      addArrow("up", 40, 45, {
        top: -100
      });
      addArrow("down", 40, 75, {
        top: 100
      });
    }();
  }

  // Automatically redraw when window is resized
  if ($("#flot13")[0]) {
    var flot13 = function() {
      var d1 = [];
      for (var i = 0; i < 5; i += 0.5) {
        d1.push([i, Math.sin(i)]);
      }

      var d2 = [
        [0, 3],
        [4, 8],
        [8, 5],
        [9, 13]
      ];

      var d3 = [
        [0, 5],
        [7, 7], null, [7, 2.5],
        [12, 2.5]
      ];

      $.plot("#flot13", [{
        data: d1,
        color: "#BE167E"
      }, {
        data: d2,
        color: "#005093"
      }, {
        data: d3,
        color: "#ECB32B"
      }], {
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        xaxis: {
          tickColor: "#eee",
        },
        yaxis: {
          tickColor: "#eee"
        },
        shadowSize: 0
      });

      // The plugin includes a jQuery plugin for adding resize events to any element.  Add a callback so we can display the placeholder size.

      $("#flot13").resize(function() {
        $("#message2").text("Placeholder is now " + $(this).width() + "x" + $(this).height() + " pixels");
      });

      $("#flot13").resizable({
        maxWidth: 900,
        maxHeight: 500,
        minWidth: 450,
        minHeight: 250
      });
    }();
  }

  // Using other symbols than circles for points
  if ($("#flot14")[0]) {
    var flot14 = function() {
      function generate(offset, amplitude) {

        var res = [];
        var start = 0,
          end = 10;

        for (var i = 0; i <= 50; ++i) {
          var x = start + i / 50 * (end - start);
          res.push([x, amplitude * Math.sin(x + offset)]);
        }

        return res;
      }

      var data = [{
        data: generate(2, 1.8),
        points: {
          symbol: "circle"
        },
        color: "#428bca"
      }, {
        data: generate(3, 1.5),
        points: {
          symbol: "square"
        },
        color: "#5cb85c"
      }, {
        data: generate(4, 0.9),
        points: {
          symbol: "diamond"
        },
        color: "#5bc0de"
      }, {
        data: generate(6, 1.4),
        points: {
          symbol: "triangle"
        },
        color: "#f0ad4e"
      }, {
        data: generate(7, 1.1),
        points: {
          symbol: "cross"
        },
        color: "#d9534f"
      }];

      $.plot("#flot14", data, {
        series: {
          points: {
            show: true,
            radius: 3
          }
        },
        grid: {
          hoverable: true,
          borderColor: "#eee",
          borderWidth: 1
        },
        xaxis: {
          tickColor: "#eee",
        },
        yaxis: {
          tickColor: "#eee"
        },
        shadowSize: 0
      });
    }();
  }

  //Plotting time series
  if ($("#flot15")[0]) {
    var flot15 = function() {
      var d = [
        [-373597200000, 315.71],
        [-370918800000, 317.45],
        [-368326800000, 317.50],
        [-363056400000, 315.86],
        [-360378000000, 314.93],
        [-357699600000, 313.19],
        [-352429200000, 313.34],
        [-349837200000, 314.67],
        [-347158800000, 315.58],
        [-344480400000, 316.47],
        [-342061200000, 316.65],
        [-339382800000, 317.71],
        [-336790800000, 318.29],
        [-334112400000, 318.16],
        [-331520400000, 316.55],
        [-328842000000, 314.80],
        [-326163600000, 313.84],
        [-323571600000, 313.34],
        [-320893200000, 314.81],
        [-318301200000, 315.59],
        [-315622800000, 316.43],
        [-312944400000, 316.97],
        [-310438800000, 317.58],
        [-307760400000, 319.03],
        [-305168400000, 320.03],
        [-302490000000, 319.59],
        [-299898000000, 318.18],
        [-297219600000, 315.91],
        [-294541200000, 314.16],
        [-291949200000, 313.83],
        [-289270800000, 315.00],
        [-286678800000, 316.19],
        [-284000400000, 316.89],
        [-281322000000, 317.70],
        [-278902800000, 318.54],
        [-276224400000, 319.48],
        [-273632400000, 320.58],
        [-270954000000, 319.78],
        [-268362000000, 318.58],
        [-265683600000, 316.79],
        [-263005200000, 314.99],
        [-260413200000, 315.31],
        [-257734800000, 316.10],
        [-255142800000, 317.01],
        [-252464400000, 317.94],
        [-249786000000, 318.56],
        [-247366800000, 319.69],
        [-244688400000, 320.58],
        [-242096400000, 321.01],
        [-239418000000, 320.61],
        [-236826000000, 319.61],
        [-234147600000, 317.40],
        [-231469200000, 316.26],
        [-228877200000, 315.42],
        [-226198800000, 316.69],
        [-223606800000, 317.69],
        [-220928400000, 318.74],
        [-218250000000, 319.08],
        [-215830800000, 319.86],
        [-213152400000, 321.39],
        [-210560400000, 322.24],
        [-207882000000, 321.47],
        [-205290000000, 319.74],
        [-202611600000, 317.77],
        [-199933200000, 316.21],
        [-197341200000, 315.99],
        [-194662800000, 317.07],
        [-192070800000, 318.36],
        [-189392400000, 319.57],
        [-178938000000, 322.23],
        [-176259600000, 321.89],
        [-173667600000, 320.44],
        [-170989200000, 318.70],
        [-168310800000, 316.70],
        [-165718800000, 316.87],
        [-163040400000, 317.68],
        [-160448400000, 318.71],
        [-157770000000, 319.44],
        [-155091600000, 320.44],
        [-152672400000, 320.89],
        [-149994000000, 322.13],
        [-147402000000, 322.16],
        [-144723600000, 321.87],
        [-142131600000, 321.21],
        [-139453200000, 318.87],
        [-136774800000, 317.81],
        [-134182800000, 317.30],
        [-131504400000, 318.87],
        [-128912400000, 319.42],
        [-126234000000, 320.62],
        [-123555600000, 321.59],
        [-121136400000, 322.39],
        [-118458000000, 323.70],
        [-115866000000, 324.07],
        [-113187600000, 323.75],
        [-110595600000, 322.40],
        [-107917200000, 320.37],
        [-105238800000, 318.64],
        [-102646800000, 318.10],
        [-99968400000, 319.79],
        [-97376400000, 321.03],
        [-94698000000, 322.33],
        [-92019600000, 322.50],
        [-89600400000, 323.04],
        [-86922000000, 324.42],
        [-84330000000, 325.00],
        [-81651600000, 324.09],
        [-79059600000, 322.55],
        [-76381200000, 320.92],
        [-73702800000, 319.26],
        [-71110800000, 319.39],
        [-68432400000, 320.72],
        [-65840400000, 321.96],
        [-63162000000, 322.57],
        [-60483600000, 323.15],
        [-57978000000, 323.89],
        [-55299600000, 325.02],
        [-52707600000, 325.57],
        [-50029200000, 325.36],
        [-47437200000, 324.14],
        [-44758800000, 322.11],
        [-42080400000, 320.33],
        [-39488400000, 320.25],
        [-36810000000, 321.32],
        [-34218000000, 322.90],
        [-31539600000, 324.00],
        [-28861200000, 324.42],
        [-26442000000, 325.64],
        [-23763600000, 326.66],
        [-21171600000, 327.38],
        [-18493200000, 326.70],
        [-15901200000, 325.89],
        [-13222800000, 323.67],
        [-10544400000, 322.38],
        [-7952400000, 321.78],
        [-5274000000, 322.85],
        [-2682000000, 324.12],
        [-3600000, 325.06],
        [2674800000, 325.98],
        [5094000000, 326.93],
        [7772400000, 328.13],
        [10364400000, 328.07],
        [13042800000, 327.66],
        [15634800000, 326.35],
        [18313200000, 324.69],
        [20991600000, 323.10],
        [23583600000, 323.07],
        [26262000000, 324.01],
        [28854000000, 325.13],
        [31532400000, 326.17],
        [34210800000, 326.68],
        [36630000000, 327.18],
        [39308400000, 327.78],
        [41900400000, 328.92],
        [44578800000, 328.57],
        [47170800000, 327.37],
        [49849200000, 325.43],
        [52527600000, 323.36],
        [55119600000, 323.56],
        [57798000000, 324.80],
        [60390000000, 326.01],
        [63068400000, 326.77],
        [65746800000, 327.63],
        [68252400000, 327.75],
        [70930800000, 329.72],
        [73522800000, 330.07],
        [76201200000, 329.09],
        [78793200000, 328.05],
        [81471600000, 326.32],
        [84150000000, 324.84],
        [86742000000, 325.20],
        [89420400000, 326.50],
        [92012400000, 327.55],
        [94690800000, 328.54],
        [97369200000, 329.56],
        [99788400000, 330.30],
        [102466800000, 331.50],
        [105058800000, 332.48],
        [107737200000, 332.07],
        [110329200000, 330.87],
        [113007600000, 329.31],
        [115686000000, 327.51],
        [118278000000, 327.18],
        [120956400000, 328.16],
        [123548400000, 328.64],
        [126226800000, 329.35],
        [128905200000, 330.71],
        [131324400000, 331.48],
        [134002800000, 332.65],
        [136594800000, 333.16],
        [139273200000, 332.06],
        [141865200000, 330.99],
        [144543600000, 329.17],
        [147222000000, 327.41],
        [149814000000, 327.20],
        [152492400000, 328.33],
        [155084400000, 329.50],
        [157762800000, 330.68],
        [160441200000, 331.41],
        [162860400000, 331.85],
        [165538800000, 333.29],
        [168130800000, 333.91],
        [170809200000, 333.40],
        [173401200000, 331.78],
        [176079600000, 329.88],
        [178758000000, 328.57],
        [181350000000, 328.46],
        [184028400000, 329.26],
        [189298800000, 331.71],
        [191977200000, 332.76],
        [194482800000, 333.48],
        [197161200000, 334.78],
        [199753200000, 334.78],
        [202431600000, 334.17],
        [205023600000, 332.78],
        [207702000000, 330.64],
        [210380400000, 328.95],
        [212972400000, 328.77],
        [215650800000, 330.23],
        [218242800000, 331.69],
        [220921200000, 332.70],
        [223599600000, 333.24],
        [226018800000, 334.96],
        [228697200000, 336.04],
        [231289200000, 336.82],
        [233967600000, 336.13],
        [236559600000, 334.73],
        [239238000000, 332.52],
        [241916400000, 331.19],
        [244508400000, 331.19],
        [247186800000, 332.35],
        [249778800000, 333.47],
        [252457200000, 335.11],
        [255135600000, 335.26],
        [257554800000, 336.60],
        [260233200000, 337.77],
        [262825200000, 338.00],
        [265503600000, 337.99],
        [268095600000, 336.48],
        [270774000000, 334.37],
        [273452400000, 332.27],
        [276044400000, 332.41],
        [278722800000, 333.76],
        [281314800000, 334.83],
        [283993200000, 336.21],
        [286671600000, 336.64],
        [289090800000, 338.12],
        [291769200000, 339.02],
        [294361200000, 339.02],
        [297039600000, 339.20],
        [299631600000, 337.58],
        [302310000000, 335.55],
        [304988400000, 333.89],
        [307580400000, 334.14],
        [310258800000, 335.26],
        [312850800000, 336.71],
        [315529200000, 337.81],
        [318207600000, 338.29],
        [320713200000, 340.04],
        [323391600000, 340.86],
        [325980000000, 341.47],
        [328658400000, 341.26],
        [331250400000, 339.29],
        [333928800000, 337.60],
        [336607200000, 336.12],
        [339202800000, 336.08],
        [341881200000, 337.22],
        [344473200000, 338.34],
        [347151600000, 339.36],
        [349830000000, 340.51],
        [352249200000, 341.57],
        [354924000000, 342.56],
        [357516000000, 343.01],
        [360194400000, 342.47],
        [362786400000, 340.71],
        [365464800000, 338.52],
        [368143200000, 336.96],
        [370738800000, 337.13],
        [373417200000, 338.58],
        [376009200000, 339.89],
        [378687600000, 340.93],
        [381366000000, 341.69],
        [383785200000, 342.69],
        [389052000000, 344.30],
        [391730400000, 343.43],
        [394322400000, 341.88],
        [397000800000, 339.89],
        [399679200000, 337.95],
        [402274800000, 338.10],
        [404953200000, 339.27],
        [407545200000, 340.67],
        [410223600000, 341.42],
        [412902000000, 342.68],
        [415321200000, 343.46],
        [417996000000, 345.10],
        [420588000000, 345.76],
        [423266400000, 345.36],
        [425858400000, 343.91],
        [428536800000, 342.05],
        [431215200000, 340.00],
        [433810800000, 340.12],
        [436489200000, 341.33],
        [439081200000, 342.94],
        [441759600000, 343.87],
        [444438000000, 344.60],
        [446943600000, 345.20],
        [452210400000, 347.36],
        [454888800000, 346.74],
        [457480800000, 345.41],
        [460159200000, 343.01],
        [462837600000, 341.23],
        [465433200000, 341.52],
        [468111600000, 342.86],
        [470703600000, 344.41],
        [473382000000, 345.09],
        [476060400000, 345.89],
        [478479600000, 347.49],
        [481154400000, 348.00],
        [483746400000, 348.75],
        [486424800000, 348.19],
        [489016800000, 346.54],
        [491695200000, 344.63],
        [494373600000, 343.03],
        [496969200000, 342.92],
        [499647600000, 344.24],
        [502239600000, 345.62],
        [504918000000, 346.43],
        [507596400000, 346.94],
        [510015600000, 347.88],
        [512690400000, 349.57],
        [515282400000, 350.35],
        [517960800000, 349.72],
        [520552800000, 347.78],
        [523231200000, 345.86],
        [525909600000, 344.84],
        [528505200000, 344.32],
        [531183600000, 345.67],
        [533775600000, 346.88],
        [536454000000, 348.19],
        [539132400000, 348.55],
        [541551600000, 349.52],
        [544226400000, 351.12],
        [546818400000, 351.84],
        [549496800000, 351.49],
        [552088800000, 349.82],
        [554767200000, 347.63],
        [557445600000, 346.38],
        [560041200000, 346.49],
        [562719600000, 347.75],
        [565311600000, 349.03],
        [567990000000, 350.20],
        [570668400000, 351.61],
        [573174000000, 352.22],
        [575848800000, 353.53],
        [578440800000, 354.14],
        [581119200000, 353.62],
        [583711200000, 352.53],
        [586389600000, 350.41],
        [589068000000, 348.84],
        [591663600000, 348.94],
        [594342000000, 350.04],
        [596934000000, 351.29],
        [599612400000, 352.72],
        [602290800000, 353.10],
        [604710000000, 353.65],
        [607384800000, 355.43],
        [609976800000, 355.70],
        [612655200000, 355.11],
        [615247200000, 353.79],
        [617925600000, 351.42],
        [620604000000, 349.81],
        [623199600000, 350.11],
        [625878000000, 351.26],
        [628470000000, 352.63],
        [631148400000, 353.64],
        [633826800000, 354.72],
        [636246000000, 355.49],
        [638920800000, 356.09],
        [641512800000, 357.08],
        [644191200000, 356.11],
        [646783200000, 354.70],
        [649461600000, 352.68],
        [652140000000, 351.05],
        [654735600000, 351.36],
        [657414000000, 352.81],
        [660006000000, 354.22],
        [662684400000, 354.85],
        [665362800000, 355.66],
        [667782000000, 357.04],
        [670456800000, 358.40],
        [673048800000, 359.00],
        [675727200000, 357.99],
        [678319200000, 356.00],
        [680997600000, 353.78],
        [683676000000, 352.20],
        [686271600000, 352.22],
        [688950000000, 353.70],
        [691542000000, 354.98],
        [694220400000, 356.09],
        [696898800000, 356.85],
        [699404400000, 357.73],
        [702079200000, 358.91],
        [704671200000, 359.45],
        [707349600000, 359.19],
        [709941600000, 356.72],
        [712620000000, 354.79],
        [715298400000, 352.79],
        [717894000000, 353.20],
        [720572400000, 354.15],
        [723164400000, 355.39],
        [725842800000, 356.77],
        [728521200000, 357.17],
        [730940400000, 358.26],
        [733615200000, 359.16],
        [736207200000, 360.07],
        [738885600000, 359.41],
        [741477600000, 357.44],
        [744156000000, 355.30],
        [746834400000, 353.87],
        [749430000000, 354.04],
        [752108400000, 355.27],
        [754700400000, 356.70],
        [757378800000, 358.00],
        [760057200000, 358.81],
        [762476400000, 359.68],
        [765151200000, 361.13],
        [767743200000, 361.48],
        [770421600000, 360.60],
        [773013600000, 359.20],
        [775692000000, 357.23],
        [778370400000, 355.42],
        [780966000000, 355.89],
        [783644400000, 357.41],
        [786236400000, 358.74],
        [788914800000, 359.73],
        [791593200000, 360.61],
        [794012400000, 361.58],
        [796687200000, 363.05],
        [799279200000, 363.62],
        [801957600000, 363.03],
        [804549600000, 361.55],
        [807228000000, 358.94],
        [809906400000, 357.93],
        [812502000000, 357.80],
        [815180400000, 359.22],
        [817772400000, 360.44],
        [820450800000, 361.83],
        [823129200000, 362.95],
        [825634800000, 363.91],
        [828309600000, 364.28],
        [830901600000, 364.94],
        [833580000000, 364.70],
        [836172000000, 363.31],
        [838850400000, 361.15],
        [841528800000, 359.40],
        [844120800000, 359.34],
        [846802800000, 360.62],
        [849394800000, 361.96],
        [852073200000, 362.81],
        [854751600000, 363.87],
        [857170800000, 364.25],
        [859845600000, 366.02],
        [862437600000, 366.46],
        [865116000000, 365.32],
        [867708000000, 364.07],
        [870386400000, 361.95],
        [873064800000, 360.06],
        [875656800000, 360.49],
        [878338800000, 362.19],
        [880930800000, 364.12],
        [883609200000, 364.99],
        [886287600000, 365.82],
        [888706800000, 366.95],
        [891381600000, 368.42],
        [893973600000, 369.33],
        [896652000000, 368.78],
        [899244000000, 367.59],
        [901922400000, 365.84],
        [904600800000, 363.83],
        [907192800000, 364.18],
        [909874800000, 365.34],
        [912466800000, 366.93],
        [915145200000, 367.94],
        [917823600000, 368.82],
        [920242800000, 369.46],
        [922917600000, 370.77],
        [925509600000, 370.66],
        [928188000000, 370.10],
        [930780000000, 369.08],
        [933458400000, 366.66],
        [936136800000, 364.60],
        [938728800000, 365.17],
        [941410800000, 366.51],
        [944002800000, 367.89],
        [946681200000, 369.04],
        [949359600000, 369.35],
        [951865200000, 370.38],
        [954540000000, 371.63],
        [957132000000, 371.32],
        [959810400000, 371.53],
        [962402400000, 369.75],
        [965080800000, 368.23],
        [967759200000, 366.87],
        [970351200000, 366.94],
        [973033200000, 368.27],
        [975625200000, 369.64],
        [978303600000, 370.46],
        [980982000000, 371.44],
        [983401200000, 372.37],
        [986076000000, 373.33],
        [988668000000, 373.77],
        [991346400000, 373.09],
        [993938400000, 371.51],
        [996616800000, 369.55],
        [999295200000, 368.12],
        [1001887200000, 368.38],
        [1004569200000, 369.66],
        [1007161200000, 371.11],
        [1009839600000, 372.36],
        [1012518000000, 373.09],
        [1014937200000, 373.81],
        [1017612000000, 374.93],
        [1020204000000, 375.58],
        [1022882400000, 375.44],
        [1025474400000, 373.86],
        [1028152800000, 371.77],
        [1030831200000, 370.73],
        [1033423200000, 370.50],
        [1036105200000, 372.18],
        [1038697200000, 373.70],
        [1041375600000, 374.92],
        [1044054000000, 375.62],
        [1046473200000, 376.51],
        [1049148000000, 377.75],
        [1051740000000, 378.54],
        [1054418400000, 378.20],
        [1057010400000, 376.68],
        [1059688800000, 374.43],
        [1062367200000, 373.11],
        [1064959200000, 373.10],
        [1067641200000, 374.77],
        [1070233200000, 375.97],
        [1072911600000, 377.03],
        [1075590000000, 377.87],
        [1078095600000, 378.88],
        [1080770400000, 380.42],
        [1083362400000, 380.62],
        [1086040800000, 379.70],
        [1088632800000, 377.43],
        [1091311200000, 376.32],
        [1093989600000, 374.19],
        [1096581600000, 374.47],
        [1099263600000, 376.15],
        [1101855600000, 377.51],
        [1104534000000, 378.43],
        [1107212400000, 379.70],
        [1109631600000, 380.92],
        [1112306400000, 382.18],
        [1114898400000, 382.45],
        [1117576800000, 382.14],
        [1120168800000, 380.60],
        [1122847200000, 378.64],
        [1125525600000, 376.73],
        [1128117600000, 376.84],
        [1130799600000, 378.29],
        [1133391600000, 380.06],
        [1136070000000, 381.40],
        [1138748400000, 382.20],
        [1141167600000, 382.66],
        [1143842400000, 384.69],
        [1146434400000, 384.94],
        [1149112800000, 384.01],
        [1151704800000, 382.14],
        [1154383200000, 380.31],
        [1157061600000, 378.81],
        [1159653600000, 379.03],
        [1162335600000, 380.17],
        [1164927600000, 381.85],
        [1167606000000, 382.94],
        [1170284400000, 383.86],
        [1172703600000, 384.49],
        [1175378400000, 386.37],
        [1177970400000, 386.54],
        [1180648800000, 385.98],
        [1183240800000, 384.36],
        [1185919200000, 381.85],
        [1188597600000, 380.74],
        [1191189600000, 381.15],
        [1193871600000, 382.38],
        [1196463600000, 383.94],
        [1199142000000, 385.44]
      ];

      $.plot("#flot15", [d], {
        xaxis: {
          mode: "time",
          tickColor: "#eee"
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        yaxis: {
          tickColor: "#eee"
        },
        shadowSize: 0
      });

      $("#whole").click(function() {
        $.plot("#flot15", [d], {
          xaxis: {
            mode: "time",
            tickColor: "#eee"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          yaxis: {
            tickColor: "#eee"
          },
          shadowSize: 0
        });
      });

      $("#nineties").click(function() {
        $.plot("#flot15", [d], {
          xaxis: {
            mode: "time",
            min: (new Date(1990, 0, 1)).getTime(),
            max: (new Date(2000, 0, 1)).getTime(),
            tickColor: "#eee"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          yaxis: {
            tickColor: "#eee"
          },
          shadowSize: 0
        });
      });

      $("#latenineties").click(function() {
        $.plot("#flot15", [d], {
          xaxis: {
            mode: "time",
            minTickSize: [1, "year"],
            min: (new Date(1996, 0, 1)).getTime(),
            max: (new Date(2000, 0, 1)).getTime(),
            tickColor: "#eee"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          yaxis: {
            tickColor: "#eee"
          },
          shadowSize: 0
        });
      });

      $("#ninetyninequarters").click(function() {
        $.plot("#flot15", [d], {
          xaxis: {
            mode: "time",
            minTickSize: [1, "quarter"],
            min: (new Date(1999, 0, 1)).getTime(),
            max: (new Date(2000, 0, 1)).getTime(),
            tickColor: "#eee"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          yaxis: {
            tickColor: "#eee"
          },
          shadowSize: 0
        });
      });

      $("#ninetynine").click(function() {
        $.plot("#flot15", [d], {
          xaxis: {
            mode: "time",
            minTickSize: [1, "month"],
            min: (new Date(1999, 0, 1)).getTime(),
            max: (new Date(2000, 0, 1)).getTime(),
            tickColor: "#eee"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          yaxis: {
            tickColor: "#eee"
          },
          shadowSize: 0
        });
      });

      $("#lastweekninetynine").click(function() {
        $.plot("#flot15", [d], {
          xaxis: {
            mode: "time",
            minTickSize: [1, "day"],
            min: (new Date(1999, 11, 25)).getTime(),
            max: (new Date(2000, 0, 1)).getTime(),
            timeformat: "%a",
            tickColor: "#eee"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          yaxis: {
            tickColor: "#eee"
          },
          shadowSize: 0
        });
      });

      $("#lastdayninetynine").click(function() {
        $.plot("#flot15", [d], {
          xaxis: {
            mode: "time",
            minTickSize: [1, "hour"],
            min: (new Date(1999, 11, 31)).getTime(),
            max: (new Date(2000, 0, 1)).getTime(),
            twelveHourClock: true,
            tickColor: "#eee"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          yaxis: {
            tickColor: "#eee"
          },
          shadowSize: 0
        });
      });
    }();
  }

  //Visitors per day with zooming and weekends
  if ($("#flot16")[0]) {
    var flot16 = function() {
      var d = [
        [1196463600000, 0],
        [1196550000000, 0],
        [1196636400000, 0],
        [1196722800000, 77],
        [1196809200000, 3636],
        [1196895600000, 3575],
        [1196982000000, 2736],
        [1197068400000, 1086],
        [1197154800000, 676],
        [1197241200000, 1205],
        [1197327600000, 906],
        [1197414000000, 710],
        [1197500400000, 639],
        [1197586800000, 540],
        [1197673200000, 435],
        [1197759600000, 301],
        [1197846000000, 575],
        [1197932400000, 481],
        [1198018800000, 591],
        [1198105200000, 608],
        [1198191600000, 459],
        [1198278000000, 234],
        [1198364400000, 1352],
        [1198450800000, 686],
        [1198537200000, 279],
        [1198623600000, 449],
        [1198710000000, 468],
        [1198796400000, 392],
        [1198882800000, 282],
        [1198969200000, 208],
        [1199055600000, 229],
        [1199142000000, 177],
        [1199228400000, 374],
        [1199314800000, 436],
        [1199401200000, 404],
        [1199487600000, 253],
        [1199574000000, 218],
        [1199660400000, 476],
        [1199746800000, 462],
        [1199833200000, 448],
        [1199919600000, 442],
        [1200006000000, 403],
        [1200092400000, 204],
        [1200178800000, 194],
        [1200265200000, 327],
        [1200351600000, 374],
        [1200438000000, 507],
        [1200524400000, 546],
        [1200610800000, 482],
        [1200697200000, 283],
        [1200783600000, 221],
        [1200870000000, 483],
        [1200956400000, 523],
        [1201042800000, 528],
        [1201129200000, 483],
        [1201215600000, 452],
        [1201302000000, 270],
        [1201388400000, 222],
        [1201474800000, 439],
        [1201561200000, 559],
        [1201647600000, 521],
        [1201734000000, 477],
        [1201820400000, 442],
        [1201906800000, 252],
        [1201993200000, 236],
        [1202079600000, 525],
        [1202166000000, 477],
        [1202252400000, 386],
        [1202338800000, 409],
        [1202425200000, 408],
        [1202511600000, 237],
        [1202598000000, 193],
        [1202684400000, 357],
        [1202770800000, 414],
        [1202857200000, 393],
        [1202943600000, 353],
        [1203030000000, 364],
        [1203116400000, 215],
        [1203202800000, 214],
        [1203289200000, 356],
        [1203375600000, 399],
        [1203462000000, 334],
        [1203548400000, 348],
        [1203634800000, 243],
        [1203721200000, 126],
        [1203807600000, 157],
        [1203894000000, 288]
      ];

      // first correct the timestamps - they are recorded as the daily
      // midnights in UTC+0100, but Flot always displays dates in UTC
      // so we have to add one hour to hit the midnights in the plot

      for (var i = 0; i < d.length; ++i) {
        d[i][0] += 60 * 60 * 1000;
      }

      // helper for returning the weekends in a period

      function weekendAreas(axes) {

        var markings = [],
          d = new Date(axes.xaxis.min);

        // go to the first Saturday

        d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7))
        d.setUTCSeconds(0);
        d.setUTCMinutes(0);
        d.setUTCHours(0);

        var i = d.getTime();

        // when we don't set yaxis, the rectangle automatically
        // extends to infinity upwards and downwards

        do {
          markings.push({
            xaxis: {
              from: i,
              to: i + 2 * 24 * 60 * 60 * 1000
            }
          });
          i += 7 * 24 * 60 * 60 * 1000;
        } while (i < axes.xaxis.max);

        return markings;
      }

      var options = {
        xaxis: {
          mode: "time",
          tickLength: 5,
          tickColor: "#eee"
        },
        yaxis: {
          tickColor: "#eee"
        },
        selection: {
          mode: "x"
        },
        grid: {
          markings: weekendAreas,
          borderColor: "#eee",
          borderWidth: 1
        },
        shadowSize: 0
      };

      var plot = $.plot("#flot16", [d], options);

      var overview = $.plot("#flot16-overview", [d], {
        series: {
          lines: {
            show: true,
            lineWidth: 1
          },
          shadowSize: 0
        },
        xaxis: {
          ticks: [],
          mode: "time",
          tickColor: "#eee"
        },
        yaxis: {
          ticks: [],
          min: 0,
          autoscaleMargin: 0.1,
          tickColor: "#eee"
        },
        selection: {
          mode: "x"
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        shadowSize: 0
      });

      // now connect the two

      $("#flot16").bind("plotselected", function(event, ranges) {

        // do the zooming
        $.each(plot.getXAxes(), function(_, axis) {
          var opts = axis.options;
          opts.min = ranges.xaxis.from;
          opts.max = ranges.xaxis.to;
        });
        plot.setupGrid();
        plot.draw();
        plot.clearSelection();

        // don't fire event on the overview to prevent eternal loop

        overview.setSelection(ranges, true);
      });

      $("#flot16-overview").bind("plotselected", function(event, ranges) {
        plot.setSelection(ranges);
      });
    }();
  }

  //Multiple axes
  if ($("#flot17")[0]) {
    var flot17 = function() {
      var oilprices = [
        [1167692400000, 61.05],
        [1167778800000, 58.32],
        [1167865200000, 57.35],
        [1167951600000, 56.31],
        [1168210800000, 55.55],
        [1168297200000, 55.64],
        [1168383600000, 54.02],
        [1168470000000, 51.88],
        [1168556400000, 52.99],
        [1168815600000, 52.99],
        [1168902000000, 51.21],
        [1168988400000, 52.24],
        [1169074800000, 50.48],
        [1169161200000, 51.99],
        [1169420400000, 51.13],
        [1169506800000, 55.04],
        [1169593200000, 55.37],
        [1169679600000, 54.23],
        [1169766000000, 55.42],
        [1170025200000, 54.01],
        [1170111600000, 56.97],
        [1170198000000, 58.14],
        [1170284400000, 58.14],
        [1170370800000, 59.02],
        [1170630000000, 58.74],
        [1170716400000, 58.88],
        [1170802800000, 57.71],
        [1170889200000, 59.71],
        [1170975600000, 59.89],
        [1171234800000, 57.81],
        [1171321200000, 59.06],
        [1171407600000, 58.00],
        [1171494000000, 57.99],
        [1171580400000, 59.39],
        [1171839600000, 59.39],
        [1171926000000, 58.07],
        [1172012400000, 60.07],
        [1172098800000, 61.14],
        [1172444400000, 61.39],
        [1172530800000, 61.46],
        [1172617200000, 61.79],
        [1172703600000, 62.00],
        [1172790000000, 60.07],
        [1173135600000, 60.69],
        [1173222000000, 61.82],
        [1173308400000, 60.05],
        [1173654000000, 58.91],
        [1173740400000, 57.93],
        [1173826800000, 58.16],
        [1173913200000, 57.55],
        [1173999600000, 57.11],
        [1174258800000, 56.59],
        [1174345200000, 59.61],
        [1174518000000, 61.69],
        [1174604400000, 62.28],
        [1174860000000, 62.91],
        [1174946400000, 62.93],
        [1175032800000, 64.03],
        [1175119200000, 66.03],
        [1175205600000, 65.87],
        [1175464800000, 64.64],
        [1175637600000, 64.38],
        [1175724000000, 64.28],
        [1175810400000, 64.28],
        [1176069600000, 61.51],
        [1176156000000, 61.89],
        [1176242400000, 62.01],
        [1176328800000, 63.85],
        [1176415200000, 63.63],
        [1176674400000, 63.61],
        [1176760800000, 63.10],
        [1176847200000, 63.13],
        [1176933600000, 61.83],
        [1177020000000, 63.38],
        [1177279200000, 64.58],
        [1177452000000, 65.84],
        [1177538400000, 65.06],
        [1177624800000, 66.46],
        [1177884000000, 64.40],
        [1178056800000, 63.68],
        [1178143200000, 63.19],
        [1178229600000, 61.93],
        [1178488800000, 61.47],
        [1178575200000, 61.55],
        [1178748000000, 61.81],
        [1178834400000, 62.37],
        [1179093600000, 62.46],
        [1179180000000, 63.17],
        [1179266400000, 62.55],
        [1179352800000, 64.94],
        [1179698400000, 66.27],
        [1179784800000, 65.50],
        [1179871200000, 65.77],
        [1179957600000, 64.18],
        [1180044000000, 65.20],
        [1180389600000, 63.15],
        [1180476000000, 63.49],
        [1180562400000, 65.08],
        [1180908000000, 66.30],
        [1180994400000, 65.96],
        [1181167200000, 66.93],
        [1181253600000, 65.98],
        [1181599200000, 65.35],
        [1181685600000, 66.26],
        [1181858400000, 68.00],
        [1182117600000, 69.09],
        [1182204000000, 69.10],
        [1182290400000, 68.19],
        [1182376800000, 68.19],
        [1182463200000, 69.14],
        [1182722400000, 68.19],
        [1182808800000, 67.77],
        [1182895200000, 68.97],
        [1182981600000, 69.57],
        [1183068000000, 70.68],
        [1183327200000, 71.09],
        [1183413600000, 70.92],
        [1183586400000, 71.81],
        [1183672800000, 72.81],
        [1183932000000, 72.19],
        [1184018400000, 72.56],
        [1184191200000, 72.50],
        [1184277600000, 74.15],
        [1184623200000, 75.05],
        [1184796000000, 75.92],
        [1184882400000, 75.57],
        [1185141600000, 74.89],
        [1185228000000, 73.56],
        [1185314400000, 75.57],
        [1185400800000, 74.95],
        [1185487200000, 76.83],
        [1185832800000, 78.21],
        [1185919200000, 76.53],
        [1186005600000, 76.86],
        [1186092000000, 76.00],
        [1186437600000, 71.59],
        [1186696800000, 71.47],
        [1186956000000, 71.62],
        [1187042400000, 71.00],
        [1187301600000, 71.98],
        [1187560800000, 71.12],
        [1187647200000, 69.47],
        [1187733600000, 69.26],
        [1187820000000, 69.83],
        [1187906400000, 71.09],
        [1188165600000, 71.73],
        [1188338400000, 73.36],
        [1188511200000, 74.04],
        [1188856800000, 76.30],
        [1189116000000, 77.49],
        [1189461600000, 78.23],
        [1189548000000, 79.91],
        [1189634400000, 80.09],
        [1189720800000, 79.10],
        [1189980000000, 80.57],
        [1190066400000, 81.93],
        [1190239200000, 83.32],
        [1190325600000, 81.62],
        [1190584800000, 80.95],
        [1190671200000, 79.53],
        [1190757600000, 80.30],
        [1190844000000, 82.88],
        [1190930400000, 81.66],
        [1191189600000, 80.24],
        [1191276000000, 80.05],
        [1191362400000, 79.94],
        [1191448800000, 81.44],
        [1191535200000, 81.22],
        [1191794400000, 79.02],
        [1191880800000, 80.26],
        [1191967200000, 80.30],
        [1192053600000, 83.08],
        [1192140000000, 83.69],
        [1192399200000, 86.13],
        [1192485600000, 87.61],
        [1192572000000, 87.40],
        [1192658400000, 89.47],
        [1192744800000, 88.60],
        [1193004000000, 87.56],
        [1193090400000, 87.56],
        [1193176800000, 87.10],
        [1193263200000, 91.86],
        [1193612400000, 93.53],
        [1193698800000, 94.53],
        [1193871600000, 95.93],
        [1194217200000, 93.98],
        [1194303600000, 96.37],
        [1194476400000, 95.46],
        [1194562800000, 96.32],
        [1195081200000, 93.43],
        [1195167600000, 95.10],
        [1195426800000, 94.64],
        [1195513200000, 95.10],
        [1196031600000, 97.70],
        [1196118000000, 94.42],
        [1196204400000, 90.62],
        [1196290800000, 91.01],
        [1196377200000, 88.71],
        [1196636400000, 88.32],
        [1196809200000, 90.23],
        [1196982000000, 88.28],
        [1197241200000, 87.86],
        [1197327600000, 90.02],
        [1197414000000, 92.25],
        [1197586800000, 90.63],
        [1197846000000, 90.63],
        [1197932400000, 90.49],
        [1198018800000, 91.24],
        [1198105200000, 91.06],
        [1198191600000, 90.49],
        [1198710000000, 96.62],
        [1198796400000, 96.00],
        [1199142000000, 99.62],
        [1199314800000, 99.18],
        [1199401200000, 95.09],
        [1199660400000, 96.33],
        [1199833200000, 95.67],
        [1200351600000, 91.90],
        [1200438000000, 90.84],
        [1200524400000, 90.13],
        [1200610800000, 90.57],
        [1200956400000, 89.21],
        [1201042800000, 86.99],
        [1201129200000, 89.85],
        [1201474800000, 90.99],
        [1201561200000, 91.64],
        [1201647600000, 92.33],
        [1201734000000, 91.75],
        [1202079600000, 90.02],
        [1202166000000, 88.41],
        [1202252400000, 87.14],
        [1202338800000, 88.11],
        [1202425200000, 91.77],
        [1202770800000, 92.78],
        [1202857200000, 93.27],
        [1202943600000, 95.46],
        [1203030000000, 95.46],
        [1203289200000, 101.74],
        [1203462000000, 98.81],
        [1203894000000, 100.88],
        [1204066800000, 99.64],
        [1204153200000, 102.59],
        [1204239600000, 101.84],
        [1204498800000, 99.52],
        [1204585200000, 99.52],
        [1204671600000, 104.52],
        [1204758000000, 105.47],
        [1204844400000, 105.15],
        [1205103600000, 108.75],
        [1205276400000, 109.92],
        [1205362800000, 110.33],
        [1205449200000, 110.21],
        [1205708400000, 105.68],
        [1205967600000, 101.84],
        [1206313200000, 100.86],
        [1206399600000, 101.22],
        [1206486000000, 105.90],
        [1206572400000, 107.58],
        [1206658800000, 105.62],
        [1206914400000, 101.58],
        [1207000800000, 100.98],
        [1207173600000, 103.83],
        [1207260000000, 106.23],
        [1207605600000, 108.50],
        [1207778400000, 110.11],
        [1207864800000, 110.14],
        [1208210400000, 113.79],
        [1208296800000, 114.93],
        [1208383200000, 114.86],
        [1208728800000, 117.48],
        [1208815200000, 118.30],
        [1208988000000, 116.06],
        [1209074400000, 118.52],
        [1209333600000, 118.75],
        [1209420000000, 113.46],
        [1209592800000, 112.52],
        [1210024800000, 121.84],
        [1210111200000, 123.53],
        [1210197600000, 123.69],
        [1210543200000, 124.23],
        [1210629600000, 125.80],
        [1210716000000, 126.29],
        [1211148000000, 127.05],
        [1211320800000, 129.07],
        [1211493600000, 132.19],
        [1211839200000, 128.85],
        [1212357600000, 127.76],
        [1212703200000, 138.54],
        [1212962400000, 136.80],
        [1213135200000, 136.38],
        [1213308000000, 134.86],
        [1213653600000, 134.01],
        [1213740000000, 136.68],
        [1213912800000, 135.65],
        [1214172000000, 134.62],
        [1214258400000, 134.62],
        [1214344800000, 134.62],
        [1214431200000, 139.64],
        [1214517600000, 140.21],
        [1214776800000, 140.00],
        [1214863200000, 140.97],
        [1214949600000, 143.57],
        [1215036000000, 145.29],
        [1215381600000, 141.37],
        [1215468000000, 136.04],
        [1215727200000, 146.40],
        [1215986400000, 145.18],
        [1216072800000, 138.74],
        [1216159200000, 134.60],
        [1216245600000, 129.29],
        [1216332000000, 130.65],
        [1216677600000, 127.95],
        [1216850400000, 127.95],
        [1217282400000, 122.19],
        [1217455200000, 124.08],
        [1217541600000, 125.10],
        [1217800800000, 121.41],
        [1217887200000, 119.17],
        [1217973600000, 118.58],
        [1218060000000, 120.02],
        [1218405600000, 114.45],
        [1218492000000, 113.01],
        [1218578400000, 116.00],
        [1218751200000, 113.77],
        [1219010400000, 112.87],
        [1219096800000, 114.53],
        [1219269600000, 114.98],
        [1219356000000, 114.98],
        [1219701600000, 116.27],
        [1219788000000, 118.15],
        [1219874400000, 115.59],
        [1219960800000, 115.46],
        [1220306400000, 109.71],
        [1220392800000, 109.35],
        [1220565600000, 106.23],
        [1220824800000, 106.34]
      ];

      var exchangerates = [
        [1167606000000, 0.7580],
        [1167692400000, 0.7580],
        [1167778800000, 0.75470],
        [1167865200000, 0.75490],
        [1167951600000, 0.76130],
        [1168038000000, 0.76550],
        [1168124400000, 0.76930],
        [1168210800000, 0.76940],
        [1168297200000, 0.76880],
        [1168383600000, 0.76780],
        [1168470000000, 0.77080],
        [1168556400000, 0.77270],
        [1168642800000, 0.77490],
        [1168729200000, 0.77410],
        [1168815600000, 0.77410],
        [1168902000000, 0.77320],
        [1168988400000, 0.77270],
        [1169074800000, 0.77370],
        [1169161200000, 0.77240],
        [1169247600000, 0.77120],
        [1169334000000, 0.7720],
        [1169420400000, 0.77210],
        [1169506800000, 0.77170],
        [1169593200000, 0.77040],
        [1169679600000, 0.7690],
        [1169766000000, 0.77110],
        [1169852400000, 0.7740],
        [1169938800000, 0.77450],
        [1170025200000, 0.77450],
        [1170111600000, 0.7740],
        [1170198000000, 0.77160],
        [1170284400000, 0.77130],
        [1170370800000, 0.76780],
        [1170457200000, 0.76880],
        [1170543600000, 0.77180],
        [1170630000000, 0.77180],
        [1170716400000, 0.77280],
        [1170802800000, 0.77290],
        [1170889200000, 0.76980],
        [1170975600000, 0.76850],
        [1171062000000, 0.76810],
        [1171148400000, 0.7690],
        [1171234800000, 0.7690],
        [1171321200000, 0.76980],
        [1171407600000, 0.76990],
        [1171494000000, 0.76510],
        [1171580400000, 0.76130],
        [1171666800000, 0.76160],
        [1171753200000, 0.76140],
        [1171839600000, 0.76140],
        [1171926000000, 0.76070],
        [1172012400000, 0.76020],
        [1172098800000, 0.76110],
        [1172185200000, 0.76220],
        [1172271600000, 0.76150],
        [1172358000000, 0.75980],
        [1172444400000, 0.75980],
        [1172530800000, 0.75920],
        [1172617200000, 0.75730],
        [1172703600000, 0.75660],
        [1172790000000, 0.75670],
        [1172876400000, 0.75910],
        [1172962800000, 0.75820],
        [1173049200000, 0.75850],
        [1173135600000, 0.76130],
        [1173222000000, 0.76310],
        [1173308400000, 0.76150],
        [1173394800000, 0.760],
        [1173481200000, 0.76130],
        [1173567600000, 0.76270],
        [1173654000000, 0.76270],
        [1173740400000, 0.76080],
        [1173826800000, 0.75830],
        [1173913200000, 0.75750],
        [1173999600000, 0.75620],
        [1174086000000, 0.7520],
        [1174172400000, 0.75120],
        [1174258800000, 0.75120],
        [1174345200000, 0.75170],
        [1174431600000, 0.7520],
        [1174518000000, 0.75110],
        [1174604400000, 0.7480],
        [1174690800000, 0.75090],
        [1174777200000, 0.75310],
        [1174860000000, 0.75310],
        [1174946400000, 0.75270],
        [1175032800000, 0.74980],
        [1175119200000, 0.74930],
        [1175205600000, 0.75040],
        [1175292000000, 0.750],
        [1175378400000, 0.74910],
        [1175464800000, 0.74910],
        [1175551200000, 0.74850],
        [1175637600000, 0.74840],
        [1175724000000, 0.74920],
        [1175810400000, 0.74710],
        [1175896800000, 0.74590],
        [1175983200000, 0.74770],
        [1176069600000, 0.74770],
        [1176156000000, 0.74830],
        [1176242400000, 0.74580],
        [1176328800000, 0.74480],
        [1176415200000, 0.7430],
        [1176501600000, 0.73990],
        [1176588000000, 0.73950],
        [1176674400000, 0.73950],
        [1176760800000, 0.73780],
        [1176847200000, 0.73820],
        [1176933600000, 0.73620],
        [1177020000000, 0.73550],
        [1177106400000, 0.73480],
        [1177192800000, 0.73610],
        [1177279200000, 0.73610],
        [1177365600000, 0.73650],
        [1177452000000, 0.73620],
        [1177538400000, 0.73310],
        [1177624800000, 0.73390],
        [1177711200000, 0.73440],
        [1177797600000, 0.73270],
        [1177884000000, 0.73270],
        [1177970400000, 0.73360],
        [1178056800000, 0.73330],
        [1178143200000, 0.73590],
        [1178229600000, 0.73590],
        [1178316000000, 0.73720],
        [1178402400000, 0.7360],
        [1178488800000, 0.7360],
        [1178575200000, 0.7350],
        [1178661600000, 0.73650],
        [1178748000000, 0.73840],
        [1178834400000, 0.73950],
        [1178920800000, 0.74130],
        [1179007200000, 0.73970],
        [1179093600000, 0.73960],
        [1179180000000, 0.73850],
        [1179266400000, 0.73780],
        [1179352800000, 0.73660],
        [1179439200000, 0.740],
        [1179525600000, 0.74110],
        [1179612000000, 0.74060],
        [1179698400000, 0.74050],
        [1179784800000, 0.74140],
        [1179871200000, 0.74310],
        [1179957600000, 0.74310],
        [1180044000000, 0.74380],
        [1180130400000, 0.74430],
        [1180216800000, 0.74430],
        [1180303200000, 0.74430],
        [1180389600000, 0.74340],
        [1180476000000, 0.74290],
        [1180562400000, 0.74420],
        [1180648800000, 0.7440],
        [1180735200000, 0.74390],
        [1180821600000, 0.74370],
        [1180908000000, 0.74370],
        [1180994400000, 0.74290],
        [1181080800000, 0.74030],
        [1181167200000, 0.73990],
        [1181253600000, 0.74180],
        [1181340000000, 0.74680],
        [1181426400000, 0.7480],
        [1181512800000, 0.7480],
        [1181599200000, 0.7490],
        [1181685600000, 0.74940],
        [1181772000000, 0.75220],
        [1181858400000, 0.75150],
        [1181944800000, 0.75020],
        [1182031200000, 0.74720],
        [1182117600000, 0.74720],
        [1182204000000, 0.74620],
        [1182290400000, 0.74550],
        [1182376800000, 0.74490],
        [1182463200000, 0.74670],
        [1182549600000, 0.74580],
        [1182636000000, 0.74270],
        [1182722400000, 0.74270],
        [1182808800000, 0.7430],
        [1182895200000, 0.74290],
        [1182981600000, 0.7440],
        [1183068000000, 0.7430],
        [1183154400000, 0.74220],
        [1183240800000, 0.73880],
        [1183327200000, 0.73880],
        [1183413600000, 0.73690],
        [1183500000000, 0.73450],
        [1183586400000, 0.73450],
        [1183672800000, 0.73450],
        [1183759200000, 0.73520],
        [1183845600000, 0.73410],
        [1183932000000, 0.73410],
        [1184018400000, 0.7340],
        [1184104800000, 0.73240],
        [1184191200000, 0.72720],
        [1184277600000, 0.72640],
        [1184364000000, 0.72550],
        [1184450400000, 0.72580],
        [1184536800000, 0.72580],
        [1184623200000, 0.72560],
        [1184709600000, 0.72570],
        [1184796000000, 0.72470],
        [1184882400000, 0.72430],
        [1184968800000, 0.72440],
        [1185055200000, 0.72350],
        [1185141600000, 0.72350],
        [1185228000000, 0.72350],
        [1185314400000, 0.72350],
        [1185400800000, 0.72620],
        [1185487200000, 0.72880],
        [1185573600000, 0.73010],
        [1185660000000, 0.73370],
        [1185746400000, 0.73370],
        [1185832800000, 0.73240],
        [1185919200000, 0.72970],
        [1186005600000, 0.73170],
        [1186092000000, 0.73150],
        [1186178400000, 0.72880],
        [1186264800000, 0.72630],
        [1186351200000, 0.72630],
        [1186437600000, 0.72420],
        [1186524000000, 0.72530],
        [1186610400000, 0.72640],
        [1186696800000, 0.7270],
        [1186783200000, 0.73120],
        [1186869600000, 0.73050],
        [1186956000000, 0.73050],
        [1187042400000, 0.73180],
        [1187128800000, 0.73580],
        [1187215200000, 0.74090],
        [1187301600000, 0.74540],
        [1187388000000, 0.74370],
        [1187474400000, 0.74240],
        [1187560800000, 0.74240],
        [1187647200000, 0.74150],
        [1187733600000, 0.74190],
        [1187820000000, 0.74140],
        [1187906400000, 0.73770],
        [1187992800000, 0.73550],
        [1188079200000, 0.73150],
        [1188165600000, 0.73150],
        [1188252000000, 0.7320],
        [1188338400000, 0.73320],
        [1188424800000, 0.73460],
        [1188511200000, 0.73280],
        [1188597600000, 0.73230],
        [1188684000000, 0.7340],
        [1188770400000, 0.7340],
        [1188856800000, 0.73360],
        [1188943200000, 0.73510],
        [1189029600000, 0.73460],
        [1189116000000, 0.73210],
        [1189202400000, 0.72940],
        [1189288800000, 0.72660],
        [1189375200000, 0.72660],
        [1189461600000, 0.72540],
        [1189548000000, 0.72420],
        [1189634400000, 0.72130],
        [1189720800000, 0.71970],
        [1189807200000, 0.72090],
        [1189893600000, 0.7210],
        [1189980000000, 0.7210],
        [1190066400000, 0.7210],
        [1190152800000, 0.72090],
        [1190239200000, 0.71590],
        [1190325600000, 0.71330],
        [1190412000000, 0.71050],
        [1190498400000, 0.70990],
        [1190584800000, 0.70990],
        [1190671200000, 0.70930],
        [1190757600000, 0.70930],
        [1190844000000, 0.70760],
        [1190930400000, 0.7070],
        [1191016800000, 0.70490],
        [1191103200000, 0.70120],
        [1191189600000, 0.70110],
        [1191276000000, 0.70190],
        [1191362400000, 0.70460],
        [1191448800000, 0.70630],
        [1191535200000, 0.70890],
        [1191621600000, 0.70770],
        [1191708000000, 0.70770],
        [1191794400000, 0.70770],
        [1191880800000, 0.70910],
        [1191967200000, 0.71180],
        [1192053600000, 0.70790],
        [1192140000000, 0.70530],
        [1192226400000, 0.7050],
        [1192312800000, 0.70550],
        [1192399200000, 0.70550],
        [1192485600000, 0.70450],
        [1192572000000, 0.70510],
        [1192658400000, 0.70510],
        [1192744800000, 0.70170],
        [1192831200000, 0.70],
        [1192917600000, 0.69950],
        [1193004000000, 0.69940],
        [1193090400000, 0.70140],
        [1193176800000, 0.70360],
        [1193263200000, 0.70210],
        [1193349600000, 0.70020],
        [1193436000000, 0.69670],
        [1193522400000, 0.6950],
        [1193612400000, 0.6950],
        [1193698800000, 0.69390],
        [1193785200000, 0.6940],
        [1193871600000, 0.69220],
        [1193958000000, 0.69190],
        [1194044400000, 0.69140],
        [1194130800000, 0.68940],
        [1194217200000, 0.68910],
        [1194303600000, 0.69040],
        [1194390000000, 0.6890],
        [1194476400000, 0.68340],
        [1194562800000, 0.68230],
        [1194649200000, 0.68070],
        [1194735600000, 0.68150],
        [1194822000000, 0.68150],
        [1194908400000, 0.68470],
        [1194994800000, 0.68590],
        [1195081200000, 0.68220],
        [1195167600000, 0.68270],
        [1195254000000, 0.68370],
        [1195340400000, 0.68230],
        [1195426800000, 0.68220],
        [1195513200000, 0.68220],
        [1195599600000, 0.67920],
        [1195686000000, 0.67460],
        [1195772400000, 0.67350],
        [1195858800000, 0.67310],
        [1195945200000, 0.67420],
        [1196031600000, 0.67440],
        [1196118000000, 0.67390],
        [1196204400000, 0.67310],
        [1196290800000, 0.67610],
        [1196377200000, 0.67610],
        [1196463600000, 0.67850],
        [1196550000000, 0.68180],
        [1196636400000, 0.68360],
        [1196722800000, 0.68230],
        [1196809200000, 0.68050],
        [1196895600000, 0.67930],
        [1196982000000, 0.68490],
        [1197068400000, 0.68330],
        [1197154800000, 0.68250],
        [1197241200000, 0.68250],
        [1197327600000, 0.68160],
        [1197414000000, 0.67990],
        [1197500400000, 0.68130],
        [1197586800000, 0.68090],
        [1197673200000, 0.68680],
        [1197759600000, 0.69330],
        [1197846000000, 0.69330],
        [1197932400000, 0.69450],
        [1198018800000, 0.69440],
        [1198105200000, 0.69460],
        [1198191600000, 0.69640],
        [1198278000000, 0.69650],
        [1198364400000, 0.69560],
        [1198450800000, 0.69560],
        [1198537200000, 0.6950],
        [1198623600000, 0.69480],
        [1198710000000, 0.69280],
        [1198796400000, 0.68870],
        [1198882800000, 0.68240],
        [1198969200000, 0.67940],
        [1199055600000, 0.67940],
        [1199142000000, 0.68030],
        [1199228400000, 0.68550],
        [1199314800000, 0.68240],
        [1199401200000, 0.67910],
        [1199487600000, 0.67830],
        [1199574000000, 0.67850],
        [1199660400000, 0.67850],
        [1199746800000, 0.67970],
        [1199833200000, 0.680],
        [1199919600000, 0.68030],
        [1200006000000, 0.68050],
        [1200092400000, 0.6760],
        [1200178800000, 0.6770],
        [1200265200000, 0.6770],
        [1200351600000, 0.67360],
        [1200438000000, 0.67260],
        [1200524400000, 0.67640],
        [1200610800000, 0.68210],
        [1200697200000, 0.68310],
        [1200783600000, 0.68420],
        [1200870000000, 0.68420],
        [1200956400000, 0.68870],
        [1201042800000, 0.69030],
        [1201129200000, 0.68480],
        [1201215600000, 0.68240],
        [1201302000000, 0.67880],
        [1201388400000, 0.68140],
        [1201474800000, 0.68140],
        [1201561200000, 0.67970],
        [1201647600000, 0.67690],
        [1201734000000, 0.67650],
        [1201820400000, 0.67330],
        [1201906800000, 0.67290],
        [1201993200000, 0.67580],
        [1202079600000, 0.67580],
        [1202166000000, 0.6750],
        [1202252400000, 0.6780],
        [1202338800000, 0.68330],
        [1202425200000, 0.68560],
        [1202511600000, 0.69030],
        [1202598000000, 0.68960],
        [1202684400000, 0.68960],
        [1202770800000, 0.68820],
        [1202857200000, 0.68790],
        [1202943600000, 0.68620],
        [1203030000000, 0.68520],
        [1203116400000, 0.68230],
        [1203202800000, 0.68130],
        [1203289200000, 0.68130],
        [1203375600000, 0.68220],
        [1203462000000, 0.68020],
        [1203548400000, 0.68020],
        [1203634800000, 0.67840],
        [1203721200000, 0.67480],
        [1203807600000, 0.67470],
        [1203894000000, 0.67470],
        [1203980400000, 0.67480],
        [1204066800000, 0.67330],
        [1204153200000, 0.6650],
        [1204239600000, 0.66110],
        [1204326000000, 0.65830],
        [1204412400000, 0.6590],
        [1204498800000, 0.6590],
        [1204585200000, 0.65810],
        [1204671600000, 0.65780],
        [1204758000000, 0.65740],
        [1204844400000, 0.65320],
        [1204930800000, 0.65020],
        [1205017200000, 0.65140],
        [1205103600000, 0.65140],
        [1205190000000, 0.65070],
        [1205276400000, 0.6510],
        [1205362800000, 0.64890],
        [1205449200000, 0.64240],
        [1205535600000, 0.64060],
        [1205622000000, 0.63820],
        [1205708400000, 0.63820],
        [1205794800000, 0.63410],
        [1205881200000, 0.63440],
        [1205967600000, 0.63780],
        [1206054000000, 0.64390],
        [1206140400000, 0.64780],
        [1206226800000, 0.64810],
        [1206313200000, 0.64810],
        [1206399600000, 0.64940],
        [1206486000000, 0.64380],
        [1206572400000, 0.63770],
        [1206658800000, 0.63290],
        [1206745200000, 0.63360],
        [1206831600000, 0.63330],
        [1206914400000, 0.63330],
        [1207000800000, 0.6330],
        [1207087200000, 0.63710],
        [1207173600000, 0.64030],
        [1207260000000, 0.63960],
        [1207346400000, 0.63640],
        [1207432800000, 0.63560],
        [1207519200000, 0.63560],
        [1207605600000, 0.63680],
        [1207692000000, 0.63570],
        [1207778400000, 0.63540],
        [1207864800000, 0.6320],
        [1207951200000, 0.63320],
        [1208037600000, 0.63280],
        [1208124000000, 0.63310],
        [1208210400000, 0.63420],
        [1208296800000, 0.63210],
        [1208383200000, 0.63020],
        [1208469600000, 0.62780],
        [1208556000000, 0.63080],
        [1208642400000, 0.63240],
        [1208728800000, 0.63240],
        [1208815200000, 0.63070],
        [1208901600000, 0.62770],
        [1208988000000, 0.62690],
        [1209074400000, 0.63350],
        [1209160800000, 0.63920],
        [1209247200000, 0.640],
        [1209333600000, 0.64010],
        [1209420000000, 0.63960],
        [1209506400000, 0.64070],
        [1209592800000, 0.64230],
        [1209679200000, 0.64290],
        [1209765600000, 0.64720],
        [1209852000000, 0.64850],
        [1209938400000, 0.64860],
        [1210024800000, 0.64670],
        [1210111200000, 0.64440],
        [1210197600000, 0.64670],
        [1210284000000, 0.65090],
        [1210370400000, 0.64780],
        [1210456800000, 0.64610],
        [1210543200000, 0.64610],
        [1210629600000, 0.64680],
        [1210716000000, 0.64490],
        [1210802400000, 0.6470],
        [1210888800000, 0.64610],
        [1210975200000, 0.64520],
        [1211061600000, 0.64220],
        [1211148000000, 0.64220],
        [1211234400000, 0.64250],
        [1211320800000, 0.64140],
        [1211407200000, 0.63660],
        [1211493600000, 0.63460],
        [1211580000000, 0.6350],
        [1211666400000, 0.63460],
        [1211752800000, 0.63460],
        [1211839200000, 0.63430],
        [1211925600000, 0.63460],
        [1212012000000, 0.63790],
        [1212098400000, 0.64160],
        [1212184800000, 0.64420],
        [1212271200000, 0.64310],
        [1212357600000, 0.64310],
        [1212444000000, 0.64350],
        [1212530400000, 0.6440],
        [1212616800000, 0.64730],
        [1212703200000, 0.64690],
        [1212789600000, 0.63860],
        [1212876000000, 0.63560],
        [1212962400000, 0.6340],
        [1213048800000, 0.63460],
        [1213135200000, 0.6430],
        [1213221600000, 0.64520],
        [1213308000000, 0.64670],
        [1213394400000, 0.65060],
        [1213480800000, 0.65040],
        [1213567200000, 0.65030],
        [1213653600000, 0.64810],
        [1213740000000, 0.64510],
        [1213826400000, 0.6450],
        [1213912800000, 0.64410],
        [1213999200000, 0.64140],
        [1214085600000, 0.64090],
        [1214172000000, 0.64090],
        [1214258400000, 0.64280],
        [1214344800000, 0.64310],
        [1214431200000, 0.64180],
        [1214517600000, 0.63710],
        [1214604000000, 0.63490],
        [1214690400000, 0.63330],
        [1214776800000, 0.63340],
        [1214863200000, 0.63380],
        [1214949600000, 0.63420],
        [1215036000000, 0.6320],
        [1215122400000, 0.63180],
        [1215208800000, 0.6370],
        [1215295200000, 0.63680],
        [1215381600000, 0.63680],
        [1215468000000, 0.63830],
        [1215554400000, 0.63710],
        [1215640800000, 0.63710],
        [1215727200000, 0.63550],
        [1215813600000, 0.6320],
        [1215900000000, 0.62770],
        [1215986400000, 0.62760],
        [1216072800000, 0.62910],
        [1216159200000, 0.62740],
        [1216245600000, 0.62930],
        [1216332000000, 0.63110],
        [1216418400000, 0.6310],
        [1216504800000, 0.63120],
        [1216591200000, 0.63120],
        [1216677600000, 0.63040],
        [1216764000000, 0.62940],
        [1216850400000, 0.63480],
        [1216936800000, 0.63780],
        [1217023200000, 0.63680],
        [1217109600000, 0.63680],
        [1217196000000, 0.63680],
        [1217282400000, 0.6360],
        [1217368800000, 0.6370],
        [1217455200000, 0.64180],
        [1217541600000, 0.64110],
        [1217628000000, 0.64350],
        [1217714400000, 0.64270],
        [1217800800000, 0.64270],
        [1217887200000, 0.64190],
        [1217973600000, 0.64460],
        [1218060000000, 0.64680],
        [1218146400000, 0.64870],
        [1218232800000, 0.65940],
        [1218319200000, 0.66660],
        [1218405600000, 0.66660],
        [1218492000000, 0.66780],
        [1218578400000, 0.67120],
        [1218664800000, 0.67050],
        [1218751200000, 0.67180],
        [1218837600000, 0.67840],
        [1218924000000, 0.68110],
        [1219010400000, 0.68110],
        [1219096800000, 0.67940],
        [1219183200000, 0.68040],
        [1219269600000, 0.67810],
        [1219356000000, 0.67560],
        [1219442400000, 0.67350],
        [1219528800000, 0.67630],
        [1219615200000, 0.67620],
        [1219701600000, 0.67770],
        [1219788000000, 0.68150],
        [1219874400000, 0.68020],
        [1219960800000, 0.6780],
        [1220047200000, 0.67960],
        [1220133600000, 0.68170],
        [1220220000000, 0.68170],
        [1220306400000, 0.68320],
        [1220392800000, 0.68770],
        [1220479200000, 0.69120],
        [1220565600000, 0.69140],
        [1220652000000, 0.70090],
        [1220738400000, 0.70120],
        [1220824800000, 0.7010],
        [1220911200000, 0.70050]
      ];

      function euroFormatter(v, axis) {
        return v.toFixed(axis.tickDecimals) + "€";
      }

      function doPlot(position) {
        $.plot("#flot17", [{
          data: oilprices,
          label: "Oil price ($)",
          colot: "#e31d18"
        }, {
          data: exchangerates,
          label: "USD/EUR exchange rate",
          yaxis: 2,
          color: "#00947d"
        }], {
          xaxes: [{
            mode: "time",
            tickColor: "#eee"
          }],
          yaxes: [{
            min: 0,
            tickColor: "#eee"
          }, {
            // align if we are to the right
            alignTicksWithAxis: position == "right" ? 1 : null,
            position: position,
            tickFormatter: euroFormatter
          }],
          legend: {
            position: "sw"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          shadowSize: 0
        });
      }

      doPlot("right");

      $(".flot17-btn").click(function() {
        doPlot($(this).text());
      });
    }();
  }

  //Interacting with the axes
  if ($("#flot18")[0]) {
    var flot18 = function() {
      function generate(start, end, fn) {
        var res = [];
        for (var i = 0; i <= 100; ++i) {
          var x = start + i / 100 * (end - start);
          res.push([x, fn(x)]);
        }
        return res;
      }

      var data = [{
        data: generate(0, 10, function(x) {
          return Math.sqrt(x);
        }),
        xaxis: 1,
        yaxis: 1
      }, {
        data: generate(0, 10, function(x) {
          return Math.sin(x);
        }),
        xaxis: 1,
        yaxis: 2
      }, {
        data: generate(0, 10, function(x) {
          return Math.cos(x);
        }),
        xaxis: 1,
        yaxis: 3
      }, {
        data: generate(2, 10, function(x) {
          return Math.tan(x);
        }),
        xaxis: 2,
        yaxis: 4
      }];

      var plot = $.plot("#flot18", data, {
        xaxes: [{
          position: 'bottom',
        }, {
          position: 'top'
        }],
        yaxes: [{
          position: 'left'
        }, {
          position: 'left'
        }, {
          position: 'right'
        }, {
          position: 'left'
        }],
        yaxis: {
          tickColor: "#eee"
        },
        xaxis: {
          tickColor: "#eee"
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        shadowSize: 0
      });

      // Create a div for each axis

      $.each(plot.getAxes(), function(i, axis) {
        if (!axis.show)
          return;

        var box = axis.box;

        $("<div class='axisTarget' style='position:absolute; left:" + box.left + "px; top:" + box.top + "px; width:" + box.width + "px; height:" + box.height + "px'></div>")
          .data("axis.direction", axis.direction)
          .data("axis.n", axis.n)
          .css({
            backgroundColor: "#02b4dd",
            opacity: 0,
            cursor: "pointer"
          })
          .appendTo(plot.getPlaceholder())
          .hover(
            function() {
              $(this).css({
                opacity: 0.10
              })
            },
            function() {
              $(this).css({
                opacity: 0
              })
            }
          )
          .click(function() {
            $("#flot18-click").text("You clicked the " + axis.direction + axis.n + "axis!")
          });
      });
    }();
  }

  //Thresholding the data
  if ($("#flot19")[0]) {
    var flot19 = function() {
      var d1 = [];
      for (var i = 0; i <= 60; i += 1) {
        d1.push([i, parseInt(Math.random() * 30 - 10)]);
      }

      function plotWithOptions(t) {
        $.plot("#flot19", [{
          data: d1,
          color: "#f0ad4e",
          threshold: {
            below: t,
            color: "#d9534f"
          },
          lines: {
            steps: true
          }
        }], {
          yaxis: {
            tickColor: "#eee"
          },
          xaxis: {
            tickColor: "#eee"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          shadowSize: 0
        });
      }

      plotWithOptions(0);

      $("#flot19-btn1").click(function(e) {
        e.preventDefault();
        plotWithOptions(5);
      });
      $("#flot19-btn2").click(function(e) {
        e.preventDefault();
        plotWithOptions(0);
      });
      $("#flot19-btn3").click(function(e) {
        e.preventDefault();
        plotWithOptions(-2.5);
      });
    }();
  }

  //Stacked charts
  if ($("#flot20")[0]) {
    var flot20 = function() {
      var d1 = [];
      for (var i = 0; i <= 10; i += 1) {
        d1.push([i, parseInt(Math.random() * 30)]);
      }

      var d2 = [];
      for (var i = 0; i <= 10; i += 1) {
        d2.push([i, parseInt(Math.random() * 30)]);
      }

      var d3 = [];
      for (var i = 0; i <= 10; i += 1) {
        d3.push([i, parseInt(Math.random() * 30)]);
      }

      var stack = 0,
        bars = true,
        lines = false,
        steps = false;

      function plotWithOptions() {
        $.plot("#flot20", [{
          data: d1,
          color: "#5bc0de"
        }, {
          data: d2,
          color: "#d9534f"
        }, {
          data: d3,
          color: "#f0ad4e"
        }], {
          series: {
            stack: stack,
            lines: {
              show: lines,
              fill: true,
              steps: steps
            },
            bars: {
              show: bars,
              barWidth: 0.6,
              lineWidth: 0,
              align: "center",
              fill: .9
            }
          },
          yaxis: {
            tickColor: "#eee"
          },
          xaxis: {
            tickColor: "#eee"
          },
          grid: {
            borderColor: "#eee",
            borderWidth: 1
          },
          shadowSize: 0
        });
      }

      plotWithOptions();

      $(".stackControls button").click(function(e) {
        e.preventDefault();
        stack = $(this).text() == "With stacking" ? true : null;
        plotWithOptions();
      });

      $(".graphControls button").click(function(e) {
        e.preventDefault();
        bars = $(this).text().indexOf("Bars") != -1;
        lines = $(this).text().indexOf("Lines") != -1;
        steps = $(this).text().indexOf("steps") != -1;
        plotWithOptions();
      });
    }();
  }

  //Using filled areas to plot percentiles
  if ($("#flot21")[0]) {
    var flot21 = function() {
      var males = {
        "15%": [
          [2, 88.0],
          [3, 93.3],
          [4, 102.0],
          [5, 108.5],
          [6, 115.7],
          [7, 115.6],
          [8, 124.6],
          [9, 130.3],
          [10, 134.3],
          [11, 141.4],
          [12, 146.5],
          [13, 151.7],
          [14, 159.9],
          [15, 165.4],
          [16, 167.8],
          [17, 168.7],
          [18, 169.5],
          [19, 168.0]
        ],
        "90%": [
          [2, 96.8],
          [3, 105.2],
          [4, 113.9],
          [5, 120.8],
          [6, 127.0],
          [7, 133.1],
          [8, 139.1],
          [9, 143.9],
          [10, 151.3],
          [11, 161.1],
          [12, 164.8],
          [13, 173.5],
          [14, 179.0],
          [15, 182.0],
          [16, 186.9],
          [17, 185.2],
          [18, 186.3],
          [19, 186.6]
        ],
        "25%": [
          [2, 89.2],
          [3, 94.9],
          [4, 104.4],
          [5, 111.4],
          [6, 117.5],
          [7, 120.2],
          [8, 127.1],
          [9, 132.9],
          [10, 136.8],
          [11, 144.4],
          [12, 149.5],
          [13, 154.1],
          [14, 163.1],
          [15, 169.2],
          [16, 170.4],
          [17, 171.2],
          [18, 172.4],
          [19, 170.8]
        ],
        "10%": [
          [2, 86.9],
          [3, 92.6],
          [4, 99.9],
          [5, 107.0],
          [6, 114.0],
          [7, 113.5],
          [8, 123.6],
          [9, 129.2],
          [10, 133.0],
          [11, 140.6],
          [12, 145.2],
          [13, 149.7],
          [14, 158.4],
          [15, 163.5],
          [16, 166.9],
          [17, 167.5],
          [18, 167.1],
          [19, 165.3]
        ],
        "mean": [
          [2, 91.9],
          [3, 98.5],
          [4, 107.1],
          [5, 114.4],
          [6, 120.6],
          [7, 124.7],
          [8, 131.1],
          [9, 136.8],
          [10, 142.3],
          [11, 150.0],
          [12, 154.7],
          [13, 161.9],
          [14, 168.7],
          [15, 173.6],
          [16, 175.9],
          [17, 176.6],
          [18, 176.8],
          [19, 176.7]
        ],
        "75%": [
          [2, 94.5],
          [3, 102.1],
          [4, 110.8],
          [5, 117.9],
          [6, 124.0],
          [7, 129.3],
          [8, 134.6],
          [9, 141.4],
          [10, 147.0],
          [11, 156.1],
          [12, 160.3],
          [13, 168.3],
          [14, 174.7],
          [15, 178.0],
          [16, 180.2],
          [17, 181.7],
          [18, 181.3],
          [19, 182.5]
        ],
        "85%": [
          [2, 96.2],
          [3, 103.8],
          [4, 111.8],
          [5, 119.6],
          [6, 125.6],
          [7, 131.5],
          [8, 138.0],
          [9, 143.3],
          [10, 149.3],
          [11, 159.8],
          [12, 162.5],
          [13, 171.3],
          [14, 177.5],
          [15, 180.2],
          [16, 183.8],
          [17, 183.4],
          [18, 183.5],
          [19, 185.5]
        ],
        "50%": [
          [2, 91.9],
          [3, 98.2],
          [4, 106.8],
          [5, 114.6],
          [6, 120.8],
          [7, 125.2],
          [8, 130.3],
          [9, 137.1],
          [10, 141.5],
          [11, 149.4],
          [12, 153.9],
          [13, 162.2],
          [14, 169.0],
          [15, 174.8],
          [16, 176.0],
          [17, 176.8],
          [18, 176.4],
          [19, 177.4]
        ]
      };

      var females = {
        "15%": [
          [2, 84.8],
          [3, 93.7],
          [4, 100.6],
          [5, 105.8],
          [6, 113.3],
          [7, 119.3],
          [8, 124.3],
          [9, 131.4],
          [10, 136.9],
          [11, 143.8],
          [12, 149.4],
          [13, 151.2],
          [14, 152.3],
          [15, 155.9],
          [16, 154.7],
          [17, 157.0],
          [18, 156.1],
          [19, 155.4]
        ],
        "90%": [
          [2, 95.6],
          [3, 104.1],
          [4, 111.9],
          [5, 119.6],
          [6, 127.6],
          [7, 133.1],
          [8, 138.7],
          [9, 147.1],
          [10, 152.8],
          [11, 161.3],
          [12, 166.6],
          [13, 167.9],
          [14, 169.3],
          [15, 170.1],
          [16, 172.4],
          [17, 169.2],
          [18, 171.1],
          [19, 172.4]
        ],
        "25%": [
          [2, 87.2],
          [3, 95.9],
          [4, 101.9],
          [5, 107.4],
          [6, 114.8],
          [7, 121.4],
          [8, 126.8],
          [9, 133.4],
          [10, 138.6],
          [11, 146.2],
          [12, 152.0],
          [13, 153.8],
          [14, 155.7],
          [15, 158.4],
          [16, 157.0],
          [17, 158.5],
          [18, 158.4],
          [19, 158.1]
        ],
        "10%": [
          [2, 84.0],
          [3, 91.9],
          [4, 99.2],
          [5, 105.2],
          [6, 112.7],
          [7, 118.0],
          [8, 123.3],
          [9, 130.2],
          [10, 135.0],
          [11, 141.1],
          [12, 148.3],
          [13, 150.0],
          [14, 150.7],
          [15, 154.3],
          [16, 153.6],
          [17, 155.6],
          [18, 154.7],
          [19, 153.1]
        ],
        "mean": [
          [2, 90.2],
          [3, 98.3],
          [4, 105.2],
          [5, 112.2],
          [6, 119.0],
          [7, 125.8],
          [8, 131.3],
          [9, 138.6],
          [10, 144.2],
          [11, 151.3],
          [12, 156.7],
          [13, 158.6],
          [14, 160.5],
          [15, 162.1],
          [16, 162.9],
          [17, 162.2],
          [18, 163.0],
          [19, 163.1]
        ],
        "75%": [
          [2, 93.2],
          [3, 101.5],
          [4, 107.9],
          [5, 116.6],
          [6, 122.8],
          [7, 129.3],
          [8, 135.2],
          [9, 143.7],
          [10, 148.7],
          [11, 156.9],
          [12, 160.8],
          [13, 163.0],
          [14, 165.0],
          [15, 165.8],
          [16, 168.7],
          [17, 166.2],
          [18, 167.6],
          [19, 168.0]
        ],
        "85%": [
          [2, 94.5],
          [3, 102.8],
          [4, 110.4],
          [5, 119.0],
          [6, 125.7],
          [7, 131.5],
          [8, 137.9],
          [9, 146.0],
          [10, 151.3],
          [11, 159.9],
          [12, 164.0],
          [13, 166.5],
          [14, 167.5],
          [15, 168.5],
          [16, 171.5],
          [17, 168.0],
          [18, 169.8],
          [19, 170.3]
        ],
        "50%": [
          [2, 90.2],
          [3, 98.1],
          [4, 105.2],
          [5, 111.7],
          [6, 118.2],
          [7, 125.6],
          [8, 130.5],
          [9, 138.3],
          [10, 143.7],
          [11, 151.4],
          [12, 156.7],
          [13, 157.7],
          [14, 161.0],
          [15, 162.0],
          [16, 162.8],
          [17, 162.2],
          [18, 162.8],
          [19, 163.3]
        ]
      };

      var dataset = [{
          label: "Female mean",
          data: females["mean"],
          lines: {
            show: true
          },
          color: "#d9534f"
        }, {
          id: "f15%",
          data: females["15%"],
          lines: {
            show: true,
            lineWidth: 0,
            fill: false
          },
          color: "#d9534f"
        }, {
          id: "f25%",
          data: females["25%"],
          lines: {
            show: true,
            lineWidth: 0,
            fill: 0.2
          },
          color: "#d9534f",
          fillBetween: "f15%"
        }, {
          id: "f50%",
          data: females["50%"],
          lines: {
            show: true,
            lineWidth: 0.5,
            fill: 0.4,
            shadowSize: 0
          },
          color: "#d9534f",
          fillBetween: "f25%"
        }, {
          id: "f75%",
          data: females["75%"],
          lines: {
            show: true,
            lineWidth: 0,
            fill: 0.4
          },
          color: "#d9534f",
          fillBetween: "f50%"
        }, {
          id: "f85%",
          data: females["85%"],
          lines: {
            show: true,
            lineWidth: 0,
            fill: 0.2
          },
          color: "#d9534f",
          fillBetween: "f75%"
        },

        {
          label: "Male mean",
          data: males["mean"],
          lines: {
            show: true
          },
          color: "#f0ad4e"
        }, {
          id: "m15%",
          data: males["15%"],
          lines: {
            show: true,
            lineWidth: 0,
            fill: false
          },
          color: "#f0ad4e"
        }, {
          id: "m25%",
          data: males["25%"],
          lines: {
            show: true,
            lineWidth: 0,
            fill: 0.2
          },
          color: "#f0ad4e",
          fillBetween: "m15%"
        }, {
          id: "m50%",
          data: males["50%"],
          lines: {
            show: true,
            lineWidth: 0.5,
            fill: 0.4,
            shadowSize: 0
          },
          color: "#f0ad4e",
          fillBetween: "m25%"
        }, {
          id: "m75%",
          data: males["75%"],
          lines: {
            show: true,
            lineWidth: 0,
            fill: 0.4
          },
          color: "#f0ad4e",
          fillBetween: "m50%"
        }, {
          id: "m85%",
          data: males["85%"],
          lines: {
            show: true,
            lineWidth: 0,
            fill: 0.2
          },
          color: "#f0ad4e",
          fillBetween: "m75%"
        }
      ];

      $.plot($("#flot21"), dataset, {
        xaxis: {
          tickDecimals: 0,
          tickColor: "#eee"
        },
        yaxis: {
          tickFormatter: function(v) {
            return v + " cm";
          },
          tickColor: "#eee"
        },
        legend: {
          position: "se"
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        shadowSize: 0
      });
    }();
  }

  //Tracking curves with crosshair
  if ($("#flot22")[0]) {
    var flot22 = function() {
      var sin = [],
        cos = [];
      for (var i = 0; i < 14; i += 0.1) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
      }

      plot = $.plot("#flot22", [{
        data: sin,
        label: "sin(x) = -0.00",
        color: "#fa639e"
      }, {
        data: cos,
        label: "cos(x) = -0.00",
        color: "#5c2862"
      }], {
        series: {
          lines: {
            show: true
          }
        },
        crosshair: {
          mode: "x"
        },
        grid: {
          hoverable: true,
          autoHighlight: false,
          borderColor: "#eee",
          borderWidth: 1
        },
        yaxis: {
          min: -1.2,
          max: 1.2,
          tickColor: "#eee"
        },
        xaxis: {
          tickColor: "#eee"
        },
        shadowSize: 0
      });

      var legends = $("#flot22 .legendLabel");

      legends.each(function() {
        // fix the widths so they don't jump around
        $(this).css('width', $(this).width());
      });

      var updateLegendTimeout = null;
      var latestPosition = null;

      function updateLegend() {

        updateLegendTimeout = null;

        var pos = latestPosition;

        var axes = plot.getAxes();
        if (pos.x < axes.xaxis.min || pos.x > axes.xaxis.max ||
          pos.y < axes.yaxis.min || pos.y > axes.yaxis.max) {
          return;
        }

        var i, j, dataset = plot.getData();
        for (i = 0; i < dataset.length; ++i) {

          var series = dataset[i];

          // Find the nearest points, x-wise

          for (j = 0; j < series.data.length; ++j) {
            if (series.data[j][0] > pos.x) {
              break;
            }
          }

          // Now Interpolate

          var y,
            p1 = series.data[j - 1],
            p2 = series.data[j];

          if (p1 == null) {
            y = p2[1];
          } else if (p2 == null) {
            y = p1[1];
          } else {
            y = p1[1] + (p2[1] - p1[1]) * (pos.x - p1[0]) / (p2[0] - p1[0]);
          }

          legends.eq(i).text(series.label.replace(/=.*/, "= " + y.toFixed(2)));
        }
      }

      $("#flot22").bind("plothover", function(event, pos, item) {
        latestPosition = pos;
        if (!updateLegendTimeout) {
          updateLegendTimeout = setTimeout(updateLegend, 50);
        }
      });
    }();
  }

  //Plotting error bars
  if ($("#flot23")[0]) {
    var flot23 = function() {
      function drawArrow(ctx, x, y, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y + radius);
        ctx.lineTo(x, y);
        ctx.lineTo(x - radius, y + radius);
        ctx.stroke();
      }

      function drawSemiCircle(ctx, x, y, radius) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI, false);
        ctx.moveTo(x - radius, y);
        ctx.lineTo(x + radius, y);
        ctx.stroke();
      }

      var data1 = [
        [1, 1, .5, .1, .3],
        [2, 2, .3, .5, .2],
        [3, 3, .9, .5, .2],
        [1.5, -.05, .5, .1, .3],
        [3.15, 1., .5, .1, .3],
        [2.5, -1., .5, .1, .3]
      ];

      var data1_points = {
        show: true,
        radius: 5,
        fillColor: "#02b4dd",
        errorbars: "xy",
        xerr: {
          show: true,
          asymmetric: true,
          upperCap: "-",
          lowerCap: "-"
        },
        yerr: {
          show: true,
          color: "#e31d18",
          upperCap: "-"
        }
      };

      var data2 = [
        [.7, 3, .2, .4],
        [1.5, 2.2, .3, .4],
        [2.3, 1, .5, .2]
      ];

      var data2_points = {
        show: true,
        radius: 5,
        errorbars: "y",
        yerr: {
          show: true,
          asymmetric: true,
          upperCap: drawArrow,
          lowerCap: drawSemiCircle
        }
      };

      var data3 = [
        [1, 2, .4],
        [2, 0.5, .3],
        [2.7, 2, .5]
      ];

      var data3_points = {
        //do not show points
        radius: 0,
        errorbars: "y",
        yerr: {
          show: true,
          upperCap: "-",
          lowerCap: "-",
          radius: 5
        }
      };

      var data4 = [
        [1.3, 1],
        [1.75, 2.5],
        [2.5, 0.5]
      ];

      var data4_errors = [0.1, 0.4, 0.2];
      for (var i = 0; i < data4.length; i++) {
        data4_errors[i] = data4[i].concat(data4_errors[i])
      }

      var data = [{
          color: "#02b4dd",
          points: data1_points,
          data: data1,
          label: "data1"
        }, {
          color: "#e31d18",
          points: data2_points,
          data: data2,
          label: "data2"
        }, {
          color: "#00947d",
          lines: {
            show: true
          },
          points: data3_points,
          data: data3,
          label: "data3"
        },
        // bars with errors
        {
          color: "#f2572d",
          bars: {
            show: true,
            align: "center",
            barWidth: 0.25,
            lineWidth: 0
          },
          data: data4,
          label: "data4"
        }, {
          color: "#f2572d",
          points: data3_points,
          data: data4_errors
        }
      ];

      $.plot($("#flot23"), data, {
        legend: {
          position: "sw",
          show: true
        },
        series: {
          lines: {
            show: false
          }
        },
        xaxis: {
          min: 0.6,
          max: 3.1,
          tickColor: "#eee"
        },
        yaxis: {
          min: 0,
          max: 3.5,
          tickColor: "#eee"
        },
        zoom: {
          interactive: true
        },
        pan: {
          interactive: true
        },
        grid: {
          borderColor: "#eee",
          borderWidth: 1
        },
        shadowSize: 0
      });
    }();
  }

  //Pie charts
  if ($("#flot-pie")[0]) {
    var flotpie = function() {

      function labelFormatter(label, series) {
        return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
      }

      var data = [],
        series = Math.floor(Math.random() * 6) + 3,
        color = ["#5bc0de", "#f0ad4e", "#d9534f", "#00947d", "#fa639e", "#5c2862", "#4d4d4d", "#428bca", "#f2572d"];

      for (var i = 0; i < series; i++) {
        data[i] = {
          label: "Series" + (i + 1),
          data: Math.floor(Math.random() * 100) + 1,
          color: color[i + 1]
        }
      }

      $.plot('#flot24', data, {
        series: {
          pie: {
            show: true
          }
        }
      });

      $.plot('#flot25', data, {
        series: {
          pie: {
            show: true
          }
        },
        legend: {
          show: false
        }
      });

      $.plot('#flot26', data, {
        series: {
          pie: {
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 1,
              formatter: labelFormatter,
              background: {
                opacity: 0.8
              }
            }
          }
        },
        legend: {
          show: false
        }
      });

      $.plot('#flot27', data, {
        series: {
          pie: {
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 3 / 4,
              formatter: labelFormatter,
              background: {
                opacity: 0.5
              }
            }
          }
        },
        legend: {
          show: false
        }
      });

      $.plot('#flot28', data, {
        series: {
          pie: {
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 3 / 4,
              formatter: labelFormatter,
              background: {
                opacity: 0.5,
                color: '#000'
              }
            }
          }
        },
        legend: {
          show: false
        }
      });

      $.plot('#flot29', data, {
        series: {
          pie: {
            show: true,
            radius: 3 / 4,
            label: {
              show: true,
              radius: 3 / 4,
              formatter: labelFormatter,
              background: {
                opacity: 0.5,
                color: '#000'
              }
            }
          }
        },
        legend: {
          show: false
        }
      });

      $.plot('#flot30', data, {
        series: {
          pie: {
            show: true,
            radius: 1,
            label: {
              show: true,
              radius: 2 / 3,
              formatter: labelFormatter,
              threshold: 0.1
            }
          }
        },
        legend: {
          show: false
        }
      });

      $.plot('#flot31', data, {
        series: {
          pie: {
            show: true,
            combine: {
              color: '#999',
              threshold: 0.1
            }
          }
        },
        legend: {
          show: false
        }
      });

      $.plot('#flot32', data, {
        series: {
          pie: {
            show: true,
            radius: 500,
            label: {
              show: true,
              formatter: labelFormatter,
              threshold: 0.1
            }
          }
        },
        legend: {
          show: false
        }
      });

      $.plot('#flot33', data, {
        series: {
          pie: {
            show: true,
            radius: 1,
            tilt: 0.5,
            label: {
              show: true,
              radius: 1,
              formatter: labelFormatter,
              background: {
                opacity: 0.8
              }
            },
            combine: {
              color: '#999',
              threshold: 0.1
            }
          }
        },
        legend: {
          show: false
        }
      });

      $.plot('#flot34', data, {
        series: {
          pie: {
            innerRadius: 0.5,
            show: true
          }
        }
      });

      $.plot('#flot35', data, {
        series: {
          pie: {
            show: true
          }
        },
        grid: {
          hoverable: true,
          clickable: true
        }
      });

    }();
  }

});
/**
 * Flot Chart demo end
 */


/**
 * Chart.js demo begin
 */
$(function() {

  if (typeof(Chart) == "function") {
    Chart.defaults.global.responsive = true;
  }

  //Line Chart
  if ($("#chartjs1")[0]) {
    var chartjs1 = function() {
      var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }, {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }]
      };
      var ctx = document.getElementById("chartjs1").getContext("2d");
      var myLineChart = new Chart(ctx).Line(data);
    }();
  }

  // Bar Chart
  if ($("#chartjs2")[0]) {
    var chartjs2 = function() {
      var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 80, 81, 56, 55, 40]
        }, {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.5)",
          strokeColor: "rgba(151,187,205,0.8)",
          highlightFill: "rgba(151,187,205,0.75)",
          highlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }]
      };
      var ctx = document.getElementById("chartjs2").getContext("2d");
      var myBarChart = new Chart(ctx).Bar(data);
    }();
  }

  // Radar Chart
  if ($("#chartjs3")[0]) {
    var chartjs3 = function() {
      var data = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [65, 59, 90, 81, 56, 55, 40]
        }, {
          label: "My Second dataset",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 96, 27, 100]
        }]
      };
      var ctx = document.getElementById("chartjs3").getContext("2d");
      var myRadarChart = new Chart(ctx).Radar(data);
    }();
  }

  // Polar Area Chart
  if ($("#chartjs4")[0]) {
    var chartjs4 = function() {
      var data = [{
          value: 300,
          color: "#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        }, {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        }, {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        }, {
          value: 40,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Grey"
        }, {
          value: 120,
          color: "#4D5360",
          highlight: "#616774",
          label: "Dark Grey"
        }

      ];
      var ctx = document.getElementById("chartjs4").getContext("2d");
      var myPolarAreaChart = new Chart(ctx).PolarArea(data);
    }();
  }

  // Pie Chart
  if ($("#chartjs5")[0]) {
    var chartjs4 = function() {
      var data = [{
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      }, {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      }];
      var ctx = document.getElementById("chartjs5").getContext("2d");
      var myPieChart = new Chart(ctx).Pie(data);
    }();
  }

  // Doughnut Chart
  if ($("#chartjs6")[0]) {
    var chartjs4 = function() {
      var data = [{
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      }, {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      }, {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      }];
      var ctx = document.getElementById("chartjs6").getContext("2d");
      var myDoughnutChart = new Chart(ctx).Doughnut(data);
    }();
  }

});
/**
 * Chart.js demo end
 */


/**
 * Easy Pie Chart demo begin
 */
$(function() {

  if ($("#easypie1")[0]) {
    $("#easypie1").easyPieChart({
      animate: 2000,
      barColor: "#428bca",
      trackColor: "#eee",
      scaleColor: "#ddd",
      lineCap: "round",
      lineWidth: 5,
      size: 100
    });
  }

  if ($("#easypie2")[0]) {
    $("#easypie2").easyPieChart({
      animate: 3000,
      barColor: "#5cb85c",
      trackColor: "#eee",
      scaleColor: "#ddd",
      lineCap: "butt",
      lineWidth: 10,
      size: 100
    });
  }

  if ($("#easypie3")[0]) {
    $("#easypie3").easyPieChart({
      animate: 2500,
      barColor: "#f0ad4e",
      trackColor: "#eee",
      scaleColor: "#ddd",
      lineCap: "square",
      lineWidth: 15,
      size: 100
    });
  }

});
/**
 * Easy Pie Chart demo end
 */


/**
 * Sparklines demo begin
 */

/** 
 ** Draw the little mouse speed animated graph
 ** This just attaches a handler to the mousemove event to see
 ** (roughly) how far the mouse has moved
 ** and then updates the display a couple of times a second via
 ** setTimeout()
 **/
function drawMouseSpeedDemo() {
  var mrefreshinterval = 500; // update display every 500ms
  var lastmousex = -1;
  var lastmousey = -1;
  var lastmousetime;
  var mousetravel = 0;
  var mpoints = [];
  var mpoints_max = 30;
  $('html').mousemove(function(e) {
    var mousex = e.pageX;
    var mousey = e.pageY;
    if (lastmousex > -1) {
      mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
    }
    lastmousex = mousex;
    lastmousey = mousey;
  });
  var mdraw = function() {
      var md = new Date();
      var timenow = md.getTime();
      if (lastmousetime && lastmousetime != timenow) {
        var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
        mpoints.push(pps);
        if (mpoints.length > mpoints_max)
          mpoints.splice(0, 1);
        mousetravel = 0;
        $('#mousespeed').sparkline(mpoints, {
          width: mpoints.length * 2,
          tooltipSuffix: ' pixels per second',
          lineColor: '#fa639e',
          fillColor: '#f0ad4e'
        });
      }
      lastmousetime = timenow;
      setTimeout(mdraw, mrefreshinterval);
    }
    // We could use setInterval instead, but I prefer to do it this way
  setTimeout(mdraw, mrefreshinterval);
};


// Demo Run...
$(function() {

  if ($("#mousespeed")[0]) {
    drawMouseSpeedDemo();
  }

  if ($(".sparkline")[0]) {
    // Line charts taking their values from the tag
    $('.sparkline').sparkline('html', {
      fillColor: false,
      lineColor: '#428bca',
      highlightSpotColor: '#00947d',
      highlightLineColor: '#a3a3a3'
    });
  }

  if ($(".sparkbar")[0]) {
    // Bar charts using inline values
    $('.sparkbar').sparkline('html', {
      type: 'bar',
      barColor: '#02b4dd',
      negBarColor: '#f2572d',
      stackedBarColor: ['#f0ad4e', '#5bc0de']
    });
  }

  if ($("#compositeline")[0]) {
    // Composite line charts, the second using values supplied via javascript
    $('#compositeline').sparkline('html', {
      fillColor: false,
      changeRangeMin: 0,
      chartRangeMax: 10,
      lineColor: '#f2572d'
    });
    $('#compositeline').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
      composite: true,
      fillColor: false,
      lineColor: '#00947d',
      changeRangeMin: 0,
      chartRangeMax: 10
    });
  }

  if ($("#normalline")[0]) {
    // Line charts with normal range marker
    $('#normalline').sparkline('html', {
      fillColor: false,
      lineColor: '#e31d18',
      normalRangeMin: -1,
      normalRangeMax: 8
    });
  }

  if ($("#compositebar")[0]) {
    // Bar + line composite charts
    $('#compositebar').sparkline('html', {
      type: 'bar',
      barColor: '#fa639e'
    });
    $('#compositebar').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
      composite: true,
      fillColor: false,
      lineColor: '#00947d'
    });
  }

  // Discrete charts
  if ($('.discrete1')[0]) {
    $('.discrete1').sparkline('html', {
      type: 'discrete',
      lineColor: '#428bca',
      xwidth: 18
    });
  }
  if ($('#discrete2')[0]) {
    $('#discrete2').sparkline('html', {
      type: 'discrete',
      lineColor: '#5cb85c',
      thresholdColor: '#d9534f',
      thresholdValue: 4
    });
  }

  // Customized line chart
  if ($('#linecustom')[0]) {
    $('#linecustom').sparkline('html', {
      height: '1.5em',
      width: '8em',
      lineColor: '#d9534f',
      fillColor: '#f0ad4e',
      minSpotColor: false,
      maxSpotColor: false,
      spotColor: '#5bc0de',
      spotRadius: 3
    });
  }

  // Tri-state charts using inline values
  if ($('.sparktristate')[0]) {
    $('.sparktristate').sparkline('html', {
      type: 'tristate',
      posBarColor: '#428bca',
      negBarColor: '#f0ad4e',
      zeroBarColor: '#d9534f'
    });
  }
  if ($('.sparktristatecols')[0]) {
    $('.sparktristatecols').sparkline('html', {
      type: 'tristate',
      posBarColor: '#428bca',
      negBarColor: '#f0ad4e',
      zeroBarColor: '#d9534f',
      colorMap: {
        '-2': '#fa639e',
        '2': '#5c2862'
      }
    });
  }

  // Box plots
  if ($('.sparkboxplot')[0]) {
    $('.sparkboxplot').sparkline('html', {
      type: 'box'
    });
  }
  if ($('.sparkboxplotraw')[0]) {
    $('.sparkboxplotraw').sparkline([1, 3, 5, 8, 10, 15, 18], {
      type: 'box',
      raw: true,
      showOutliers: true,
      target: 6
    });
  }

  // Pie charts
  if ($('.sparkpie')[0]) {
    $('.sparkpie').sparkline('html', {
      type: 'pie',
      height: '1.0em'
    });
  }

  // Bullet charts
  if ($('.sparkbullet')[0]) {
    $('.sparkbullet').sparkline('html', {
      type: 'bullet',
      targetColor: '#fa639e',
      performanceColor: '#f0ad4e',
      rangeColors: ['#a3a3a3', '#02b4dd', '#428bca']
    });
  }

});
/**
 * Sparklines demo end
 */


/**
 * Gallery demo begin
 */
$(function() {
  if ($(".gallery-list")[0]) {
    $(".gallery-list").mixItUp({
      animation: {
        duration: 300,
        effects: 'fade scale(0.35)',
        easing: 'ease'
      },
      controls: {
        activeClass: 'btn-orange active'
      }
    });
  }
});
/**
 * Gallery demo end
 */


/**
 * Calender demo begin
 */
$(function() {

  if ($('#calendar')[0]) {

    /* initialize the external events
          -----------------------------------------------------------------*/
    var eventDrag = function(el) {
      // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
      // it doesn't need to have a start or end
      var eventObject = {
        title: $.trim(el.text()), // use the element's text as the event titleTemplate
        stick: true, // maintain when user navigates (see docs on the renderEvent method)
        color: el.css("background-color")
      };

      // store the Event Object in the DOM element so we can get to it later
      el.data('event', eventObject);

      // make the event draggable using jQuery UI
      el.draggable({
        zIndex: 999,
        revert: true, // will cause the event to go back to its
        revertDuration: 0 //  original position after the drag
      });
    }
    $('#external-events .fc-event-btn').each(function() {
      eventDrag($(this));
    });

    // Add New Event
    var addEvent = function(name) {
      name = name.length == 0 ? "Untitled Event" : name;
      var html = $('<div class="fc-event-btn btn btn-xs btn-primary mright5 mbottom5"><i class="fa fa-thumb-tack mright5"></i>' + name + '</div>');
      $('#event-box').append(html);
      eventDrag(html);
    };
    $('#event-add').on('click', function() {
      var name = $('#event-name').val();
      addEvent(name);
    });

    /* initialize the calendar
      -----------------------------------------------------------------*/

    $('#calendar').fullCalendar({
      header: {
        left: 'today prev,next',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      droppable: true, // this allows things to be dropped onto the calendar !!!
      drop: function() {
        // is the "remove after drop" checkbox checked?
        if ($('#drop-remove').is(':checked')) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
      },
      events: [{
        title: 'All Day Event',
        start: '2015-01-01',
        color: '#428bca',
        textColor: '#fff'
      }, {
        title: 'Long Event',
        start: '2015-01-12',
        end: '2015-01-14',
        color: '#5cb85c',
        textColor: '#fff'
      }, {
        id: 999,
        title: 'Repeating Event',
        start: '2015-01-08T16:00:00',
        color: '#5bc0de',
        textColor: '#fff'
      }, {
        id: 999,
        title: 'Repeating Event',
        start: '2015-01-16T16:00:00',
        color: '#f0ad4e',
        textColor: '#fff'
      }, {
        title: 'Conference',
        start: '2015-01-11',
        end: '2014-01-13',
        color: '#d9534f',
        textColor: '#fff'
      }, {
        title: 'Meeting',
        start: '2015-01-12T10:30:00',
        end: '2015-01-12T12:30:00',
        color: '#e31d18',
        textColor: '#fff'
      }, {
        title: 'Lunch',
        start: '2015-01-12T12:00:00',
        color: '#f2572d',
        textColor: '#fff'
      }, {
        title: 'Meeting',
        start: '2015-01-12T14:30:00',
        color: '#00947d',
        textColor: '#fff'
      }, {
        title: 'Happy Hour',
        start: '2015-01-12T17:30:00',
        color: '#5c2862',
        textColor: '#fff'
      }, {
        title: 'Dinner',
        start: '2015-01-12T20:00:00',
        color: '#f1c82d',
        textColor: '#fff'
      }, {
        title: 'Birthday Party',
        start: '2015-01-13T07:00:00',
        color: '#fa639e',
        textColor: '#fff'
      }, {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2015-01-28',
        color: '#4d4d4d',
        textColor: '#fff'
      }]
    });

  }

});
/**
 * Calender demo end
 */


/**
 * Compose Email Editor demo begin
 */
$(function() {
  if ($("#compose-mail-message")[0]) {
    $("#compose-mail-message").summernote({
      height: 200, // set editor height

      minHeight: 500, // set minimum height of editor
      maxHeight: 500, // set maximum height of editor

      focus: false, // set focus to editable area after initializing summernote);
      toolbar: [
        //[groupname, [button list]]
        ['style', ['style']],
        ['font', ['fontname']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['insert', ['link', 'picture', 'table']],
        ['misc', ['undo', 'redo', 'fullscreen', 'codeview']],
        ['help', ['help']]
      ]
    });
  }
});
/**
 * Compose Email Editor demo end
 */


/**
 * Dashboard demo begin
 */
$(function() {

  // Small Count Panel - Realtime Chart
  if ($("#demo-small-count-realtime-chart")[0]) {
    var realtimeChart = function() {
      // We use an inline data source in the example, usually data would be fetched from a server

      var data = [],
        totalPoints = 300;

      function getRandomData() {

        if (data.length > 0)
          data = data.slice(1);

        // Do a random walk

        while (data.length < totalPoints) {

          var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

          if (y < 0) {
            y = 0;
          } else if (y > 100) {
            y = 100;
          }

          data.push(y);
        }

        // Zip the generated y values with the x values

        var res = [];
        for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]])
        }

        return res;
      }

      // Set up the control widget

      var updateInterval = 30;
      $("#updateInterval").val(updateInterval).change(function() {
        var v = $(this).val();
        if (v && !isNaN(+v)) {
          updateInterval = +v;
          if (updateInterval < 1) {
            updateInterval = 1;
          } else if (updateInterval > 2000) {
            updateInterval = 2000;
          }
          $(this).val("" + updateInterval);
        }
      });

      var plot = $.plot("#demo-small-count-realtime-chart", [getRandomData()], {
        colors: ['#fff'],
        series: {
          shadowSize: 0,
          lines: {
            show: true,
            lineWidth: 0.5,
          }
        },
        grid: {
          borderWidth: 0
        },
        yaxis: {
          min: 0,
          max: 100,
          show: false
        },
        xaxis: {
          show: false
        }
      });

      function update() {

        plot.setData([getRandomData()]);

        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
      }

      update();
    }();
  }

  // FullWidth Charts demo
  if ($("#demo-full-width-charts-1")[0]) {
    $(function() {
      var datasets = {
        uk: {
          label: "UK",
          data: [
            [2000, 62982],
            [2001, 62027],
            [2002, 60696],
            [2003, 62348],
            [2004, 58560],
            [2005, 56393],
            [2006, 54579],
            [2007, 50818],
            [2008, 50554],
            [2009, 48276],
            [2010, 57691],
            [2011, 47529],
            [2012, 47778],
            [2013, 48760],
            [2014, 49474]
          ]
        },
        japan: {
          label: "Japan",
          data: [
            [2000, 55627],
            [2001, 55475],
            [2002, 58464],
            [2003, 55134],
            [2004, 52436],
            [2005, 47139],
            [2006, 43962],
            [2007, 43238],
            [2008, 42395],
            [2009, 40854],
            [2010, 40993],
            [2011, 41822],
            [2012, 41147],
            [2013, 40474],
            [2014, 36474]
          ]
        },
        usa: {
          label: "USA",
          data: [
            [2000, 48399],
            [2001, 47906],
            [2002, 45764],
            [2003, 40194],
            [2004, 42470],
            [2005, 40237],
            [2006, 37786],
            [2007, 35738],
            [2008, 33794],
            [2009, 33618],
            [2010, 32861],
            [2011, 32942],
            [2012, 34217],
            [2013, 34493],
            [2014, 32493]
          ]
        },
        russia: {
          label: "Russia",
          data: [
            [2000, 21800],
            [2001, 20300],
            [2002, 17100],
            [2004, 42500],
            [2005, 37600],
            [2006, 36600],
            [2007, 21700],
            [2008, 19200],
            [2009, 21300],
            [2010, 13600],
            [2011, 17000],
            [2012, 19100],
            [2013, 21300],
            [2014, 23600]
          ]
        },
        china: {
          label: "China",
          data: [
            [2000, 4813],
            [2001, 16719],
            [2002, 3722],
            [2003, 13789],
            [2004, 13720],
            [2005, 15730],
            [2006, 8636],
            [2007, 3598],
            [2008, 3610],
            [2009, 6655],
            [2010, 3695],
            [2011, 11673],
            [2012, 3553],
            [2013, 3774],
            [2014, 3728]
          ]
        },
        others: {
          label: "Others",
          data: [
            [2000, 2813],
            [2001, 7719],
            [2002, 2722],
            [2003, 2789],
            [2004, 11720],
            [2005, 13730],
            [2006, 2636],
            [2007, 1598],
            [2008, 2610],
            [2009, 1655],
            [2010, 1695],
            [2011, 6673],
            [2012, 1553],
            [2013, 2774],
            [2014, 1728]
          ]
        }
      };

      var i = 0;
      $.each(datasets, function(key, val) {
        val.color = i;
        ++i;
      });

      var choiceContainer = $("#choices");
      choiceContainer.find(".bootstrap-switch *").click(plotAccordingToChoices);

      function plotAccordingToChoices() {
        var data = [];
        choiceContainer.find("input:checked").each(function() {
          var key = $(this).attr("name");
          if (key && datasets[key]) {
            data.push(datasets[key]);
          }
        });

        if (data.length > 0) {
          $.plot("#demo-full-width-charts-1", data, {
            series: {
              lines: {
                show: true,
                lineWidth: 2,
                fill: true,
                fillColor: {
                  colors: [{
                    opacity: .8
                  }, {
                    opacity: .8
                  }]
                }
              },
              points: {
                show: true,
                fillColor: "#ddd",
                lineWidth: 2,
                radius: 4
              },
              shadowSize: 0
            },
            colors: ["#f26640", "#f0d054", "#189d88", "#4d4d4d", "#1abadf", "#79507e", "#f971a6", "#e54743", "#5395ce", "#6bbd6b"],
            grid: {
              hoverable: true,
              clickable: true,
              color: "#555",
              borderWidth: 0
            },
            legend: {
              noColumns: 3,
              margin: -15,
              backgroundColor: "#fff",
              backgroundOpacity: .5
            },
            yaxis: {
              show: false,
              min: 0,
              tickColor: "#fff",
              font: {
                color: "#aaa",
                size: 11,
                family: "Open Sans, sans-serif"
              }
            },
            xaxis: {
              tickDecimals: 0,
              tickColor: "#fff",
              font: {
                color: "#aaa",
                size: 11,
                family: "Open Sans, sans-serif"
              }
            },
            tooltip: true,
            tooltipOpts: {
              content: "$%y.2",
              shifts: {
                x: -10,
                y: 25
              }
            }
          });
        }
      }
      plotAccordingToChoices();
    });
  }

  // Calendar demo
  if ($("#calendar-dashboard")[0]) {
    $("#calendar-dashboard").fullCalendar({
      header: {
        left: 'today prev,next',
        center: 'title',
        right: 'month,basicWeek,basicDay'
      },
      editable: true,
      eventLimit: true,
      defaultDate: "2015-01-01",
      events: [{
        title: 'All Day Event',
        start: '2015-01-01',
        color: '#428bca',
        textColor: '#fff'
      }, {
        title: 'Long Event',
        start: '2015-01-12',
        end: '2015-01-14',
        color: '#5cb85c',
        textColor: '#fff'
      }, {
        id: 999,
        title: 'Repeating Event',
        start: '2015-01-08T16:00:00',
        color: '#5bc0de',
        textColor: '#fff'
      }, {
        id: 999,
        title: 'Repeating Event',
        start: '2015-01-16T16:00:00',
        color: '#f0ad4e',
        textColor: '#fff'
      }, {
        title: 'Conference',
        start: '2015-01-11',
        end: '2014-01-13',
        color: '#d9534f',
        textColor: '#fff'
      }, {
        title: 'Meeting',
        start: '2015-01-12T10:30:00',
        end: '2015-01-12T12:30:00',
        color: '#e31d18',
        textColor: '#fff'
      }, {
        title: 'Lunch',
        start: '2015-01-12T12:00:00',
        color: '#f2572d',
        textColor: '#fff'
      }, {
        title: 'Meeting',
        start: '2015-01-12T14:30:00',
        color: '#00947d',
        textColor: '#fff'
      }, {
        title: 'Happy Hour',
        start: '2015-01-12T17:30:00',
        color: '#5c2862',
        textColor: '#fff'
      }, {
        title: 'Dinner',
        start: '2015-01-12T20:00:00',
        color: '#f1c82d',
        textColor: '#fff'
      }, {
        title: 'Birthday Party',
        start: '2015-01-13T07:00:00',
        color: '#fa639e',
        textColor: '#fff'
      }, {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2015-01-28',
        color: '#4d4d4d',
        textColor: '#fff'
      }]
    });
  }

  // World map demo
  if ($("#dashboard-map")[0]) {
    $.getScript('./vendor/jvectormap/jquery-jvectormap-2.0.1.min.js', function(data, textStatus, jqxhr) {
      $.getScript('./vendor/jvectormap/jquery-jvectormap-world-mill-en.js', function(data, textStatus, jqxhr) {
        $("#dashboard-map").vectorMap({
          map: "world_mill_en",
          scaleColors: ["#C8EEFF", "#0071A4"],
          normalizeFunction: "polynomial",
          hoverOpacity: .7,
          hoverColor: false,
          zoomOnScroll: false,
          markerStyle: {
            initial: {
              fill: "#F8E23B",
              stroke: "#383f47"
            }
          },
          regionStyle: {
            initial: {
              fill: "#9f9f9f",
              "fill-opacity": .9,
              stroke: "#fff"
            },
            hover: {
              "fill-opacity": .7
            },
            selected: {
              fill: "#1A94E0"
            }
          },
          markerStyle: {
            initial: {
              fill: "#e04a1a",
              stroke: "#FF604F",
              "fill-opacity": .5,
              "stroke-width": 1,
              "stroke-opacity": .4
            },
            hover: {
              stroke: "#C54638",
              "stroke-width": 2
            },
            selected: {
              fill: "#C54638"
            }
          },
          backgroundColor: "#fff",
          markers: [{
            latLng: [41.9, 12.45],
            name: "Vatican City"
          }, {
            latLng: [43.73, 7.41],
            name: "Monaco"
          }, {
            latLng: [-.52, 166.93],
            name: "Nauru"
          }, {
            latLng: [-8.51, 179.21],
            name: "Tuvalu"
          }, {
            latLng: [43.93, 12.46],
            name: "San Marino"
          }, {
            latLng: [47.14, 9.52],
            name: "Liechtenstein"
          }, {
            latLng: [7.11, 171.06],
            name: "Marshall Islands"
          }, {
            latLng: [17.3, -62.73],
            name: "Saint Kitts and Nevis"
          }, {
            latLng: [3.2, 73.22],
            name: "Maldives"
          }, {
            latLng: [35.88, 14.5],
            name: "Malta"
          }, {
            latLng: [12.05, -61.75],
            name: "Grenada"
          }, {
            latLng: [13.16, -61.23],
            name: "Saint Vincent and the Grenadines"
          }, {
            latLng: [13.16, -59.55],
            name: "Barbados"
          }, {
            latLng: [17.11, -61.85],
            name: "Antigua and Barbuda"
          }, {
            latLng: [-4.61, 55.45],
            name: "Seychelles"
          }, {
            latLng: [7.35, 134.46],
            name: "Palau"
          }, {
            latLng: [42.5, 1.51],
            name: "Andorra"
          }, {
            latLng: [14.01, -60.98],
            name: "Saint Lucia"
          }, {
            latLng: [6.91, 158.18],
            name: "Federated States of Micronesia"
          }, {
            latLng: [1.3, 103.8],
            name: "Singapore"
          }, {
            latLng: [1.46, 173.03],
            name: "Kiribati"
          }, {
            latLng: [-21.13, -175.2],
            name: "Tonga"
          }, {
            latLng: [15.3, -61.38],
            name: "Dominica"
          }, {
            latLng: [-20.2, 57.5],
            name: "Mauritius"
          }, {
            latLng: [26.02, 50.55],
            name: "Bahrain"
          }, {
            latLng: [.33, 6.73],
            name: "São Tomé and Príncipe"
          }]
        });
      });
    });
  }

  // Traffic table pie&line demo
  if ($(".traffic-pie")[0]) {
    $(".traffic-pie").sparkline("html", {
      type: "pie",
      width: "35",
      height: "35",
      sliceColors: ["#02b4dd", "#f2572d", "#f0ad4e", "#d9534f", "#00947d", "#5c2862", "#4d4d4d", "#fa639e "]
    });
  }
  if ($(".traffic-line")[0]) {
    $(".traffic-line").sparkline("html", {
      type: "line",
      lineColor: "#428bca",
      width: "100",
      height: "35",
      fillColor: "#02b4dd",
      lineWidth: 1,
      spotRadius: 3,
      spotColor: "#f4b66d",
      minSpotColor: "#5cb85c",
      maxSpotColor: "#d9534f",
      highlightSpotColor: "#a3a3a3"
    });
  }

  // Server Status demo
  if ($("#server-stu-cpu")[0]) {
    $("#server-stu-cpu").easyPieChart({
      animate: 2000,
      barColor: "#5cb85c",
      trackColor: "#eee",
      scaleColor: "#ddd",
      lineCap: "butt",
      lineWidth: 10,
      size: 100
    });
  }
  if ($("#server-stu-memory")[0]) {
    $("#server-stu-memory").easyPieChart({
      animate: 2000,
      barColor: "#d9534f",
      trackColor: "#eee",
      scaleColor: "#ddd",
      lineCap: "butt",
      lineWidth: 10,
      size: 100
    });
  }
  if ($("#server-stu-disk")[0]) {
    $("#server-stu-disk").easyPieChart({
      animate: 2000,
      barColor: "#00947d",
      trackColor: "#eee",
      scaleColor: "#ddd",
      lineCap: "butt",
      lineWidth: 10,
      size: 100
    });
  }
  if ($("#server-stu-bandwidth")[0]) {
    $("#server-stu-bandwidth").easyPieChart({
      animate: 2000,
      barColor: "#e31d18",
      trackColor: "#eee",
      scaleColor: "#ddd",
      lineCap: "butt",
      lineWidth: 10,
      size: 100
    });
  }
  if ($("#server-stu-database")[0]) {
    $("#server-stu-database").easyPieChart({
      animate: 2000,
      barColor: "#02b4dd",
      trackColor: "#eee",
      scaleColor: "#ddd",
      lineCap: "butt",
      lineWidth: 10,
      size: 100
    });
  }
  if ($("#server-stu-email")[0]) {
    $("#server-stu-email").easyPieChart({
      animate: 2000,
      barColor: "#fa639e",
      trackColor: "#eee",
      scaleColor: "#ddd",
      lineCap: "butt",
      lineWidth: 10,
      size: 100
    });
  }

  // Google map demo
  if ($("#google_map_dashboard")[0]) {
    var map = new GMaps({
      div: '#google_map_dashboard',
      lat: -12.043333,
      lng: -77.028333
    });
    GMaps.geolocate({
      success: function(position) {
        map.setCenter(position.coords.latitude, position.coords.longitude);
      },
      error: function(error) {
        alert('Geolocation failed: ' + error.message);
      },
      not_supported: function() {
        alert("Your browser does not support geolocation");
      },
      always: function() {
        // alert("Done!");
      }
    });
  }

});
/**
 * Dashboard demo end
 */