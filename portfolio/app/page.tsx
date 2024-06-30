import Container from "@/components/container/Container"
import About from "@/components/pages/Home/About"
import Aim from "@/components/pages/Home/Aim"
import Hero from "@/components/pages/Home/Hero"
import OurModel from "@/components/pages/Home/OurModel"
import Projects from "@/components/pages/Home/projects/Projects"
import Review from "@/components/pages/Home/Review"
import dynamic from 'next/dynamic'



const page = async () => {

  const Calendly = dynamic(() => import("@/components/pages/Home/Calendly"))

  return (
    <Container>
      <Hero />
      <OurModel />
      <Aim />
      <Projects />
      <Review />
      <About />
      <Calendly />
    </Container>)
}

export default page