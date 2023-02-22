import React from 'react'
import links from '../utils/llinks'
const Sidebar = () => {
    return (
        <div>

            <ul>
                {links.map((link) => {
                    return (
                        <div className='relative'>
                            <li
                                className='h-10 flex items-center pl-4 pr-6 text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer'
                                key={link.id}
                            >
                                <h3 className='font-medium'>{link.name}</h3>
                            </li>
                            <div className='absolute top-0 left-0 w-full h-full bg-blue-100 opacity-0 hover:opacity-50'></div>
                        </div>
                    );
                })}
            </ul>


        </div>
    )
}

export default Sidebar