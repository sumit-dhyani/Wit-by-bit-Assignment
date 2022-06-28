import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';
const Students = ({ index, name, classs, score, Delete,setupdateuser,setupdate }) => {
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
    return (
        <div className='row bd my-3'>
            <div className='col-2 col-sm-2  col-md-1'>{index}</div>
            <div className='col-2 col-sm-2 col-md-3'>{name}</div>
            <div className='col-2 col-sm-2 col-md-2'>{classs}th</div>
            <div className='col-2 col-sm-2 col-md-2 '>
                <div className='d-flex justify-content-start text-center align-items-center'><a className='result rounded-4'>{score > 30 ? "Passed" : "Failed"}</a></div></div>
            <div className='col-2 col-sm-2 col-md-2'>{score}</div>
            <div className='col-2 col-sm-2 col-md-2 d-flex update'>
                <div>{
                    calcgrade()

                }</div>
                <div className='icons'>
                <a onClick={()=>{setupdateuser(name); setupdate(true)}} href='#'><FontAwesomeIcon icon={faPen} /></a>
                <a onClick={()=>Delete(name)}href='#'><FontAwesomeIcon icon={faTrashCan} /></a>
                </div>
            </div>
        </div>
    );
};

export default Students;