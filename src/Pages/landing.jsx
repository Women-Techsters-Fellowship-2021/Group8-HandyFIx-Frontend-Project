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
// import quotes from  '../Images/quotes.png';
import imgbg from  '../Images/imgbg.png';
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
                       
                        

                    </div>
             

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
                           
                        </div>
                       
                        <img className='sec-icon' id='icon1' src={arrow1}  alt=""/>
                        <div className='section-div' id='div-two'>
                            <img className='images'  src={sec2}  alt=""/>
                            <p>Input your correct details - Location, payment method, job date e.t.c</p>
                           
                        </div>
                        <img className='sec-icon' id='icon2' src={arrow2}  alt=""/> 
                    </span>
                    <span className='sec-span'>
                        <div className='section-div' id='div-three'>
                            <img   className='images'  src={sec3}  alt=""/>
                            <p>Our matching algorithm identifies and shows you the best available & verified workers in your neighborhood for the Job. All you have to do is select your preferred artisan.</p>
                           
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
                    <h3 className='sec2-first-div-h3'>Explore Our Category of Services</h3>
                    <p>
                        We provide varying levels of service with technically skilled personnel who are trained to achieve the highest level of customer satisfaction.<br/>
                        <br/>
                        Our services include: Carpentry, Laundry, Electricals, Plumbing, Generator repairs, Air conditioner repairs e.t.c
                    </p>

                    <button><Link >Explore</Link></button>
                </div>

                <div className='sec2-sec-div'>
                    <span>
                        <figure className='img-div'>

                            <img  src={carpentary}  alt=""/>
                            <figcaption>CARPENTARY</figcaption>
                        </figure>

                        <figure className='img-div'>

                            <img  src={gen}  alt=""/>
                            <figcaption>GENERATOR REPAIRS</figcaption>
                        </figure>
                    </span>

                    <figure className='img-div'>

                        <img  src={electrician}  alt=""/>
                        <figcaption>ELECTRICALS</figcaption>
                    </figure>

                    <span>
                        <figure className='img-div'>

                            <img  src={ac}  alt=""/>
                            <figcaption>AC REPAIRS</figcaption>
                        </figure>
                        
                        <figure className='img-div'>

                            <img  src={plumbing}  alt=""/>
                            <figcaption>PLUMBING</figcaption>
                        </figure>
                    </span>




                </div>

            </section>

            <section className='sec-three'>
                <div className='sec-title'>

                    <h3 id='why-why'>
                        Why HandyFix?
                    </h3>
                </div>
                
                <span className='biggest-span'>
                    <div>
                        <span className='img-span'>
                            <img  src={blueCheck}  alt=""/>
                            <div>
                                <h4>Quality Assurance</h4>
                                <p>
                                    Our artisans registered with HandyFix
                                    have professional certifications that
                                    have been authenticated and are in 
                                    line with regulatory guidelines.
                                </p>
                            </div>

                        </span>
                    </div>
                    <div>
                        <span className='img-span'>
                            <img  src={blueCheck}  alt=""/>
                            <div>
                                <h4>Customer Service</h4>
                                <p>
                                We work assiduously to ensure our 
                                clients enjoy the best customer 
                                experience by ensuring that they
                                 receive quality and excellent customer service.
                                </p>
                            </div>

                        </span>
                    </div>
                    <div>
                        <span className='img-span' id='smallest' >
                            
                            <img  src={blueCheck}  alt=""/>
                            <div>
                                <h4>Average Prices</h4>
                                <p>
                                Our prices are friendly and affordable.
                                </p>
                            </div>

                        </span>
                    </div>
                   
               
                <div>
                        <span className='img-span'>
                            <img  src={blueCheck}  alt=""/>
                            <div>
                                <h4>Safety</h4>
                                <p>
                                    We provide our services giving suitable times while we can also work with your
                                    time where terms and conditions apply
                                </p>
                            </div>

                        </span>
                    </div>
                    <div>
                        <span className='img-span'>
                            <img  src={blueCheck}  alt=""/>
                            <div>
                                <h4>Convenience</h4>
                                <p>
                                    We provide our services giving 
                                    suitable times while we can also 
                                    work with your time where terms and 
                                    conditions apply
                                </p>
                            </div>

                        </span>
                    </div>
                    <div>
                        <span className='img-span'>
                            
                            <img  src={blueCheck}  alt=""/>
                            <div>
                                <h4>Trusted Workers</h4>
                                <p>
                                Our artisans undergo thorough security 
                                and background checks, so you can rest
                                 assured that your safety is our concern.
                                </p>
                            </div>

                        </span>
                    </div>
                   
                </span>

            </section>


            <section className='sec-four'>
              
                    <div>

                        <img className='sec4-img1' src={imgbg}  alt=""/>
                        <img className='sec4-img2' src={group}  alt=""/>
                    </div>
                    <div>
                        <h3 className='sec2-first-div-h3' ><span id='h3-span'>High-Quality</span> <br/>  Professionals</h3>

                        <p>
                            Hire fully vetted HandyFix Pros for every need.<br/> <br/>
                            Good quality artisans are so hard to find! At LaborHack,
                             we are solving that problem. All our artisans are curated 
                             from a handpicked list of trained, tested, and certified artisans.
                        </p>
                    </div>
             
                
            </section>

            <section className='sec-five'>
                <div className='sec-title'>

                    <h3 id='id-five'>What Our Customers Say</h3>
                </div>
                
                  
                    <div className='sec5-text'>
                        <img  src={ama}  alt=""/>
                        <p><b id='quotes'>"</b> <br/> 
                       
                            Relocation felt ordinary until I needed 
                            a plumber!!! Being new to the city, I
                            didn’t know who I could trust.
                            A colleague recommended HandyFix and 
                            that was all I needed. Not only was the
                            plumber very efficient, he was prompt and 
                            very professional.<br/> I highly recommend.<br/> <br/>
                            <b>Christy Ikechukwu</b> <br/>
                            Calabar, Nigeria.

                            
                        
                        </p>

                    </div>
                


            </section>

            <section className='last-sec'>
                <div className='last-sec-div'>
                    <h3>Join Our Community Of HandyFix Pros</h3>
                    <p>Earn more money by working as an artisan on Handyfix</p>
                    <button><Link >Register</Link></button>
                </div>
                <div>
                    <img src={carpImg} alt=''/>
                </div>

            </section>

            <footer className='footer-footer'>
                <div className='last-sec-grid'>

                    <div>
                        <h4>Services</h4>
                        <ul>
                            <li>Carpentary</li>
                            <li>Laundry</li>
                            <li>Painting</li>
                            <li>Electricals</li>
                            <li>Plumbing</li>
                            

                        </ul>

                    </div>

                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>FAQs</li>
                            <li>Get Started</li>
                            

                        </ul>

                    </div>

                    <div>
                        <h4>Resources</h4>
                        <ul>
                            <li>Resources</li>
                            <li>Media</li>
                            <li>Our Artisans </li>
                            <li>Security</li>
                            

                        </ul>

                    </div>

                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>support@handyfix.com</li>
                            <li>080001283773983893803</li>
                        </ul>

                    </div>
                </div>

            </footer>
    </>
        

    )
}

export default LandingPage;
