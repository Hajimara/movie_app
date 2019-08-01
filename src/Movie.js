import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';
// ## Basic order
// componentWillMount( ) > render( ) > componentDidMount( )

// ## UPDATE (come in new props)
// componentWillReciveProps( ) > shouldComponentUpdate( ) > componentWillUpdate( ) > render( ) > componentDidUpdate( )




function Movie ({title, poster, genres, synopsis}){ 
    console.log("movie render start")
    return(
        <div className="Movie">
            <div className="Movie__columns">
                <MoviePoster poster = {poster}/>
            </div>
            <div className="Movie__columns">
                <h1>{title}</h1>
                <div className = "Movie__Grenres">~
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index} /> )}
                </div>
                <p>
                    <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
                </p>    
            </div>
            
        </div>
    )
}

function MoviePoster ({poster, alt}){
    console.log("movieposter render start")
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}


function MovieGenre ({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie; 


// static propTypes = {// type check
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
// }




// render(){
//     console.log(this.props);
//     return(
        
//         <div>
//             <MoviePoster poster = {this.props.poster}/>
//             <h1>{this.props.title}</h1>
//         </div>
        
//     )
// }





// class MoviePoster extends Component{

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         console.log(this.props);
//         return(
//             <img src={this.props.poster} />
//         )
//     }
// }