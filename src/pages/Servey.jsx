import React, { useState } from 'react';
import Votes from '../components/Votes';
import { pollData } from '../Data/PollVotes';

const Servey = () => {
    const [visibleCount, setVisibleCount] = useState(12);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 9);
    };

    return (
        <div className="fastFadeIn">
            <h2 className='text-center md:text-3xl text-2xl font-bold md:mt-12 mt-8'>Features Content</h2>

            <div className="max-w-7xl mx-auto w-full p-5">
                <div className="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                    {pollData.slice(0, visibleCount).map((poll, index) => (
                        <Votes key={index} poll={poll} />
                    ))}
                </div>

                {visibleCount < pollData.length && (
                    <button onClick={handleShowMore} className="mt-6 transition-all hover:bg-zinc-100 duration-500 text-zinc-800 font-medium w-full border-2 rounded-lg p-4 text-center">
                        Show More
                    </button>
                )}
            </div>
        </div>
    );
}

export default Servey;
