import './App.css';
import Header from './componet/Navber/Header';
import Navber from './componet/Navber/Navber';
import Navbersec from './componet/Navber/Navbersec';
import Herosection from './componet/Handpicked/Herosection';
import { Groups } from './componet/Groups/Groups';
import { Wright } from './componet/Wright/Wright';
import { Footer } from './componet/Footer/Footer';
import Addsection from './componet/Addsection/Addsection';
import { Card_icon } from './componet/Card_section/Card_icon';



function App() {
  return (
 <>
   <Navber/>
   <Header/>
   <Navbersec/>
   <Herosection/>
   <Addsection/>
   <Card_icon/>
   <Wright/>
   <Footer/>
 </>
  );
}

export default App;
