import React from 'react'
import "./footer.css"
import picture from "../../assets/PP.jpeg"

const Footer = () => {
  return <section id="footer">
    <div className="footerText">
      <img src={picture} alt="" />
      <span>Let's work together!</span>
    </div>
    <div className="footerLink">
      <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=alhendesekaaa08@gmail.com">Email Me</a>
      <a href="https://wa.me/6289510092491?text=Halo%20Alhendes">Whatsapp Me</a>
    </div>
    <div className="footerSosmed">
      <a href="https://www.instagram.com/hndsekp78/">Instagram</a>
      <a href="https://github.com/AlhendesEkaP">Github</a>
      <a href="">LinkedIn</a>
      <a href="">Tiktok</a>
    </div>
  </section>
}

export default Footer