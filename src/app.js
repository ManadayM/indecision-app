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

let count = 0;

const addOne = function(){
    count++;
    renderCounterApp();
};

const minusOne = function(){
    count--;
    renderCounterApp();
};

const reset = function(){
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(template2, appRoot);
};

renderCounterApp();