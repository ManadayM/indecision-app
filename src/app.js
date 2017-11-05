console.log('App.js is running');

// assignment
var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['Option 1', 'Option 2']
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
    </div>
);

var user = {
    name: 'Manaday Mavani',
    age: 29,
    location: 'India'
};

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);