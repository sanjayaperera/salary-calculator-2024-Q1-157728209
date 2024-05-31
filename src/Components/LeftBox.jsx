import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function LeftBox({
  earnings,
  deductions,
  handleAddNewEarning,
  handleCloseEarning,
  handleTitleChange,
  handleAmountChange,
  handleEPFCheckboxChange,
  handleAddNewDeduction,
  handleCloseDeduction,
  handleDeductionTitleChange,
  handleDeductionAmountChange,
  setSalary,
  salary,
  setEarnings,
  setDeductions,
}) {
  const handleReset = () => {
    setSalary("");

    setEarnings([
      {
        id: 1,
        title: "",
        amount: "",
        isEPFChecked: false,
      },
    ]);

    setDeductions([
      {
        id: 1,
        title: " ",
        amount: " ",
      },
    ]);
  };

  return (
    <div className="left-box">
      <div className="top">
        <h3>Calculate Your Salary </h3>
        <button onClick={handleReset} className="refresh-btn">
          <i className="fas fa-undo"></i>Reset
        </button>
      </div>
      <div className="salary-container">
        <h4>Basic Salary</h4>
        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="salary"
          type="text"
        />
      </div>
      <div className="earning-container">
        <h4>Earnings</h4>
        <p>Allowance, Fixed Allowance, Bonus and etc.</p>
        {earnings.map((earning) => (
          <div key={earning.id} className="earning-input-container">
            <input
              placeholder="Pay Details(Title)"
              className="earning-title"
              type="text"
              value={earning.title}
              onChange={(e) => handleTitleChange(earning.id, e)}
            />
            <input
              placeholder="Amount"
              className="earning-amount"
              type="text"
              value={earning.amount}
              onChange={(e) => handleAmountChange(earning.id, e)}
            />
            <button
              className="close-btn"
              onClick={() => handleCloseEarning(earning.id)}
            >
              <i className="fas fa-times"></i>
            </button>
            <input
              className="checkbox"
              type="checkbox"
              id={`epf-${earning.id}`}
              name={`epf-${earning.id}`}
              checked={earning.isEPFChecked}
              onChange={(e) => handleEPFCheckboxChange(earning.id, e)}
            />
            <label className="label" htmlFor={`epf-${earning.id}`}>
              EPF / ETF
            </label>
          </div>
        ))}
        <button className="add-allowance-btn" onClick={handleAddNewEarning}>
          <i className="fas fa-plus"></i> Add New Allowance
        </button>
        <hr className="styled-hr" />
      </div>
      <div className="deduction-container">
        <h4>Deductions</h4>
        <p>Tax, Loan, Other Deductions</p>
        {deductions.map((deduction) => (
          <div key={deduction.id} className="deduction-input-container">
            <input
              placeholder="Deduction Details(Title)"
              className="deduction-title"
              type="text"
              value={deduction.title}
              onChange={(e) => handleDeductionTitleChange(deduction.id, e)}
            />
            <input
              placeholder="Amount"
              className="deduction-amount"
              type="text"
              value={deduction.amount}
              onChange={(e) => handleDeductionAmountChange(deduction.id, e)}
            />
            <button
              className="close-btn"
              onClick={() => handleCloseDeduction(deduction.id)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        ))}
        <button className="add-deduction-btn" onClick={handleAddNewDeduction}>
          <i className="fas fa-plus"></i> Add New Deduction
        </button>
      </div>
    </div>
  );
}

export default LeftBox;
