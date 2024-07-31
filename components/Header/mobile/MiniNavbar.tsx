"use client"
import { FC } from "react"
import { useRouter } from "next/navigation"

import { navigation } from "@/constants/navigation"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/ui/sheet"
import useMenu from "@/hooks/useMenu"
import { Button } from "@/components/ui/button/Button"
import { Sparkles } from "lucide-react"


interface MiniNavbarProps {

}

const MiniNavbar: FC<MiniNavbarProps> = ({ }) => {
    const router = useRouter()
    const mobileMenu = useMenu()

    const handleRoute = (href: string) => {
        mobileMenu?.onClose()
        router.push(href)

    }



    return (
        <Sheet
            open={mobileMenu?.isOpen}
            onOpenChange={() => mobileMenu?.onClose()}

        >
            <SheetContent
                side="left"
                className="bg-black border-r border-zinc-800 w-full"
            >

          <SheetHeader className="text-white text-start">
            <SheetTitle className="text-transparent bg-clip-text bg-gradient_blue" >Menu</SheetTitle>
          </SheetHeader>


            <div className="flex gap-2 justify-between flex-col h-full">
            <div className="flex items-start gap-4 flex-col mt-6">
            {navigation?.map((data) => {
                    const { href, id, label , Icon } = data
                    return (
                        <span
                            key={id}
                            className=" text-sm text-transparent bg-clip-text bg-gradient_green bg-transparent w-full transition-all duration-200 rounded-[4px] px-3 py-2 cursor-pointer border border-zinc-800 flex items-center font-semibold"
                            onClick={() => handleRoute(href)}
                        >
                            <Icon className="size-5 mr-2 text-white" />
                            {label}
                        </span>
                    )
                })}
            </div>

            <Button
                className="w-full bg-gradient_blue_purple rounded-[4px] mb-5"
            >
            <Sparkles className="size-5 fill-white mr-2" />
             Hire Me   
            </Button>
            </div>
            </SheetContent>
        </Sheet>
    )
}
export default MiniNavbar
