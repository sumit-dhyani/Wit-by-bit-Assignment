import React, { useEffect, useState } from 'react';

const Remove = ({DeleteUser,Data,Delete,dispatch}) => {
    
    const [Classname,setClassname]=useState(0)
    useEffect(()=>{
        
        const n=Data.filter(user=>user.name===DeleteUser)
       setClassname(n[0].class);
    })
    return (
        <div className='card p-3'>
            <h2>Remove Student</h2>
        <form>
        <div className='linebreak'></div>
        <h3 className='textdelete'>Are you sure you want to remove the current student from the list?</h3>
        <div className='input d-flex flex-column'>
            <label className='titel'>STUDENT NAME</label>
            <label   className='rounded-3' type='text' >{DeleteUser}</label>
        </div>
        <div className='input d-flex flex-column'>
            <label className='titel'>CLASS</label>
            <label required   className='rounded-3' type='text' >{Classname}</label>
        </div>
        <div className='linebreak'></div>
        <div className='buttons'>
            <div></div>
            <div className='btns'>
            <button onClick={(e)=>{e.preventDefault();
            dispatch({type:"Deleted"});}} className='cancel rounded-3'>CANCEL</button>
            <button type='submit' onClick={()=>Delete(DeleteUser)} className='remove rounded-3'>REMOVE</button></div>
        </div>
        </form>
        </div>
    );
};

export default Remove;