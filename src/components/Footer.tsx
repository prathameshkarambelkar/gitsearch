import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";



function Footer() {
    return (
        <footer className=" bg-white font-Inter w-full flex flex-col items-center justify-around mt-8 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] pb-2 pt-10">
            <div className="flex flex-col md:flex-row w-full  items-center justify-between  ">
                <div className="px-10 lg:px-2 md:px-10 mx-10 w-full  flex flex-col lg:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
                    <div className="w-full  sm:w-2/3 lg:w-3/12">
                        <div className="mb-4 w-full">
                            <h3>gitsearch</h3>
                            <p className="text-body-color mb-4 text-base">
                                The only better alternative to github search
                            </p>
                        </div>
                    </div>



                </div>
            </div>

            <hr className="h-px my-8 bg-black self-center border-0 w-11/12" />
            <h6 className="mx-6" >
                Copyright © 2023. All rights reserved.
            </h6>
            <h6 className="mx-6" >
                gitsearch           </h6>
        </footer>
    );
}

export default Footer;
