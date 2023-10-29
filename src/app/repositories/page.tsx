import RepoCard from '@/components/RepoCard'
import React from 'react'

function Repositories() {
    return (
        <>
            <div className='min-h-screen flex flex-row ' >
                <div className='w-1/4 h-screen border-2 border-black ' >
                    <div className='m-4' >
                        <h4 className='text-primary' >Filter by</h4>
                        <h4 className='text-primary underline' >Languages</h4>
                        <div className='flex items-center gap-2 p-1 px-3 w-full  border rounded-md hover:bg-slate-300 transition-all duration-200 my-2 ' >
                            <div className='w-2 h-2 rounded-full bg-primary' />
                            <h5>Java</h5>
                        </div>
                        <div className='flex items-center gap-2 p-1 px-3 w-full  border rounded-md hover:bg-slate-300 transition-all duration-200 my-2 ' >
                            <div className='w-2 h-2 rounded-full bg-primary' />
                            <h5>Javascript</h5>
                        </div>
                        <div className='flex items-center gap-2 p-1 px-3 w-full  border rounded-md hover:bg-slate-300 transition-all duration-200 my-2 ' >
                            <div className='w-2 h-2 rounded-full bg-primary' />
                            <h5>Typescript</h5>
                        </div>
                        <div className='flex items-center gap-2 p-1 px-3 w-full  border rounded-md hover:bg-slate-300 transition-all duration-200 my-2 ' >
                            <div className='w-2 h-2 rounded-full bg-primary' />
                            <h5>C</h5>
                        </div>
                        <div className='flex items-center gap-2 p-1 px-3 w-full  border rounded-md hover:bg-slate-300 transition-all duration-200 my-2 ' >
                            <div className='w-2 h-2 rounded-full bg-primary' />
                            <h5>C++</h5>
                        </div>


                    </div>
                </div>
                <div className='w-full h-screen border-2 flex flex-col items-center  justify-start border-black' >
                    <button className='self-end mx-8 mt-4 hover:bg-secondary transition-all duration-150 ' >Add Repo</button>
                    <h4 className='mt-10 text-primary' >Search for repositories</h4>

                    <input className="shadow mt-2 appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight  focus:outline-none border-black focus:shadow-outline" id="username" type="text" placeholder="search" />
                    <div className='overflow-y-scroll scrollbar-hide' >
                        <RepoCard />
                        <RepoCard />
                        <RepoCard />

                    </div>

                </div>
                <div className='w-1/3 h-screen border-2 border-black' >
                    <div className='p-4 m-4 border rounded-md' >
                        <h4 className='text-primary' >Sponsor open source projects you depend on</h4>
                        <h6 className='mt-4' >Contributors are working behind the scenes to make open source better for everyone—give them the help and recognition they deserve.</h6>

                        <h6 className='text-ternary mt-2' >Explore sponsorable projects -{'>'}</h6>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Repositories