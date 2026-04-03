import React,{useState,useEffect} from 'react';
import './App.css';
import Counter from './components/counter';
import Controlled from './components/controlled';
import Initialstate from './components/Initialstate';
import Initialstate2 from './components/Initialstate2';
import MultipleInputs from './components/MultipleInputs';
import NestedState from './components/NestedState';
import UseStateTimer from './components/useStateTimer';
import UseEffect from './components/UseEffect';
import UseRefCounter from './components/UseRefCounter';
import UseCallback from './components/UseCallback';
import Comp2 from './components/comp2';
import { Counti } from './components/context';
import UseReducer from './components/UseReducer';
import UseReducer2 from './components/UseReducer2';
import Form from './components/form';
import Uncontrolled from './components/uncontrolled';
import ThemeChange from './components/ThemeChange';
import BasicRouting from './components/Routing/BasicRouting';
import MainRouting from './components/Routing/MainRouting';
import Routes1 from './components/RoutingwithpassingValues/Routes1';
import MainRoutes from './components/RoutingWithParams/MainRoutes';

function App() {
  const [count,setCount]=useState(80);
  return (
      <div>
      <Counti.Provider value={{count,setCount}}>

        <Counter/>
        <Controlled/>
        <Initialstate/>
        <Initialstate2/>
        <MultipleInputs/>
        <NestedState/>
        <UseStateTimer/>
        <UseEffect/>
        <UseRefCounter/>
        <UseCallback/>
        <Comp2/>
        <UseReducer/>
        <UseReducer2/>
        <Form/>
        <Uncontrolled/>
        <ThemeChange/>
       <BasicRouting/>
       <MainRouting/>
       <Routes1/>
       <MainRoutes/>
      </Counti.Provider>
      
    </div>
  );
}

export default App;
