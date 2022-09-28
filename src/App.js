
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [searchBox, setSearchBox] = useState('')
  const [data, setData] = useState('')

  let baseURL= "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

  const APIKey = "9c324df5a674b284755eae3dadb30b0f"


  const weatherChange = (e) =>{
    setSearchBox(e.target.value)
  }
  useEffect(() => {
    const weatherFetch = async() =>{
      let response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${searchBox}&appid=${APIKey}`)
      let data= await response.json()
      setData(JSON.stringify(data))
    }
    weatherFetch()
  }, [searchBox])

  const [toggle, setToggle] = useState(false)
  const handleToggle = ()=>{
    return setToggle(prevToggle => !prevToggle)
  }




  return (
    <div className="App">
      <header>
  <a href="index.html" class="logo">DARK WEATHER</a>
  <div className="hamburger" id="hamburger" onClick={handleToggle}>
        {toggle ? <span>&times;</span> : <span>&#9776;</span>}
        </div>

  <nav className='navBar'>
    <ul className={toggle ? 'menu-drop': 'menu'}>
    <li><a href="./">Home</a></li>
    <li><a href="./">Download App</a></li>
    <li><a href="./">Contact Us</a></li>
  <button class="btn1" type="submit">Sign Up</button>
   </ul>
  </nav>
 </header>
    <section>
    <h2 class="content1">
  Seeing the weather of the whole world with <a class="content1a" href="./">Dark Weather!</a>
 </h2>

 <div class="searchRow">
  <div class="searchBox">
   <input type="search" name="country" id="countryState" placeholder="Search Here" className='countryState' value={searchBox} onChange={weatherChange}/>
  </div>
  </div>

 <section class="weatherBox">
  <div class="borderBox">
   <div class="details">
    <p class="country" id="countryName" >{data}</p>
    <p class="wind" id="wind"></p>
    <p class="wind" id="gets"></p>
    <p class="wind">Cloudy Value</p>
   </div>
   <img class="sunnyImage" src="" alt="sunny" id="img"/>
  </div>
 </section>
 <p id="myCountry"></p>
      </section>
    </div>
  );
}

export default App;
