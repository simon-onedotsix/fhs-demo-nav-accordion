'use client'

import { useState } from "react"

import { EventsBar } from "@/ui/eventsbar"
import { SlideOut } from "@/ui/slideout"

export default function Home() {

	const [accountActive, setAccountActive] = useState(false)

	const [levelOneActive, setLevelOneActive] = useState(false)
	const [levelTwoActive, setLevelTwoActive] = useState(false)
	

	return (
		<>
			<EventsBar />

			<header className="header">
				<section>
					<p className="h2">FHS</p>
				</section>

				<section>
					<div className="buttonGrid">
						<button className="button inverse" onClick={setLevelOneActive}>MENU</button>
						<button className="button inverse" onClick={setAccountActive}>LOG-IN</button>
					</div>
				</section>
			</header>

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

			<SlideOut active={levelOneActive} setActive={setLevelOneActive}>
				<div style={{ display: `flex`, flexDirection: `column`, justifyContent: `space-between`, height: `100%` }}>
					
					<div className="navSection">
						<ul className="navLinks">
							<li><a href="/">Home</a></li>
							<li><a href="#">About FHS</a></li>
							<li><a href="#">ESG Impact</a></li>
							<li><a href="#">Award Winners</a></li>
							<li><a href="#">FHS Club</a></li>
						</ul>
					</div>

					<section>
						<br />
						<br />
						
						<div className="navSection">
							<p className="h4">FHS Events</p>
							<ul className="navLinks">
								<li><a className="button inverse" href="/world">FHS World</a></li>
								<li><a className="button inverse" href="/sa">FHS Saudi Arabia</a></li>
								<li><a className="button inverse" href="/africa">FHS Africa</a></li>
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
					</section>
					
				</div>

				<SlideOut active={levelTwoActive} setActive={setLevelTwoActive}>
					<div className="navSection">
						<p className="h4">About</p>
					</div>
				</SlideOut>
			</SlideOut>


			<div style={{ display: `flex`, justifyContent: `center` }}>
				<div style={{ display: `inline-flex`, flexDirection: `column`, gap: 20 }}>
					
					<a href="/world">
						<section style={{ padding: `2rem`, borderRadius: `1rem`, border: `1px solid var(--fg)`, textAlign: `center`}}>
							<p className="h4">FHS World</p>
						</section>
					</a>
					
					<a href="/sa">
						<section style={{ padding: `2rem`, borderRadius: `1rem`, border: `1px solid var(--fg)`, textAlign: `center`}}>
							<p className="h4">FHS Saudi Arabia</p>
						</section>
					</a>

					<a href="/africa">
						<section style={{ padding: `2rem`, borderRadius: `1rem`, border: `1px solid var(--fg)`, textAlign: `center`}}>
							<p className="h4">FHS Africa</p>
						</section>
					</a>

				</div>
			</div>

		</>
	)
}
