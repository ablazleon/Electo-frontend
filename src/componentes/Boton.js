import React from 'react';

export default class Boton extends React.Component {

    constructor(props){
        super(props);
        //this.SelectorBoton = this.SelectorBoton.bind(this);
        this.CambiarAno = this.CambiarAno.bind(this);
    }

    CambiarAno(ano){
        let ley = this.props.currentLey;
        let region = this.props.currentRegion;
        let datosAntiguo = this.props.resultados;
        console.log("El botón que envio es: ")
        console.log(ano);
        let url = 'http://localhost:8080/ISST-19-rest/rest/resultados?anno='+ano+'&provincia='+region+'&leyEscano='+ley;
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(json => {
            this.props.onChangeAno(ano);
            return(this.props.onChangeTest(json));

        })
        .catch(error =>{
            console.log(error);
        });
    }


    render(){
        return(
            <button className="Botones" onClick={()=>{this.CambiarAno(parseInt(this.props.buttonName, 10))}}>{this.props.buttonName}</button>
        );
    }
}
