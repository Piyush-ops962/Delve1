import classNames from 'classnames'
import React ,{ useState } from 'react'
import { Link } from 'react-router-dom'

const list = [
	{
		id: '1',
		product_name: 'Id--->',
		
	},
	{
		id: '2',
		product_name: 'Type-->',
		
	},
	{
		id: '3',
		product_name: 'Content',
	
	},
	{
		id: '4',
		product_name: 'Visible>',
		
	}
]

function PopularProducts() {

	const [hoveredIndex, setHoveredIndex] = useState(null);

 

	return (
		<div className="w-[20rem] bg-gray-800 p-4 rounded-sm border border-gray-200">
			<strong className="text-white font-medium">Block Builder</strong>
			<div className="mt-4 flex flex-col gap-3">
				{list.map((product) => (

                    // key={product.id}
                    //     onMouseEnter={() => handleHover(product.id)}
                    //     onMouseLeave={handleMouseLeave}
                    //      className="relative"
                        
                    //     {item}
                        
              
					
						
						<div className="items-center ml-4 flex flex-row">
							<p className="text-sm text-white">{product.product_name}</p>
							<button className="ml-40 right-0 bg-white text-green px-2 py-1 rounded-sm">
	                           Edit
                             </button>
					
						</div>
						
					
				))}
			</div>
		</div>
	)
}

export default PopularProducts
