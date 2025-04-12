import React from 'react';
import './Home.css';
import Timer from './timer';
import Portada from '../../assets/portada.jpg'

const Home = () => {
  return(
    <section>
      <div id='title' className='home'>
        <img className='home__img' src={Portada} alt="Imagen desde Local"/>
        <div id='timer'>
          <h3>Countdown</h3>
          <Timer id='timers'/>
        </div>
      </div>
    </section>
  )
}

export default Home 
