import data from './components/data.json';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Students from './components/students/Students';
import Add from './components/Add';
import Update from './components/Update';

function App() {
  const [add, setadd] = useState(false);
  const [update, setupdate] = useState(false);
  const [updateuser, setupdateuser] = useState('')
  const [Data, setData] = useState(null)
  useEffect(() => {
    setData(data);
  }, [])
  const Delete = (name) => {
    setData(Data.filter(user => user.name !== name))
  }
  return (
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
              setupdate={setupdate} />
            )
          })
          : <h3 style={{display:"flex",justifyContent:"center",marginTop:"30px" }}>No Students left. Please add new ones using Add button or reload</h3>
        }
      </div>
      <div>
      <h4 className="">Showing {data.length} out of {data.length} entries</h4>
      </div>
      {add
        ? <Add addtoggle={setadd} setData={setData} Data={Data} />
        : console.log("showing main page")
      }
      {update ?
        <Update updateuser={updateuser} Data={Data} setData={setData} setupdate={setupdate} />
        : console.log("toggle")
      }
    </div>
  );
}

export default App;
