import React from 'react'

const Login = () => {
    return (
        <>
            <section class="grid fastFadeIn text-center  items-center md:p-10 p-4">
                <div className='border-2 py-10 border-[#0000003f] mx-auto max-w-[35rem] w-full rounded-lg'>
                    <h3 class="text-3xl font-semibold mb-2">Sign In</h3>
                    <p class="mb-10 text-gray-700 px-3">
                        Enter your email and password to sign in
                    </p>
                    <form action="#" class="mx-auto w-full px-5 text-left">
                        <div class="mb-5">
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
                        <div class="mb-6">
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
                        <button class="bg-black text-white text-lg py-3 rounded-md border-2 border-black font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black w-full">
                            Sign In
                        </button>
                        <div class="mt-3 flex justify-end">
                            <a href="#" class="font-medium text-sm hover:underline">Forgot password</a>
                        </div>
                        <button
                            class="border hover:bg-zinc-50 transition-all duration-300 border-black rounded-md text-lg py-3 mt-6 w-full flex items-center justify-center gap-2"
                        >
                            <img
                                src="https://www.material-tailwind.com/logos/logo-google.png"
                                alt="google"
                                class="h-6 w-6"
                            />
                            Sign in with Google
                        </button>
                        <p class="mt-4 text-center text-gray-600">
                            Not registered? <a href="#" class="font-medium hover:underline text-gray-900">Create account</a>
                        </p>
                    </form>
                </div>
            </section>

        </>
    )
}

export default Login