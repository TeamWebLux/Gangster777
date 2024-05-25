import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  const [type, setType] = useState('');

  useEffect(() => {
    const type = document.getElementById('root')?.getAttribute('type') || '';
    setType(type);

   
  }, [type]);

  return (
    <div>
      {type === 'hub' ? <Dashboard  /> : <Login />}
    </div>
  );
};

export default App;
