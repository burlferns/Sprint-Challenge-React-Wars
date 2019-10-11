import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import SWList from "./components/SWList";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [SWData,setSWData] = useState({});


  const MainTitle = styled.h1`
    font-size:60px;
  `;


  useEffect( () => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        // console.log("This is response:", response);
        setSWData(response.data);
      })
      .catch(error => {
        console.log("The data was not returned",error);
      });
  },[]);


  if(SWData.results) {
    let peopleAry = SWData.results;
    // console.log(peopleAry);

    return (
      <div className="App">
        <MainTitle className="Header">React Wars</MainTitle>
        <SWList peopleAry={peopleAry} />
      </div>
    );


  } else {
    return <h3>Loading...</h3>;
  }

  
  
}

export default App;
