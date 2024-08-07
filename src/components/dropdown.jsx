

import "./App.css";

const menuData = [
  { label: "> Header Section" ,
    submenu:[{ label: "> Navigation" },
    { label: "> Left Container" ,
      submenu: [
        {
          label: "Heading ",
        },
        { label: "Paragraph" },
      ],
    },
    { label: "> Right Container" ,
      submenu: [
        {
          label: "Image 1",
        },
        { label: "Image 2" },
      ],
    }],
  },
  {
    label: "> Partners Section",
    submenu: [{ label: "> Sub Menu 1" }, { label: "> Sub Menu 2" }],
  },
  {
    label: "> About Us Section",
    submenu: [
      { label: "> Sub Menu 1" },
      { label: "> Sub Menu 2" },
      { label: "> Sub Menu 3" },
      {
        label: "> Sub Menu 4",
        // submenu: [
        //   {
        //     label: "Sub sub menu 1",
        //   },
        //   { label: "Sub sub menu 2" },
        // ],
      },
    ],
  },
  {
    label: "> Footer",
    submenu: [{ label: "> Sub Menu 1" }, { label: "> Sub Menu 2" }],
  },
];

function Dropdown() {
  const toggleSubMenu = (e) => {
    e.stopPropagation();

    let submenu = e.target.querySelector("ul");

    if (!submenu) return;

    if (submenu.style.display === "none" || !submenu.style.display) {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  };

  const renderSubMenu = (subMenu) => {
    return (
      
      <ul className="submenu">
        
        {subMenu.map((subItem, index) => (
          <li className="font-normal mb-2 mt-2 ml-10 hover:text-white hover:shadow-none text-sm" key={index} >
            {subItem.label }
            {subItem.submenu && renderSubMenu(subItem.submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className=" bg-gray-900 rounded-xl p-4 drop-shadow-lg grid sm-rows-4 col-span-1" >
      <ul className="text-white ">
        
        {menuData.map((item, index) => (
          <li className=" font-bold ml-2 mb-3 hover:bg-customGreen hover:text-blue-500 hover:shadow-md" key={index} onClick={toggleSubMenu}>
              {item.label}
          
            {item.submenu && renderSubMenu(item.submenu)}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default App;

export default Dropdown;


// const menuData = [
//   { label: "Menu 1" },
//   {
//     label: "Menu 2",
//     submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
//   },
//   {
//     label: "Menu 3",
//     submenu: [
//       { label: "Sub Menu 1" },
//       { label: "Sub Menu 2" },
//       { label: "Sub Menu 3" },
//       {
//         label: "Sub Menu 4",
//         submenu: [
//           {
//             label: "Sub sub menu 1",
//           },
//           { label: "Sub sub menu 2" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Menu 4",
//     submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
//   },
// ];

// function App() {
//   const toggleSubMenu = (e) => {
//     e.stopPropagation();

//     let submenu = e.target.querySelector("ul");

//     if (!submenu) return;

//     if (submenu.style.display === "none" || !submenu.style.display) {
//       submenu.style.display = "block";
//     } else {
//       submenu.style.display = "none";
//     }
//   };

//   const renderSubMenu = (subMenu) => {
//     return (
//       <ul className="submenu">
//         {subMenu.map((subItem, index) => (
//           <li key={index} onClick={toggleSubMenu}>
//             {subItem.label}
//             {subItem.submenu && renderSubMenu(subItem.submenu)}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {menuData.map((item, index) => (
//           <li key={index} onClick={toggleSubMenu}>
//             {item.label}
//             {item.submenu && renderSubMenu(item.submenu)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;






//  <div className="relative inline-block text-left">
//       <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2    bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"    onClick={toggleDropdown }>
//         Dropdown button
//         <svg className="-mr-1 ml-1 h-5 w-5 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1    1 0 010-1.414z" clipRule="evenodd"></path>
//         </svg>
//       </button>

//       <div id="dropdown" className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none    ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdownButton">
//            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1</a>
//            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option    2</a>
//            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 3</a>
//          </div>
//        </div>
//     </div>