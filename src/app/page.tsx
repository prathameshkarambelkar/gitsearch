import Image from "next/image"
import Link from "next/link"
import React from "react"

const Home: React.FC<Props> = () => {
  return (
    <>
      <div className=" min-h-[50vh] lg:min-h-screen w-full  flex flex-col items-center justify-center ">

        <div className="mx-10" >

          <h1 className="text-title" >Git-Search</h1>
          <h3>The only better alternative to github search.</h3>
          <Link href={'/repositories'} >
            <button className="mt-4  hover:bg-secondary duration-150 transition-all " >Explore Repositories</button>
          </Link>
        </div>

      </div>
    </>
  )
}
