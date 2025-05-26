import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Home - tela incial',
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

export default function Home() {
  return(
    <div>
      <h1 className=" font-bold fixed mt-135 ml-150 flex flex flex-col justify-center items-center  
       p-0 text-xl">Controlador de Sirene</h1>

      <div className="flex flex flex-col justify-center items-center h-screen 
      transition-transform duration-300 hover:scale-110 p-0 ">
        <Link href='/pagina2'>
        <img  
        src="/controlador.png " 
        alt="controlador"
        className="w-85 h-auto"/>   
        </Link>
              
        </div>
    </div>
      
    
  )
}
