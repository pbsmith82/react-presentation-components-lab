// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component{

    state = {
        mood:'happy'
    }

    handleClick = () => {
    
        if (this.state.mood === 'happy'){
            this.setState({
                mood:'sad'
            })
        }else{
            this.setState({
                mood:'happy'
            })
        }
    }

    render(){
        return(
            <div onClick={this.handleClick} name="mood">{this.state.mood}</div>
        )
    }
} 
