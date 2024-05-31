import React, { useEffect } from "react";
import Item from "./Item";
import { useState } from "react";

function RightBox({ salary, earnings, deductions }) {
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [totalDeductions, setTotalDeductions] = useState(0);
  const [netSalary, setNetSalary] = useState(0);

  useEffect(() => {
    let earningsTotal = 0;
    if (earnings && earnings.length > 0) {
      earnings.forEach((item) => {
        earningsTotal += parseFloat(item.amount || 0);
      });
    }
    setTotalEarnings(earningsTotal);
  }, [earnings]);

  useEffect(() => {
    let deductionsTotal = 0;
    if (deductions && deductions.length > 0) {
      deductions.forEach((item) => {
        deductionsTotal += parseFloat(item.amount || 0);
      });
    }
    setTotalDeductions(deductionsTotal);
  }, [deductions]);

  useEffect(() => {
    const netSalary = parseFloat(salary || 0) + totalEarnings - totalDeductions;
    setNetSalary(netSalary);
  }, [totalEarnings, totalDeductions, salary]);

  const formattedSalary =
    typeof salary === "string"
      ? parseFloat(salary).toFixed(2)
      : salary.toFixed(2);

  return (
    <div className="right-box">
      <div className="top">
        <h3>Your Salary</h3>
      </div>
      <div className="details">
        <div className="headers">
          <h4>Items</h4>
          <h4>Amount</h4>
        </div>

        <Item title={"Basic Salary"} amount={formattedSalary} />
        {earnings &&
          earnings.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              amount={parseFloat(item.amount || 0).toFixed(2)}
            />
          ))}
        {deductions &&
          deductions.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              amount={parseFloat(item.amount || 0).toFixed(2)}
            />
          ))}
      </div>

      <div className="net-salary-container" style={{}}>
        <Item
          title={"Net Salary (Take Home)"}
          amount={parseFloat(netSalary || 0).toFixed(2)}
          bold
        />
      </div>

      <div className="epf-container">
        <h5>Contribution from the Employer</h5>
        <Item title={"Employer EPF (12%)"} amount={0} />
        <Item title={"Employer ETF (3%)"} amount={0} />
        <Item title={"CTC (Cost to Company)"} amount={0} margin />
      </div>
    </div>
  );
}

export default RightBox;
