import React, { Component } from 'react';

class Dashboard extends Component{

    constructor(){
        super()
        this.state = {
            firstname:'Ajinkya'
        }
    }

    render(){
        return (<div>Welcome to {this.state.firstname}'s Dashboard</div>)
    }

}

export default Dashboard;