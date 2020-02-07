import React, { Component } from 'react'
import axios from 'axios';


class Infos extends Component {
    state = {
        movie : []
    }

    sourceToBadge = (source, score) => {
        switch(source){
            case 'Internet Movie Database':
                return (
                    <div>
                        <img src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" alt={source} /> <span>{score}</span>
                    </div>
                )

            case 'Rotten Tomatoes':
                return (
                    <div>
                        <img src="https://www.rottentomatoes.com/static/images/trademark/rottentomatoes_logo_40.png" alt={source} /> <span>{score}</span>
                    </div>
                )

            case 'Metacritic':
                return (
                    <div>
                        <img src="https://logodix.com/logo/2198094.png" alt={source} /> <span>{score}</span>
                    </div>
                )
            
            default:
                return <div></div>
        }
    }

    render() { 
        const  data  = this.state.movie;

        return (
            <div className="movieList">
                <h1>{data.Title}</h1>
                <img src={data.Poster} alt={data.Title}/>
                <h3>{data.Director ? 'Dir. '+ data.Director :''}</h3>  
                <h3>{data.Year ? 'Year. '+ data.Year :''}</h3>  
                <h3>{data.Genre ? 'Genre. '+ data.Genre :''}</h3>  
                <h4>{data.Country ? 'Country. '+ data.Country :''}</h4>  
                <h4>{data.Language ? 'Language. '+ data.Language :''}</h4>  
                <h4>{data.Runtime ? 'Runtime. '+ data.Runtime :''}</h4>  
                <p>{data.Plot ? ''+ data.Plot :''}</p>  

                
                <div className={data.Ratings?"ratings":""}>
                    {
                       data.Ratings ? 
                       data.Ratings.map(r => this.sourceToBadge(r.Source, r.Value)) : 
                       null
                    }
                </div>
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

export default Infos;