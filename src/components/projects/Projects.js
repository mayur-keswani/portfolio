import React from 'react'
import Icon from '../ui/icons/Icon'
import data from './ProjectList.json'
import './Projects.css'

const Projects = () =>{
	console.log(data)
	return(
		<>
			<header className='text-center h1' style={{marginTop:"8rem"}}>
				Portfolio
				<div className="sub-header h6 text-muted">My recent work</div>
			</header>
			{
			 data.map((project,index)=>
			  <div className="card" key={index} style={{width:"100%",boxSizing:"border-box"}}>
        		<div className="card-body m-0 p-0" 
					style={{height:"100%",boxSizing:"border-box"}}>

				<div className="project row mb-4 d-flex" 
					style={{height:"100% ",flexDirection:(index%2!==0)?"row-reverse":"row"}}>

            		<div className="col-md-5 col-lg-3 col-xl-3" 
						style={{height:"100%"}}>
              			<div className="view zoom overlay z-depth-1 rounded d-flex justify-content-center" 
						  style={{height:"100%"}}>
                		  <img className="img-fluid " 
                  			src={project.logo} alt="Sample"
							/>    		  
              			</div>
            		</div>
            		<div className="col-md-7 col-lg-9 col-xl-9">
                			<div className="p-5">	
                    	    	<h2>{project.title}</h2>
                    			<p className="mb-3 text-muted text-uppercase small">{project.description}</p>
								<div className="d-flex align-items-center" style={{flexWrap:"wrap"}}>
								{
									project.stack.map(stk=>
										<span className='px-5 py-2 m-2 stack' key={stk}>{stk}</span>
									)
								}	
								</div>
								
								<div className="d-flex flex-wrap mt-5">
									<a href={project.github} className="btn btn-secondary px-5 py-2 m-1">
										<Icon name="github"/><h6> GitHub </h6></a>	
									<a href={project.demo} className="btn btn-dark px-5 m-1">
										<Icon name="preview"/><h6> Preview </h6></a>
									{
									  project.gif?
									  	<a href={project.gif} className="btn btn-outline-dark px-5 py-2 m-1">
											<Icon name="gif"/><h6>Gif</h6> 
										</a>
										:
										""}
								</div>
								
								
                			</div>
            		</div>
          		</div>
          
       		   </div>
      		 </div>
			)
			}
			
		     
		</>
	)
}


export default Projects