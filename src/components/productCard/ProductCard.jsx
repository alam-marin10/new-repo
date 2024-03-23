import React, { useContext } from 'react'
import MyContext from '../../context/data/MyContext'

function ProductCard() {
    const context = useContext(MyContext)
    const { mode } = context
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl  font-medium title-font mb-2 text-gray-900  text-center " style={{ color: mode === 'dark' ? 'white' : '' }}>
                        Our Latest Books</h1>
                    <div class="h-1 w-25 bg-pink-600 rounded text-center"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out 
                           border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                            color: mode === 'dark' ? 'white' : '', }} >

                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" 
                                src="picture/1234.png" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Book Name</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Av.-29</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Request Now</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="picture/1234.png" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Book Name</h1>
                                 <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Av.-29</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Request Now</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="picture/1234.png" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Book Name</h1>
                                 <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Av.-29</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Request Now</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="picture/1234.png" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Book Name</h1>
                                 <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Av.-29</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Request Now</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="picture/1234.png" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Book Name</h1>
                                 <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Av.-29</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Request Now</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="picture/1234.png" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Book Name</h1>
                                 <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Av.-29</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Request Now</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="picture/1234.png" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Book Name</h1>
                                 <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Av.-29</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Request Now</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="picture/1234.png" alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>Book Name</h1>
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>Av.-29</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Request Now</button>

                                </div>
                            </div>

                        </div>
                    </div>



                </div>

            </div>
        </section >

    )
}

export default ProductCard