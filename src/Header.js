import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


 const Header= () => {
    return (
        <div className="header">

            <div className="header_left">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>

            <div className="header_right">
                <HeaderOption Icon= {HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://img.freepik.com/premium-vector/young-smiling-man-3d-avatar-happy-guy_165429-1393.jpg?size=338&ext=jpg&ga=GA1.2.2110291006.1687711696&semt=sph" title="me" />
            </div>
        </div>
    );
}

export default Header;