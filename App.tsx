import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { AuthProvider } from './src/auth/AuthContext';
import Routes from './src/navigation/Routes';


function App() {
  return (
    <AuthProvider >
        <Routes/>
    </AuthProvider>
  );
}
const styles = StyleSheet.create({

  container: {
    
    backgroundColor: '#6F7CCA'
  },
  buttons:{
    alignItems: 'center',
  },
  buttonSignUp: {
    width: 300,

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#8E2CD7'
  }
})
export default App;