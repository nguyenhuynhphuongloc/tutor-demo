import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function CarouselDApiDemo() {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [animateTrigger, setAnimateTrigger] = React.useState(0)


    React.useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Carousel
            className="h-[540px] w-full bg-[#F0F5FF]"
            opts={{ loop: true }}
        >
            <CarouselContent className="w-full h-[540px] bg-[#F0F5FF]">
                <CarouselItem className="flex justify-center items-center h-full bg-[#F0F5FF]">
                    <div className="w-full h-full bg-red-400">
                        <Card className="w-full h-full border-none rounded-none bg-cover bg-center bg-no-repeat relative bg-[#F0F5FF]"
                            style={{
                                backgroundImage: "url('/assets/homepage/slider1/hero-bg-2.svg')",
                            }}>
                            <CardContent className="absolute inset-0 flex flex-col items-start justify-center pl-24 space-y-6 bg-[#F0F5FF]">
                                <motion.div
                                    key={current} 
                                    initial={{ opacity: 0, x: -50 }} 
                                    animate={{ opacity: 1, x: 0 }} 
                                    exit={{ opacity: 0, x: 50 }} 
                                    transition={{ duration: 0.6 }}
                                    className="space-y-7"
                                >
                                    <h2 className="text-blue-900 text-4xl font-bold">CHÚNG TÔI GIÚP BẠN</h2>
                                    <h1 className="text-red-600 text-6xl font-extrabold">
                                        Nâng Cao Điểm IELTS
                                    </h1>
                                    <p className="text-[#525252] text-xl">
                                        Chuẩn bị cho kỳ thi IELTS 2024 bằng cách luyện tập hơn 100 bài thi thử
                                        <span className="font-bold text-blue-500"> hoàn toàn miễn phí</span>.
                                    </p>
                                    <button className="bg-red-400 text-white font-bold py-2 px-6 rounded">
                                        Đăng ký ngay
                                    </button>
                                </motion.div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>

                <CarouselItem className="flex justify-center items-center h-full w-full">
                    <Card className="w-full h-full border-none rounded-none bg-cover bg-center bg-no-repeat relative bg-[#F0F5FF]"
                        style={{
                            
                        }}>
                        <CardContent className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between ">

                            <motion.div
                                key={animateTrigger}
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 50 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex flex-col space-y-8  mb-8 md:mb-0 ml-5">

                                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#DC2626]">Thành Viên Plattinum</h1>

                                    <h2 className="text-2xl md:text-2xl font-bold text-black">Chương trình đối tác vào tháng 10</h2>


                                    <div className="flex gap-4">
                                        <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg mt-4 w-fit hover:bg-red-500">
                                            Xem lịch khai giảng
                                        </button>

                                        <button className=" text-[#E72929] bg-white border-[#E72929] border-2 font-bold py-2 px-6 rounded-lg mt-4 w-fit">
                                            Test trình độ IELTS miễn phí
                                        </button>
                                    </div>
                                </div>

                            </motion.div>


                            <div className="flex-shrink-0">
                                <Image
                                    src="/images/banner.webp"
                                    alt="Chứng nhận"
                                    width={700}
                                    height={200}
                                    className=""
                                />
                            </div>

                        </CardContent>

                    </Card>

                </CarouselItem>

            </CarouselContent>

            <CarouselPrevious

                className="
    absolute left-4 top-1/2 transform -translate-y-1/2 z-40 
    bg-blue-500 p-3 rounded-full 
    text-white font-bold font-size-2xl
    transition-all duration-300 
    hover:bg-blue-700 hover:scale-110 hover:shadow-lg
    focus:outline-none   border-none
  "
            />

            <CarouselNext

                className="
    absolute right-4 top-1/2 transform -translate-y-1/2 z-40 
    bg-blue-500 p-3 rounded-full 
    text-white font-bold 
    transition-all duration-300 
    hover:bg-blue-700 hover:scale-110 hover:shadow-lg
    focus:outline-none  border-none
  "
            />
        </Carousel>
    )
}
    