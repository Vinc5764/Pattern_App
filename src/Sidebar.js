import React from 'react';
import { Avatar } from '@mui/material';
import './Sidebar.css';

const Sidebar = () =>{
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1599239663833-4c1cdc22892a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" alt="side" />
            <Avatar className="sidebar_avatar"/>
            <h2>Vincent Danso</h2>
            <h4>vinny@gmail.com</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2,543</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on Post</p>
                <p className="sidebar_statNumber">4,000</p>
            </div>
        </div>



        <div className="sidebar_bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar