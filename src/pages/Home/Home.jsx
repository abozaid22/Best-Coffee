import BestCoffee from "../../Components/BestCoffee/BestCoffee";
import Gallery from "../../Components/Gallery/Gallery";
import OurMenu from "../../Components/OurMenu/OurMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Ticket from "../../Components/Ticket/Ticket";

export default function Home() {
  return (
    <>
     <BestCoffee />
     <OurMenu />
     <Gallery />
     <Testimonials />
     <Ticket />
    </>
  )
}
