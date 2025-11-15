
import React from "react";

class Counters extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        };
    }

    handleIncrement = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    };

    handleDecrement =() => {
        this.setState((prevState) =>
        ({
            count: prevState.count -1
        }));
    };

    render() {
        return (
            <div>
                <h2>Counter App</h2>
                <p>Count: {this.state.count}</p>
                <div className="flex gap-2">
                    <button onClick={this.handleIncrement}>Increment</button>
                    <button onClick={this.handleDecrement}>
                     Decrement
                    </button>

                </div>
            </div>
        )
    }
}

export default Counters;