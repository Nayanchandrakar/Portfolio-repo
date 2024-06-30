'use client'
import Container from "@/components/container/Container";
import Navigation from "./Navigation";
import { FC, useEffect, useState } from "react";
import MobieButton from "./mobile/MobieButton";
import Logo from "./Logo";
import { cn } from "@/lib/utils";


const Header: FC = () => {
    const [scroll, setscroll] = useState("visible")
    const [histroyscrollY, setscrollY] = useState(0)


    const ScrollEvent = () => {
    if(typeof window !== "undefined"){
        if (window.scrollY > 200) {
            if (window.scrollY > histroyscrollY) {
                setscroll("translate-y-[-5rem]")
            } else {
                setscroll("translate-y-[0rem] bg-black/[0.7] backdrop-blur")
            }
        } else {
            setscroll("translate-y-[0rem]")
        }
        setscrollY(window?.scrollY)
    }
    }

    useEffect(() => {
        window.addEventListener("scroll", ScrollEvent)
        return () => {
            window.removeEventListener("scroll", ScrollEvent)
        }
    }, [histroyscrollY])




    return (
        <header className={cn("w-full h-[68px] border-b border-b-zinc-800 flex items-center justify-between fixed top-0 z-[40]  bg-black/30 backdrop-blur-[10px] transition-all duration-500" ,scroll)}>
            <Container className="flex items-center justify-between  w-full h-full">
                <Logo />
                <Navigation />

                <div className="inline-block lg:hidden">
                    <MobieButton />
                </div>
            </Container>
        </header>
    )
}

export default Header