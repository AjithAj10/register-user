import Register from './Register';
import Login from './Login';
import { useState } from 'react';
import Home from './HomePage';

function App() {
  const [login,setLogin] = useState(false);
  return (
    <div className="App">
      {!login && <Register setLogin={setLogin} /> }
      {login === 'login' && <Login setLogin={setLogin} />} 
      {login === 'home' && <Home setLogin={setLogin} />}
    </div>
  );
}

export default App;
