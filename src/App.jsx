import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import heroImage from '../public/hero-img.png'
import './App.css'
import Search from "./Components/SearchBar.jsx";

function App() {

    //This useState HOOK is used to manage the actions on the Search bar..
    const[searchTerm, setSearchTerm] = useState('');

  return (
    <main>
        <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="../public/hero-img.png" alt="" />
                    <h1>Find <span className = "text-gradient">Movies</span> You'll Enjoy</h1>
                </header>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <h1 className="text-white text-7xl">{searchTerm}</h1>
            </div>
    </main>
  )
}

export default App
