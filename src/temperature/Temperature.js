import React, { Component } from 'react'

export default class Temperature extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <>
                <div className='app-container'>
                    <div className='temperature-display-container'>
                        <div className='temperature-display-cold'></div>
                    </div>
                    <div className='button-container'>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </>
        )
    }
}

