import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
  } from "react-icons/rx";
  
  import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bond text-[16px]'>Community</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <FaYoutube/>
                        <span className='text-[15px] ml-[6px] cursor-pointer'>Youtube</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxGithubLogo/>
                        <span className='text-[15px] ml-[6px] cursor-pointer'>Github</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxDiscordLogo/>
                        <span className='text-[15px] ml-[6px] cursor-pointer'>Discord</span>
                    </p>
                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bond text-[16px]'>Social Media</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxInstagramLogo/>
                        <span className='text-[15px] ml-[6px] cursor-pointer'>Instagram</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxTwitterLogo/>
                        <span className='text-[15px] ml-[6px] cursor-pointer'>Twiter</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxLinkedinLogo/>
                        <span className='text-[15px] ml-[6px] cursor-pointer'>Linkedin</span>
                    </p>
                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bond text-[16px]'>About</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px] cursor-pointer'>Become Sponsor</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px] cursor-pointer'>Learning about me</span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px] cursor-pointer'>test@gmail.com</span>
                    </p>
                </div>

                <div className='mb-[20px] text-[15px] text-center'>
                    &copy; Omkar Mirgal 2024 Inc. All rights reserved
                </div>

            </div>
        </div>

    </div>
  )
}

export default Footer