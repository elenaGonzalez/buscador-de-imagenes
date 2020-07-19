import React, { Component } from 'react';
import './App.css';
import Buscador from '../src/components/Buscador';
import Resultado from '../src/components/Resultado';

class App extends Component{
    state = {
        termino: "",
        imagenes: [],
        pagina: ""
    }

    scroll = () => {
        const elemento = document.querySelector(".jumbotron");
        elemento.scrollIntoView("smooth","start");
    }

    paginaAnterior = () =>{
        let pagina = this.state.pagina;

        if(pagina ===1) return null

        pagina--;

        this.setState({
            pagina
        }, () => {
            this.consultarApi();
            this.scroll();
        });
        //console.log(pagina);
    }

    paginaSiguiente = () =>{
        let pagina = this.state.pagina;

        pagina++;

        this.setState({
            pagina
        }, () => {
            this.consultarApi();
            this.scroll();
        });
        //console.log(pagina);
    }
    consultarApi= () =>{
        const pagina= this.state.pagina;
        const url= `https://pixabay.com/api/?key={coloca-tu-api-key}&q=${this.state.termino}&per_page=30&page=${pagina}`;
        //console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(res => this.setState({imagenes: res.hits}))
    }

    datosBusqueda= (termino)=>{
        this.setState({
            termino: termino,
            pagina: 1
        },() => {
            this.consultarApi();
        });
    }
    render(){
    return (
      <div className="App">
         <div className="container">
          <div className="jumbotron jumbotron-fluid bg-dark">
            <div className="container">
                <h6 className="text-info">Buscador de Imagenes</h6>
                <Buscador
                 datosBusqueda={this.datosBusqueda}
                />
            </div>
        </div>
        <div>
            <Resultado
            imagenes ={this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
            />
        </div>
        </div>
      </div>
    );
}
}

export default App;
