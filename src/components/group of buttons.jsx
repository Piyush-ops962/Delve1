// src/ExpandableButtons.js
import React, { useState } from 'react';

const ExpandableButtons = () => {
    const [expandedButton, setExpandedButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setExpandedButton(expandedButton === buttonId ? null : buttonId);
    };
  
    return (
        <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-md">
            {/* {[1, 2, 3].map((id) => ( */}
              
                <div key={1} className="w-full">
                    <button 
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-violet-600"
                        onClick={() => handleButtonClick(1)}
                    >
                        {">"} Heading {1}
                    </button>
                    {expandedButton === 1 && (
                        <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded">
                            <p>This is the expanded content for button {1}.</p>
                        </div>
                    )}
                </div>
                <div key={2} className="w-full">
                    <button 
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-violet-600"
                        onClick={() => handleButtonClick(2)}
                    >
                        {">"} Paragraph
                    </button>
                    {expandedButton === 2 && (
                        <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded">
                            <p>This is the expanded content for button {2}.</p>
                        </div>
                    )}
                </div>
                <div key={3} className="w-full">
                    <button 
                        className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-violet-600"
                        onClick={() => handleButtonClick(3)}
                    >
                        {">"}Button
                    </button>
                    {expandedButton === 3 && (
                        <div className="mt-2 p-4 bg-gray-100 border border-gray-300 rounded">
                            <p>This is the expanded content for button {3}.</p>
                        </div>
                    )}
                </div>
          
        </div>
    );
};

export default ExpandableButtons;
