
import './App.css';
import Banner from './components/Banner/Banner';
import requests from './requests';
import Row from './components/Row/Row';
import Nav from './components/Nav/Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner/>
      <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      

    </div>
  );
}

export default App;