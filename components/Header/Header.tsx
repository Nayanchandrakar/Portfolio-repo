'use client'
import Container from "@components/container/Container";
import Link from 'next/link'
import Navigation from "./Navigation";
import { FC, useCallback, useEffect, useState } from "react";
import HoverButton from "@components/ui/button/HoverButton";
import MobieButton from "./mobile/MobieButton";
import MiniNavbar from "./mobile/MiniNavbar";
import Logo from "./Logo";
import { cn } from "@lib/utils";


const Header: FC = () => {

    const [isOpen, setOpen] = useState(false)
    const [scroll, setscroll] = useState("visible")
    const [histroyscrollY, setscrollY] = useState(0)


    const ScrollEvent = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > histroyscrollY) {
                setscroll("translate-y-[-5rem]")
            } else {
                setscroll("translate-y-[0rem] bg-black/[0.7] backdrop-blur")
            }
        } else {
            setscroll("translate-y-[0rem]")
        }
        setscrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", ScrollEvent)
        return () => {
            window.removeEventListener("scroll", ScrollEvent)
        }
    }, [window.scrollY])



    const handleClick = useCallback(() => {
        setOpen((prev) => !prev)
    }, [])



    return (
        <header className={cn("w-full h-[68px] border-b border-b-zinc-800 flex items-center justify-between fixed top-0 z-[40]  bg-black/30 backdrop-blur-[10px] transition-all duration-500" ,scroll)}>
            <Container className="flex items-center justify-between  w-full h-full">
                <Logo />
                {/* Navigation panel */}
                <Navigation />
               

                <div className="inline-block lg:hidden">
                    <MobieButton handleClick={handleClick} />
                </div>

                <MiniNavbar isOpen={isOpen} handleClick={handleClick} />
            </Container>
        </header>
    )
}

export default Header