import React, {Component} from 'react';

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
        
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Post Destination</h1>
                <input type="text" placeholder='Place' onChange={this.handleChange} name='place'/>
                <input type="text" placeholder='Img' onChange={this.handleChange} name='img'/>
                <img src={this.state.img} alt=""/>
                <input type="text" placeholder='Dates' onChange={this.handleChange} name='dates'/>
                <input type="text" placeholder='Weather' onChange={this.handleChange} name='weather'/>
                <button onClick={this.handleClick}>Add Destination</button>
            </div>
        )
    }
}

export default PostDestination;