import React from 'react';
import './TravelInfoPage.css'
import TravelInfoCard from './TravelInfoCard/TravelInfoCard';
import { GiTennisCourt, GiWineBottle, GiShoppingCart, GiShoppingBag } from 'react-icons/gi';
import MainMenu from './MainMenu/MainMenu';
import { PiCheers } from 'react-icons/pi';

const TravelInfoPage = () => {
    return (
        <>
            <MainMenu />
            <div className="travel-page">
                <h1 className='travel-header'>Ting å gjøre, steder å dra</h1>
                <div className="travel-info">
                    <TravelInfoCard 
                        icon={<GiTennisCourt size={50}/>}
                        title="Croara Country Club"
                        description='Nydelig Countryclub med tennis baner på gress og grus, golf, nye padel baner og svømming'
                        mapslink='https://www.google.com/maps/place/Croara+Country+Club/@44.9242465,9.5832991,17z/data=!3m1!4b1!4m6!3m5!1s0x4780c0e7e0b8e47b:0xff0fa2a2d2c41110!8m2!3d44.9242465!4d9.585874!16s%2Fg%2F1tcxnj9d?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
                    />
                    <TravelInfoCard 
                        icon={<GiWineBottle size={50}/>}
                        title="Luretta Vineri"
                        description="Luretta, er et fantastisk vineri som lagrer vinen sin i kjelleren på et slott fra 1100 tallet"
                        mapslink='https://www.google.com/maps/place/Cantine+Luretta/@44.9263953,9.5446902,17z/data=!3m1!4b1!4m6!3m5!1s0x4780c715810ec439:0x285efe47628bc2e0!8m2!3d44.9263953!4d9.5472651!16s%2Fg%2F1tfycfb2?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
                    />
                    <TravelInfoCard
                        icon={<PiCheers size={50}/>}
                        title="Rivergaro Torg"
                        description='Rivergaro torg, her er det mye god aperol spritz, søt arkitektur og god men billig mat. må oppleves!'
                        mapslink='https://www.google.com/maps/place/Piazza+Paolo,+28-16,+29029+Rivergaro+PC,+Italia/@44.9100101,9.5916147,17z/data=!3m1!4b1!4m9!1m2!2m1!1sRivergaro+torg!3m5!1s0x4780c08c1ec125ab:0xeaa038263d73eff5!8m2!3d44.9100102!4d9.5964856!16s%2Fg%2F11g602mw6s?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
                    />
                    <TravelInfoCard 
                        icon={<GiShoppingCart size={50}/>}
                        title="Conad Supermarked"
                        description='Conad er vår favoritt matbutikk med god ferskvare avdeling, herfra har vi kjøpt både bleier og spekemat med hjem'
                        mapslink='https://www.google.com/maps/place/Conad+-+Supermarket/@44.910629,9.5958941,17z/data=!3m2!4b1!5s0x4780c0f4b9873afd:0x9014de263793af4c!4m6!3m5!1s0x4780c08bf2fe77ef:0x9c2818ba42c69191!8m2!3d44.910629!4d9.598469!16s%2Fg%2F1tfgc2d5?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
                    />
                    <TravelInfoCard 
                        icon={<GiWineBottle size={50}/>}
                        title="Pogiarello Vineri"
                        description="Pogiarello, som er vår mest besøkte vineri, hvor vinene begynner på 8 euro og vi klager ikke"
                        mapslink='https://www.google.com/maps/place/The+Poggiarello+Wines/@44.9042606,9.5700138,17z/data=!3m1!4b1!4m6!3m5!1s0x4780c0a380abbb25:0xb0747ecdf42cf90b!8m2!3d44.9042606!4d9.5725887!16s%2Fg%2F1v_s4rl7?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
                    />
                    <TravelInfoCard 
                        icon={<GiShoppingBag size={50}/>}
                        title="Piacenza By"
                        description='Piacenza er det nærmeste store sentrum og her finner du alt du måtte trenge'
                        mapslink='https://www.google.com/maps/place/Piacenza,+Provinsen+Piacenza,+Italia/@45.0568432,9.5850296,11.84z/data=!4m6!3m5!1s0x4780e7f8f2c99505:0x60d323d99de42177!8m2!3d45.0526415!4d9.6936883!16zL20vMDFqdHlm?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'
                    />
                </div>
            </div>
        </>
    );
};

export default TravelInfoPage;