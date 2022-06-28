import React, { useState } from 'react';

const Add = ({addtoggle,setData,Data}) => {
    const [name,setname]=useState('');
    const [Class,setClass]=useState('');
    const [Score,setScore]=useState('');
    const calcgrad=()=>{
        if (parseInt(Score)>75){
            return 'Excellent'
        }
        else if (parseInt(Score)>30){
            return 'Average'
        }
        else{
            return 'Poor'
        }
    }
    const SubmitUser=(e)=>{
        e.preventDefault();
        if(name!=''&&Class!=''&&Score!=''){
            setTimeout(() => {
                addtoggle(false);
            }, 500);
            Data.push({name:name,class:Class,score:parseInt(Score)});
            
            
        }
        
    }
    return (
        <div className="card p-3 " >
        <h2>Add Student</h2>
        <form>
        <div className='linebreak'></div>
        <div className='input d-flex flex-column'>
            <label>STUDENT NAME</label>
            <input required onChange={(e)=>setname(e.target.value)} className='rounded-3' type='text'/>
        </div>
        <div className='input d-flex flex-column'>
            <label>CLASS</label>
            <input required  onChange={(e)=>setClass(e.target.value)}  className='rounded-3' type='text'/>
        </div>
        <div className='input d-flex flex-column'>
            <label>SCORE</label>
            <input required onChange={(e)=>setScore(e.target.value)}  className='rounded-3' type='text'/>
        </div>
        <div className='input d-flex flex-column'>
            <label>RESULT</label>
            <label >{Score!==''?Score>30?'Passed':"failed":'-'}</label>
        </div>
        <div className='input d-flex flex-column'>
            <label>GRADE</label>
            <label >{Score!==''?calcgrad():'-'}</label>
        </div>
        <div className='linebreak'></div>
        <div className='buttons'>
            <button onClick={(e)=>{e.preventDefault();addtoggle(false)}} className='rounded-3'>CANCEL</button>
            <button type='submit' onClick={(e)=>SubmitUser(e)} className='rounded-3'>SUBMIT</button>
        </div>
        </form>
        </div>
    );
};

export default Add;