import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';




class App extends Component {
  
  state = {
}

  componentDidMount( ){
    this._getMovies();
}

_renderMovies = () => {
  console.log("movie info start")
  const movies = this.state.movies.map((movie)=>{
    console.log(movie)
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres={movie.genres}
      synopsis={movie.synopsis}
      />
  })
  return movies;
}

 _getMovies = async () => {
  const movies = await this._callApi();
  this.setState({
    movies
  })
}

_callApi = () => {
  return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
  .then(response => response.json())
  .then(json => json.data.movies)
  .catch(err => console.log(err))
}

render(){
  console.log("app render start")
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

  

export default App;


// componentDidMount( ){
//   setTimeout(() => {
//     this.setState({
//       movies: [
//         {
//           title: "설국열차",
//           poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/3/33/%EC%84%A4%EA%B5%AD%EC%97%B4%EC%B0%A8.jpg/250px-%EC%84%A4%EA%B5%AD%EC%97%B4%EC%B0%A8.jpg"
//         },
//         {
//           title: "어벤져스 : 엔드게임",
//           poster:   "https://mania.kr/dvdprime/public_html/g2/data/cheditor5/1903/view_thumbnail/mania-done-20190315232619_rcadddzv.jpg"
//         },
//         {
//          title: "토르 : 다크월드",
//          poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a9/%ED%86%A0%EB%A5%B4_%EB%8B%A4%ED%81%AC_%EC%9B%94%EB%93%9C.jpg/250px-%ED%86%A0%EB%A5%B4_%EB%8B%A4%ED%81%AC_%EC%9B%94%EB%93%9C.jpg"
//         },
//         {
//           title: "라이온 킹",
//           poster: "https://t1.daumcdn.net/movie/af91402ca4d84418b7becf6624043eb61563411826019"
//         },
//         {
//           title: "옥자",
//           poster: "https://pds.joins.com/news/component/htmlphoto_mmdata/201706/29/2187529c-15e8-40b4-860a-0eef7fb4eda4.jpg"
//         }
//       ]
//     })
//   },3000);
// }