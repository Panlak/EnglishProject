import React, { useContext } from 'react';
import { AuthProvider } from './src/auth/AuthContext';
import Routes from './src/navigation/Routes';


function App() {
  return (
    <AuthProvider>
        <Routes/>
    </AuthProvider>
  );
}

export default App;