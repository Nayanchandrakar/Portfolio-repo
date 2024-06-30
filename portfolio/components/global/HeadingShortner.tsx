import { FC } from 'react'

interface HeadingShortnerProps {
    title: string,
    description: string,
}

const HeadingShortner: FC<HeadingShortnerProps> = ({ title, description }) => {


    return <div className="flex flex-col justify-center text-center">
        <h1 className="py-2 text-4xl font-bold text-purple-500 md:text-5xl ">{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: description }} className="py-4 text-zinc-200" />
    </div>
}

export default HeadingShortner