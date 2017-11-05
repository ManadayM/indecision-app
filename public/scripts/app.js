'use strict';

console.log('App.js is running');

// assignment
var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
};

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subTitle
    )
);

var user = {
    name: 'Manaday Mavani',
    age: 29,
    location: 'India'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
