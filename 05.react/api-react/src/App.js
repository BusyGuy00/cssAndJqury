import './App.css';
import { UsersProvider } from './UserContext';
import Users from './components/Users';


function App() {
  return (
    <div className="App">
      <UsersProvider>
        {/* UsersProvider가 chidren을 통해서(위치에) Users/감싸서 사용한다  */}
      <Users/> 
      </UsersProvider>
    </div>
  );
}

export default App;
