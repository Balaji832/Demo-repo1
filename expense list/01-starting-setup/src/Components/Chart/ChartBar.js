import React from 'react';
import './CharBar.css';

const ChartBar=(Props)=>
{
  let chartfill='0%'
  if(Props.maxvalue>0){
    chartfill=Math.round((Props.value/Props.maxvalue) * 100) + '%';
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{height : chartfill}}>

        </div>
      </div>
      <div className='chart-bar__label'>{Props.label}</div>
    </div>
);
};
export default ChartBar;