console.log('App.js is running');

// assignment
const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

const onAddOption = (e) => {
    e.preventDefault();

    const $el = e.target.elements.option;
    const option = $el.value;

    console.log(e);

    if(option){
        app.options.push(option);
        $el.value = '';
        renderApp();
    }
};

const onRemoveAll = () => {
    app.options.length = 0;
    app.options = [];
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();