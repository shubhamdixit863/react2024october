import React, { Component } from 'react'

export default class ClassBased extends Component {
constructor(props){
    super(props);
    console.log("contructor got called");
    this.state={
        name:"shubham"
    }
}


componentDidMount(){
    console.log("component now mounted");
}

componentDidUpdate(){
    console.log("component got updated");
}

componentWillUnmount(){
    console.log("component unmounted")
}

changeState(name){
    console.log(name);
    this.setState({name:name})
}

  render() {
    return (
      <div>ClassBased
        <h1>{this.state.name}</h1>

        <button onClick={()=>this.changeState("john")}>
            Change State
        </button>
      </div>
    )
  }
}
