import btts from "../../../public/btts.jpg"
import HCC from "../../../public/HCC.jpg"
import IHE from "../../../public/IHE.jpg"
import Manguela from "../../../public/Manguela.jpg"
import WhyNot from "../../../public/Why Not.jpg"

import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon, WhatsappLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"

const brands = [
    { name: "Hotel Casa do Capitao", logo: HCC },
    { name: "Hanguela Light", logo: Manguela },
    { name: "Hotel escola inhambane", logo: IHE },
    { name: "Restaurante why not", logo: WhyNot},
    { name: "BTTS rent a car", logo: btts },
    
]

export function Footer(){
    return(
        <section className="bg-gray-800 py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8 ">
                <h4 className="text-3xl font-semibold mb-8 text-center">Nossos Parceiros</h4>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                    {brands.map((item, index) =>(
                        <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                            <Image
                            src={item.logo}
                            alt={item.name}
                            width={100}
                            height={50}
                            quality={100}
                            style={{
                                width:"auto",
                                height:"auto",
                            }}
                            className="object-contain"
                            />
                        </div>
                    ))}
                </div>
                </div>

                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">MP-SL Consultoria</h3>
                        <p className="mb-4">Tornando a sua viagem mais simples e facilitando vidas</p>
                        <a 
                        href="#"
                        className="bg-green-500 px-4 py-2 rounded-md"
                        >
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contactos</h3>
                        <p className="mb-4">Email: barretto1992@gmail.com</p>
                        <p className="mb-4">Telefone: +258 845650487</p>
                        <p className="mb-4">Telefone: +258 875650487</p>
                        <p className="mb-4">Telefone: +258 835045559</p>
                        <p className="mb-4">Telefone: +258 845650487</p>
                        <p className="mb-4">Bairro Chalambe-1, Inhambane-ceu</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
                        <div className="flex gap-4">
                           <a 
                             href={'https://www.facebook.com/share/16xtmcWX8R/?mibextid=LQQJ4d'}
                             target="_blank"
                           >
                               <FacebookLogoIcon className="w-8 h-8"/>
                           </a>
                           <a 
                            href={'https://wa.me/258875650587?text=olá vim pelo site e gostaria  de mais informação'}
                             target="_blank"
                           >
                               <WhatsappLogoIcon className="w-8 h-8"/>
                           </a>
                           <a 
                             href="#"
                             target="_blank"
                           >
                               <InstagramLogoIcon className="w-8 h-8"/>
                           </a>
                           <a 
                             href="#"
                             target="_blank"
                           >
                               <YoutubeLogoIcon className="w-8 h-8"/>
                           </a>
                           <a 
                             href="#"
                             target="_blank"
                           >
                               <TwitterLogoIcon className="w-8 h-8"/>
                           </a>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )    
}