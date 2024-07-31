import { FC } from 'react'
import { ModalData } from '../../../constants/OurModal'
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";




const OurModel: FC = () => {

    return <div
        className='grid grid-cols-1  lg:grid-cols-3 gap-12 mt-16 mx-1'>
        {ModalData?.map((data, index) => {
            const { id, img, para, title } = data
            return (
                <div key={index+34234} className="border border-white/[0.2] flex flex-col items-start  w-full p-4 relative h-[30rem] bg-black">
                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />
           
                <EvervaultCard imageUrl={img}  />
                <h1 className='text-lg  mt-3 font-semibold text-transparent bg-clip-text bg-gradient_green'>
                  {title}
                </h1>

                <h2 dangerouslySetInnerHTML={{__html:para}} className="text-white mt-3 text-sm font-light"/>
                
              </div>
            )
        })}
    </div>
}

export default OurModel
