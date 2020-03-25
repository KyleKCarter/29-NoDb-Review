import React, {Component} from 'react';
import axios from 'axios';

class PostDestination extends Component {
    constructor() {
        super()
        this.state = {
            img: '', 
            place: '', 
            dates: '', 
            weather: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleClick = () => {
        const {img, place, dates, weather} = this.state;
        axios.post('/api/travel', {
            img,
            place,
            dates,
            weather
        }).then(response => {
            console.log(response)
            this.setState({
                img: '',
                place: '',
                dates: '',
                weather: ''
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        // console.log(this.state)
        const {img, place, dates, weather} = this.state;
        return (
            <div>
                <h1>Post Destination</h1>
                <input type="text" placeholder='Place' onChange={this.handleChange} name='place' value={place}/>
                <input type="text" placeholder='Img' onChange={this.handleChange} name='img' value={img}/>
                <img src={img} alt=""/>
                <input type="text" placeholder='Dates' onChange={this.handleChange} name='dates' value={dates}/>
                <input type="text" placeholder='Weather' onChange={this.handleChange} name='weather' value={weather}/>
                <button onClick={this.handleClick}>Add Destination</button>
            </div>
        )
    }
}

export default PostDestination;