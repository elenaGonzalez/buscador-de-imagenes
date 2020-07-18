import React, {Component} from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';

class Resultado extends Component{
    mostrarImagenes= () => {
     if(this.props.imagenes.legth === 0) return null;
     return(
     <div>
         <div className="col-12 p-5 row">
            {this.props.imagenes.map(imagen => (
                <Imagen
                key={imagen.id}
                imagen={imagen}
                />
            ))}
         </div>
         <Paginacion
         paginaAnterior = {this.props.paginaAnterior}
         paginaSiguiente = {this.props.paginaSiguiente}
          />
      </div>
     )
    }
    render(){
        return(
         <div>
            {this.mostrarImagenes()}
        </div>
        );
    }
}

export default Resultado;
