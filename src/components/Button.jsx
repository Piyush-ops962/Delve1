import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-row  bg-gray-800 hover:bg-violet-600 text-white py-2 px-4 rounded"
    >
      {children}

<ArrowRightIcon className="h-5 w-5 ml-2" />    
      
    </button>
  );
};

export default Button;
