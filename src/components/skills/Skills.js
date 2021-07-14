import React,{useRef, useState} from 'react'
import './Skills.css'
const Skills = () => {
	const accordion = useRef()
	const [skills,setSkills] = useState([
		{show:false,title:"Frontend",languages:[],icon:"fas fa-code fa-2x"},
		{show:false,title:"Backend",languages:[],icon:"fas fa-server fa-2x"},
		{show:false,title:"Others",languages:[],icon:"fas fa-code-branch fa-2x"}
	])
	const showDetails=(e)=>{
		e.target.classList.toggle("active")
		let title=e.target.innerText
		// console.log(title.trim())
		let updatedState= skills.map(skill=>
			{	console.log(skill.title+" + "+title +" = "+ (skill.title.toString()==title.toString))
				if(skill.title===title.trim())
					{	console.log("here")
						return {...skill,show:!skill.show}
					}
				else {
					return skill
				}
					
			})
		console.log(updatedState)
		setSkills(updatedState)
		
	}

	return(
		<>
		<header className='text-center h1 mt-5'>
			Skills
			<div className="sub-header h6 text-muted">My technical level</div>
		</header>
		<div className="mx-auto my-4 row"  style={{width:"90%"}} >
		{
			skills.map(skill=>{
				return <div key={skill.title} className="col-12 col-lg-6 mt-3">
				<button className="accordion" ref={accordion} onClick={(e)=>showDetails(e)}>
					<i className={skill.icon}
					></i> {skill.title}</button>
	 			<div className="panel" style={{maxHeight:skill.show?"200px":null}}>
  					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				</div>
			})	
		}
	
	</div>
	</>
	)
}

export default Skills