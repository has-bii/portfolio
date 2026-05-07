import AboutMe from '@/components/home/AboutMe'
import CTA from '@/components/home/CTA'
import Hero from '@/components/home/Hero'
import SelectedWork from '@/components/home/SelectedWork'
import Services from '@/components/home/Services'
import Footer from '@/components/Footer'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Hero />
      <Separator />
      <AboutMe />
      <Separator />
      <Services />
      <Separator />
      <SelectedWork />
      <Separator />
      <Separator />
      <CTA />
      <Separator />
      <Footer />
    </>
  )
}
