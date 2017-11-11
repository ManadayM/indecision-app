class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne(){
        console.log('handle add one');
    }
    handleMinusOne(){
        console.log('handle minus one');
    }
    handleReset(){
        console.log('handle reset');
    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = function(){
//     count++;
//     renderCounterApp();
// };

// const minusOne = function(){
//     count--;
//     renderCounterApp();
// };

// const reset = function(){
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
    
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
    
//     ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();