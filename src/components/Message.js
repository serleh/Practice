import React, { Component } from 'react'

 class Message extends Component {

  constructor(){
    super()
      this.state = {
        message:'Welcome Saleh'
      
    }
  }

   changeMessage(){
     this.setState({
       message:"Bye Saleh"
     })
   }

  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={()=>this.changeMessage()}>Suscribe</button>
      </div>
    )
  }
}

export default Message
