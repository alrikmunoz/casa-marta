import { Metadata } from "next";
import SocialButton from "../ui/SocialButton";

export const metadata: Metadata = {
  title: 'Casa Marta – Links útiles',
  description: 'Links útiles de Casa Marta Restaurante',
}

export default function Page() {
  return (
    <main>
      <div className="py-6 px-2 md:p-6"> {/* This is div for the whole page content */}
        <h2 className="text-center text-4xl font-bold mt-6 mb-12 tracking-widest">Links útiles</h2>
        <div className="flex flex-col justify-evenly items-center gap-7">
          <SocialButton newTab href="https://g.page/r/CZs-qTEFUZLpEBM/review">Reseñar en Google</SocialButton>
          <SocialButton newTab href="https://www.facebook.com/people/Casa-Marta-Restaurante/61557999488320/">Visitar Facebook</SocialButton>
          <SocialButton newTab href="https://www.instagram.com/casamartarestaurante">Seguir en Instagram</SocialButton>
          <SocialButton href="/#menu">Ver nuestro menú</SocialButton>
        </div>
      </div>
    </main>
  );
}
