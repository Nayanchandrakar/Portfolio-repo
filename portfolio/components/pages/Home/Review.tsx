'use client'
import { FC } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Marquee from "@/components/ui/magicui/marquee"
import HeadingShortner from "@/components/global/HeadingShortner"
import { clientReview } from '@/constants/review'

interface ReviewProps {

}



const ReviewCard = ({
    img,
    name,
    username,
    body,
  }: {
    img: string;
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <Image className="rounded-full w-10 h-10" width={1000} height={1000} alt="user-image" sizes='100vw'  src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
      </figure>
    );
};



const Review: FC<ReviewProps> = ({ }) => {

    const firstRow = clientReview.slice(0, clientReview.length / 2);
    const secondRow = clientReview.slice(clientReview.length / 2);

    return(
    <section className='my-20'>
        <HeadingShortner
        title="Projects I’ve done"
        description="I aim to deal with my clients in a friendly manner while paying attention to their unique needs.<br> Here's what my clients had to say about my Web Application Development services at the end of projects"
    />

    
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r  from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l  from-black"></div>
    </div>
    </section>
    )
    
}

export default Review