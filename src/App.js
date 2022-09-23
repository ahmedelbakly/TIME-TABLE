import { useState } from "react";
import "./App.css";


const initData = [
  { id: 1, name: "ahmed gamal", time: "10pm" },
  { id: 1, name: "Hadeer turky", time: "9am" },
  { id: 1, name: "Omar Ahmed", time: "2pm" },
  { id: 1, name: "Ayman Mahmoud", time: "10am" },
  { id: 1, name: "Gamal Elbakly", time: "11am" },
];

function App() {
  const [data, setData] = useState(initData);
  return (
    <div className="container">
      <h1>Time Table</h1>
      <div className="list">
        <h3>all time {data.length}</h3>
        <ul>
          {data.length ? (
            data.map((time) => (
              <li>
                <img src="images.jpg" alt="" />
                <div>
                  {" "}
                  <p>{time.name}</p>
                  <p className="time"> {time.time} </p>{" "}
                </div>
              </li>
            ))
          ) : (
            <div
              className="alert alert-danger w-100 h1 p-5 m-auto"
              role="alert"
            >
              NO time Now
            </div>
          )}
        </ul>

        <div className="btn-box  w-100 ">
          <button
            className="btn btn-primary pt-2 pb-2 ps-5 pe-5 "
            onClick={() => setData(initData)}
          >
            Show all
          </button>
          <button
            className="btn  btn-danger pt-2 pb-2 ps-5 pe-5"
            onClick={() => setData([])}
          >
            Delete All
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default App;
