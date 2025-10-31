'use client'

import { CarouselDApiDemo } from "@/app/(frontend)/HomePage/components/Carousel/carousel"
import Footer from "@/app/(frontend)/HomePage/components/Footer/page"
import Navbar from "@/app/(frontend)/HomePage/components/NavBar/page"
import NumberOneForIELTSPreparation from "@/app/(frontend)/HomePage/components/SectionContent/page"
import StudyPathArrow from "@/app/(frontend)/HomePage/components/Study_Path"

export default function Homepage() {

    return (
        <div className="bg-white">
            
            <Navbar />

            <CarouselDApiDemo/>

            <StudyPathArrow />

            <NumberOneForIELTSPreparation />

            <Footer/>
           
        </div>
    )

}
