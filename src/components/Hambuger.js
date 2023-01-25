import React from 'react'
import style from "../style.module.css";

function Hambuger() {
  return (
    <div className={style.mobilenav}>
      <div className={style.mobilelist}>
        <p>Home</p>
        <p>About Us</p>
        <p>Features</p>
        <p>Testimonials</p>
        <div className={style.btn}>
          <button>Join a Community</button>
        </div>
      </div>
    </div>
  );
}

export default Hambuger