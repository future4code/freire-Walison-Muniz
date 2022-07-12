import React from 'react'
// import Styled from 'styled-components';
// import ListTripesPage from './pages/ListTripsPage';
import ApplicationFormPage from './pages/ApplicationFormPage'

// const Home = Styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   //background-color: blue;
//   margin-top: 270px;
//   `
// const Tittle = Styled.div`
//   //background-color: green;
//   font-size: 18px;

//   `
// const Buttons = Styled.div`
//     height: 30px;
//     Width: 300px;
//     display: flex;
//     justify-content: space-evenly;    
//     //justify-content: space-between;
//   `
function App() {
  return (
    // <Home>
    //   <Tittle>
    //     <h1>LabeX</h1>
    //   </Tittle>
    //   <Buttons>
    //     <button>Ver viagens</button>
    //     <button>Área de Admin</button>
    //   </Buttons>
    //   <br />
    //   <br />
    //   <br />
    // <div>
    //   <ListTripesPage/>
    //   </div>
    // </Home>
    <div>
      <ApplicationFormPage/>
    </div>
  );
}

export default App;
