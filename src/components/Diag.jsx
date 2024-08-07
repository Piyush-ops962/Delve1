import React,  { useState,useCallback } from 'react'
import Button from './Button.jsx';

import ExpandableButtons from './group of buttons.jsx'
import classNames from 'classnames';


const TransactionChart = () => {

   
  const handleClick = () => {
    alert('Button clicked!');
  };

  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleToggleClick = () => {
      setIsButtonVisible(!isButtonVisible);
  };

  
	return (
    <div className='grid sm:grid-cols-2 col-span-3'>
	  <div style={{ width: '67vw', height: '60vh' }} className='grid sm:grid-rows-3 bg-gray-900 rounded-xl'>
      <div className='mt-10 ml-8'><Button onClick={handleToggleClick}>Navigation</Button></div>
      <div className='mt-8 ml-8 flex flex-row'>
         <div> <Button onClick={handleToggleClick}>Left Container</Button></div>
         {/* <div><t></t></div> */}
      
          {/* <div className='ml-40 items-center'>{isButtonVisible && (
                <ExpandableButtons />
            )}
            </div> */}
      </div>
      <div className='mt-8 ml-8'><Button onClick={handleClick}>Right Container</Button></div>
    </div>
    <div>
    <div className='mr-60  flex flex-row'>{isButtonVisible && (
                <ExpandableButtons />
            ) }
            </div>
    </div>
    </div>
	);
}


export default  TransactionChart;