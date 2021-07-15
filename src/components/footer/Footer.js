import React from 'react'

const Footer = () =>{
	return(
		<div className="footer-section bg-dark row" style={{height:"15vh"}}>	
			<div className="col-12 col-lg-4  d-flex align-items-center justify-content-center text-muted">
				<h3 className="mx-3">Thanks for visiting !</h3>
				
			</div>
			<div className="col-12 col-lg-8  d-flex align-items-center justify-content-center  text-muted">
			Connect With Me :
				<a href="https://twitter.com/Mayur_keswani_" className="fab fa-twitter fa-2x mx-3" >_</a>
				<a href="https://github.com/mayur-keswani" className="fab fa-github fa-2x mx-3">_</a>
				<a className="fab fa-linkedin-in fa-2x mx-3" href="https://twitter.com/Mayur_keswani_">_</a>	
			</div>
		</div>
	)
}

export default Footer