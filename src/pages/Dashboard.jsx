import React from 'react'
import Flow from '../components/Diag'
import RecentOrders from '../components/Code Editor'
// import BuyerProfilePieChart from '../components/BuyerProfilePieChart'
import PopularProducts from '../components/BlockBuilder'
import Dropdown from '../components/dropdown'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4 grid grid-cols-1 ">
			
			<div className="flex flex-row gap-3 w-full grid grid-cols-1 sm:grid-cols-4 ">
			          <Dropdown />
				       <Flow /> 
				{/* <BuyerProfilePieChart /> */}
			</div>
			<div className="flex flex-row gap-4 w-full  ">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
	)
}
