import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        Click on the malware to remove it from your computer
      </p>
      <div className="malware" onClick="bim()">
        Grrr
      </div>
      <script>
        function bim() {
          document.getElementById("malware").style.backgroundColor = "black"
          }
      </script>
    </div>
  );
}

export default App;
