import React from 'react'
import style from "../style.module.css";
import fintel from "../Fintel - png.png";
import monnify from "../Monnify svg.png";
import payu from "../PayU India - png.png";
import providus from "../ProvidusBank svg (1).png";
import operators from "../The Co-Operators Insurance Group - png.png";


function Toplayer() {
  return (
    <div className={style.topBG}>
      <div className={style.topflex}>
        <div>
          <img src={fintel} />
        </div>
        <div>
          <img src={monnify} />
        </div>
        <div>
          <img src={operators} />
        </div>
        <div>
          <img src={payu} />
        </div>
        <div>
          <img src={providus} />
        </div>
      </div>
    </div>
  );
}

export default Toplayer