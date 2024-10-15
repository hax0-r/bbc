import React from 'react'
import Votes from '../components/Votes'

const Servey = () => {
    return (
        <>

            <div className="fastFadeIn">
                <h2 className='text-center md:text-3xl text-2xl font-bold md:mt-12 mt-8 '>Features Content</h2>

                <div className="max-w-7xl mx-auto w-full p-5">

                    <div className="max-w-7xl w-full p-5 mx-auto grid grid-cols-3 gap-5">

                        <Votes />
                        <Votes />
                        <Votes />
                        <Votes />
                        <Votes />
                        <Votes />

                    </div>

                </div>

            </div>

        </>
    )
}

export default Servey