import React from 'react'

const Register = () => {
    return (
        <>
            <section class="grid text-center  items-center md:p-10 p-4 fastFadeIn">
                <div className='border-2 py-10 border-[#0000003f] mx-auto max-w-5xl w-full rounded-lg'>
                    <h3 class="text-3xl font-semibold mb-2 text-start px-5">Register</h3>
                    <p class="mb-10 text-gray-700 text-start px-5">
                        regsiter your account for sign in
                    </p>
                    <form action="#" class="mx-auto w-full px-5 text-left">
                        <div className="grid md:grid-cols-2 gap-5 mb-6">

                            <div class="">
                                <label for="email" class="mb-1 block font-medium text-gray-900">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter Your Name"
                                    class="w-full border rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                                />
                            </div>
                            <div class="">
                                <label for="password" class="mb-1 block font-medium text-gray-900">
                                    Number
                                </label>
                                <input
                                    id="Number"
                                    type="number"
                                    placeholder="Enter Your Number"
                                    class="w-full border placeholder:pt-5 placeholder:block rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                                />
                            </div>
                            <div class="">
                                <label for="email" class="mb-1 block font-medium text-gray-900">
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter Your Email"
                                    class="w-full border rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                                />
                            </div>
                            <div class="">
                                <label for="password" class="mb-1 block font-medium text-gray-900">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter Your Password"
                                    class="w-full border placeholder:pt-5 placeholder:block rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                                />
                            </div>
                        </div>
                        <button class="bg-black text-white text-lg py-3 rounded-md border-2 border-black font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black w-full">
                            Regsiter
                        </button>
                        
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register