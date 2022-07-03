import React,{useEffect, useState} from 'react';

const Update = ({setupdate,updateuser,setData,Data}) => {
    const [Name,setName]=useState('');
    const [Class,setClass]=useState('');
    const [Score,setScore]=useState('');
    useEffect(()=>{
        const obj=Data.filter(user=>user.name===updateuser);
        setName(obj[0].name);
        setClass(obj[0].class);
        setScore(obj[0].score);
        console.log(Class,Score)
        
    },[])
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
        setData(Data.map(user=>{
            if(user.name===updateuser){
                return{name:Name,class:Class,score:parseInt(Score)}
            }
            else{
                return user
            }
            }))
            
        setupdate(false);
    }
    return (
        <div className="card p-3 " >
        <h2>Edit Student</h2>
        <form>
        <div className='linebreak'></div>
        <div className='input d-flex flex-column'>
            <label>STUDENT NAME</label>
            <input required value={Name} onChange={(e)=>setName(e.target.value)} className='rounded-3' type='text'/>
        </div>
        <div className='input d-flex flex-column'>
            <label>CLASS</label>
            <input required value={Class}  onChange={(e)=>setClass(e.target.value)}  className='rounded-3' type='text'/>
        </div>
        <div className='input d-flex flex-column'>
            <label>SCORE</label>
            <input required value={Score} onChange={(e)=>setScore(e.target.value)}  className='rounded-3' type='text'/>
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
            <div></div>
            <div className='btns'>
            <button  onClick={(e)=>{e.preventDefault();setupdate(false)}} className='rounded-3'>CANCEL</button>
            <button type='submit' onClick={(e)=>SubmitUser(e)} className='rounded-3'>SUBMIT</button></div>
        </div>
        </form>
        </div>
    );
};

export default Update;