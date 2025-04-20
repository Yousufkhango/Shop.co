import React from 'react'
import './hero.css'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className='hero_text'>
        <h1>FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
        <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='btn' onClick={() => navigate('/shop')}>Shop Now</button>
      </div>
      <div className='hero_img'>
        <img src="hero.png" />
      </div>
    </div>
  )
}

export default Hero
