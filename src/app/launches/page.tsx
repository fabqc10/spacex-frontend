import React, { useContext } from 'react'
import { LaunchesContext } from '../contexts/launches.context';

const Launches = () => {
    const {launches, getlaunches, currentPage} = useContext(LaunchesContext);
  return (
    <div className='text-white'>Launches</div>
  )
}

export default Launches;