import React from 'react'
import Logo from '../ui/logo/Logo'
const Footer = () =>{
	return(
		<div className="footer-section bg-dark row" style={{height:"12vh"}}>
			<div className="col-2 col-lg-2 d-flex align-items-center px-5" style={{borderRight:"2px solid #363636"}}>
				<Logo/>
			</div>
			<div className="col-2 col-lg-10  d-flex align-items-center justify-content-center text-muted">
				<h3 className="mx-3">Thanks for visiting !</h3>
				Any Query ?<button className="btn btn-info text-dark mx-3 px-4 ">Contact Me</button>
			</div>
		</div>
	)
}

export default Footer