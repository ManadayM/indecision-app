// React enforces uppercase first letter for class name
// the reason is when we keep it small React tries to create
// html element out of it.

// var jsx = React.createElement(
//     'div',
//     null,
//     React.createElement(
//         'h1',
//         null,
//         'Title'
//     ),
//     React.createElement(Header, null),
//     React.createElement(Header, null),
//     React.createElement(Header, null)
// );

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                <ol>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                <input type="text" name="option" />
                <button>Add option</button>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));