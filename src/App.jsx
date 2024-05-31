import React from "react";
import RightBox from "./Components/RighBox";
import LeftBox from "./Components/LeftBox";
import "./index.css";
import { useState } from "react";

function App() {
  const [salary, setSalary] = useState("");

  const [earnings, setEarnings] = useState([
    {
      id: 1,
      title: "",
      amount: "",
      isEPFChecked: false,
    },
  ]);

  const [deductions, setDeductions] = useState([
    {
      id: 1,
      title: " ",
      amount: " ",
    },
  ]);

  const handleAddNewEarning = () => {
    const newEarning = {
      id: earnings.length + 1,
      title: "",
      amount: "",
      isEPFChecked: false,
    };
    setEarnings([...earnings, newEarning]);
  };

  const handleCloseEarning = (id) => {
    setEarnings(earnings.filter((earning) => earning.id !== id));
  };

  const handleTitleChange = (id, event) => {
    const updatedEarnings = earnings.map((earning) =>
      earning.id === id ? { ...earning, title: event.target.value } : earning
    );
    setEarnings(updatedEarnings);
  };

  const handleAmountChange = (id, event) => {
    const updatedEarnings = earnings.map((earning) =>
      earning.id === id ? { ...earning, amount: event.target.value } : earning
    );
    setEarnings(updatedEarnings);
  };

  const handleEPFCheckboxChange = (id, event) => {
    const updatedEarnings = earnings.map((earning) =>
      earning.id === id
        ? { ...earning, isEPFChecked: event.target.checked }
        : earning
    );
    setEarnings(updatedEarnings);
  };

  const handleAddNewDeduction = () => {
    const newDeduction = {
      id: deductions.length + 1,
      title: "",
      amount: "",
    };
    setDeductions([...deductions, newDeduction]);
  };

  const handleCloseDeduction = (id) => {
    setDeductions(deductions.filter((deduction) => deduction.id !== id));
  };

  const handleDeductionTitleChange = (id, event) => {
    const updatedDeductions = deductions.map((deduction) =>
      deduction.id === id
        ? { ...deduction, title: event.target.value }
        : deduction
    );
    setDeductions(updatedDeductions);
  };

  const handleDeductionAmountChange = (id, event) => {
    const updatedDeductions = deductions.map((deduction) =>
      deduction.id === id
        ? { ...deduction, amount: event.target.value }
        : deduction
    );
    setDeductions(updatedDeductions);
  };

  return (
    <div className="container">
      <div className="box">
        <LeftBox
          earnings={earnings}
          deductions={deductions}
          handleAddNewEarning={handleAddNewEarning}
          handleCloseEarning={handleCloseEarning}
          handleTitleChange={handleTitleChange}
          handleAmountChange={handleAmountChange}
          handleEPFCheckboxChange={handleEPFCheckboxChange}
          handleAddNewDeduction={handleAddNewDeduction}
          handleCloseDeduction={handleCloseDeduction}
          handleDeductionTitleChange={handleDeductionTitleChange}
          handleDeductionAmountChange={handleDeductionAmountChange}
          salary={salary}
          setSalary={setSalary}
          setEarnings={setEarnings}
          setDeductions={setDeductions}
        />
      </div>
      <div className="box">
        <RightBox salary={salary} earnings={earnings} deductions={deductions} />
      </div>
    </div>
  );
}

export default App;
