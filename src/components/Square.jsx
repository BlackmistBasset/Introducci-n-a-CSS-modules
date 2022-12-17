import React from "react";

//css común

import "./Square.css";

//css modules:
//Nota: Para poner más de una clase se usan template literals con el formato que se muestra en la línea 15

import styles from "./square.module.css";

const Square = () => {
  return (
    <>
      <div className="square">Hola! Soy un cuadrado con css común</div>
      <div className={`${styles.square} ${styles.otra}`}>
        Hola! Soy otro cuadrado con css modules
      </div>
    </>
  );
};

export default Square;
