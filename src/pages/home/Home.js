import React from 'react'
import './Home.css'
import avatar from './avento.gif'
const Home = () =>{
	return(
		<div className="container-fluid row mx-0 p-0 main-section" style={{width:"100%"}}>
			<div className="col-1 d-flex flex-column align-items-center justify-content-center">	
				<a href="https://twitter.com/Mayur_keswani_"><i className="fab fa-twitter fa-lg mb-4"></i></a>
				<a href="https://github.com/mayur-keswani"><i className="fab fa-github fa-lg mb-4"></i></a>
				<a href="/"><i className="fab fa-linkedin-in fa-lg"></i></a>
			</div>
			<div className='col-lg-5 col-11'>	
				<header>
					<div className="introduction h2 pt-5">Hi, I'am Mayur</div>
					<h4 className="text-secondary">Full Stack Developer</h4>
					<h6 className="text-secondary mt-3" style={{lineHeight: "1.4"}}>
					I am a Software engineer from India,<br/>
					currently specialising in development of SPAs with Reactjs, <br/> REST APIs in Nodejs,
					and other web technologies</h6>
				</header>
				<div className="resume-section  d-flex mt-3">
					<button className="btn-resume btn btn-info  mr-3 text-white px-5">Resume</button>

					<a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mayurkeswani2001@gmail.com" 
						target="_blank"
						className="btn btn-outline-info text-dark ml-3 px-4">Email Me</a>
				</div>

			</div>

			<div className="col-lg-6 col-12 p-0">	
			 <img src={avatar} alt="avatar" className="img-fluid" width="100%"/>
			</div>
			
			
		</div>
	)
}

export default Home