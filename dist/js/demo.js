// THIS SCRIPT IS DEMO

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
 * Icon color demo begin
 */
if ($(".demo-icons").length > 0) {
  $(function() {
    var iconColorClass = ['primary', 'success', 'info', 'warning', 'danger', 'red', 'orange', 'yellow', 'green', 'black', 'blue', 'violet', 'pink', 'grey'];
    $(".demo-icons .fa, .demo-icons .glyphicon, .demo-icons [class|='ti'], .demo-icons [class|='icon']").parent("a").each(function() {
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
          $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
          children.show('fast');
          $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
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
          console.log(e.type);
        },
        "built.cropper": function(e) {
          console.log(e.type);
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
    $("#daterange-pickers-advanced > span").html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
    $('#daterange-pickers-advanced').daterangepicker({
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
          'Last 7 Days': [moment().subtract('days', 6), moment()],
          'Last 30 Days': [moment().subtract('days', 29), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
        },
        startDate: moment().subtract('days', 29),
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