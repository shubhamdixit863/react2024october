import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Todo from './components/Todo/Todo';
import Album from './components/Album/Album';
import C from './components/PropsComponents/C';
import List from './components/Todo/List';
import { useState } from 'react';
const style={
  marginTop:"100px"
}
function App() {
 const [state,setState]=useState(9);
 const fn=()=>{

 }
  return (
    <h1>App Component
      <List number={fn} data={"hello there"} />
    </h1>
  );
}

export default App;
