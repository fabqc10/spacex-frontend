"use client"
import React, { useContext } from 'react'
import { AstronautContext } from '../contexts/astronaut.context';
import AstronautCard from '../components/AstronautCard';

const Astronauts = () => {
    const {astronauts} = useContext(AstronautContext);
  return (
    <div className='w-full md:w-4/5 lg:w-3/5 xl:w-4/5 mx-auto'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
            astronauts.map(astronaut => (
                <AstronautCard key={astronaut.id} astronaut={astronaut}/>
            ))
        }
        
    </div>
    </div>
  )
}

export default Astronauts;