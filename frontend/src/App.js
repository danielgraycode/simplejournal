import "./App.css";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import ResponsiveAppBar from "./components/topbar.jsx";
import { Paper } from "@mui/material";
import TodaysEntry from "./components/todaysentry";

function App() {
  const [value, onChange] = useState(new Date());
  let dateasstring = value.toDateString();

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Paper elevation={3}>
        <div className="DatePicker">
          <Calendar onChange={onChange} value={value} />
        </div>
      </Paper>
      <TodaysEntry dateselected={dateasstring}></TodaysEntry>
    </div>
  );
}

export default App;
