import React, { Component } from 'react';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleSubmit(event) {
    alert('Usuário ' + this.state.usuario+"\nSenha: "+this.state.senha);
    event.preventDefault();
  }

  handleInputChange(event) {
    if(event.target.name == "usuario"){
      this.setState({usuario: event.target.value});  
    }
    else if(event.target.name == "senha"){
      this.setState({senha: event.target.value});  
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Usuário:
          <input
            name="usuario"
            type="text"
            value={this.state.usuario}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Senha
          <input
            name="senha"
            type="password"
            value={this.state.senha}
            onChange={this.handleInputChange} />
        </label>
         <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;