import React, { useEffect, useState, useRef } from 'react';
import * as THREE from 'three'
import GLOBE from "vanta/dist/vanta.globe.min";
import './App.css';

const App = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: myRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc63fff,
        color2: 0x40b1b9,
        backgroundColor: 0x1e0c3e
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return(
    <div ref={myRef} className="App">
      <h1 className="Name">Atdhe Bajrami</h1>
      <h2 className="Dev">Web & Mobile App Developer</h2>
      <div className="SocialMedias">
        <a href="https://www.instagram.com/atdhebajramii" target="__blank">
          <img className="SM" src={require("./Images/Instagram.png")} alt="Instagram" /></a>
        <a href="https://www.facebook.com/people/Atdhe-Bajrami/100005978838474" target="__blank">
          <img className="SM" src={require("./Images/Facebook.png")} alt="Facebook" /></a>
        <a href="https://play.google.com/store/apps/developer?id=Atdhe+Bajrami&hl=en" target="__blank">
          <img className="SM" src={require("./Images/PlayStore.png")} alt="PlayStore" /></a>
        <a href="https://www.linkedin.com/" target="__blank">
          <img className="SM" src={require("./Images/LinkedIn.png")} alt="LinkedIn" /></a>
        <a href="https://www.github.com/atdhebajrami" target="__blank">
          <img className="SM" src={require("./Images/GitHub.png")} alt="GitHub" /></a>
      </div>
      <button onClick={() => window.location.href = "mailto:atdheuaccounts@yahoo.com&subject=Project"} className="Buttoni">Mail me</button>
    </div>
  )
}

export default App;