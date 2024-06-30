"use client"
import { FC } from 'react'
import HeadingShortner from '@components/global/HeadingShortner'
import MapProjects from './MapProjects'
import { projectdetails, ProjectsType } from '@constants/project'


const Projects: FC = () => {

    return <section className='mt-16'>
        <HeadingShortner
            title='Projects I’ve done'
            description='I build Web Applications that bring positive results to businesses. Check out a few of my projects.'
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-3 gap-3 sm:gap-5">
            {projectdetails?.map((data: ProjectsType, index: number) => {
                return (
                <MapProjects key={data?.id} index={index} {...data} />
                )
            })}
        </div>
       
    </section>
}

export default Projects