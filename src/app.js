console.log('App.js is running');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
    </div>
);

// assignment
var template2 = (
    <div>
        <h1>Manaday Mavani</h1>
        <p>Age: 30</p>
        <p>Location: India</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);