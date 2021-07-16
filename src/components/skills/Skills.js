import React,{useRef, useState} from 'react'
import Skill from './Skill'
import './Skills.css'

const Skills = () => {
	const accordion = useRef()
	const [skills,setSkills] = useState([
		{show:false,title:"LANGUAGES",languages:["Javascript","Typescript","Cpp","Java"],icon:"fas fa-folder"},
		{show:false,title:"FRONT-END",languages:["Reactjs","Redux","Nextjs","HTML5","CSS3","Bootstrap","Styled-Components"],icon:"fas fa-code fa-2x"},
		{show:false,title:"BACK-END",languages:["Nodejs","Expressjs","MongoDB","Mongoose","Sequelize","Socket.io"],icon:"fas fa-server fa-2x"},
		{show:false,title:"OTHERS",languages:["Git","Postman","Heroku","npm","vs-code"],icon:"fas fa-code-branch fa-2x"}
	])
	const showDetails=(e)=>{
		e.target.classList.toggle("active")
		let title=e.target.innerText
		
		let updatedState= skills.map(skill=>
			{	
				if(skill.title===title.trim())
					{	
						return {...skill,show:!skill.show}
					}
				else {
					return skill
				}
					
			})
		
		setSkills(updatedState)
		
	}

	return(
		<>
		<header className='text-center h1 mt-5'>
			Skills
			<div className="sub-header h6 text-muted">My technical level</div>
		</header>
		<div className="mx-auto my-5 row"  style={{width:"100%"}} >
		{
			skills.map(skill=>{
				return <div key={skill.title} className="col-12 col-lg-6 mt-3">
				<button className="accordion" ref={accordion} onClick={(e)=>showDetails(e)}>
					<i className={skill.icon}></i> {skill.title}
				</button>

	 			<div className="panel d-flex p-0 m-0" style={{maxHeight:skill.show?"900px":null}}>
					 <Skill languages={skill.languages}/>
				</div>

				</div>
			})	
		}
	
		</div>
	</>
	)
}

export default Skills