import React, { useState } from 'react';

const Votes = () => {
    const [votes, setVotes] = useState({
        firstOption: 8,
        secondOption: 2,
        thirdOption: 33,
    });
    const [totalVotes, setTotalVotes] = useState(43); // Initial total votes
    const [selectedOption, setSelectedOption] = useState(null); // Track user's current selection

    // Handle vote selection and update
    const handleVote = (option) => {
        // If the user clicks the same option, do nothing
        if (selectedOption === option) return;

        setVotes((prevVotes) => {
            const updatedVotes = { ...prevVotes };

            // If the user had previously selected an option, remove their vote from the previous option
            if (selectedOption) {
                updatedVotes[selectedOption] -= 1;
            } else {
                // Only increment totalVotes if this is the user's first vote
                setTotalVotes((prevTotal) => prevTotal + 1);
            }

            // Add vote to the newly selected option
            updatedVotes[option] += 1;

            return updatedVotes;
        });

        setSelectedOption(option); // Update selected option
    };

    // Calculate the width percentage for each option based on votes
    const calculateWidth = (optionVotes) => {
        return `${(optionVotes / totalVotes) * 100}%`;
    };

    return (
        <div className="">
            <div className="border p-5 myShadow rounded-md">
                <h2 className="font-semibold text-lg leading-tight">What might be your first question?</h2>

                {/* First Option */}
                <div className="cursor-pointer" onClick={() => handleVote('firstOption')}>
                    <div className="text-sm flex items-center mt-8 justify-between">
                        <p>First Option</p>
                        <p>{votes.firstOption}</p>
                    </div>
                    <div
                        className="w-full h-2 bg-zinc-200 rounded-full mt-2 relative"
                    >
                        <span
                            className={`h-full block rounded-full transition-all duration-500 ${selectedOption === 'firstOption' ? 'bg-blue-500' : 'bg-zinc-800'}`}
                            style={{ width: calculateWidth(votes.firstOption) }}
                        ></span>
                    </div>
                </div>

                {/* Second Option */}
                <div className="cursor-pointer" onClick={() => handleVote('secondOption')}>
                    <div className="text-sm flex items-center mt-5 justify-between">
                        <p>Second Option</p>
                        <p>{votes.secondOption}</p>
                    </div>
                    <div
                        className="w-full h-2 bg-zinc-200 rounded-full mt-2 relative"
                    >
                        <span
                            className={`h-full block rounded-full transition-all duration-500 ${selectedOption === 'secondOption' ? 'bg-blue-500' : 'bg-zinc-800'}`}
                            style={{ width: calculateWidth(votes.secondOption) }}
                        ></span>
                    </div>
                </div>

                {/* Third Option */}
                <div className="cursor-pointer" onClick={() => handleVote('thirdOption')}>
                    <div className="text-sm flex items-center mt-5 justify-between">
                        <p>Third Option</p>
                        <p>{votes.thirdOption}</p>
                    </div>
                    <div
                        className="w-full h-2 bg-zinc-200 rounded-full mt-2 relative"
                    >
                        <span
                            className={`h-full block rounded-full transition-all duration-500 ${selectedOption === 'thirdOption' ? 'bg-blue-500' : 'bg-zinc-800'}`}
                            style={{ width: calculateWidth(votes.thirdOption) }}
                        ></span>
                    </div>
                </div>

                {/* Total Votes */}
                <p className="mt-7 text-sm">Total Votes: <span className="font-semibold">{totalVotes}</span></p>
            </div>
        </div>
    );
};

export default Votes;
