import { CTAButton } from '../CTAButton/CTAButton';
import computerManagement from '../../../public/assets/images/computer-finance-management.svg'

export const CallToAction = () => {
  return (
    <section className="py-12 flex items-center justify-center flex-col lg:flex-row">
      <img
        src={computerManagement}
        alt='Imagem de gerenciamento de finanças por meio de plataforma'
        className='md:w-1/2 h-auto '
      />
      <div className='flex flex-col text-center items-center lg:justify-start lg:text-left lg:items-start lg:w-[40%]'>
        <h2 className="max-w-xl mb-8 font-bold text-4xl lg:max-w-4xl md:text-[3vw] md:leading-none lg:mb-12">
          Crie uma conta agora e acesse nossa plataforma gratuitamente
        </h2>
        <CTAButton />
      </div>
    </section>
  );
}