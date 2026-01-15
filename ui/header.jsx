'use client'

import { useState } from "react"

import { SlideOut } from "@/ui/slideout"
import { Accordion, AccordionItem } from '@szhsin/react-accordion'

export const Header = ({ site, handle = 'FHS' }) => {

    const [accountActive, setAccountActive] = useState(false)
    const [levelOneActive, setLevelOneActive] = useState(false)
     const [otherEventsActive, setOtherEventsActive] = useState(false)
    
    return (
        <header>

            <nav className="header">
                <section>
                    <p className="h2"><a className="navLink" href={ site ? `/${site}` : `/`}>{ handle }</a></p>
                </section>

                <section>
                    <div className="buttonGrid">
                        <button className="button">Register</button>
                        <button className="button inverse" onClick={setLevelOneActive}>MENU</button>
                        <button className="button inverse" onClick={setAccountActive}>LOG-IN</button>
                    </div>
                </section>
            </nav>


            {/* account */}
            
            <SlideOut active={accountActive} setActive={setAccountActive}>
                <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `space-between`, height: `100%` }}>

                    <div className="navSection formatted">
                        <a className="h4" href="/world">Account</a>
                        <br />
                        <form action="" className="form">
                            <div className='formRow'>
                                <label htmlFor="name">User Name</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            
                            <div className='formRow'>
                                <label htmlFor="email">Password</label>
                                <input type="email" id="email" name="email" />
                            </div>

                            <br />
                            
                            <div className='formRow'>
                                <br />
                                <button className="button" type="submit">Log-in</button>
                            </div>
                        </form>
                        <br />
                    </div>

                    <div className="navSection">
                        <a href="#">Forgot password</a>
                        <a href="#">About FHS Club membership</a>
                    </div>
                    
                </div>
            </SlideOut>


            {/* main-menu */}

            <SlideOut active={levelOneActive} setActive={setLevelOneActive}>
                <div style={{ display: `flex`, flexDirection: `column`, justifyContent: `space-between`, height: `100%` }}>

                    <div className="navSection">

                        <div className="navLinks">
                            <a className="h4" href={ site ? `/${site}` : `/`}>{ handle }</a>
                            <br />
                            <br />
                            
                            <div>
                                <p className="h6 fw-500">QUICK LINKS</p>
                                <br />
                                <div className="buttonGrid">
                                    <p><a className="button" href={`${site && `/${site}`}/page`}>Programme</a></p>
                                    <p><a className="button" href={`${site && `/${site}`}/page`}>Speakers</a></p>
                                    <p><a className="button" href={`${site && `/${site}`}/page`}>Sponsors</a></p>
                                </div>
                            </div>
                            <br />


                            <Accordion transition transitionTimeout={250}>
                                <p><a className="navLink" href={ site ? `/${site}` : `/`}>Home</a></p>
                                <AccordionItem header={`About ${ handle }`}>
                                    <ul className="navLinks">
                                        <li><a href={`${site && `/${site}`}/page`}>About Us</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Investors</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Why Attend</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Networking</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Sustainability</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Travel Guide</a></li>
                                    </ul>
                                </AccordionItem>

                                <AccordionItem header="Programme">
                                    <ul className="navLinks">
                                        <li><a href={`${site && `/${site}`}/page`}>Agenda</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Themes</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Speakers</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Advisory Board</a></li>
                                    </ul>
                                </AccordionItem>

                                <AccordionItem header="Event Features">
                                    <div className="navSection">
                                        <section>
                                            <p className="fw-600">FHS Pitch Sessions</p>
                                            <ul className="navLinks">
                                                <li><a href={`${site && `/${site}`}/page`}>Startup Den</a></li>
                                            </ul>
                                        </section>
                                        <section>
                                            <p className="fw-600">Awards</p>
                                            <ul className="navLinks">
                                                <li><a href={`${site && `/${site}`}/page`}>Future Leader Award</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Impact Leader Award</a></li>
                                            </ul>
                                        </section>
                                        <section>
                                            <p className="fw-600">Experiences</p>
                                            <ul className="navLinks">
                                                <li><a href={`${site && `/${site}`}/page`}>Curated Connections</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Networking Receptions</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Tour Experiences</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Sports &amp; Wellness</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>FHSWomenPower</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </AccordionItem>

                                <AccordionItem header="Sponsorship">
                                    <ul className="navLinks">
                                        <li><a href={`${site && `/${site}`}/page`}>Sponsors &amp; Partners</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Why Sponsor?</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>Floor Plan</a></li>
                                        <li><a href={`${site && `/${site}`}/page`}>3D Virtual Tour</a></li>
                                    </ul>
                                </AccordionItem>

                                <p><a className="navLink" href={`${site && `/${site}`}/page`}>Content Library</a></p>

                                <AccordionItem header="Previous Editions">
                                    <div className="navSection">
                                        <section>
                                            <p className="fw-600">2025</p>
                                            <ul className="navLinks">
                                                <li><a href={`${site && `/${site}`}/page`}>Programme</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Sponsors</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Speakers</a></li>
                                            </ul>
                                        </section>
                                    
                                        <section>
                                            <p className="fw-600">2024</p>
                                            <ul className="navLinks">
                                                <li><a href={`${site && `/${site}`}/page`}>Programme</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Sponsors</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Speakers</a></li>
                                            </ul>
                                        </section>

                                        <section>
                                            <p className="fw-600">2023</p>
                                            <ul className="navLinks">
                                                <li><a href={`${site && `/${site}`}/page`}>Programme</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Sponsors</a></li>
                                                <li><a href={`${site && `/${site}`}/page`}>Speakers</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </AccordionItem>

                                <p><a className="navLink" href={`${site && `/${site}`}/page`}>Contact Us</a></p>
                            </Accordion>
                        
                          
                        </div>

                        
                    </div>
                    
                    <div className="navSection">
                        <div>
                            <ul className="navLinks">
                                <li><a href="/">FHS Home</a></li>
                                <li><a href="#">FHS Club</a></li>
                                <br />
                                <p><button className="button inverse" onClick={setOtherEventsActive}>Other Events</button></p>
                            </ul>
                        </div>
                    </div>

                </div>

            </SlideOut>
            
            
            <SlideOut active={otherEventsActive} setActive={setOtherEventsActive} bg={`var(--brand-3)`}>
                <div className="navSection">
                    <p className="h4">Other Events</p>
                    <br />
                </div>
                <div className="navSection">
                    <p className="h4">FHS Events</p>
                    <ul className="navLinks">
                        {
                            site != 'world' &&
                            <li><a className="button inverse" href="/sa">FHS World</a></li>
                        }
                        {
                            site != 'sa' &&
                            <li><a className="button inverse" href="/sa">FHS Saudi Arabia</a></li>
                        }
                        {
                            site != 'africa' &&
                            <li><a className="button inverse" href="/africa">FHS Africa</a></li>
                        }
                    </ul>
                </div>

                <br />
                <br />

                <div className="navSection">
                    <p className="h4">Our Other Events</p>
                    <ul className="navLinks">
                        <li><a className="button inverse" href="#">BRF</a></li>
                        <li><a className="button inverse" href="#">AviaDev</a></li>
                        <li><a className="button inverse" href="#">SAHIC</a></li>
                    </ul>
                </div>
            </SlideOut>

        </header>
    )
}
