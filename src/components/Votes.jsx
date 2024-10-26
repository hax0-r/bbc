import React, { useState } from 'react';

const Votes = ({ poll }) => {
    const [votes, setVotes] = useState(
        poll.options.reduce((acc, option) => {
            acc[option.id] = option.votes;
            return acc;
        }, {})
    );
    const [totalVotes, setTotalVotes] = useState(
        poll.options.reduce((acc, option) => acc + option.votes, 0)
    );
    const [selectedOption, setSelectedOption] = useState(null);

    const handleVote = (optionId) => {
        if (selectedOption === optionId) return;

        setVotes((prevVotes) => {
            const updatedVotes = { ...prevVotes };

            if (selectedOption) {
                updatedVotes[selectedOption] -= 1;
            } else {
                setTotalVotes((prevTotal) => prevTotal + 1);
            }

            updatedVotes[optionId] += 1;
            return updatedVotes;
        });

        setSelectedOption(optionId);
    };

    const calculateWidth = (optionVotes) => {
        return `${(optionVotes / totalVotes) * 100}%`;
    };

    return (
        <div className="border p-5 myShadow rounded-md flex flex-col justify-between fadeIn">
            <h2 className="font-semibold text-lg mb-5">{poll.question}</h2>

            {poll.options.map((option) => (
                <div
                    key={option.id}
                    className="cursor-pointer"
                    onClick={() => handleVote(option.id)}
                >
                    <div className="text-sm flex items-center mt-5 justify-between">
                        <p>{option.text}</p>
                        <p>{votes[option.id]}</p>
                    </div>
                    <div className="w-full h-2 bg-zinc-200 rounded-full mt-2 relative">
                        <span
                            className={`h-full block rounded-full transition-all duration-500 ${
                                selectedOption === option.id ? 'bg-zinc-950' : 'bg-zinc-800'
                            }`}
                            style={{ width: calculateWidth(votes[option.id]) }}
                        ></span>
                    </div>
                </div>
            ))}

            <p className="mt-7 text-sm">Total Votes: <span className="font-semibold">{totalVotes}</span></p>
        </div>
    );
};

export default Votes;
