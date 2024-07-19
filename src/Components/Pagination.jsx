import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the specific icons you need
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Pagination = ({handlePrev, handleNext, page}) => {
  return (
    <div className='bg-gray-600 h-[20px] w-[100] flex flex-row justify-center items-center'>
        <div className='mx-2' onClick={handlePrev}> <FontAwesomeIcon icon={faArrowLeft} /></div>
        <div className=''>{page}</div>
        <div className='mx-2' onClick={handleNext}> <FontAwesomeIcon icon={faArrowRight} /></div>
    </div>
  )
}

export default Pagination