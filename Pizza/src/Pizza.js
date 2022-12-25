import React from 'react'

const Counter={
    fontSize:'50px',
    backgroundColor:'black',
    borderRadius:'20px',
    width:'279px',
    margin:'10px'
}

const Button ={
    fontSize:'25px',
    borderRadius:'5px',    
}

export default class Pizza extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }

    }
    takeOrder(){
        this.setState({
            count:this.state.count+1
        })
    }
    
    cancelOrder(){
        if(this.state.count===0) return
        this.setState({
            count:this.state.count-1
        })
    }
  render() {
    return (
      <div>
        <h1 style={Counter}>{this.state.count}</h1>
        <button style={Button} onClick={()=>this.takeOrder()}>Take Order</button>
        <br/>
        <br/>
        <button style={Button} onClick={()=>this.cancelOrder()}>Cancel Order</button>
      </div>
    )
  }
}
