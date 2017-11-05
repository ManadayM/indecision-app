'use strict';

console.log('App.js is running');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    )
);

// assignment
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Manaday Mavani'
    ),
    React.createElement(
        'p',
        null,
        'Age: 30'
    ),
    React.createElement(
        'p',
        null,
        'Location: India'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
