import "./globals.css";

import { Header } from '../components/header'
import { Metadata } from "next";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: 'Projeto Veili',
  description: 'Página inicial do projeto Controlador de Sirene',
  openGraph:{
    title: 'Controlador de Sirene Veili',
    description: 'Simulador do software do controlador de sirene',
    images:['URL DE IMAGEM'],
  },
  robots:{
    index: true,
    follow:true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
    }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Footer/>
        <Header/>
        {children}
      </body>
    </html>
  );
}
