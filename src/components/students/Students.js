import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';
const Students = ({ index, name, classs, score, Delete,setupdateuser,setupdate,dispatch }) => {
    const calcgrade = () => {
        if (score > 75) {
            return "Excellent"
        }
        else if (score > 30) {
            return "Average"
        }
        else {
            return "Poor"
        }
    }
    const classCHange=()=>{
        if(score>30){
            return "result rounded-4 pass";
        }
        else{
            return "result rounded-4 fail";
        }
        
    }
    const classChange2=()=>{
        if (score > 75) {
            return "Excellent"
        }
        else if (score > 30) {
            return "Average"
        }
        else {
            return "Poor"
        }
    }
    return (
        <div className='row bd d-flex align-items-center'>
            <div className='col-2 col-sm-2  col-md-1'>{index}</div>
            <div className='col-2 col-sm-2 col-md-3'>{name}</div>
            <div className='col-2 col-sm-2 col-md-2'>{classs}th</div>
            <div className='col-2 col-sm-2 col-md-2 '>
                <div className='d-flex justify-content-start text-center align-items-center'><a className={classCHange()}>{score > 30 ? "Passed" : "Failed"}</a></div></div>
            <div className='col-2 col-sm-2 col-md-2'>{score}/100</div>
            <div className='col-2 col-sm-2 col-md-2 d-flex update'>
                <div className={classChange2()}>{
                    calcgrade()

                }</div>
                <div className='icons'>
                <a onClick={()=>{setupdateuser(name); setupdate(true)}} href='#'><FontAwesomeIcon icon={faPen} /></a>
                <a onClick={()=>dispatch({type:"Delete",payload:name})} href='#'><FontAwesomeIcon icon={faTrashCan} /></a>
                </div>
            </div>
        </div>
    );
};

export default Students;