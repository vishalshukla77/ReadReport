import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    const date = new Date()
    // console.log(date)
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
    return (
        <>
            <div className='navbar_top'>
                <div className="top1">
                    <p>EDITION</p>
                    <p>
                        <img className="inflag" src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" alt='IN'/> IN
                    </p>
                    <div className='navbar_dateTime'>
                        <p>{date.toLocaleDateString("en-US", options).toUpperCase()} | UPDATED {date.toLocaleTimeString()} IST</p>
                    </div>
                    <div className="navbar_cityTemp">
                        <p>NOIDA<span className='navbar_cityTemp_span' role={'img'}>24°</span>C</p>
                    </div>
                </div>
                <div className="top2">
                    <div>
                        <p>
                            <span className='navbar_timesPoints'>
                                Subscribe to TOI+
                            </span>
                        </p>
                    </div>

                    <p className='navbar_signIn' >SIGN IN</p>
                    <p className='social_media_icons'><a href="https://twitter.com/timesofindia" className="fa fa-twitter"> </a></p>
                    <p className='social_media_icons'><a href="https://www.facebook.com/TimesofIndia" className="fa fa-facebook"> </a></p>
                    <p className='social_media_icons'><a href="https://www.youtube.com/channel/UCckHqySbfy5FcPP6MD_S-Yg" className="fa fa-youtube"> </a></p>
                </div>
            </div>
            <div className="main_heading">
                <h1 className="mainhead">THE TIMES OF INDIA</h1>
            </div>
            <div className='lower_navbar'>
                <ul className="navbar_lower_ul">
                    <li className='TOIplus'>TOI +</li>
                    <li>Briefs</li>
                    <li>Videos</li>
                    <li>City</li>
                    <li>India</li>
                    <li>World</li>
                    <li>Business</li>
                    <li>Tech</li>
                    <li>Cricket</li>
                    <li>Sports</li>
                    <li>Entertainment</li>
                    <li>TV</li>
                    <li>Web Series</li>
                    <li>Life Style</li>
                    <li>Education</li>
                    <li>Photos</li>
                    <li>Blog</li>
                    <li><img src="https://cdn2.iconfinder.com/data/icons/bold-ui/100/search-512.png" alt="🔍" className="searchlogo searchlogoleft"/></li>
                    <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7oY3cyemDvx6JZjyy-q-pQxoZD9ea0O5Lsg&usqp=CAU" alt="☰" className="searchlogo"/></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
