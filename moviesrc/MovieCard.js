import React, {Component} from 'react'

class MovieCard extends Component{
    render(){
        const {data} = this.props
        return(
            <>
                <div className = "cardList" key={data.id}>
                    <div className="frame">
                        <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}`} alt={data.title}></img>
                    </div>
                    <h2>{data.title}</h2>
                    <h3>평점 : {data.vote_average}</h3>
                    <p>{data.overview}</p>
                </div>
            </>
        )
    }
}


export default MovieCard