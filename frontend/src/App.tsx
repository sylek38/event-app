import "./App.css";
import Post from "./components/post/Post"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Navbar />
        <div className="posts">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          </div>
      </header>
    </div>
  );
}

export default App;
