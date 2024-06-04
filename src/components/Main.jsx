// import { useState } from 'react'
// import data from '../data/db.json'
// import Card from './Card'

// function Main() {
//     const [users, setUsers] = useState(data)
//     function AddNewObg() {
//         setUsers([...users, {
            
//                 "title": "bbbbbbbbbbb",
//                 "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
//                 "despretion": "bbbbbbbbbbbbbb",
//                 "name": "bbbbbbbbbbbbb",
//                 "rate": 58,
//                 "id": "1"
                
//         },])
        
//     }

//     return (
//         <section className='main'>
//             {
//                 users.map((item) => 
//                     <Card 
//                         title={item.title}
//                         avatar={item.avatar}
//                         despretion={item.despretion}
//                         name={item.name}
//                     />)
//             }
//                     <button onClick={AddNewObg}>add</button>
//         </section>
//     )
// }

// export default Main

import React, { useState } from 'react';
import data from '../data/db.json';
import Card from './Card';
import Sidebar from './Sidebar';
import './Main.css'; // Добавьте CSS файл для стилизации

function Main() {
    const [users, setUsers] = useState(data);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [searchvalue, setSearchValue] = useState('')

    function AddNewObg() {
        setUsers([...users, {
            "title": "bbbbbbbbbbb",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
            "despretion": "bbbbbbbbbbbbbb",
            "name": "bbbbbbbbbbbbb",
            "rate": 58,
            "id": "1"
        }]);
    }

    


    function toggleSidebar() {
        setSidebarVisible(!sidebarVisible);
    }
    console.log(searchvalue);
    const handleSearch = (event) =>{
        setSearchValue(event.target.value);
    };
    const filteredData = users.filter(item => 
        item.title.toLowerCase().includes(searchvalue.toLowerCase())
    );
    console.log(filteredData);

    return (
        
        <>
            
            <input  onChange={handleSearch}/>
            
            <div className='main-container'>
                <button className='toggle-button' onClick={toggleSidebar}>
                    {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
                </button>
                {sidebarVisible && <Sidebar addNewObject={AddNewObg} />}
                <section className='main-content'>
                    {filteredData.map((item, index) => 
                        <Card 
                            key={index}
                            title={item.title}
                            avatar={item.avatar}
                            despretion={item.despretion}
                            name={item.name}
                        />
                    )}
                </section>
            </div>
        </>
    );
}

export default Main;
