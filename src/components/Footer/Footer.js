import React from 'react'
import "./Footer.css"
import logo1 from "../../assets/wordmark.png"
import logo2 from "../../assets/eco-logo.png"

const Footer = () => {
  return (
    <div className="footer lg:h-[110vh] h-[100vh] flex flex-col justify-center items-center">
      <div className="logo lg:h[100px] h-[60px] lg:w-[300px] flex flex-col justify-center items-center lg:mt-[70px]">
        <img src={logo1} alt="" className='lg:h-[130px] h-[60px] lg:w-[340px]' />
        <div className="socials lg:mt-[30px] mt-[6px]">
          <i className="fa-brands fa-instagram text-white lg:text-[40px] text-[20px] lg:mr-[50px] mr-[20px]"></i>
          <i className="fa-brands fa-facebook text-white lg:text-[40px] text-[20px]"></i>
        </div>
      </div>
      <div className="content flex justify-center items-center text-white lg:mt-[100px] lg:flex-row flex-col">
        <div className="address flex flex-col items-center lg:mr-10 lg:text-[20px] text-[15px] lg:mt-0 mt-[40px]">
          <h1>Netaji Subhash Engineering College</h1>
          <div className="add w-[100%] lg:mt-6 mt-3 flex flex-col items-center justify-center  lg:left-0 left-1 lg:text-[17px] text-[14px]">
            <div className="line1 flex lg:w-[335px] w-[100%]">
              <i class="fa-solid fa-location-dot relative top-2 mr-3"></i>
              <p>Mauza Ranabhutia, Techno City, <br />Garia, West Bengal 700152</p>
            </div>
            <div className="line2 flex lg:w-[341px] w-[100%] mt-1">
              <i class="fa-solid fa-phone relative top-2 mr-3"></i>
              <p>Pratiti Ganguli [President] - <br /> +91 81000 36329 <br /> Sarthak Das [General Secretary] - <br /> +91 84209 24538 </p>
            </div>
          </div>
        </div>
        <div className="gmap lg:ml-10 lg:mt-0 mt-10">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7432998021054!2d88.41237027527528!3d22.47627877956038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1699559167827!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-[200px] h-[200px] lg:h-[280px] lg:w-[400px]'></iframe>
        </div>
      </div>
      <div className="credits lg:text-[12px] text-[9px] text-white flex flex-col justify-center items-center lg:mt-[70px] mt-[30px]">
        <p>Brought to you by</p>
        <img src={logo2} className='lg:h-[80px] h-[50px] lg:w-[90px] w-[50px]' />
        <p>© Mesmerizer 2024</p>
        <p>Proudly created by Tech Team of Eco Cultural Club, NSEC</p>
      </div>
    </div>
  )
}

export default Footer