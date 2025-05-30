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
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="fixed flex flex-col justify-center items-center h-screen p-0">
        <img  
          src="/display.png" 
          alt="display"
          className="w-85 h-auto z-99 select-none"
        />
      </div>

      <div className='fixed mt-50 mr-30' style={{ zIndex: -1 }}>
        <img className='h-97' src="src=/../exclamacao.png" alt="exclamacao" />
      </div>

      <div className='fixed mt-50 mr-30' style={{zIndex: 0}}><img className='h-20 opacity-50 ml-20 rotate-340' src="src=/../sirene.png" alt="sirene" /></div>

      <div className="fixed inset-0 flex items-center justify-center mt-20">
        <div className='fixed flex justify-center items-center mb-150'>
          <img src="src=/../veili.png" alt="outralogo" className='mt-100 h-10 z-999' />
        </div>

        <div className="fixed font-bold mb-55 mr-40">Menu</div>

        <div id="botoes" className="fixed mt-30 flex flex-col gap-4">
          {/*  Agora é um <button> normal com redirecionamento programático */}
          <button 
            onClick={() => playSoundAndNavigate('/cadastro')} 
            className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-12 rounded-lg transition duration-300"
          >
            <img src="src=/../cadastro.png" alt="icone_cadastro" className="w-5 h-5 mr-2" />
            Cadastro
          </button>

          {/*  Só toca o som (sem redirecionamento) */}
          <button 
            onClick={() => playSoundAndNavigate('/alarmes')}
            className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-10 rounded-lg transition duration-300"
          >
            <img src="src=/../volume.png" alt="icone_alarme" className="w-5 h-5 mr-3" />
            Alarme
          </button>

          <button 
            onClick={() => playSoundAndNavigate('/relatorio')} 
            className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-10 rounded-lg transition duration-300"
          >
            <img src="src=/../relatorio.png" alt="icone_relatorio" className="w-5 h-5 mr-3" />
            Relatório
          </button>   

          <button 
            onClick={playSound} 
            className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-10 rounded-lg transition duration-300"
          >
            <img src="src=/../dataehora.png" alt="icone_dataehora" className="w-5 h-5 mr-2" />
            Data e Hora
          </button>                   
        </div>

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
