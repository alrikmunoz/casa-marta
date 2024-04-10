import { IconPhone, IconMail, IconMapPin, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import Link from "next/link";

const currentYear = new Date().getFullYear();
const yearsAgo = currentYear - 2021;
const yearsAgoStr =  yearsAgo >= 3 && yearsAgo <= 7 ? ['tres', 'cuatro', 'cinco', 'seis', 'siete'][yearsAgo - 3] : 'algunos';


export default function Home() {
  return (
    <main>
      <div className="p-6"> {/* This is div for the whole page content */}

        <div className="w-4/5 mx-auto max-w-sm md:max-w-3xl mt-8 mb-16"> {/* start of menu */}
          <h2 id="menu" className={"text-center text-xl font-bold tracking-widest"}>Menú</h2>

          <div className="my-4 md:my-20"> {/* start of menu content  (NOTE: DUMMY CONTENT!) */}
            <h3 className="text-lg font-semibold mb-2">Appetizers</h3>
            <div className="flex justify-between mb-1">
              <span>Toast Skagen</span>
              <span>€11</span>
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Main courses</h3>
            <div className="mb-2">
              <h4 className="text-md font-semibold">Chicken and meat</h4>
              <div className="flex justify-between">
                <span>Chicken wings</span>
                <span>€18</span>
              </div>
              <div className="flex justify-between">
                <span>Hamburger</span>
                <span>€14</span>
              </div>
            </div>
            
            <div className="mb-2">
              <h4 className="text-md font-semibold">From the sea</h4>
              <div className="flex justify-between">
                <span>Calamari</span>
                <span>€12</span>
              </div>
              <div className="flex justify-between">
                <span>Salmon filé</span>
                <span>€23</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2">Desserts</h3>
            <div className="flex justify-between">
              <span>Chocolate ice cream</span>
              <span>€5</span>
            </div>
            <div className="flex justify-between">
              <span>Strawberry ice cream</span>
              <span>€5</span>
            </div>
            <div className="flex justify-between">
              <span>Vanilla ice cream</span>
              <span>€5</span>
            </div>
            <div className="flex justify-between">
              <span>Pavlova</span>
              <span>€5</span>
            </div>
          </div>
        </div> {/* end of menu */}
        
        <div className="w-4/5 mx-auto max-w-sm md:max-w-xl my-16"> {/* start of hours */}
          <h2 id="hours" className={"text-center text-xl font-bold tracking-widest"}>Horario</h2>
          <div className="my-4 md:my-12">
            <div className="flex justify-between mb-1">
              <span>Martes a jueves</span>
              <span>de 11:00 a 22:00 horas</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Viernes y sábado</span>
              <span>de 11:00 a 23:00 horas</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Domingo</span>
              <span>de 11:00 a 22:00 horas</span>
            </div>
          </div>
        </div>


        <div className="md:flex md:justify-center gap-48">
          <div className="w-4/5 mx-auto md:mx-0 max-w-sm my-16"> {/* start of contact */}
            <h2 id="contact" className={"text-center text-xl font-bold tracking-widest"}>Contacto</h2>
            <div className="my-4">
              <div className="flex justify-center gap-14 my-8 md:my-8">
                <Link title="Página de Facebook para Casa Marta Restaurante" aria-label="Facebook" href="https://www.facebook.com/people/Casa-Marta-Restaurante/61557999488320/"><IconBrandFacebook /></Link>
                <Link title="Página de Instagram para Casa Marta Restaurante" aria-label="Instagram" href="https://www.instagram.com/casamartarestaurante/"><IconBrandInstagram /></Link>
              </div>
              <Link href="mailto:casamartarestaurante@gmail.com" className="flex mb-1 ml-10">
                <p className="basis-1/6"><IconMail /></p>
                <p className="basis-5/6">casamartarestaurante@gmail.com</p>
              </Link>
              <Link href="tel:+340123456" className="flex mb-1 ml-10">
                <p className="basis-1/6"><IconPhone /></p>
                <p className="basis-5/6">+34 012 34 56</p>
              </Link>
              <div className="flex mb-1 ml-10">
                <p className="basis-1/6"><IconMapPin /></p>
                <p className="basis-5/6">Carrer Ramon Llull, 26, 08330 Premià de Mar</p>
              </div>
              <div className="my-6">
                <p>Para realizar reservas, por favor utilice el número de teléfono indicado arriba.</p>
              </div>
            </div>
          </div>

          <div className="w-4/5 mx-auto md:mx-0 max-w-sm my-16"> {/* start of about */}
            <h2 id="about" className={"text-center text-xl font-bold tracking-widest"}>Sobre nosotros</h2>
            <div className="my-4 md:my-12">
              <p className="text-center mb-6">En Casa Marta Restaurante, nuestra historia comienza con Marta, una colombiana que se mudó de Suecia a Barcelona hace {yearsAgoStr} años. 
              Tras dejar atrás su carrera en tecnología, el sueño de Marta de compartir su pasión por la cocina diversa cobró vida.</p>
              
              <p className="text-center">Nuestro restaurante combina un poco de todo, desde tapas reconfortantes hasta platos peruanos tentadores. 
              Arraigado en la calidez colombiana de Marta, Casa Marta irradia un ambiente amigable, familiar y acogedor para todos. 
              Bienvenidos a una experiencia culinaria tan sincera como deliciosa.</p>  
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
