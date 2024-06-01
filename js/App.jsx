import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import Dashboard1 from './Dashboard1';
import Dashboard2 from './Dashboard2';
// import Dashboard3 from './Dashboard3';
import Login from '../Login';

const App = () => {
  const [type, setType] = useState('');
  const [dashboardType, setDashboardType] = useState('');

  useEffect(() => {
    const type = document.getElementById('root')?.getAttribute('type') || '';
    setType(type);

    if (type === 'hub') {
     
      const condition = 1; 

      if (condition == 1 ) {
        setDashboardType('dash1');
      } else if (condition == 2) {
        setDashboardType('dash2');
      }
      //  else {
        // setDashboardType('dash3');
      // }
    }
  }, [type]);

  const renderDashboard = () => {
    switch (dashboardType) {
      case 'dash1':
        return <Dashboard1 />;
      case 'dash2':
        return <Dashboard2 />;
      // case 'dash3':
        // return <Dashboard3 />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      {type === 'hub' ? renderDashboard() : <Login />}
    </div>
  );
};

export default App;
