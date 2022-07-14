import React, { useState } from "react"
import Styled from 'styled-components';
import ListTripesPage from './pages/ListTripsPage';
// import ApplicationFormPage from './pages/ApplicationFormPage'
import LoginPage from './pages/LoginPage'
// import CreateTripPage from './pages/CreateTripPage';
// import TripDetailsPage from './pages/TripDetailsPage';


const Home = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: blue;
  margin-top: 270px;
  `
const Tittle = Styled.div`
  //background-color: green;
  font-size: 18px;

  `
const Buttons = Styled.div`
    height: 30px;
    Width: 300px;
    display: flex;
    justify-content: space-evenly;    
    //justify-content: space-between;
  `


const App = () => {

  const [viagens, setVerViagens] = useState();
  const [areaAdmin, setAreaAdmin] = useState();

  const changeViagens = (event) => {
    setVerViagens(event.value)
  }
  
  const changeArea = (event) => {
    setAreaAdmin(event.value)
  }

  return (
    <Home>
      <Tittle>
        <h1>LabeX</h1>
      </Tittle>
      <Buttons>
        <button onClick={changeViagens} value={"vigens"}>Ver viagens</button>
        <button onChange={changeArea} value={"areaAdmin"}>Área de Admin</button>
      </Buttons>
      {viagens === <ListTripesPage changeViagens={ListTripesPage} />}
      {areaAdmin === <LoginPage changeArea={LoginPage} />}
    </Home>
    // <div>
    //   <ApplicationFormPage/>
    // </div>
    // <div>
    //   <LoginPage/>
    // </div>
    // <div>
    //   <AdminHomePage/>
    // </div>
    // <div>
    //   <CreateTripPage/>
    // </div>
    // <div>
    //   <TripDetailsPage/>
    // </div>
    // <div>
    //  </div>
  );
}

export default App;
