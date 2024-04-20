import NavMenu from "../ui/navmenu";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavMenu />
      {children}
    </>
  );
}