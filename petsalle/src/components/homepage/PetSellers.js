import { AiOutlineRight } from "react-icons/ai"; 
import img1 from "../../assets/img1.png"; 
import img2 from "../../assets/img2.png"; 
import img3 from "../../assets/img3.png"; 
import img4 from "../../assets/img4.png"; 
import img5 from "../../assets/img5.png"; 
import img6 from "../../assets/img6.png"; 
import img7 from "../../assets/img7.png"; 

const PetSellers = () => {
  // Using imported images for pet images
  const petImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center"> {/* Flex container for headings */}
          <h5 className="text-lg font-semibold mr-2">Proud to be part of</h5>
          <h1 className="text-2xl font-bold">Pet Sellers</h1>
        </div>
        <button className="px-4 py-2 bg-transparent text-[#003459] font-semibold border border-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl flex items-center">
          View More <AiOutlineRight className="ml-2" />
        </button>
      </div>
      
      {/* Grid layout for pets */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {petImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={`Seller ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetSellers;
