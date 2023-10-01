import React from 'react'
import moment from 'moment'
import styles from './styling.module.css'
const Article = (props) => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const day = weekday[props.date.getDay()];
  const year = props.date.getFullYear();
  const dat = props.date. getDate();
  const currentDate = day + " " + dat + "th, " + year;
  return (
    <div>
      <h2 className={styles.title}>{props.title}</h2>
      <h4  className={styles.date}>{currentDate} {props.length} min read</h4>
      <h4  className={styles.data}>{props.snippet}</h4>
    </div>
  )
}

export default Article
