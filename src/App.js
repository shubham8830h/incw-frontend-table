import { useState } from "react";
import "./main.css";

function App() {
  const [data, setData] = useState({});

  const handleInputChange = (event, name, month) => {
    const newValue = event.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        [month]: newValue,
      },
    }));
  };

  const months = ["A", "B", "C", "D", "E"];
  const tasks = [
    "Onboarding Call",
    "Google Search Console Access",
    "Google Analytics Access",
    "Website Access",
    "Technical Audit",
    "Anchor Text and Semantic Analysis",
    "Competitor Analysis",
    "Anchor Text/URL Mapping",
    "Google Data Studio Report + Local Reporting Sulte",
    "Site Level Optimization",
    "On Page Optimization",
    "Content Creation",
    "Content Publishing",
    "Premium Press Release",
    "Authority Niche Placements",
    "Review Management",
    "Index Links",
    "Video Recap",
  ];

  return (
    <div>
      <table className="container">
        <thead className="heading">
          <tr>
            <th>Task</th>
            {months.map((month) => (
              <th key={month}>{`MONTH- ${month}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task}>
              <td>{task}</td>
              {months.map((month) => (
                <td key={`${task}-${month}`}>
                  <input
                    className="input"
                    type="text"
                    value={data[task]?.[month] || ""}
                    onChange={(e) => handleInputChange(e, task, month)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
