import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'React'
      }
    }

    handleUsernameChange = (event)=>{
       this.setState({
         username: event.target.value
       })
    }

    handleCommentsChange = event=>{
      this.setState({
        comments:event.target.value
      })
    }

    handleTopicChange = event =>{
      this.setState({
        topic:event.target.value
      })
    }

     handleSumit = event =>{
       alert(`${this.state.username} ${this.state.topic}`)
       event.preventDefault()
     }
  render() {
    const{username, comments, topic} = this.state
    return (
      <form onSubmit={this.handleSumit}>
          <div>
            <label>USERNAME</label> <br />
            <input type='text' value={username} onChange={this.handleUsernameChange} />
          </div>

          <div>
             <label>Comments</label>
             <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
          </div>

          <div>
            <label>TOPIC</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value='react'>REACT</option>
              <option value='vue'>Vue</option>
              <option value='angular'>Angular</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form