import React from 'react'
import Icon from '../ui/icons/Icon'
const Skill =({languages})=>{
	return(
		<div className="row m-0 p-0" style={{width:"100%",height:"100%"}} >
			{
			languages.map(name=>
			 <div key={name} style={{height:"100%"}}
				className="p-0 h5 text-secondary col-6 col-lg-3 d-flex align-items-center justify-content-center">
				<Icon name={name} size="large"/><span className="mx-2">{name}</span>
			 </div>
			 )
			}
		</div>
		
	)
}

export default Skill