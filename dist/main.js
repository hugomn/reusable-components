var reusable = (function (React) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  function Header () {
    return React.createElement("h1", null, "Hello, React Day!");
  }

  return Header;

}(React));
