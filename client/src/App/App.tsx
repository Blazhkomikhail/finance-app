import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTickers } from '../api/api';
import Field from '../components/Field/Field';
import './app.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTickers(dispatch);
  }, []);

  return <Field />;
};

export default App;
