'use client'; //  Adicionado para permitir uso de hooks e interatividade
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation'; //  Adicionado para redirecionamento manual
import { useState } from "react";
import Link from "next/link";

export default function lista2() {
  


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
          className="w-85 h-auto z-9 select-none"/>
      </div>

     
    <div className="fixed flex items-center justify-center mt-125 ml-40 "style={{zIndex:99}}>
        <button
        onClick={() => playSoundAndNavigate('/lista3')}  className="px-0 py-2">
        <img src="src=/../play3.png" alt="icone" className="w-5 h-5" />  
        </button>
    </div>

    <div className="fixed flex items-center justify-center mt-125 mr-40 "style={{zIndex:99}}>
        <button
        onClick={() => playSoundAndNavigate('/lista1')}  className="px-0 py-2">
        <img src="src=/../play4.png" alt="icone" className="w-5 h-5" />  
        </button>
    </div>

      


        
        <div  onClick={() => playSoundAndNavigate('/alarmes2')} className='fixed mb-5 flex mr-4 items-center justify-center w-40 h-8' style={{zIndex: 2}}>
            <button className='flex items-center justify-center w-35 h-8 bg-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none cursor-pointer transition-colors duration-300 hover:bg-orange-600'>
                Faixa 6<img src="src=/../volume.png" alt="icone_volume" className="w-5 h-5 ml-5" /></button>
        </div>
        <div className='flex fixed items-center justify-center mb-5 mt-3 w-40 h-8 bg-[#f3870c] text-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none' style={{zIndex: 1}}>
            <div className='ml-35 font-bold'>06</div>
        </div>

  
        <div  onClick={() => playSoundAndNavigate('/alarmes2')} className='fixed mt-20 flex mr-4 items-center justify-center w-40 h-8' style={{zIndex: 2}}>
            <button className='flex items-center justify-center w-35 h-8 bg-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none cursor-pointer transition-colors duration-300 hover:bg-orange-600'>
                Faixa 7<img src="src=/../volume.png" alt="icone_volume" className="w-5 h-5 ml-5" /></button>
        </div>
        <div className='flex fixed items-center mt-23 justify-center w-40 h-8 bg-[#f3870c] text-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none' style={{zIndex: 1}}>
            <div className='ml-35 font-bold'>07</div>
        </div>

        <div  onClick={() => playSoundAndNavigate('/alarmes2')} className='fixed mt-45 flex mr-4 items-center justify-center w-40 h-8' style={{zIndex: 2}}>
            <button className='flex items-center justify-center w-35 h-8 bg-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none cursor-pointer transition-colors duration-300 hover:bg-orange-600'>
                Faixa 8<img src="src=/../volume.png" alt="icone_volume" className="w-5 h-5 ml-5" /></button>
        </div>
        <div className='flex fixed items-center mt-48 justify-center w-40 h-8 bg-[#f3870c] text-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none' style={{zIndex: 1}}>
            <div className='ml-35 font-bold'>08</div>
        </div>


        <div  onClick={() => playSoundAndNavigate('/alarmes2')} className='fixed mt-70 flex mr-4 items-center justify-center w-40 h-8' style={{zIndex: 2}}>
            <button className='flex items-center justify-center w-35 h-8 bg-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none cursor-pointer transition-colors duration-300 hover:bg-orange-600'>
                Faixa 9<img src="src=/../volume.png" alt="icone_volume" className="w-5 h-5 ml-5" /></button>
        </div>
        <div className='flex fixed items-center mt-73 justify-center w-40 h-8 bg-[#f3870c] text-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none' style={{zIndex: 1}}>
            <div className='ml-35 font-bold'>09</div>
        </div>
        
        <div  onClick={() => playSoundAndNavigate('/alarmes2')} className='fixed mt-95 flex mr-4 items-center justify-center w-40 h-8' style={{zIndex: 2}}>
            <button className='flex items-center justify-center w-35 h-8 bg-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none cursor-pointer transition-colors duration-300 hover:bg-orange-600'>
                Faixa 10<img src="src=/../volume.png" alt="icone_volume" className="w-5 h-5 ml-5" /></button>
        </div>
        <div className='flex fixed items-center mt-98 justify-center w-40 h-8 bg-[#f3870c] text-white font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none' style={{zIndex: 1}}>
            <div className='ml-35 font-bold'>10</div>
        </div>





        <div className='fixed rounded mt-45 h-65 w-45 bg-gray-500 opacity-30'style={{zIndex: 0}}></div>
        <div className='fixed mt-50 mr-30' style={{ zIndex: -1 }}>
            <img className='h-97' src="src=/../exclamacao.png" alt="exclamacao" />
        </div>
        <div className="fixed inset-0 flex items-center justify-center mt-20">
            <div className='fixed flex justify-center items-center mb-150'>
            <img src="src=/../veili.png" alt="outralogo" className='mt-100 h-10 z-999' />
            </div>
            <div className="fixed font-bold mb-56 mr-34">Lista 2</div>
        </div>
    </div>
  );
}
