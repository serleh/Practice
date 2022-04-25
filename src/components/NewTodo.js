import React, { Component } from 'react'

 class NewTodo extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          task:''
       }
     }

     setTask(value)  {
         console.log(value)
         this.setState({
           task:value
         })
     }
  render() {
    return (
      <div>
          <h1>MY SIMPLE TODO</h1>
          <input type='text' value={this.state.task}  onChange={(e)=>this.setTask(e.target.value)}/>
          <button>Add</button>
          <button>X</button>
      </div>
    )
  }
}

export default NewTodo