import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import DiscoverMovies from "./components/discover/movies"
import UpcomingMovies from "./components/discover/upcoming"
// import Tvseries from "./components/discover/tvseries"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <DiscoverMovies />
      </div>
    
    <div className="upcoming">
      <UpcomingMovies />
    </div>

    {/* <div className="tvseries">
      <Tvseries />
    </div> */}
    </div>
  )
}

export default App
