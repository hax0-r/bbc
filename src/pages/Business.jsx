import React from 'react'
import { pollData } from '../Data/PollVotes'
import Votes from '../components/Votes'

const Business = () => {

    const pollDataFilter = pollData.filter((item,index)=>(
        item.category === 'Business'
    ))
    
    return (
        <>
           <div className="fastFadeIn">
                <h2 className='text-center md:text-3xl text-2xl font-bold md:mt-12 mt-8 '>Business Content</h2>

                <div className="max-w-7xl mx-auto w-full p-5">

                    <div className="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">

                        {pollDataFilter.map((poll, index) => (
                            <Votes key={index} poll={poll} />
                        ))}

                    </div>

                </div>

            </div>
        </>
    )
}

export default Business