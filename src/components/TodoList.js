// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todoData: props.todoData
    }
  }

  addTodo = todo => {
    this.setState({
      todoData: [
        ...this.state.todoData,
        {
          task: todo,
          completed: false
        }
      ]
    })
  }

  togglePurchased = todoTask => {
    console.log(todoTask)
    let toggled = this.state.todoData.map(element => {
      if (element.task === todoTask) {
        return {
          ...element,
          completed: true
        }
      }
      return {
        ...element
      }
    })
    console.log(toggled)
    this.setState({
      todoData: toggled
    })
  }

  clear = event => {
    event.preventDefault()
    let filtered = this.state.todoData.filter(element => element.completed === false)
    console.log(filtered)
    this.setState({todoData: filtered})
  }

  render() {
    return (
      <div>
        {this.state.todoData.map(element => {
          return <Todo todo={element} toggle={this.togglePurchased} key={Math.random()}/>
        })}
        <TodoForm updateTodoData={this.addTodo}/>
        <button onClick={this.clear}>Clear</button>
      </div>
    )
  }
}

export default TodoList