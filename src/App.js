//import Header from './header'
import React, { useState } from 'react'
import './App.css'

function today() {
  var date = new Date();
  var weekdays = new Array(7)
  weekdays[0] = "Sunday"
  weekdays[1] = "Monday"
  weekdays[2] = "Tuesday"
  weekdays[3] = "Wednesday"
  weekdays[4] = "Thursday"
  weekdays[5] = "Friday"
  weekdays[6] = "Saturday"

  var r = weekdays[date.getDay()]
  return r
}

function App() {
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState('');
  const length = todos.length;



  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {today()} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() =>
          settodos([...todos,
          { id: Date.now(), text: todo, status: false, active: false, done: false, cancel: false }
          ])
        } className="fas fa-plus"></i>
      </div>

      <div className="subHeading">
        <br />
        <h2>Active List</h2>
        <div className="todos">
          {
            todos.map((value, index) => {
              if (!value.active && !value.done) {
                return (
                  <div className="todo">
                    <div className="left">
                      <input onChange={(e) => {
                        settodos(todos.filter(value2 => {
                          if (value2.id === value.id) {
                            value2.status = e.target.checked
                            value2.done = !value.done
                          }
                          return (value2)
                        }))
                      }} value={value.status} type="checkbox" name="" id="" />
                      <p>{value.text}</p>
                    </div>
                    <div className="right">
                      <i className="fas fa-times" onClick={() => {
                        settodos(todos.filter(value2 => {
                          if (value2.id === value.id) {
                            value2.active = !value2.active
                          }
                          return (value2)
                        }))
                      }} ></i>
                    </div>
                  </div>
                )
              }
            }
            )}
        </div>
      </div>
      <div className="subHeading">
        <br />
        <h2>Completed List ✅</h2>
        <div className="todos">
          {

            todos.map((value, index) => {
              if (!value.active && value.done) {

                return (
                  <div className="todo">
                    <div className="left">
                      <i className="fas fa-check"></i>
                      <p>{`${value.text}`}</p>
                    </div>
                    {/* <div className="right">
                      <div className="date">
                        <p >{today()}</p>
                      </div>
                    </div> */}
                    <div className="right">
                      <i className="fas fa-times" onClick={() => {
                        settodos(todos.filter(value2 => {
                          if (value2.id === value.id) {
                            value2.active = !value2.active

                          }
                          return (value2)

                        }))
                      }} ></i>
                    </div>
                  </div>
                )

              }
            }
            )
          }
        </div>
      </div>
      <div className="subHeading">
        <br />
        <h2>History/Canceld List 🚮 </h2>
        <div className="todos">
          {
            todos.map((value, index) => {
              // const state={
              //   curTime : new Date().toLocaleString(),
              // }

              if (value.active || value.done) {
                return (
                  <div className="todo">
                    <div className="left">
                      <i className="fas fa-trash"></i>
                      <p>{`${value.text}`}</p>

                    </div>
                    <div className="right">
                      <div className="date">
                        <p >{ }</p>
                      </div>
                    </div>
                  </div>
                )
              }
            }
            )}
        </div>
      </div>
    </div>
  )
}


export default App;
