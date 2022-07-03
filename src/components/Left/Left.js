import React from 'react';
import logo from '../Left/Vector.png'
import Dashboard from './Dashboard.png';
import Courses from './Courses.png';
import Students from './Students.png'
import Exams from './Exams.png';
import Results from './Results.png';
import Live from './Live.png';
import Notifications from './Notifications.png';
const Left = () => {
    return (
        <div className='side'>
            <div className='logo'>
                <span>
                    <img src={logo} alt='logo'/>
                </span>
                <h5>School Space</h5>
            </div>
            <div className='list'>
                <div className='rectangle'>
                    <img src={Dashboard} alt="Dashboard" />
                    <h5> Dashboard</h5>
                </div>
                <div className='rectangle'>
                    <img src={Courses} alt="Dashboard" />
                    <h5> Courses</h5>
                </div>
                <div className='rectangle select'>
                    <img src={Students} alt="Dashboard" />
                    
                    <h5> Students</h5>
                </div>
                <div className='rectangle'>
                    <img src={Exams } alt="Dashboard" />
                    <h5> Exams</h5>
                </div>
                <div className='rectangle'>
                    <img src={Results } alt="Dashboard" />
                    <h5> Results</h5>
                </div>
                <div className='rectangle'>
                    <img src={Results } alt="Dashboard" />
                    <h5> Notice Board</h5>
                </div>
                <div className='rectangle'>
                    <img src={Live } alt="Dashboard" />
                    <h5> Live Classes</h5>
                </div>
                <div className='rectangle'>
                    <img src={Notifications } alt="Dashboard" />
                    <h5> Notifications</h5>
                </div>
            </div>
            <div className='footer'>
                <h4>Sumeet Dhyani</h4>
                <h6>Dhyanisumit3@gmail.com</h6>
                <button><a href="https://github.com/sumit-dhyani" >View Profile</a></button>
            </div>
        </div>
    );
};

export default Left;