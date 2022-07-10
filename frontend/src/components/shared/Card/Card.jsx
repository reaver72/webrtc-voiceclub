import React from 'react'

const Card = ({title,children,logo}) => {
	return (
	  <div className="flex items-center justify-center mt-28">
		<div className="w-5/12 bg-gray-800 rounded-xl py-4 px-8 text-center">
			<div className="flex items-center justify-center mb-4 mt-8">
				{logo}
              <h1 className="inline font-semibold text-lg">{title}</h1>
          </div>

          {children}
          
		</div>
		</div>
	);
}

export default Card