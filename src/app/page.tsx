import React from 'react'
import FeatureCard from './component/FeatureCard';
import data from './component/data.json'
import ExperienceSection from './component/Experiencesection';
import Howitworks from './component/Howitworks';
import UserOpinion from  './component/UserOpinion'

const App = () => {
  return (
    <div className="  min-h-screen  width-50vw bg-gradient-to-b from-black via-green-800  text-white  p-16  "> ///m-30
      <h1 className="text-5xl font-bold  text-center  mb-2">
        Built for Individuals, Businesses and NRIs
      </h1>
      <p className="text-center  w-[90%] px-30  text-xl text-gray-400 h-10 mt-10 mb-20">
        Adopted by 100k+ individuals and
              businesses
      </p>

      <div className="space-y-13 flex w-full relative  flex-col p-18">
      
      {data.map((obj,idx) =>(
                <FeatureCard key={idx} title={obj.title} points={obj.points} />
        
      ))}

      <ExperienceSection />

      <Howitworks />

      <UserOpinion /> 
      
      </div>
      <div className='w-full h-80'></div>



    </div>

    

  
  );

  
};





export default App;