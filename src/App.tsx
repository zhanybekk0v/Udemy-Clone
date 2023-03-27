import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Modules/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import Router from './routes/Router';

function App() {
  return <>
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <Router />
      </AuthContextProvider>
    </BrowserRouter>

  </>;
}


export default App;
