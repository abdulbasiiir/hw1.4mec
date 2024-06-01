import React from 'react';
import './Sidebar.css'; // Добавьте CSS файл для стилизации

function Sidebar({ addNewObject }) {
    return (
        <div className='sidebar'>
            <div className='profile'>
                <img src="https://via.placeholder.com/150" alt="Profile" className='profile-image'/>
                <h2>John Doe</h2>
                <p>johndoe@example.com</p>
            </div>
            <button onClick={addNewObject} className='add-button'>Add New Object</button>
            <input type="text" placeholder="Search..." className='search-input' />
            <nav className='nav'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            <div className='info'>
                <h3>Information</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
            </div>
        </div>
    );
}

export default Sidebar;
