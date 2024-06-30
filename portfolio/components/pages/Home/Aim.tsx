'use client'
import { FC } from 'react'
import { useNavigation } from '@/hooks/useNavigation'
import { AnimatedBeamDemo } from './aim-beams'
import { Button } from "@/components/ui/button/Button"
import { Icon } from "@/components/ui/evervault-card"


interface AimProps {

}

const Aim: FC<AimProps> = ({ }) => {

    const { setIsOpen } = useNavigation(state => ({
        setIsOpen: state.setIsOpen
    }))

    return <section id='service'
            className='grid-cols-2 lg:grid backdrop-blur-sm mt-20 border border-zinc-800 w-full p-4 relative  bg-black'>

                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

             <AnimatedBeamDemo />

            <div className="flex flex-col items-start justify-center p-5 pb-8 space-y-6 text-start md:items-start lg:text-left">
                <h1 className="text-3xl font-bold text-white lg:text-4xl title"> Let&apos;s develop a meaningful <span className="mt-0 text-transparent md:mt-5 bg-clip-text bg-gradient_orange">web application</span> </h1>
                <p className="text-gray-200">Whether you need a corporate website with an integrated booking system, a simple landing page to collect leads, or even a complete restaurant management system, I can pull it off for you. Starting from subtle &quot;wow&quot; animations to complex development, me and my team have what it takes to help you stand out from the crowd.<span className="block font-bold text-transparent bg-clip-text bg-gradient_green">Seriously, what are you waiting for?</span></p>

                <Button onClick={setIsOpen} className='bg-gradient_blue rounded-[4px] px-4 text-base font-normal py-2 ' variant="default">
                    Let's Get Started
                </Button>
            </div>
        

    </section>
}

export default Aim