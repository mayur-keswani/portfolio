import React from 'react'
import Icon from '../ui/icons/Icon'

const Footer = () =>{
	return(
		<div className="footer-section bg-dark row" style={{height:"15vh"}}>	
			<div className="col-12 col-lg-4  d-flex align-items-center justify-content-center text-muted">
				<h3 className="mx-3">Thanks for visiting !</h3>
				
			</div>
			<div className="col-12 col-lg-8  d-flex align-items-center justify-content-center  text-muted">
			
				<a href="https://twitter.com/Mayur_keswani_" className="mx-2" ><Icon name="twitter"/></a>
				<a href="https://github.com/mayur-keswani" className="mx-2"><Icon name="github"/></a>
				<a className="mx-2" href="https://twitter.com/Mayur_keswani_"><Icon name="linkedin"/></a>
				<a className="mx-2" href="https://mayurkeswani.hashnode.dev/"><Icon name="hashnode"/></a>	
			</div>
		</div>
	)
}

export default Footer