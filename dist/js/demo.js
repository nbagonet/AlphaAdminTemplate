/* !!!THIS SCRIPT IS DEMO USE, PLEASE DO NOT INCLUDE IT IN FORMAL SYSTEM!!! */

;
$(function() {

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
}
/**
 * Summernote Click to edit Demo end
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