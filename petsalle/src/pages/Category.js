import Filter from "../components/categorypage/Filter";
import FriendSection from "../components/categorypage/FriendSection";
import SmallDogs from "../components/categorypage/SmallDogs";
import { useState } from 'react';

const Category = () => {
  const [filterVisible, setFilterVisible] = useState(false); 

  return (
    <div>
      
      <div className="px-28 pt-20">
        <FriendSection />
      </div>

   
      <div className="px-28 pt-10 flex flex-col md:flex-row">
      
        <div className="flex justify-end mb-4 md:hidden">
          <span 
            className="cursor-pointer text-[#003459] font-semibold" 
            onClick={() => setFilterVisible(!filterVisible)}
          >
            {filterVisible ? 'Hide Filter' : 'Show Filter'}
          </span>
        </div>

        {/* Filter Component - Hidden on mobile and shown on larger screens */}
        <div className={`w-full md:w-1/3 pr-8 ${filterVisible ? 'block' : 'hidden md:block'}`}>
          <Filter />
        </div>

      
        <div className="w-full md:w-2/3">
          <SmallDogs />
        </div>
      </div>
    </div>
  );
};

export default Category;
