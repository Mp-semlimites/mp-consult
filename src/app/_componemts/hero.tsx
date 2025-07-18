import { WhatsappLogoIcon} from '@phosphor-icons/react/dist/ssr'
import  Ofice from '../../../public/ofice.jpg'
import theme from '../../../public/theme (3).png'
import Image from 'next/image'

export function Hero (){
    return(
    <section className="bg-black text-white relative overflow-hidden">

        <div>
            <Image
            src={Ofice}
            alt='foto de ofice'
            fill
            sizes='100vw'
            priority
            className='object-cover opacity-60 lg:hidden'
            />
            <div className='absolute inset-0 bg-blend-color opacity-40 md:hidden'></div>
        </div>

        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                <div className="space-y-6 ">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
                        data-aos="fade-down"
                        >
                        
                        O seu problema merece cuidado, carinho, atendimento e atenção especial.
                        </h1>
                        <p className="lg:text-lg" data-aos="fade-right">Oferecemos os melhores serviços para garantir a sua estadia, bem-estar e 
                            serviços de consultoria para área de catering e Hospedagem
                            </p>
                            <a href={'https://wa.me/258875650587?text=olá vim pelo site e gostaria  de mais informação '}
                               target="_blank"
                               data-aos="fade-up"
                                data-aos-delay="600"
                               className="bg-green-500 px-5 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            >
                            <WhatsappLogoIcon className="w-5 h-5 "/>
                                Contato via WhatsApp
                            </a>
                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-yellow-300 text-blue-700 px-2 py-1 rounded-md">5%</b> 
                                de desconto na primeira consulta.
                            </p>
                            
                            <div className='flex mt-4'>
                                <div className='w-32 hidden lg:block'>
                                    <Image
                                    src={theme}
                                    alt='Foto do Logo'
                                    quality={100}
                                    className='object-fill'
                                    />
                                </div>
                            </div>
                        </div>
                </div>

                <div className="hidden md:block h-full relative">
                   <Image
                   src={Ofice}
                   alt='foto de Test'
                   className='object-contain'
                   fill
                   sizes="(max-width: 768px) 0vw, 50vw"
                   quality={100}
                   priority
                   /> 
                </div>

            </article>

        </div>


    </section>
  )
}