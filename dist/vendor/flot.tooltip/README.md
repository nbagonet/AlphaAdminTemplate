# jquery.flot.tooltip
__tooltip plugin for wonderful Flot plotting library__

For information about Flot library [go here](http://www.flotcharts.org/).

Works also with Time series data and supports Date formatting in the same way as Flot itself.
You can fully define content of tip (with values precision) and you can use HTML tags too.
Flot Tooltip can be easily customized with CSS. Just do what you want with `#flotTip` in your stylesheet.

Check `examples` folder for details of how to use it.


## How to use
Download and include on your page __after__ main jquery.flot library:

-   [Latest Release](https://github.com/krzysu/flot.tooltip/releases/latest)
-   [Nightly Build](https://raw.github.com/krzysu/flot.tooltip/master/js/jquery.flot.tooltip.js)

You can also use bower package manager:

    bower install flot.tooltip

__Important!__ You need to set flot option `hoverable` to `true` if you want flot.tooltip plugin to work.

    grid: {
      hoverable: true 
    }

### Plugin Options

In comments there are default values  

    tooltip:            boolean                 //false
    tooltipOpts: {
        id:             string                  //"flotTip"
        content:        string or function      //"%s | X: %x | Y: %y"
        xDateFormat:    string                  //null
        yDateFormat:    string                  //null
        monthNames:     string                  // null
        dayNames:       string                  // null
        shifts: {
            x:          int                     //10
            y:          int                     //20
        }
        defaultTheme:   boolean                 //true
        lines: {
            track:      boolean                 //false
            threshold:  number                  //0.05
        }
        onHover:        function(flotItem, $tooltipEl)
        compat:         boolean                 //false
    }


-   `tooltip` : set to `true` to turn on this plugin (if `grid.hoverable` is also set to `true`)
-   `id` : the id to assign to the tooltip's HTML DIV element, defaulted to "flotTip" 
-   `content` : content of your tooltip, HTML tags are also allowed; use `%s` for series label, `%x` for X value, `%y` for Y value and `%p` for percentage value (useful with pie charts using flot.pie plugin)  
	With `%x`, `%y` and `%p` values you can also use `.precision`, for example `%x.2` means that value of X will be rounded to 2 digits after the decimal point.   
  If no precision or dateFormat is set then plugin uses tickFormatter to format values displayed on tooltip.  
  If you require even more control over how the tooltip is generated you can pass a callback `function(label, xval, yval, flotItem)` that must return a string with the format described.  
  Pull request [#64](https://github.com/krzysu/flot.tooltip/pull/64) introduced two more placeholders `%lx` and `%ly`, that work with flot-axislabels plugin.  
  Pull request [#75](https://github.com/krzysu/flot.tooltip/pull/75) introduced `%ct` placeholder for any custom text withing label (see example in `examples/custom-label-text.html`)  
-   `xDateFormat` : you can use the same specifiers as in Flot, for time mode data
-   `yDateFormat` : you can use the same specifiers as in Flot, for time mode data
-   `monthNames` : check [#28](https://github.com/krzysu/flot.tooltip/issues/28)
-   `dayNames` : check [#28](https://github.com/krzysu/flot.tooltip/issues/28)
-   `shifts` : shift tooltip position regarding mouse pointer for `x` and `y`, negative values are ok
-   `defaultTheme` : plugin have default theme build-in but here you can switch it off and adjust look of tip styling `#flotTip` (or whatever you set the id option to) in your CSS
-   `lines.track` : whether or not to have a tooltip on hover for lines between points
-   `lines.threshold` : the data-based threshold for the maximum distance from the line to show the tooltip
-   `onHover` : callback that allows you i.e. change color of the border of the tooltip according to the currently hovered series
-   `$compat` : whether or not to use compatibility mode - set this to true if you are using jQuery <1.2.6

## Supported plugins

-   [stack](http://www.flotcharts.org/flot/examples/stacking/index.html)
-   [pie](http://www.flotcharts.org/flot/examples/series-pie/index.html)
-   [threshold](http://www.flotcharts.org/flot/examples/threshold/index.html)
-   [axislabels](https://github.com/markrcote/flot-axislabels)
-   [tickRotor](https://github.com/markrcote/flot-tickrotor)
-   [stackpercent](https://github.com/skeleton9/flot.stackpercent)

## For developers/contributors

If you wish to contribute, please do so by editing the jquery.flot.tooltip.source.js file.  The other .js files are built with Grunt and should not be directly edited.

When working with external plugin support, you can use the array plotPlugins (via this.plotPlugins), which is a collection of the names of the currently loaded Flot plugins.  For instance if checking for the existance of the official
symbol plugin, you would check `if ($.inArray(this.plotPlugins, 'symbol') !== -1)`.

There exists a Gruntfile.js for development purposes, but please do not commit built production or minified .js files when making a pull request.  Additionally, do not change the version, because the new version could vary depending on
when the pull request is merged and how many other changes were made at the same time.

## Changelog


### What's new in v0.8.4?

-   merged pull request [#87](https://github.com/krzysu/flot.tooltip/pull/87), adding compatibility with jQuery < 1.2.6
-   added new API functions to Flot's base plot object:
    -   `setTooltipPosition(pos)`
    -   `showTooltip(item, pos)`
    -   `hideTooltip()`
-   cleaned a lot of the source code for better maintainability and development

### v0.8.3

-   merged pull requests: [#86](https://github.com/krzysu/flot.tooltip/pull/86), [#85](https://github.com/krzysu/flot.tooltip/pull/85), [#83](https://github.com/krzysu/flot.tooltip/pull/83)
-   pull request #86 introduced support for showing tooltips when hovering over the lines between points
-   dropped the IE polyfill indexOf in favor of jQuery's $.inArray
-   these changes were actually distributed across v0.8.0-v0.8.3, but they all happened one after another so the changes have been summarized together

### v0.7.1

-   merged pull requests: [#78](https://github.com/krzysu/flot.tooltip/pull/78), [#74](https://github.com/krzysu/flot.tooltip/pull/74), [#75](https://github.com/krzysu/flot.tooltip/pull/75)
-   added support for any arbitrary text in a label with a new `%ct` placeholder (see [#75](https://github.com/krzysu/flot.tooltip/pull/75) or example in `examples/custom-label-text.html`)

### v0.7.0

-   added time zone support by using $.plot.dateGenerator by [@ilvalle](https://github.com/ilvalle)
-   this version requires that jquery.flot.js is **updated to the v8.3**

### v0.6.7

-   added support for tickRotor plugin, thanks to [@pauljandrew](https://github.com/pauljandrew)
-   added support for flot-axislabels plugin (https://github.com/markrcote/flot-axislabels) through two new placeholders "%lx" and "%ly" for respectively x and y axis labels, thanks to [@LoicUV](https://github.com/LoicUV)
-   added a plugin "detection" system for facilitating further plugin-dependent developments
-   some bug fixes, thanks to [@vitorbaptista](https://github.com/vitorbaptista)

### v0.6.6

-   added support for custom tick label on y axis, thanks to [@LoicUV](https://github.com/LoicUV)

### v0.6.5

-   added support for threshold.plugin with new example, fixed [#57](https://github.com/krzysu/flot.tooltip/issues/57), thanks to [@juerkkil](https://github.com/juerkkil)

### v0.6.4

-   great job by [@Lukindo](https://github.com/Lukindo), fixed a few issues:
    -   precision in x or y value [#50](https://github.com/krzysu/flot.tooltip/issues/50)
    -   concerning $ escaping [#16](https://github.com/krzysu/flot.tooltip/issues/16)
    -   use custom ticks if given [#18](https://github.com/krzysu/flot.tooltip/issues/18)
    -   remove %s if series label is undefined [#41](https://github.com/krzysu/flot.tooltip/issues/41)

### v0.6.3

-   enable Flot original ability to change both dayNames and monthNames, fix [#28](https://github.com/krzysu/flot.tooltip/issues/28), thanks to [@Jako](https://github.com/Jako)

### v0.6.2

-   events are properly unbinded on shutdown, thanks to [@maplemuse](https://github.com/maplemuse)
-   hide empty tooltip div on init, thanks to [@ulipollo](https://github.com/ulipollo)

### v0.6 and v0.6.1

-   nothing from user perspective :) 
-   another refactoring, `FlotTooltip` object structure changed to allow many instances to fix issue #13 (regression after v0.5 refactoring)

### v0.5.1

-   `content` can be a function (thx to [@fmsf](https://github.com/fmsf) for pull request)

### v0.5

-   refactoring + fixed few issues (#7 and #11)
-   `dateFormat` option replaced with `xDateFormat` and `yDateFormat` to support both axes
-   changed string formatter logic:
    -   if any axis has `mode == time` then format value according to axis date format (if defined) or tick format
    -   if value has set precision, use it
    -   in the end use tick formatter for the axis

### v0.4.4

-   add jquery.flot.pie plugin support, you can display percentage value on tooltip (thx to [@ismyrnow](https://github.com/ismyrnow) for pull request)

### v0.4.3

-   add jquery.flot.stack plugin support, values in tooltip are now displayed correctly (issue #3)

### v0.4.2

-   tooltip is appended to `body`, not `placeholder` of graph
-   changed default values of tip's shifts
-   time is formatted when first axis of flot's multi-axes is in time mode (issue #2) (full multi-axes support maybe in the future)
-   `#flotTip` container is initialized only if it does not exist (see new multiple-axes example and re-initialize plot)

### v0.4.1

-   default theme with new option to disable it if you like to add your own styles

### v0.4

Now you can easily set precision of values displayed on tip thanks to enhanced _string formatter_.
Just put your desired precision after value in format like this `%x.precision`, 
where _precision_ is a number of digits to appear after the decimal point. It uses `number.toFixed(precision)` function internally.

What is more _string formatter_ was rewritten and now is RegExp based.

#### Examples:

    content: "value of X is %x.1 and value of Y is %y.4 and they belong to '%s' series"
    content: "<h4>%s</h4><ul><li>X is %x</li><li>Y is %y.2</li></ul>"

### v0.3

I'd like to introduce _string formatter_. Now you can easily define how content of your flot.tooltip should look like.
You can also use HTML tags!

Just use new option called `content`. The following specifiers are supported:

-   `%x`: for X value
-   `%y`: for Y value
-   `%s`: for series label

From now on also minified version is available.

### v0.2 ###

-   many series support with series name on the tooltip
-   date and time formatting can be defined when in time mode (using internal plot function)
-   tooltip position shift can be defined


## Contributors

-   [@Roundaround](https://github.com/Roundaround) - continuous contributor and co-author
-   [@ismyrnow](https://github.com/ismyrnow) - add jquery.flot.pie plugin support
-   [@fmsf](https://github.com/fmsf) - `content` can be a function
-   [@pdelanauze](https://github.com/pdelanauze) - upgrade to gruntjs v0.4 + memory usage optimization
-   [@grrowl](https://github.com/grrowl) - fix tooltip position for touch devices
-   [@Athanasius](https://github.com/Athanasius) - fix issue #17, Tooltip is outside the window
-   [@erezmazor](https://github.com/erezmazor) - added label to the signature of content function to allow for fully custom label drawing
-   [@maplemuse](https://github.com/maplemuse) - pull request [#39](https://github.com/krzysu/flot.tooltip/pull/39)
-   [@ulipollo](https://github.com/ulipollo) - pull request [#42](https://github.com/krzysu/flot.tooltip/pull/42)
-   [@Augi](https://github.com/Augi) - pull request [#36](https://github.com/krzysu/flot.tooltip/pull/36)
-   [@eunomie](https://github.com/eunomie) - pull request [#52](https://github.com/krzysu/flot.tooltip/pull/52)
-   [@Jako](https://github.com/Jako) - pull request [#55](https://github.com/krzysu/flot.tooltip/pull/52), fix for issue #28
-   [@Lukindo](https://github.com/Lukindo) - pull request [#56](https://github.com/krzysu/flot.tooltip/pull/52), fix for issues: #50, #16, #18 and #41
-   [@LoicUV](https://github.com/LoicUV) - pull request [#62](https://github.com/krzysu/flot.tooltip/pull/62), added support for custom tick label on y axis, pull request [#64](https://github.com/krzysu/flot.tooltip/pull/64), support for flot-axislabels plugin
-   [@vitorbaptista](https://github.com/vitorbaptista) - pull request [#66](https://github.com/krzysu/flot.tooltip/pull/66), fix tooltip when displaying multiple series
-   [@pauljandrew](https://github.com/pauljandrew) - pull request [#67](https://github.com/krzysu/flot.tooltip/pull/67), add support for tickRotor plugin
-   [@pib](https://github.com/pib) - bower package manager configuration file
-   [@ilvalle](https://github.com/ilvalle) - pull request [#77](https://github.com/krzysu/flot.tooltip/pull/77), added time zone support by using $.plot.dateGenerator
-   [@willianganzert](https://github.com/willianganzert) - pull request [#83](https://github.com/krzysu/flot.tooltip/pull/83), Add "id" to tooltip element
-   [@larsenmtl](https://github.com/larsenmtl) - pull request [#85](https://github.com/krzysu/flot.tooltip/pull/85), Support for stacked percent plugin
-   [@RoboterHund](https://github.com/RoboterHund) - pull request [#87](https://github.com/krzysu/flot.tooltip/pull/86), Compatibility fix for older versions of jQuery

* * *
Copyright (c) 2011-2014 Krzysztof Urbas (@krzysu) & Evan Steinkerchner (@Roundaround).

__jquery.flot.tooltip__ is available under the MIT license.
