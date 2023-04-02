export default function () {
    return (
        <section className="relative left-0 w-full min-h-[100vh] bg-white ">
            <div className="md:max-w-[850px] mx-auto h-full px-6 py-12">
                <div className="mb-6">
                    <button className="text-base text-gray-600 bg-gray-100 py-2 px-4 rounded-full">Go Back</button>
                </div>
                <div
                    className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                        <img
                            src="/Mobile login-cuate.png"
                            className="w-full"
                            alt="Phone image" />
                    </div>
                    <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                        <h1 className="text-xl text-brand-ember-l-2 mb-6">Login</h1>
                        <form>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="email" name="floating_email" id="email" className="px-1 text-gray-500 rounded-md block py-2.5 w-full text-sm bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-ember-l-3 peer" placeholder=" " required />
                                <label htmlFor="email" className="bg-white left-2 px-1 z-10 peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-2 peer-focus:text-brand-ember-l-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="password" name="floating_email" id="password" className="px-1 text-gray-500 rounded-md block py-2.5 w-full text-sm bg-transparent border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-ember-l-3 peer" placeholder=" " required />
                                <label htmlFor="password" className="bg-white left-2 px-1 z-10 peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-2 peer-focus:text-brand-ember-l-3 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Password</label>
                            </div>
                            <div className="mb-6 flex items-center justify-between">
                                <div className="mb-[0.125rem] block min-h-[1.5rem]">
                                    <input
                                        className=""
                                        type="checkbox"
                                        value=""
                                        id="exampleCheck3"
                                        checked />
                                    <label
                                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="exampleCheck3">
                                        Remember me
                                    </label>
                                </div>
                                <a
                                    href="#!"
                                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
                                >Forgot password?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-brand-ember-l-3 text-white text-lg rounded-lg py-3 px-4"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Sign in
                            </button>

                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold">
                                    OR
                                </p>
                            </div>

                            <a
                                className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                style={{ backgroundColor: "#3b5998" }}
                                href="#!"
                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-3.5 w-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                                Continue with Facebook
                            </a>
                            <a
                                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pt-3 pb-2.5 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
                                style={{ backgroundColor: "#55acee" }}
                                href="#!"
                                role="button"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 h-3.5 w-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                                Continue with Twitter
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}