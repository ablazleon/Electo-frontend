import React, { Component } from 'react';
import Chart from "react-google-charts";


const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700]
];

class ChoroplethMap extends Component {



    render() {
      var data = [
        ["Provinces", "Latitude"],
        [{v: 'ES-MD', f: 'Madrid'}, 1],
        [{v: 'ES-CT', f: 'Cataluña'}, 2],



  ];


        return (
          <div className="App">
                  <Chart chartType="GeoChart" width="100%" height="400px"  options={{ region : 'ES', resolution : 'provinces', colorAxis: {colors: ['blue', 'orange', 'red','purple']}}} data={data}

/>
          </div>
        );
    }
}

export default ChoroplethMap;
