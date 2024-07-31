import { memo } from 'react'
import { AlignLeft} from 'lucide-react'

import useMenu from '@/hooks/useMenu'


const MobieButton = () => {

    const menu  = useMenu()

    return <div
        className='flex justify-center items-center gap-2'>
        <span
            onClick={() => menu?.onOpen()}
            className=" xl:hidden block  transition-all duration-200 rounded-full cursor-pointer p-2 ">
            <AlignLeft
                size={25}
                className='text-white size-7'
            />
        </span>
    </div>
}

export default memo(MobieButton)