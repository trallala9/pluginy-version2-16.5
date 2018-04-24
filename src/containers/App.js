import React from 'react';
import uuid from 'uuid';
import Title from '../components/Title';
import style from './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    id: 1,
                    text: 'zadanie 1'
                }, {
                    id: 2,
                    text: 'zadanie 2'
                }, {
                    id: 3,
                    text: 'zadanie 3'
                }
            ]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data
        });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({
            data: remainder
        });
    }
    render() {
        return ( <
            div className = {
                style.TodoApp
            } >
            <
            Title title = "ToDo List"
            number = {
                this.state.data.length
            }
            />
            Tutaj pojawią się komponenty naszej aplikacji. <
            /div>
        );
    }
}


export default App;
//skonczylam na loader dla css
