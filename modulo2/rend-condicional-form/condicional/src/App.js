import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Fim';
import React from 'react';
import styled from 'styled-components'

const Botao = styled.button`
display: block;
margin: auto;
`


export default class App extends React.Component {
  state = {
    pagina: 1
  };

  proximaPag = () => {
    if (this.state.pagina < 4) {
      this.setState({ pagina: this.state.pagina + 1 })
    }
  };

  render() {

    let secao;
    switch (this.state.pagina) {
      case 1:
        secao = <Etapa1 />;
        break;
      case 2:
        secao = <Etapa2 />;
        break;
      case 3:
        secao = <Etapa3 />
        break;
      case 4:
        secao = <Etapa4 />;
        break;
      default:
        secao = <Etapa1 />
    }

    const imprimeBotao = () => {
      if (this.state.pagina < 4) {
        return <Botao onClick={this.proximaPag}>Próxima Etapa</Botao>
      }

    }

    return (
      <div>
        {secao}
        {imprimeBotao()}
      </div>

    )

  }


}
