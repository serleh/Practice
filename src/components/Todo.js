import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       task:'',
       listOfTask:[]
    }
  }

  setTask(value){
    this.setState({
      task:value
    })
    

  }

  addTask(){
    console.log(...this.state.listOfTask)
   this.setState({
     listOfTask:[...this.state.listOfTask, this.state.task]
   })
  }

  deleteTask(){
    this.setState({
      listOfTask:[...this.state.listOfTask.pop()]
    })
    
  }

  render() {
    return (
      <div>
        <h1>TO DO APP</h1>
        <input type='text' value={this.state.task} onChange={(e)=>this.setTask(e.target.value)}/>
        <button onClick={()=>this.addTask()}>ADD TASK</button>
        <button onClick={()=>this.deleteTask}>Delete</button>

       <div  className='card'>
      <ul> {
          this.state.listOfTask.map((item, index)=>{
            return (<li key={index}>{item}</li>)
          })
        } 
        </ul>
        </div>
      </div>
    )
  }
}
