import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='myBox'>
         <div className="myTitlle"></div>
          <div className="insertDados">
            <form>
              <label>
                <input type="text" name="Nome do Usuário" />
                <input type="text" message="Mensagem" />
                <button onClick={() => this.setState({nome: 'React'})} >Enviar</button>            
              </label>
            </form>
         </div>
      </div> 
    </div>
  );
}

export default App;
