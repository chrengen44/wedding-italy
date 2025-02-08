import React from 'react';
import './TravelInfo.css'
import TravelInfoCard from './TravelInfoCard/TravelInfoCard';
import { GiTennisCourt, GiWineBottle, GiShoppingCart , GiShoppingBag  } from 'react-icons/gi';





const TravelInfo = () => {
    return (
    <div className="travel-info">
    <TravelInfoCard icon={<GiTennisCourt size={50}/>} 
                    description='Enjoy tennis, padel, golf or swimming at croara countryclub!'
                    mapslink='https://www.google.com/maps/place/Croara+Country+Club/@44.9242465,9.5832991,17z/data=!3m1!4b1!4m6!3m5!1s0x4780c0e7e0b8e47b:0xff0fa2a2d2c41110!8m2!3d44.9242465!4d9.585874!16s%2Fg%2F1tcxnj9d?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
                    />
    <TravelInfoCard icon={<GiShoppingCart  size={50}/>} 
                    description ='Conad is our preferred local grocerystore'
                    mapslink='https://www.google.com/maps/place/Conad+-+Supermarket/@44.910629,9.5958941,17z/data=!3m2!4b1!5s0x4780c0f4b9873afd:0x9014de263793af4c!4m6!3m5!1s0x4780c08bf2fe77ef:0x9c2818ba42c69191!8m2!3d44.910629!4d9.598469!16s%2Fg%2F1tfgc2d5?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
                    />
    <TravelInfoCard icon={<GiWineBottle  size={50}/>} description="our favorite wineries"/>
    <TravelInfoCard icon={<GiShoppingBag  size={50}/>} 
                    description='Piacenza is our go to for shopping, here you will find all you need'
                    mapslink='https://www.google.com/maps/place/Piacenza,+Provinsen+Piacenza,+Italia/@45.0568432,9.5850296,11.84z/data=!4m6!3m5!1s0x4780e7f8f2c99505:0x60d323d99de42177!8m2!3d45.0526415!4d9.6936883!16zL20vMDFqdHlm?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
                    />
    
    </div>);
};

export default TravelInfo;