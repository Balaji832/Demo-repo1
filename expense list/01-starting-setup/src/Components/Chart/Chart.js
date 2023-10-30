import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";
const Chart=(Props)=>{
  const maxvlaue=Props.datapoints.map((element)=>element.value)
  const max=Math.max(...maxvlaue);
  return (
  
    <div className="chart">
      {Props.datapoints.map((element)=><ChartBar
      key={element.label}
      value={element.value}
      maxvalue={max}
      label={element.label} />)}
    </div>
  );
}; 

export default Chart;