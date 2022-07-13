import React from 'react'
import Styled from 'styled-components';
import ListTripesPage from './pages/ListTripsPage';
// import ApplicationFormPage from './pages/ApplicationFormPage'
import LoginPage from './pages/LoginPage'
// import CreateTripPage from './pages/CreateTripPage';
// import TripDetailsPage from './pages/TripDetailsPage';

const [viagens, setVerViagens] = useState(changeViagens)
const [areaAdmin, setAreaAdmin] = useState(changeArea)

const changeViagens = (event) => {
  setVerViagens(event.target.value)
}

const changeArea = (event) => {
  setAreaAdmin(event.target.value)
}
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
function App() {
  return (
    <Home>
      <Tittle>
        <h1>LabeX</h1>
      </Tittle>
      <Buttons>
        <button onClick={changeViagens} value={"viagens"}>Ver viagens</button>
        <button onChange={changeArea} value={"areaAdmin"}>Área de Admin</button>
      </Buttons>
      {viagens === <ListTripesPage changeViagens={ListTripesPage}/>}
      {areaAdmin === <LoginPage changeArea={LoginPage}/>}
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
