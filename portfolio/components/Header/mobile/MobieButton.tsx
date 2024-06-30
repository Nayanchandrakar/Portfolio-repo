import { FC } from 'react'
import { Menu } from 'lucide-react'
import { memo } from 'react'
import useMenu from '@/hooks/useMenu'


const MobieButton = () => {

    const menu  = useMenu()

    return <div
        className='flex justify-center items-center gap-2'>
        <span
            onClick={() => menu?.onOpen()}
            className=" xl:hidden block  transition-all duration-200 rounded-full cursor-pointer p-2 ">
            <Menu
                size={25}
                color='rgb(203 213 225)'
            />
        </span>
    </div>
}

export default memo(MobieButton)