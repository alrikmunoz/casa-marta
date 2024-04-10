import Link from 'next/link';
import Image from 'next/image';

type MenuItemsType = {
  elementId: string,
  name: string,
}[];

export default function MenuNav({ menuItems } : { menuItems : MenuItemsType}) {
  return (
    <div className="flex-col justify-between items-center bg-white">
      <Link
      className="flex justify-center gap-2 items-center bg-white border-b border-b-slate-300 p-1 h-20 md:h-40 w-auto sticky top-0 z-10"
      href="/">
        
        <Image
        src="/logo_only.png"
        alt="Casa Marta Logo"
        className='h-full w-auto'
        width={450}
        height={450}
        priority
        />
        <h1 className="h-3/6 w-auto">
          <Image
          src="/logo_text.png"
          alt="Casa Marta Restaurante"
          className="h-full w-auto"
          width={889}
          height={232}
          priority
          />
        </h1>
      </Link>
      
      {/* Menu items: */}
      <div className="flex gap-0 justify-stretch">
        {menuItems.map((menuItem, i) => (
             <Link 
             key={i} 
             href={`#${menuItem.elementId}`}
             className="group text-center flex-1 flex flex-col justify-center  transition ease-in-out delay-100 hover:-translate-y-0 hover:scale-100 duration-500"
             >
              <span className="py-2 px-3 md:py-4 rounded-3xl md:group-active:transition-none group-active:decoration-[#708a6f] group-hover:underline decoration-[#708a6f] group-hover:decoration-[#bad7b9] group-hover:decoration-2 underline-offset-4 transition-all ease-in-out delay-100 duration-200">{menuItem.name}</span>
            </Link>
        ))}
      </div>
    </div>
  );
}
