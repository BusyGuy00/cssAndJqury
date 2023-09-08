import logo from './logo.svg';
import './App.css';
import CounterContainer from './components/CounterContainer';
import TodosContainer from './components/TodosContainer';

function App() {
  return (
    <div className="App">
     <CounterContainer/>
     <h2>할일목록</h2>
     <TodosContainer/>
    </div>
  );
}

export default App;
