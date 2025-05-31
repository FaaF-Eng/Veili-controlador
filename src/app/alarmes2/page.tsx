'use client'; //  Adicionado para permitir uso de hooks e interatividade
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation'; //  Adicionado para redirecionamento manual
import { useState } from "react";
import Link from "next/link";

export default function alarmes2() {

 
  useEffect(() => {
    const audio2 = new Audio("/sounds/alarme_sirene.mp3");
    audio2.play().catch((e) => console.warn("Erro ao tocar som:", e));
  }, []); // roda só uma vez, quando a página carrega
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

      
        <div className="fixed rounded mt-43 h-65 w-45 overflow-hidden p-4" style={{zIndex: 1}}>
            <div className="font-bold break-words text-center"style={{ fontSize: '11px'}} >Reproduzindo som:</div>
        </div>

        <div className="fixed rounded mt-55  h-65 w-45 overflow-hidden " style={{zIndex: 1}}>
            <div className="break-words text-center"style={{ fontSize: '11px'}} >Faixa</div>
        </div>

        <div className='mt-30 h-10 w-10'style={{zIndex: 1}}>
            <img src="src=/../volume.png" alt="alarmevolume" />
        </div>
    

       


        <div className='fixed mt-94' style={{zIndex: 1}}>
            <button id='botaoquadrado'onClick={() => {playSoundAndNavigate('/alarmes');
            sessionStorage.setItem('recarregado', 'false'); // flag para recarregar uma vez
}}  className='flex items-center rounded-full justify-center w-13 h-13 bg-[#f3870c] p-0 m-0 leading-none cursor-pointer transition-colors duration-300 hover:bg-orange-600'>
              <img src="src=/../quadrado.png" alt="icone_quadrado" className="w-5 h-5" />
            </button>
            <div className='flex items-center justify-center font-bold'style={{ fontSize: '10px'}}>Stop</div>
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

        <div className="fixed font-bold mb-56 mr-34">Alarmes</div>

 
      </div>

      

  

    </div>
  );
}
