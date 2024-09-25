import NavigationBar from '../components/NavigationBar';
import { SignedInUserContext } from '../context/SignedInUser';
import { useState, useEffect, useContext } from 'react';

function HomePage () {
    return (<main id="home-page">
        <h1>Homepage</h1>
        <ul>
            <li>Business Sign-up</li>
            <li>Event list</li>
        </ul>
        
    </main>)
}

export default HomePage