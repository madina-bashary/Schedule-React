import "./App.css";
// import data from "./files/data";
// import Card from "./files/Card";
// import Star from "./files/Star";
// import Meme from "./files/Meme";
// import { useState } from "react";
// import BoxesData from "./files/BoxesData";
// import Box from "./files/Box";
// import scheduleData from "./files/scheduleData";
// import Schedule from "./files/Schedule";
import React from "react";
import UpdatedSchedule from "./files/days/UpdatedSchedule";
import saturday from "./files/days/saturday";
import sunday from "./files/days/sunday";
import monday from "./files/days/monday";
import tuesday from "./files/days/tuesday";
import wednesday from "./files/days/wednesday";
import thursday from "./files/days/thursday";
import friday from "./files/days/friday";

function App() {
  // const [squares, setSquares] = React.useState(scheduleData);
  // const schedules = squares.map((square) => (
  //   <Schedule
  //     {...square}
  //     on={square.on}
  //     key={square.id}
  //     toggle={() => toggle(square.id)}
  //   />
  // ));

  // function toggle(id) {
  //   setSquares((prevSquares) => {
  //     return prevSquares.map((square) => {
  //       return square.id === id ? { ...square, on: !square.on } : square;
  //     });
  //   });
  // }

  const weekday = [
    monday,
    tuesday,
    sunday,
    wednesday,
    thursday,
    friday,
    saturday,
  ];
  const weekdayname = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];

  const [squares, setSquares] = React.useState(day);
  const schedules = squares.map((square) => (
    <UpdatedSchedule
      {...square}
      on={square.on}
      key={square.id}
      toggle={() => toggle(square.id)}
    />
  ));

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  // const schedules = scheduleData.map((days) => {
  //   return <Schedule {...days} key={days.id} />;
  // });

  //   const cards = data.map((item) => {
  //     return <Card {...item} />;
  //   });

  // const [count, setCount] = React.useState(0)

  // function add() {
  // 	setCount(oldValue => oldValue + 1)
  // }
  // function subtract() {
  // 	setCount(oldValue => oldValue - 1)
  // }

  //   const [isGoingOut, setGoingOut] = useState(true);
  //   function changeMind() {
  //     setGoingOut((prevState) => !prevState);
  //   }

  //   const [contact, setContact] = useState({
  //     firstname: "Jane",
  //     lastname: "Doe",
  //     phone: "+93783430712",
  //     isFavorite: true,
  //   });

  //   function toggleStar() {
  //     setContact((prevContact) => {
  //       return {
  //         ...prevContact,
  //         isFavorite: !prevContact.isFavorite,
  //       };
  //     });
  //   }

  return (
    <div className="container">
      <header>
        <nav className="nav">
          {/* <Star isFilled={contact.isFavorite} handleClick={toggleStar} /> */}
          <h3>{`timetable for This ${weekdayname[d.getDay()]}`}</h3>
          <h4>{day.length} Things To Do!</h4>
        </nav>
      </header>
      {/* <div className="schedule">{schedules}</div> */}
      <div className="schedule">{schedules}</div>
      {/* {cards} */}
      {/* <header className='meme--container'>
                <img src="logo.svg" alt="This the logo." />
                <h2>Meme Generator</h2>
                <h4>React Course - Project 3</h4>
            </header>
			<Meme /> */}

      {/* <div className='yes--no' onClick={changeMind}>
				<h1>{isGoingOut ? "Yes" : "No"}</h1>
			</div> */}

      {/* <button className='counter--minus' onClick={subtract}>-</button>
			<div className='counter--count'>
				<h1>{count}</h1>
			</div>
			<button className='counter--plus' onClick={add}>+</button> */}
      {/* <div className="boxes">{squareElements}</div> */}
    </div>
  );
}

export default App;
