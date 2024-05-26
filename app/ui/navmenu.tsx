'use client';

import Link from 'next/link';
import Image from 'next/image';

type MenuItemsType = {
  elementId: string,
  name: string,
}[];

export default function NavMenu({ menuItems } : { menuItems?: MenuItemsType}) {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    let visibleHeader = "header-links";
    
    // on larger screens, current CSS makes the whole header stick rather than only the links (which have a smaller height)
    const isLargeScreen = window.matchMedia('(min-width: 768px)')
    if (isLargeScreen.matches) {
      visibleHeader = "header";
    }
    const headerElement = document.getElementById(visibleHeader);

    if (el && headerElement) {
      const y = el.getBoundingClientRect().top + window.scrollY - headerElement.getBoundingClientRect().height - 18;
      window.scroll({
        top: y,
        behavior: 'smooth'
      });
    }
  }

  return (
    <div id="header" className="flex flex-col justify-between md:flex-row md:justify-evenly items-center bg-white sticky top-[-71px] md:top-0 shadow-[0_3px_20px_-6px_#dbdbdb]">
      <Link
      className="flex justify-center gap-2 items-center bg-white p-1 h-20 md:h-24 w-full md:w-auto z-10"
      scroll={false}
      onClick={() => window.scroll({top: 0, behavior: 'smooth'})}
      href="/">
        
        <Image
        src="logo_only.png"
        alt="Casa Marta Logo"
        className='h-full w-auto'
        width={450}
        height={450}
        priority
        />
        <h1 className="h-3/6 w-auto">
          <Image
          src="logo_text.png"
          alt="Casa Marta Restaurante"
          className="h-full w-auto"
          width={296.33} // 889
          height={77.33} // 232
          priority
          />
        </h1>
      </Link>
      
      {/* Menu items: */}
      {menuItems && (
      <div id="header-links" className="flex gap-0 justify-around w-full md:w-1/2 md:max-w-2xl">
        {menuItems.map((menuItem, i) => (
             <Link 
             key={i} 
             onClick={e => scrollTo(e, menuItem.elementId)}
             href={`#${menuItem.elementId}`}
             className="group text-center flex-1 flex flex-col justify-center md:max-w-32 transition ease-in-out delay-100 hover:-translate-y-0 hover:scale-100 duration-500"
             >
              <span className="pt-0 pb-3 px-3 md:py-4 rounded-3xl md:group-active:transition-none group-active:decoration-[#708a6f] group-hover:underline decoration-[#708a6f] group-hover:decoration-[#bad7b9] group-hover:decoration-2 underline-offset-4 transition-all ease-in-out delay-100 duration-200">{menuItem.name}</span>
            </Link>
        ))}
      </div>
      )}
    </div>
  );
}
