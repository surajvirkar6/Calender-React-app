import './index.css';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'

function App() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <div className="container my-3">
      <div className="App">
        <Calendar value={dateState} onChange={changeDate} />
        <p>Current Selected date is: {moment(dateState).format('MMMM Do YYYY')}</p>
      </div>
    </div>
  );
}

export default App;
