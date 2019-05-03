import React from "react";

// export default function ResourcesPage(props){
//
// }

export default class ResourcesPage extends React.Component {
    state = {
        todos: [],
        counter: 1
    }


    componentDidMount(){}//disparan network requests
    shouldComponentUpdate(nextProps, nextState){} //para hacer optimizaciones de render - debo volver a hacer render? true/false
    componentDidUpdate(prevProps, prevState, snapshot){}
    increaseCounter = () => {
        this.setState({
            counter: this.state.counter+1
        });
    }
    addTodo = () => {
        this.setState(prevState => ({
                todos: [...prevState.todos, window.prompt("Enter your todo")]
            }));
    }
    render(){
        return (
            <div>
                <h1>Your counter is <span>{this.state.counter}</span></h1>
                <button onClick={this.increaseCounter}>Increase Counter</button>
                {
                    this.state.todos.length > 0 && <h1>todos:</h1>
                }
                {
                    this.state.todos.map((elemento, indice) =>
                        <h3 key={indice}>{elemento}</h3>
                    )
                }
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        );
    }
}

/*
  true && "hello" => "hello"
  false && "hello" => false

  undefined || "hello" => "hello"
  undefined || ()=>"hello" => fn
 */

