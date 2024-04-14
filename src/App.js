
import './App.css';
import Weather from"./Weather.js";


function App() {
  return (
    <div className="App">

   <Weather defaultCity="New York"/>
   <footer className="text-center">This project was coded by Cristina Mihalachi and it is <a href="https://github.com/cristina793/clever-weather" target="_blank" rel="noreferrer"> open-sourced on GitHub </a> .</footer>
       </div>
  );
}

export default App;
