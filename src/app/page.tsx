import {About} from "./_componemts/about";
import { Hero } from "./_componemts/hero";
import { Services } from "./_componemts/services";
import { Testimonials } from "./_componemts/testimonials";
import {Footer} from "./_componemts/footer";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>,
      <Footer/>,
    </main>
  )
}




