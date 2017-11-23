import React from 'react';

export default class AddOption extends React.Component {
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