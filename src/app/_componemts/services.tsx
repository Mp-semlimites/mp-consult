'use client'
import useEmblaCarousel from "embla-carousel-react"
import {ChevronLeft, ChevronRight, Hotel, CarTaxiFront, SoupIcon, RadioIcon, PackageIcon, Clock } from 'lucide-react'
import {WhatsappLogoIcon} from '@phosphor-icons/react'
import { title } from "process"

const services = [
    {
        title:"Acomodação",
        description:"Procuramos as melhores unidades de acomodação como hotéis, casa de hóspedes e casas de aluguel, com os melhores serviços, melhores preços, bem localizados",
        duration:"20m",
        price:"1000Mt",
        Icon:<Hotel/>,
        linkText:'Olá, vi no site sobre alojamento e gostaria de mais informações.'
    },
    {
        title:"Taxi & Rent a Car",
        description:"Temos a sua disposição os melhores táxis, rápidos, seguros e pontuais, quer sejam moto táxi, txopelas ou carros. Temos também os melhores carros para aluguel com ou sem motorista.",
        duration:"20m",
        price:"1000Mt",
        Icon:<CarTaxiFront/>,
        linkText:'Olá, vi no site sobre taxi e aluguel de carros e gostaria de mais informações.'
    },
    {
        title:"Restauração",
        description:"Proporcionamos os melhores restaurantes da cidade, com pratos típicos, a la carte, Com serviços de Catering para casamento, aniversário para adultos e crianças e  todo tipo de reuniões de trabalho!",
        duration:"20m",
        price:"1000Mt",
        Icon:<SoupIcon/>,
        linkText:'Olá, vi no site sobre Restaurante e serviços de Catering e gostaria de mais informações.'
    },
    {
        title:"Lazer & Diverção",
        description:"Proporcionamos os melhores restaurantes da cidade, com pratos típicos, a la carte, Com serviços de Catering para casamento, aniversário para adultos e crianças e  todo tipo de reuniões de trabalho!",
        duration:"20m",
        price:"1000Mt",
        Icon:<RadioIcon/>,
        linkText:'Olá, vi no site sobre Lazer & Diverção e gostaria de mais informações.'   
    },
    {
        title:"Paginas &  Landing",
        description:"Criamos sites para empresa de delivery, landing para empresas, aplicativos para e-commerce.",
        duration:"7 Dias",
        price:"3000Mt",
        Icon:<PackageIcon/>,
        linkText:'Olá, vi no site sobre criação de páginas web e landing,  e gostaria de mais informações.'   
    },
]
export function Services(){

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align:"start",
        slidesToScroll: 1,
        breakpoints:{
            "(min-width: 768px)": {slidesToScroll: 3}
        }
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    
    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold mb-12 ">Nossos Serviços</h2>
            <div className="relative ">

                <div className='overflow-hidden' ref={emblaRef}>
                    <div className="flex">
                        {services.map((item, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3 ">
                                <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                    <div className="flex-1 flex items-start justify-between">
                                        <div className="flex gap-3 ">
                                            <span className="text-3xl">{item.Icon}</span>
                                            <div>
                                                <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                <p className="text-gray-400 text-sm select-none">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm ">
                                            <Clock className="w-4 h-4"/>
                                            <span>{item.duration}</span>
                                        </div>

                        
                                        <a target="_blank"
                                         href={'https://wa.me/258875650587?text=olá vim pelo site e gostaria  de mais informação sobre ${item.title}'}
                                           className="flex items-center justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-300"
                                        >
                                            Contacte-nos
                                            <WhatsappLogoIcon className="w-5 h-5 "/>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>          

                </div>

                <button 
                onClick={scrollPrev}
                className="bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600 "/>
                </button>

                <button 
                onClick={scrollNext}
                className="bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600 "/>
                </button>
            </div>

            </div>
        </section>
    )
}