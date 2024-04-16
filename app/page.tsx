import { IconPhone, IconMail, IconMapPin, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import Link from "next/link";
import MenuCategory from './ui/menu/menu-category';
import MenuItem from './ui/menu/menu-item';
import { promises as fs } from 'fs';

const currentYear = new Date().getFullYear();
const yearsAgo = currentYear - 2021;
const yearsAgoStr =  yearsAgo >= 3 && yearsAgo <= 7 ? ['tres', 'cuatro', 'cinco', 'seis', 'siete'][yearsAgo - 3] : 'algunos';

function isCategory(menuThing: Category | Item): menuThing is Category {
   return menuThing.type === "category";
}

function outputCategory(category: Category, i: number, isSubcategory = false) {
  return (
    <MenuCategory key={i} name={category.name} price={category.price} isSubcategory={isSubcategory}>
      {category.content.map((menuObject, j) => {
        return isCategory(menuObject) ? outputCategory(menuObject, j, true) : (<MenuItem key={j} name={menuObject.name} price={menuObject.price} />)
      })}
    </MenuCategory>
  )
}

export default async function Home() {
  const menuContentStr = await fs.readFile(process.cwd() + '/json/menuContent.json', 'utf8');
  const menuContent: Menu = JSON.parse(menuContentStr);

  return (
    <main>
      <div className="py-6 px-2 md:p-6"> {/* This is div for the whole page content */}

        <div className="w-5/6 mx-auto max-w-sm md:max-w-3xl mt-8 mb-16"> {/* start of menu */}
          <h2 id="menu" className={"text-center text-2xl font-bold tracking-widest"}>Menú</h2>

          <div className="my-4 md:my-20 md:columns-2 md:gap-16"> {/* start of menu content */}
            {menuContent.map((category, index) => outputCategory(category, index))}
          </div>
        </div> {/* end of menu */}
        
        <div className="w-4/5 mx-auto max-w-sm md:max-w-xl my-16"> {/* start of hours */}
          <h2 id="hours" className={"text-center text-2xl font-bold tracking-widest"}>Horario</h2>
          <div className="my-4 md:my-12">
            <div className="flex justify-between mb-1">
              <span>martes a jueves</span>
              <span>de 11:00 a 22:00 horas</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>viernes y sábado</span>
              <span>de 11:00 a 23:00 horas</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>domingo</span>
              <span>de 11:00 a 17:00 horas</span>
            </div>
          </div>
        </div>


        <div className="md:flex md:justify-center gap-48">
          <div className="md:w-4/5 w-11/12 mx-auto md:mx-0 max-w-sm my-16"> {/* start of contact */}
            <h2 id="contact" className={"text-center text-2xl font-bold tracking-widest"}>Contacto</h2>
            <div className="my-4">
              <div className="flex justify-center gap-14 my-8 md:my-8">
                <Link title="Página de Facebook para Casa Marta Restaurante" aria-label="Facebook" href="https://www.facebook.com/people/Casa-Marta-Restaurante/61557999488320/"><IconBrandFacebook /></Link>
                <Link title="Página de Instagram para Casa Marta Restaurante" aria-label="Instagram" href="https://www.instagram.com/casamartarestaurante/"><IconBrandInstagram /></Link>
              </div>
              <Link href="mailto:casamartarestaurante@gmail.com" className="flex mb-1 ml-8">
                <p className="basis-1/6"><IconMail /></p>
                <p className="basis-5/6">contacto@casamartarestaurante.com</p>
              </Link>
              <Link href="tel:+340123456" className="flex mb-1 ml-8">
                <p className="basis-1/6"><IconPhone /></p>
                <p className="basis-5/6">+34 931 470 175</p>
              </Link>
              <div className="flex mb-1 ml-8">
                <p className="basis-1/6"><IconMapPin /></p>
                <p className="basis-5/6">Carrer Ramon Llull, 26, 08330 Premià de Mar</p>
              </div>
              <div className="my-6 md:w-auto w-4/5 m-auto">
                <p>Para realizar reservas, por favor utilice el número de teléfono indicado arriba.</p>
              </div>
            </div>
          </div>

          <div className="w-4/5 mx-auto md:mx-0 max-w-sm my-16"> {/* start of about */}
            <h2 id="about" className={"text-center text-2xl font-bold tracking-widest"}>Sobre nosotros</h2>
            <div className="my-4 md:my-12">
              <p className="text-center mb-6">En Casa Marta Restaurante, nuestra historia comienza con Marta, una colombiana que se trasladó de Suecia a Barcelona hace {yearsAgoStr} años. 
              Tras dejar atrás su carrera en el área de informática, el sueño de Marta de compartir su pasión por la cocina diversa se ha hecho realidad.</p>
              
              <p className="text-center">Nuestro restaurante combina un poco de todo, desde tapas hasta platos peruanos. 
              Arraigado en la calidez colombiana de Marta, Casa Marta ofrece un ambiente amigable, familiar y acogedor para todos. 
              Bienvenidos a una experiencia culinaria tan sincera como deliciosa.</p>  
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
