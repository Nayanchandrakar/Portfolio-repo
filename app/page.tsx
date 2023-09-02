import Container from '@components/container/Container'
import About from '@components/pages/Home/About'
import Aim from '@components/pages/Home/Aim'
import Hero from '@components/pages/Home/Hero'
import OurModel from '@components/pages/Home/OurModel'
import Projects from '@components/pages/Home/projects/Projects'
import Review from '@components/pages/Home/Review'
import VirtualReality from '@components/pages/Home/VirtualReality'
import { FC } from 'react'



const page: FC = () => {
  return <Container className='relative'>
    <Hero />
    <VirtualReality />
    <OurModel />
    <Aim />
    <Projects />
    <Review />
    <About />
  </Container>
}

export default page