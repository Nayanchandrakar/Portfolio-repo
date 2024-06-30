import Image from 'next/image'
import { FC } from 'react'
import Link from 'next/link'
import { ProjectsType } from '@/constants/project'
import { Button } from '@/components/ui/button/Button'
import { MoveRight } from 'lucide-react'

interface MapProjectsProps extends ProjectsType {
    index: number,
}

const MapProjects: FC<MapProjectsProps> = ({ index, id, image, site_url, projectName }) => {


    return (<div  className="rounded-[10px] transition-all duration-300   hover:ring-1 hover:ring-indigo-400  ring-1 ring-indigo-400/20">
        <div className="p-2">
            <Image
                alt='project-image'
                src={image}
                width={10}
                height={10}
                className='w-full h-full rounded-[10px]'
                sizes='100vw'
            />
        </div>
        <div className="flex items-center justify-between px-2 py-3">
            <p className='text-sm font-bold text-center text-white'>
                {projectName}
            </p>

            <Link target='_blank' href={site_url}>
                <Button
                 className='bg-gradient_blue_purple rounded-[3px]'
                >
                    View Project
                    <MoveRight className='ml-1 w-4 h-4' />
                </Button>
            </Link>
        </div>
    </div>)
}

export default MapProjects