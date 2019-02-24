# A React based embeddable widget script

Widget Name: Medal Count Widget

The widget is meant to be embedded on client’s websites during the Olympic games.

## Index:

- [Installation](#installation)
- [Testing](#testing)
- [Usage](#usage-under-examples)
- [Libraries](#libraries)
- [Browser Support](#browser-support)


### Installation

1.  `git clone https://github.com/rpraval1/react-embed-widget.git`
2.  `npm install`
3.  `npm run build:dev`
    This will build the widget as "medal-widget.js" in /dist folder in "development" mode
4. `npm run build:prod`
    This will build the widget as "medal-widget.js" (minified) in /dist folder in "production" mode


### Testing

Run command: `npm run test`

Library used:

1. [Mocha](https://mochajs.org/)
2. [Zombie headless browser](http://zombie.js.org/)

### Usage: (under /examples)

1. index.html: Example to test if widget is initialized with valid div element_id and a valid medal column field

```
    <section id="medal-widget"></section>
    <script type="text/javascript" src="../dist/medal-widget.js"></script>
    <script type="text/javascript">
        widget.initialize("medal-widget", "total")
    </script>
```

2. default_medal.html: Example to test if widget is initialized with valid div element_id and no medal column field

```
    <section id="medal-widget"></section>
    <script type="text/javascript" src="../dist/medal-widget.js"></script>
    <script type="text/javascript">
        widget.initialize("medal-widget")
    </script>
```

3. invalid_div.html: Example to test if widget is initialized with invalid div element_id

```
    <section id="medal-widget-1"></section>
    <script type="text/javascript" src="../dist/medal-widget.js"></script>
    <script type="text/javascript">
        widget.initialize("medal-widget")
    </script>
```

4. ie_index.html: Example to test if widget is initialized with valid div element_id and a valid medal column field in IE 11.0

```
    <script>
        var modernBrowser = (
            'fetch' in window &&
            'assign' in Object
        );

        if ( !modernBrowser ) {
            var scriptElement = document.createElement('script');

            scriptElement.async = false;
            scriptElement.src = './../dist/polyfills.js';
            document.head.appendChild(scriptElement);
        }
    </script>
    <script type="text/javascript" src="./../dist/medal-widget.js"></script>
    <script type="text/javascript">
        widget.initialize("medal-widget", "total")
    </script>
```


### Libraries

1. [React Semantic UI](https://react.semantic-ui.com/)
    One of the most commonly referrenced UI library kit with wrapper for React.

2. [Webpack Config](https://webpack.js.org/configuration)
    Configurations to make sure it creates output with recommmended development and productions settings

3. [dotenv with webpack](https://www.npmjs.com/package/dotenv-webpack)
    A secure webpack plugin that supports dotenv and other environment variables and only exposes what you choose and use.

4. [fetch api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
    The Fetch API provides an interface for making ajax call to fetch resources dynamically.

5. [Polyfills fix](https://webpack.js.org/guides/shimming/#loading-polyfills)
    Fix for rendering es6 modules / features in older browsers

### Browser Support

1. Chrome | version: 72.0.3626.109
2. Firefox | version: 64.0
3. IE | version: 11.0
4. Safari | version: 12.0.3

[ ](https://camo.githubusercontent.com/4cc964a3424ab6d3d17f31446ee3ac2451a2b140/687474703a2f2f692e696d6775722e636f6d2f34624d6d4235782e706e67)

