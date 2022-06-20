import logo from './logo.svg';
import './App.css';
import Mensagem from "./components/Mensagem";
import styled from 'styled-components';

const Base = styled.div`
display: flex;
  justify-content:center;
  height: 100vh;
  `


function App() {
  return (
    <Base>
      <Mensagem />
    </Base>
  );
}

export default App;
