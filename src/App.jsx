import logo from './logo.svg';
import './App.css';
import ComponenteEventos from './components/ComponenteEventos';

function App() {
  return (
    <div className="App" onMouseMove={capturarRaton}>
      <header className="App-header">
        <ComponenteEventos/>
      </header>
    </div>
  );
}

export default App;
