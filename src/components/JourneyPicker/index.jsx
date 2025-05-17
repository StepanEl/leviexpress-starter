import React, { useEffect, useState } from 'react';
import './style.css';




export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('')
  const [toCity, setToCity] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromCity, toCity, date)

  };




  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value= {fromCity} onChange={(event) => setFromCity(event.target.value)}>
              <option value="">Vyberte</option>
              <option value='mesto 01'>Město 01</option>
              <option value='mesto 02'>Město 02</option>
              <option value='mesto 03'>Město 03</option>
              <option value='mesto 04'>Město 04</option>
              <option value='mesto 05'>Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(event) => setToCity(event.target.value)}>
              <option value="">Vyberte</option>
              <option value='mesto 01'>Město 01</option>
              <option value='mesto 02'>Město 02</option>
              <option value='mesto 03'>Město 03</option>
              <option value='mesto 04'>Město 04</option>
              <option value='mesto 05'>Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(event) => setDate(event.target.value)}>
              <option value="">Vyberte</option>
              <option value='datum 01'>Datum 01</option>
              <option value='datum 02'>Datum 02</option>
              <option value='datum 03'>Datum 03</option>
              <option value='datum 04'>Datum 04</option>
              <option value='datum 05'>Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
}
