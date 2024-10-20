import React from 'react'
import Votes from '../components/Votes'
import { pollData } from '../Data/PollVotes'

const Servey = () => {
    return (
        <>

            <div className="fastFadeIn">
                <h2 className='text-center md:text-3xl text-2xl font-bold md:mt-12 mt-8 '>Features Content</h2>

                <div className="max-w-7xl mx-auto w-full p-5">

                    <div className="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">

                        {pollData.map((poll, index) => (
                            <Votes key={index} poll={poll} />
                        ))}

                    </div>

                </div>

            </div>

        </>
    )
}

export default Servey