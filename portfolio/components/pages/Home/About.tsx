'use client'
import { FC } from 'react'
import Link from 'next/link'

import { Icon } from "@/components/ui/evervault-card"
import { socialData } from '@/constants/social'
import Globe from "@/components/ui/magicui/globe"



const About: FC = () => {


    return <section  className='my-8 lg:mb-36 relative border border-zinc-700 ' id='about'>

                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

            <div className="px-1 mx-auto max-w-7xl sm:px-8">
                <div className="items-center py-6 lg:flex ">
                    <div className="flex-1 mx-5 font-sans text-white lg:mb-0 aboutText">
                        <h1 className="my-5 text-3xl font-bold lg:5xl text-transparent bg-clip-text bg-gradient_green">About Me</h1>
                        <p className="font-light antialiased text-gray-200 ">This is Nayan chandrakar, a Web Application Developer from Raipur chhattisgarh.I learnt all the tech stacks from my self like Next Js , Tailwind css etc.! ✌<br /><br />I consider myself to be completely blessed as I get to inspect and build websites for a living. Of my intense interest in the Web Platform &amp; SaaS products, I plan to build results-driven digital products for my clients while becoming part of meaningful businesses along the way.<br /><br />I&apos;ve built numerous websites and worked closely with the founders of the companies. Besides, I&apos;ve also committed my time to 1 companies full-time to help them hire and manage their own technical team, and I am here today to become a part of your journey.<br /><br />Recently, I have developed a platfrom that is an digital marketing platform: The Run Digital, where we help entrepreneurs fix their web goals and help them achieve them with our web-based solutions. We are, after all, KPI-driven.</p>

                        <div className="flex my-5 space-x-4 align-middle">
                            {socialData?.map((data, index) => {
                                const { Icon, id, redirectUrl } = data
                                return (
                                    <Link target='_blank' key={id} href={redirectUrl}>
                                        <Icon size={25} />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* image div here  */}
                        <div className="relative overflow-hidden  flex h-full w-full max-w-[32rem] items-center justify-center  rounded-lg  bg-background px-40 pb-20 pt-72 md:pb-60 md:shadow-xl">
                        <Globe className="top-0" />
                        </div>
                </div>
            </div>
    </section>
}

export default About