import React from 'react'
import style from "../style.module.css";


function Authors({images,name,position,paragraph}) {
  return (
    <div className={style.authorcontainer}>
      <div className={style.authorsflex}>
        <div>
          <img src={images} />
        </div>
        <div>
          <h4>{name}</h4>
          <h5>{position}</h5>
        </div>
      </div>
      <p>{paragraph}</p>
    </div>
  );
}

export default Authors