import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTickers } from '../api/api';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTickers(dispatch);
  }, [])

  return (
    <div>
      Hello from App!
    </div>
  );
};

export default App;