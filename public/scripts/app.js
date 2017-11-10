'use strict';

console.log('App.js is running');

// assignment
var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

var onAddOption = function onAddOption(e) {
    e.preventDefault();

    var $el = e.target.elements.option;
    var option = $el.value;

    console.log(e);

    if (option) {
        app.options.push(option);
        $el.value = '';
        renderApp();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options.length = 0;
    app.options = [];
    renderApp();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            'p',
            null,
            app.subTitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length == 0, onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onAddOption },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
