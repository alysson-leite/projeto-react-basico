import Text from './text/text-style';
import logo from './logo.svg';
import './App.css';
import Button from './button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text title='Componentes' />
        <Button label='Baixar CV'/>
      </header>
    </div>
  );
}

export default App;
