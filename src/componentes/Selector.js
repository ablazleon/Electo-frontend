import React from 'react';

export default class Selector extends React.Component {

  constructor(props){
      super(props);
      //this.Selecta = this.Selecta.bind(this);
      this.CambiarLey = this.CambiarLey.bind(this);
    //  this.cambiarDeValor = this.cambiarDeValor.bind(this);
  }

  CambiarLey(ley){
    let ano = this.props.currentAno;
    let region = this.props.currentRegion;
    let datosAntiguo = this.props.resultados;
    let url = 'http://localhost:8080/ISST-19-rest/rest/resultados?anno='+ano+'&provincia='+region+'&leyEscanos='+ley;
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(json => {
        this.props.onChangeLey(ley);
        return(this.props.onChangeTest(json));
    })
    .catch(error =>{
        console.log(error);
    });
  }



  // cambiarDeValor(valor){
  //       if(valor === 0)
  //         return 1;
  //       else
  //         return 0;
  // }

  render(){

    return(
      <select class="Selector" onChange= {(e) => this.CambiarLey(parseInt(e.target.value, 10))}>
        <option value="0">Ley D'Hondt</option>
        <option value="1">Ley Sainte-Laguë</option>
        <option value="2">Ley Proporcional Puro</option>

      </select>
    );
  }
}
