import data from './components/data.json';
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Students from './components/students/Students';
import Add from './components/Add';
import Update from './components/Update';
import Left from './components/Left/Left';
import Remove from './components/Delete/Delete';
const initialstate={delete:false}
const reducer=(state,action)=>{
  switch(action.type){
    case "Delete":
      return {delete:!state.delete,payload:action.payload};
    case "Deleted":
      return {delete:!state.delete}
    default:
      return state;
  }
}
function App() {
  const [add, setadd] = useState(false);
  const [update, setupdate] = useState(false);
  const [updateuser, setupdateuser] = useState('')
  const [Data, setData] = useState(null)
  const [state,dispatch]=useReducer(reducer,initialstate);
  useEffect(() => {
    setData(data);
  }, [])
  const Delete = (name) => {
    dispatch({type:"Deleted"});
    setData(Data.filter(user => user.name !== name))
  }
  return (
    <div className='front-page'>
      <div className='section'>
        <Left />
      </div>
      <div className='main'>
        <div className='d-flex justify-content-between  mobile'>
          <h2>Students</h2>
          <button onClick={() => setadd(true)} className='btn btn-primary align-self-end'>+Add</button>
        </div>
        <div className='containing rounded-4 '>
          <Header />
          {Data?.length ?
            Data.map((user, i) => {
              return (
                <Students
                  key={i}
                  index={i + 1}
                  name={user.name}
                  classs={user.class}
                  score={user.score}
                  Delete={Delete}
                  setupdateuser={setupdateuser}
                  setupdate={setupdate}
                  dispatch={dispatch} />
              )
            })
            : <h3 style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>No Students left. Please add new ones using Add button or reload</h3>
          }
        </div>
        <div>
          <h4 className="footertxt">Showing {data.length} out of {data.length} entries</h4>
        </div>
        {add
          ? <Add addtoggle={setadd} setData={setData} Data={Data} />
          : console.log("showing main page")
        }
        {update ?
          <Update updateuser={updateuser} Data={Data} setData={setData} setupdate={setupdate} />
          : console.log("toggle")
        }
        {state.delete?
        <Remove 
        Delete={Delete} 
        Data={Data}
        DeleteUser={state.payload}
        dispatch={dispatch}/>
        :null}
      </div>
    </div>
  );
}

export default App;
