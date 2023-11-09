import React from 'react'
import "./Footer.css"
import logo1 from "../../assets/wordmark.png"
import logo2 from "../../assets/eco-logo.png"

const Footer = () => {
  return (
    <div className="footer h-[100vh] flex flex-col justify-center items-center">
      <div className="logo h[100px] w-[300px] flex flex-col justify-center items-center">
        <img src={logo1} alt="" />
        <div className="socials mt-[30px]">
          <i className="fa-brands fa-instagram text-white text-[40px] mr-[50px]"></i>
          <i className="fa-brands fa-facebook text-white text-[40px]"></i>
        </div>
      </div>
      <div className="content flex justify-center items-center text-white mt-[50px] divide-x-4">
        <div className="address">
          <h1>Netaji Subhash Engineering College</h1>
          <div className="line1 flex w-[287px]">
            <i class="fa-solid fa-location-dot"></i>
            <p>Mauza Ranabhutia, Techno City, Garia, West Bengal 700152</p>
          </div>
          <div className="line2 flex w-[350px]">
            <i class="fa-solid fa-phone"></i>
            <p>Pratiti Ganguli [President] - +91 81000 36329  Sarthak Das [General Secretary] - +91 84209 24538 </p>
          </div>
        </div>
        <div className="gmap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7432998021054!2d88.41237027527528!3d22.47627877956038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1699559167827!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="credits text-white flex flex-col justify-center items-center">
        <p>Brought to you by</p>
        <img src={logo2} className='h-[80px] w-[90px]' />
        <p>© Mesmerizer 2024</p>
        <p>Proudly created by Tech Team of Eco Cultural Club, NSEC</p>
      </div>
    </div>
  )
}

export default Footer