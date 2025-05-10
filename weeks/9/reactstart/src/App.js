import logo from './logo.svg';
import './App.css';

const Images = [
'https://assets.pikiran-rakyat.com/crop/0x131:1027x817/157x94/webp/photo/2022/09/25/1515576310.jpg',
'https://assets.pikiran-rakyat.com/crop/0x0:0x0/157x94/webp/photo/2025/05/03/1848998947.jpg',
'https://assets.pikiran-rakyat.com/crop/0x0:0x0/157x94/webp/photo/2025/05/03/1084466508.jpg',
]

  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Images.map((img)=> {
          return <img src={img} className="App-logo" alt="logo" />})}
        
        <p>
          Programming 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
