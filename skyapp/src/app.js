import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import { useState } from "react";
import UserList from './components/UsersList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    // Setting up the initial states using
    // react hook 'useState'
    const [search, setSearch] = useState("");
    return (
        <div className="App">
            <Header/>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
             <UserList search={search}/>
             <Footer/>
        </div>
    );
}

ReactDOM.render(<App/>,document.getElementById('root'));