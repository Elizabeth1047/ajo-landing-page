import React from 'react'
import style from "../style.module.css";




function Box({image,title,text}) {
  return (
    <div className={style.boxes}>
      <div>
        <img src={image} />
      </div>
      <h4>{title}</h4>
      <p>
        {text}
      </p>
    </div>
  );
}
export default Box