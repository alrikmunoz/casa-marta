import clsx from 'clsx';

type MenuCategoryProps = {
  name: string,  
  isSubcategory?: boolean, 
  price?: string, 
  children: React.ReactNode
}

export default function MenuCategory({ name, isSubcategory = false, price = "", children } : MenuCategoryProps) {
  return (
    <div className={clsx("break-inside-avoid-column", isSubcategory ? "mb-2 last:mb-4" : "mb-4")}>
      <div 
        className={clsx(
          "font-semibold flex justify-between",
          isSubcategory ? "text-base" : "text-xl",
          !isSubcategory && "mb-2",
      )}>
          <h3>{name}</h3>
          <p className="text-base">{price}</p>
        </div>
      {children}
    </div>
  );
}