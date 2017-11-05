console.log('App.js is running');

// JSX - JavaScript XML
//var template = <p>This is JSX!</p>;
var template = React.createElement(
    "h1",
    { id: 'app' },
    "This is JSX"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);