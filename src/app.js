console.log('App.js is running');

// assignment
var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer'
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
    </div>
);

var user = {
    name: 'Manaday Mavani',
    age: 29,
    location: 'India'
};

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);