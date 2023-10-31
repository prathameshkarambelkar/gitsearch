import Image from 'next/image'
import React from 'react'

function RepoCard() {
    return (
        <div className='my-4 mx-8 p-8 border-black border rounded-md flex justify-between items-center ' >
            <div className=' w-9/12 ' >
                <h3 className='text-primary' >This is a demo Title</h3>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis non asperiores possimus odit, voluptatum ullam sint perferendis id molestias facere dolorum officia deserunt nisi maiores assumenda, laudantium natus magni deleniti!</h5>
                <div className='flex gap-2 mt-4 ' >
                    <div className='rounded-full border flex p-2 items-center gap-2 w-1/4 bg-ternary ' >
                        <div className='w-2 h-2 rounded-full bg-primary' />
                        <h6 className='text-white' >zustand</h6>
                    </div>
                    <div className='rounded-full border flex p-2 items-center gap-2 w-1/4 bg-primary ' >
                        <div className='w-2 h-2 rounded-full bg-primary' />
                        <h6 className='text-white' >Tailwind</h6>
                    </div>
                    <div className='rounded-full border flex p-2 items-center gap-2 w-1/4 bg-secondary ' >
                        <div className='w-2 h-2 rounded-full bg-primary' />
                        <h6 className='text-white' >typescript</h6>
                    </div>
                </div>
            </div>
            <div>
                <Image src={'/vercel.svg'} width={200} height={200} alt='RepoImage' />
            </div>
        </div>
    )
}

export default RepoCard