import "./App.css";
import ButtonsContent from "./components/ButtonsContent";

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <h1>Button Component</h1>
        <ButtonsContent />
        <div>
          <p>Created by Sreejith [ser-07] - devChallenges.io</p>
          <a href="https://github.com/ser-07">GitHub</a>
          <span>||</span>
          <a href="https://twitter.com/SER__07">Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default App;
