import { useState } from "react";
import "./App.css";
import  PropsDemo  from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo"; 
import FormUncontrolled from "./exercises/FormUncontrolled"; 
import StateDemo1 from "./exercises/StateDemo1"
import StateDemo2 from "./exercises/StateDemo2"

export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
          {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
          {selectedView == "props1" ? <PropsDemo title="Props Demo" /> : null}
          {selectedView == "ListDemo" ? <ListDemo title="List Demo"/> : null }
          {selectedView === "eventDemo" && <EventDemo title="Event Demo" />}
          {selectedView === "FormUncontrolled" && <FormUncontrolled title="Form Uncontrolled" />}
          {selectedView === "StateDemo1" && <StateDemo1 title="StateDemo1" />}
          {selectedView === "StateDemo2" && <StateDemo2 title="StateDemo2" />}

            </div>
        </div>
      </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
  btnStyle?: string; // or you can specify a different type based on your needs
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle } = props; // btnStyle is now optional
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("ListDemo")}>
      ListDemo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("eventDemo")}>
        Event Demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("FormUncontrolled")}>
        FormUncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo1")}>
      StateDemo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("StateDemo2")}>
      StateDemo2
      </button>
    </>
    
  );
};
