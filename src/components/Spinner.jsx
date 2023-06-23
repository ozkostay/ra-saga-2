import React from "react";
import './spinner.css'

export default function Spinner() {

  return (
    <div className="spinner">
        <span className="spinner__animation"></span>
        <span className="spinner__info">Загрузка...</span>
    </div>
  )
}