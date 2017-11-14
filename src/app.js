// stateless function component

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }
    
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value';
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    const options = props.options || [];

    return (
        <div>
            <button 
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
            {options.length > 0 && (
                options.map((option) => <Option key={option} optionText={option} />)
            )}
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();
        const $el = e.target.elements.option;
        const option = ($el.value || '').trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return { error };
        });
    }

    render(){
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

// ReactDOM.render(<User name="Manaday" age="30"/>, document.getElementById('app'));
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));