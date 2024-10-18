import Friendsfun from "../components/homepage/Friendsfun"
import HelpSection from "../components/homepage/HelpSection"
import HeroSection from "../components/homepage/HeroSection"
import NewPetSection from "../components/homepage/NewPetSection"
import PetKnowledge from "../components/homepage/PetKnowledge"
import PetSellers from "../components/homepage/PetSellers"
import ProductsSection from "../components/homepage/ProductsSection"



const Home = () => {
  return (
    <div>
        <div>
            <HeroSection/>
        </div>
        <div className='px-20 py-10'>
            <NewPetSection/>
        </div>
        <div className='px-20 py-10' >
            <Friendsfun/>
        </div>
        <div className='px-20 py-10' >
            <ProductsSection/>
        </div>
        <div className='px-20 py-10' >
            <PetSellers/>
        </div>
        <div className='px-20 py-10' >
            <HelpSection/>
        </div>
        <div className='px-20 py-10' >
            <PetKnowledge/>
        </div>
        
    </div>
  )
}

export default Home