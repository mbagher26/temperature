import React, { Component } from 'react'

export default class Temperature extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             temp: 0,
             classTemp : 'cold'
        }
    }
    
    addTemperature(){
        if(this.temp >= 30){
            return false
        }
        this.setState(pervstate =>{
            return {temp: pervstate.temp + 1}
        })

        if(this.state.temp >= 15 ){
            this.setState(
                {classTemp : 'hot'}
            )
        }
    }
    render() {
        return (
            <>
                <div className='app-container'>
                    <div className='temperature-display'>
                        <div className={`temperature-display ${this.state.classTemp}`}>{this.state.temp}</div>
                    </div>
                    <div className='button-container'>
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            </>
        )
    }
}

