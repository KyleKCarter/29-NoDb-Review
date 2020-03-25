import React, { Component } from 'react'
import axios from 'axios'

class Places extends Component {
    constructor() {
        super()
        this.state = {
            editStatus: false,
            img: '',
            place: '',
            dates: '',
            weather: ''
        }
    }

    changeEditStatus = () => {
        this.setState({editStatus: !this.state.editStatus})
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateDestination = () => {
        const {img, place, dates, weather} = this.state
        axios.put(`/api/travel/${this.props.val.id}`, {img, place, dates, weather})
            .then(response => {
                console.log(response)
                this.setState({editStatus: !this.state.editStatus})
                this.props.updateAllDestinations(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteDestination = () => {
        axios.delete(`api/travel/${this.props.val.id}`)
            .then(response => {
                this.props.updateAllDestinations(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        // console.log(this.props.val)
        console.log(this.state)
        return (
            <div>
                <img src={this.props.val.img} alt="image"/>
                <h2>{this.props.val.place}</h2>
                <p>{this.props.val.dates}</p>
                <p>{this.props.val.weather}</p>
                <button onClick={this.changeEditStatus}>Edit</button>
                {
                    this.state.editStatus === true
                    ?
                    <section>
                        <input type="text" placeholder='Image' name='img' onChange={this.handleChange} />
                        <input type="text" placeholder='Place' name='place' onChange={this.handleChange} />
                        <input type="text" placeholder='Dates' name='dates' onChange={this.handleChange} />
                        <input type="text" placeholder='Weather' name='weather' onChange={this.handleChange} />
                        <button onClick={this.updateDestination}>Update</button>
                    </section>
                    :
                    null
                }
                <button onClick={this.deleteDestination}>Delete</button>
            </div>
        )
    }
}

export default Places;
