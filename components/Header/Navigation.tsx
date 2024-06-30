'use client'
import { FC } from "react";
import { navigation } from "@constants/navigation";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useRouter } from "next-nprogress-bar";
import { useNavigation } from "@hooks/useNavigation";


const Navigation: FC = () => {
    const router = useRouter()
    const { path, setpath } = useNavigation(state => ({
        path: state?.path,
        setpath: state?.setpath,
    }))

    const handleNavigation = (href: string) => {
        setpath(href)
        router.push(href)
    }


    return (
        <div className="rounded-[3px] border border-zinc-800 cardBg hidden lg:inline-block">
            <div className="p-1 flex items-center justify-center flex-row">
                {navigation?.map(data => {
                    const { id, label, svg, href } = data
                    return (
                        <span onClick={() => handleNavigation(href)} key={id} className={cn('flex  flex-row items-center justify-center gap-1.5 px-3 py-1 rounded-[3px] transition-colors duration-200 hover:bg-gray-500/20 text-sm  cursor-pointer text-white font-medium', { 'bg-gradient_blue_purple ': path === href })}>
                            {label}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Navigation