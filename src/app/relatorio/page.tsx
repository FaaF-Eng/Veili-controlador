'use client'; //  Adicionado para permitir uso de hooks e interatividade

import { useCallback } from 'react';
import { useRouter } from 'next/navigation'; //  Adicionado para redirecionamento manual
import Link from "next/link";

export default function Page3() {
  const router = useRouter(); // ✅ Instância do roteador do Next.js

  //  Função que toca o som e redireciona após um pequeno delay
  const playSoundAndNavigate = useCallback((path: string) => {
    const audio = new Audio("/sounds/click.mp3");
    audio.play();
    setTimeout(() => {
      router.push(path); // Redireciona após tocar o som
    }, 150); // Pequeno delay para o som iniciar
  }, [router]);

  //  Função que apenas toca o som (sem navegação)
  const playSound = useCallback(() => {
    const audio = new Audio("/sounds/click.mp3");
    audio.play();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen select-none'>
      <div className="fixed flex flex-col justify-center items-center h-screen p-0">
        <img  
          src="/display.png" 
          alt="display"
          className="w-85 h-auto z-99 select-none"
        />
      </div>

      
        <div className="fixed rounded mt-45 h-65 w-45 overflow-hidden p-4" style={{zIndex: 1}}>
            <div className="font-bold break-words text-center"style={{ fontSize: '9px'}} >Conecte-se à rede Veili e aguarde a transferência de dados</div>
        </div>
        <div className='fixed rounded mt-45 h-65 w-45 bg-gray-500 opacity-30'style={{zIndex: 0}}></div>

      <div className='fixed mt-50 mr-30' style={{ zIndex: -1 }}>
        <img className='h-97' src="src=/../exclamacao.png" alt="exclamacao" />
      </div>

      <div className='fixed mt-50 mr-30' style={{zIndex: 0}}><img className='h-20 opacity-50 ml-20 rotate-340' src="src=/../sirene.png" alt="sirene" /></div>

      <div className="fixed inset-0 flex items-center justify-center mt-20">
        <div className='fixed flex justify-center items-center mb-150'>
          <img src="src=/../veili.png" alt="outralogo" className='mt-100 h-10 z-999' />
        </div>

        <div className="fixed font-bold mb-56 mr-34">Relatório</div>

        

        <div id="back" className="fixed mt-105 mr-35 flex flex-col gap-4">
          <button onClick={() => playSoundAndNavigate('/')} className="flex flex-col items-center">
            <img src="src=/../back.png" alt="voltar" className="w-5 h-5" />
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
