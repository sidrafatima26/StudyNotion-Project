import React from 'react'

const Home = () => {
    return(
        <div className='flex flex-col justify-center items-center m-20 '>
            <div className='transition-all duration-200 border-2 hover:text-slate-600 hover:bg-white border-slate-200 bg-slate-600  hover:scale-105 hover:shadow-2xl h-14 w-26 text-xl p-3  text-white font-inter font-bold rounded-xl'> <button> Become an Instructor </button>  </div>
            <h1 className='text-3xl mt-16'> Empower your futute with Coding Skills </h1>
            <p>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
        </div>
    )
}

export default Home;

            // {/* <div className='text-black text-5xl text-center m-10 p-10'>
            //     You are inside Home Page. */}