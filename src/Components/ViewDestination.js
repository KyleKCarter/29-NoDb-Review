import React, { Component } from 'react'
import axios from 'axios'

import Places from './Places'

class ViewDestination extends Component {
    constructor() {
        super()
        this.state = {
            allDestinations: []
        }
    }

    componentDidMount() {
        axios.get('/api/travel')
            .then(response => {
                this.setState({ allDestinations: response.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    updateAllDestinations = newArr => {
        this.setState({allDestinations: newArr})
    }

    render() {
        console.log(this.state.allDestinations)
        let mappedDestinations = this.state.allDestinations.map((val, index) => {
            return (
                <Places val={val} updateAllDestinations={this.updateAllDestinations}/>
            )
        })
        return (
            <div>
                <h1>My Destinations</h1>
                {mappedDestinations}
            </div>
        )
    }
}

export default ViewDestination