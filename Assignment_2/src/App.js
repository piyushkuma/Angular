import { useState, useEvent } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(true);
  const [age, setAge] = useState("");
  const [isAge, setIsAge] = useState(true);
  const nameHandler = (event) => {
    const nameValue = event.target.value;
    setName(nameValue);
    if (nameValue.length == 0) {
      setIsName(true);
    } else {
      setIsName(false);
    }
  };
  const ageHandler = (event) => {
    const ageValue = event.target.value;
    setAge(ageValue);
    if (ageValue <= 0 || ageValue >= 100) {
      setIsAge(true);
    } else {
      setIsAge(false);
    }
  };
  const [date, setDate] = useState(new Date());
  const [isDate, setIsDate] = useState(true);

  const dateHandler = (date) => {
    //const dateValue = event.target;
    const tempDate = date;
    const tempYear = date.getFullYear();
    const diff = new Date().getFullYear() - tempYear;

    setDate(tempDate);

    if (tempDate.getTime() == new Date().getTime() || diff != age) {
      setIsDate(true);
    } else {
      setIsDate(false);
    }
  };
  const [sum, setSum] = useState(0);
  const [isSum, setIsSum] = useState(true);

  const sumHandler = (event) => {
    const tempSum = event.target.value;
    setSum(tempSum);
    if (tempSum <= 0) {
      setIsSum(true);
    } else {
      setIsSum(false);
    }
  };

  const [occupation, setOccupation] = useState("Select one Occupation");
  const [isOccupation, setIsOccupation] = useState(true);
  const occupationHandler = (event) => {
    const temp = event.target.value;
    setOccupation(temp);
    if (temp == "Select one Occupation") {
      setIsOccupation(true);
    } else {
      setIsOccupation(false);
    }
  };

  return (
    <div>
      <h4>*marked fields are mandatory</h4>
      <div>
        <label>Name:*</label>
        <input
          type="text"
          placeholder="Enter your Name"
          name="Name"
          value={name}
          onChange={nameHandler}
        ></input>
        {isName && <p>*Please enter your name.</p>}
      </div>
      <div>
        <label>Age:*</label>
        <input
          type="number"
          placeholder="Enter your Age between 0 and 100"
          name="Age"
          value={age}
          onChange={ageHandler}
        ></input>
        {isAge && <p>*Please enter the age between 0 and 100</p>}
      </div>

      <div>
        <label>Date of Birth:*</label>
        <DatePicker
          selected={date}
          dateFormat="dd-MM-yyyy"
          onSelect={dateHandler}
          maxDate={new Date()}
        ></DatePicker>

        {isDate && <p>*Please enter the valid date of birth</p>}
      </div>
      <div>
        <label>Sum Insured:*</label>

        <input
          type="number"
          placeholder="Enter amount between 0 and 100000"
          name="sum"
          value={sum}
          onChange={sumHandler}
        ></input>
        {isSum && <p>*Please enter amount between 0 and 10000 </p>}
      </div>
      <div>
        <label>occupation List:*</label>
        <div>
          <select
            value={occupation}
            onChange={occupationHandler}
            defaultValue={"Select one Occupation"}
          >
            <option value="Select one Occupation">Select one Occupation</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Doctor">Doctor</option>
            <option value="Engineer">Engineer</option>
          </select>
          {isOccupation && <p>*Please Select one Occupation</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
