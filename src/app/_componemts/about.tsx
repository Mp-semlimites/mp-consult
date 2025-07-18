import Image from "next/image";
import ctering from '../../../public/ctering.jpg'
import alodges from '../../../public/alodges.jpg'
import { Check } from "lucide-react";
import { MapPinAreaIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";


export function About(){
    return(
        <section className="bg-amber-100 py-16">
            <div className="container px-4 mx-auto">

                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="relative" data-aos="fade-up-right" data-aos-delay="600">

               
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image
                    src={ctering}
                    alt="foto de catering"
                    fill
                    quality={100}
                    className="object-cover hover:scale-110 duration-300"
                    priority
                    />
                </div>

                <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                    <Image
                    src={alodges}
                    alt="foto de casas"
                    fill
                    quality={100}
                    priority
                    />
                </div>
                    </div>

                    <div className="space-y-5 mt-6" data-aos="fade-up-left" data-aos-delay="600">
                        <h2 className="text-4xl font-bold ">SOBRE</h2>
                        <p>Atendendo ao público de forma diferenciada, sem que o cliente tenha que sair de sua casa para agências de viagens, otmizando o seu tempo e sem se preocupar em procurar um profissional especializado, que atenda às suas necessidades. <br></br>
                           E com visão de ser uma das empresas do ramo de cosultoria sobre <em>alojamentos</em>, serviços de <em>catering</em>, criação de <em>páginas web</em> e <em>landing</em>, a prestar atendimentos na cidade de  inhambane, sem precisar que o cliente se desloque até o proffissional; A empresa presa pela qualidade do serviço, satisfação do cliente e a segurança com que os serviços são realizados.
                        </p>
                        <p>Serving the public in a differentiated way, without the client having to leave their home to go to travel agencies, optimizing their time and without worrying about finding a specialized professional who meets their needs. <br></br>
                            And with the vision of being one of the companies in the area of ​​consulting on <em>accommodation</em>, <em>catering</em> services, creation of <em>web pages</em> and <em>landing pages</em>, providing services in the city of Inhambane, without the client needing to travel to the professional; 
                            The company is committed to the quality of service, customer satisfaction and the safety with which the services are performed.
                         </p>

                    </div>

                </div>
                    
                    <div className=" mt-2">
                     <ul className="space-y-4 ">
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500"/>
                            Aberto desde 2023.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500"/>
                            Equipe com mais de 3 profissionais.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500"/>
                            Acesso a mais de 10 hoteis e lodges na cidade.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500"/>
                            Acesso a mais de 5 restaurantes na cidade.
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="text-red-500"/>
                            Qualidade é nossa Prioridade.
                        </li>
                    </ul>
                    <div className="flex gap-2 ">
                    <a 
                    href={'https://wa.me/258875650587?text=olá vim pelo site e gostaria  de mais informação'}
                    target="_blank"
                    className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                    >
                
                        <WhatsappLogoIcon className="w-5 h-5 text-white"/>
                        contato via WhatsApp
                    </a>

                    <a href={'https://maps.app.goo.gl/1dxGbm8r9tLQsCqV8'}
                       target="_blank"
                       className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                    >
                
                        <MapPinAreaIcon className="w-5 h-5 text-black"/>
                        Endereço do Estabelecimento
                    </a>
                    </div>
                </div>

            </div>
        </section>
        
    )
}