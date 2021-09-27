import { BrowserRouter, Route, Link } from "react-router-dom";
// css for landing page
import '../Styles/landing.css'

//images for sec1
import arrow1 from '../Images/Arrow1.png';
import arrow2 from '../Images/Arrow2.png';
import arrow3 from '../Images/Arrow3.png';
import sec1 from '../Images/sec1.png';
import sec2 from '../Images/sec2.png';
import sec3 from '../Images/sec3.png';

// images for landing page 
import ac from '../Images/ac.png';
import backg from '../Images/bgimg.png';
import carpentary from '../Images/carpentary.png';
import carpImg from '../Images/Carpenter3.png';
import blueCheck from '../Images/check.png';
import electrician from '../Images/electrician.png';
import gen from '../Images/generator.png';
import group from '../Images/grp_artisans.png';
import plumbing from '../Images/plumbing.png';
import bluevector from '../Images/Vector.png';
import ama from '../Images/ama.png';
import logo from  '../Images/HandyFix.png';
// import {AiFillCreditCard} from  "react-icons/ai";
// import {AiFillProfile } from  "react-icons/ai";
// import {BsPeopleFill}  from  "react-icons/bs";
const LandingPage =()=>
{
    return (
        <>
        
            <section className='hero-section'>
                <>
                    <nav>

                        <ul className='logo'>
                            <li><Link to='/landing'>HandyFix </Link></li>

                            
                        </ul>
                        
                        <ul className='first-links'>
                            <li><Link>Company</Link></li>
                            <li><Link>About Us</Link></li>
                            <li><Link>Contact Us </Link></li>
        
                        </ul>

                        <ul className='sec-links'>
                            <li><Link>Login</Link></li>
                            
                            <button type='submit' className='butn'><Link>Sign Up</Link></button>
                            
                        </ul>
                    </nav>
                    
            

                    <div className='hero-text'>

                        <h3 >
                            Hire a <span>Trusted Artisan</span><br/>
                            In Your NeighbourHood

                        </h3>

                        <p>
                            Our platform offers you the best and verified 
                            artians around you at very affordable prices.
                        </p>
                        <button className='butn'><Link>Book Now </Link></button>
                    </div>

                    <div className='hero-img'>
                        <img className='img1' src={bluevector}  alt=""/>
                        <img className='img2' src={backg}  alt=""/>
                       
                        {/* <figcaption>MANICURIST</figcaption> */}

                    </div>
             
{/*BsPeopleFill */}

                </>
            </section>

            <section className='sec-one'>
                <div className='sec-title'>

                    <h3>
                        HandyFix at a Glance
                    </h3>
                </div>
                <div className='sec-info'>
                    <span className='first-span'>
                        <div className='section-div' id='div-one'>
                            <img   className='images'  src={sec1}  alt=""/>

                            <p>Tell us what you need to be done - repairs, installation, cleaning e.t.c.</p>
                            {/* <img className='sec-icon' id='icon1' src={arrow1}  alt=""/> */}
                        </div>
                       
                        <img className='sec-icon' id='icon1' src={arrow1}  alt=""/>
                        <div className='section-div' id='div-two'>
                            <img className='images'  src={sec2}  alt=""/>
                            <p>Input your correct details - Location, payment method, job date e.t.c</p>
                            {/* <img className='sec-icon' id='icon2' src={arrow2}  alt=""/> */}
                        </div>
                        <img className='sec-icon' id='icon2' src={arrow2}  alt=""/> 
                    </span>
                    <span className='sec-span'>
                        <div className='section-div' id='div-three'>
                            <img   className='images'  src={sec3}  alt=""/>
                            <p>Our matching algorithm identifies and shows you the best available & verified workers in your neighborhood for the Job. All you have to do is select your preferred artisan.</p>
                            {/* <img className='sec-icon' id='icon3' src={arrow3}  alt=""/> */}
                        </div>
                        <img className='sec-icon' id='icon3' src={arrow3}  alt=""/>

                        <div className='section-div' >
                            <img  className='images'   src={sec1}  alt=""/>

                            <p>Make payment only to HandyFix when the Job is done & review worker; It holds them accountable.</p>
                        </div>
                    </span>
                </div>



            </section>


            <section className='sec-two'>
                <div className='sec2-first-div'>
                    <h3>Explore Our Category of Services</h3>
                    <p>
                        We provide varying levels of service with technically skilled personnel who are trained to achieve the highest level of customer satisfaction.<br/>
                        <br/>
                        Our services include: Carpentry, Laundry, Electricals, Plumbing, Generator repairs, Air conditioner repairs e.t.c
                    </p>

                    <button><Link>Explore</Link></button>
                </div>

                <div className='sec2-sec-div'>
                    <span>
                        <div>

                            <img  src={carpentary}  alt=""/>
                            <figcaption>CARPENTARY</figcaption>
                        </div>
                        <img  src={gen}  alt=""/>
                        <figcaption>CARPENTARY</figcaption>
                    </span>

                    <img  src={electrician}  alt=""/>

                    <span>
                        <img  src={ac}  alt=""/>
                        <img  src={plumbing}  alt=""/>
                    </span>




                </div>

            </section>

            <section className='sec-three'>
                <div className='sec3-first-div'>
                    <h3>Explore Our Services</h3>
                    <p>
                        We provide varying levels of service with technically skilled personnel who are trained to achieve the highest level of customer satisfaction.<br/>
                        <br/>
                        Our services include: Carpentry, Laundry, Electricals, Plumbing, Generator repairs, Air conditioner repairs e.t.c
                    </p>

                    <button><Link>Explore</Link></button>
                </div>

            </section>
    </>
        

    )
}

export default LandingPage;