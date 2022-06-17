import logo from './logo.svg';
import './App.css';
import Body from "./components/Body/Body"
import Header from "./components/Header/Header"
import { useState } from 'react';

function App() {
  const [user, setUser]= useState("Baha");
  
  
  
  return (
    <div className="expensesApp">
      {user} from App
      <Header user={user}/>
      <Body user={user} setUser={setUser}/>
      
    </div>
  );
  }

export default App;

