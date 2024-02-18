import React, { Component } from 'react'
import ClassBased from './ClassBased'

export default class ClassComp extends Component {
    constructor(props){
        super(props)

        this.state={
            show:true
        }

        this.hideComponent=this.hideComponent.bind(this);
    }

    hideComponent(){
      //  debugger;
     this.setState({show:false})
    }

    componentWillUnmount(){
        console.log("parent unmounted")
    }

  render() {
    return (
      <div>
        {
            this.state.show?
            <ClassBased/>:""
        }
        


<button onClick={this.hideComponent}>
    Hide Component
</button>

      </div>
    )
  }
}
