import React from 'react'
import './Footer.css'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div>
      <div className='footer_container'>
        <div className="footleft">
          <img className="TOI_biglogo" src="https://static.toiimg.com/photo/71215965.cms" alt="Times Of India" /><br />
          <table className='footer_tableMain' >
            <tr><td>About Us</td><td>Newsletter</td></tr>
            <tr><td>Create Your Own Ad</td><td>Feedback</td></tr>
            <tr><td>Terms of Use</td><td>ePaper</td></tr>
          </table>
          <h5 className="footer_heading">FOLLOW US ON</h5>
          <table className='footer_socialMediaTable' >
            <tr>
              <td><a href="https://twitter.com/timesofindia" className="fa fa-twitter footer_socialMediaAnchor"> </a></td>
              <td><a href="https://www.facebook.com/TimesofIndia" className="fa fa-facebook footer_socialMediaAnchor"> </a></td>
              <td><a href="https://www.youtube.com/channel/UCckHqySbfy5FcPP6MD_S-Yg" className="fa fa-youtube footer_socialMediaAnchor"> </a></td>
            </tr>
          </table>
          <h5 className="footer_heading" >OTHER TIMES GROUP NEWS SITES</h5>
          <table className='footer_tableMain'>
            <tr><td>The Economics Times</td><td>I am Gujrat</td></tr>
            <tr><td>Navbharat Times</td><td>Indiatimes</td></tr>
            <tr><td>Ei Samay</td><td>Miss Kyra</td></tr>
            <tr><td>Times now Hindi</td><td>Times Food</td></tr>
            <tr><td>Times Now</td><td>Education Times</td></tr>
          </table>

        </div>
        <div className="footmid">
          <h5 className="footer_heading" >POPULAR CATEGORIES</h5>
          <table className='footer_tableMain'>
            <tr><td>Headlines</td><td>Bollywood News</td></tr>
            <tr><td>Sports News</td><td>Health and Fitness</td></tr>
            <tr><td>Business News</td><td>Indian TV Shows</td></tr>
            <tr><td>World News</td><td>Celebrity</td></tr>
          </table>
          <h5 className="footer_heading">TOP TRENDS</h5>
          <table className='footer_tableMain'>
            <tr><td>Pathan</td><td>Covid Cases in India</td></tr>
            <tr><td>Ind vs Eng </td><td>Budget 2023</td></tr>
            <tr><td>Election News</td><td>JNU</td></tr>
          </table>
        </div>

        <div className="footright">
          <h5 className="footer_heading" >HOT ON WEB</h5>
          <table className='footer_tableMain'>
            <tr><td>Ajay Devgan</td><td>Kareena Kapoor</td></tr>
            <tr><td>Shah Rukh Khan</td><td>Coronavirus</td></tr>
            <tr><td>Mukesh Ambani</td><td>Kapil Sharma</td></tr>
          </table>
          <h5 className="footer_heading" >SERVICES</h5>
          <table className='footer_tableMain'>
            <tr><td>Ads2Book</td><td>Bollywood News</td></tr>
            <tr><td>Bank Exam App</td><td>Times Mobile</td></tr>
            <tr><td>Dineout</td><td>Astro Speak</td></tr>
          </table>
        </div>
      </div>
      <div className="footer_copyRight">
        <p>
          Copyright &copy; {year} Made with ❤ by Shrutika Shaw &amp; Developers Clan This is a Clone Version.
        </p>
      </div>
    </div>


  )
}

export default Footer
