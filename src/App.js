import './App.css';
import UserSign from './View/Components/UserSign';
import UserLogin  from './View/Components/UserLogin';
import { useState } from 'react';

const App = () => {
const [user, setUser] = useState(false)

  const isUserLogin = () => {
    setUser(true)
  }

  return (
    <div className="App">
      {user ? <UserLogin /> : <UserSign />}
      
        <button onClick={isUserLogin}> click </button>
     </div>
  );
}

export default App;
