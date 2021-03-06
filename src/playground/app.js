// stateless function component

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    // only class based components support React Life Cycle methods - obviously :)
    componentDidMount() {
        console.log('componentDidMount');
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        } catch (e) {
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate - outer');
        if(prevState.options.length !== this.state.options.length){
            console.log('componentDidUpdate - inner');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    // to test this method, run this in Dev Tools console
    // ReactDOM.render('<p>', document.getElementById('app'));
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove != option)
        }))
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

        this.setState((prevState) => ({ 
            options: prevState.options.concat(option) 
        }));
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
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
            {props.subTitle && (<h2>{props.subTitle}</h2>)}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
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
            
            { options.length === 0 && (<p>Please add an option to get started!</p>) }

            {
                options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
                )
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={ (e) => { props.handleDeleteOption(props.optionText) }}
            >
                Remove
            </button>
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
        
        this.setState(() => ({ error }));

        if(!error){
            $el.value = '';
        }
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));