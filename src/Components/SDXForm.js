import React, { Component } from 'react'
import axios from 'axios';

class SDXForm extends Component {
    state = {
        movie : []
    }

    render() {
        console.log('render');

        const  data  = this.state.movie;
        return (
            <div class="movieList">
                <img src={data.Poster} alt={data.Title}/>
            </div>
        );
    }

    componentDidUpdate = async(prevProps) => {
        if (this.props.movieName !== prevProps.movieName) {
            var config = { API_KEY: 'b65913f3', MOVIE_NAME: this.props.movieName};
            const res = await axios.get('http://www.omdbapi.com/?apikey='+config.API_KEY+'&t='+config.MOVIE_NAME);
            this.setState({
                movie : res.data
            })
        }
    }

}

export default SDXForm;