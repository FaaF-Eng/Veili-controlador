'use client'; //  Adicionado para permitir uso de hooks e interatividade
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation'; //  Adicionado para redirecionamento manual
import { useState } from "react";
import Link from "next/link";

export default function alarmes() {
  useEffect(() => {
    // exemplo: parando um áudio que estava tocando
    const isSomAtivo = localStorage.getItem("somAtivo");
    if (isSomAtivo === "true") {
      const audio = new Audio("/sounds/alarme_sirene.mp3");
      audio.pause();
      audio.currentTime = 0;
      localStorage.setItem("somAtivo", "false");
    }
  }, []);

   useEffect(() => {
    const recarregado = sessionStorage.getItem('recarregado');
    if (recarregado === 'false') {
      sessionStorage.setItem('recarregado', 'true');
      window.location.reload();
    }
  }, []);



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
  
const [alarmeIndex, setAlarmeIndex] = useState(0);
  const alarmes = ["Alarme 1", "Alarme 2", "Alarme 3", "Alarme 4", "Alarme 5"
    , "Alarme 6", "Alarme 7", "Alarme 8", "Alarme 9 ", "Alarme 10", "Alarme 11", "Alarme 12", "Alarme 13", "Alarme 14" , "Alarme 15", "Alarme 16", "Alarme 17"
    , "Alarme 18" , "Alarme 19", "Alarme 20" , "Alarme 21" , "Alarme 22" , "Alarme 23" , "Alarme 24" , "Alarme 25"];

  const anterior = () => {
    setAlarmeIndex((prev) => (prev - 1 + alarmes.length) % alarmes.length);
  };

  const proximo = () => {
    setAlarmeIndex((prev) => (prev + 1) % alarmes.length);
  };



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
            <div className="font-bold break-words text-center"style={{ fontSize: '11px'}} >Selecione o tipo de sirene</div>
        </div>

      



        <div onClick={playSound} className='fixed mt-25' style={{zIndex: 1}}>
            <button   onClick={() => playSoundAndNavigate('/lista1')} id='botaoplay' className='flex items-center justify-center w-40 h-8 bg-[#f3870c] font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none cursor-pointer transition-colors duration-300 hover:bg-orange-600'>
              Selecione na Lista<img src="src=/../play3.png" alt="icone_play3" className="w-5 h-5" />
            </button>
        </div>

       <div  className='fixed mt-48' style={{zIndex: 2}}>
            <button id='botaoplay' className='flex items-center justify-center w-40 h-10 bg-[#f7a447] font-bold rounded-[6px] text-[10px] p-0 m-0 leading-none '>
              Região | Setor | Sirene | Situação
            </button>
        </div>
       


        <div className='fixed mt-94' style={{zIndex: 1}}>
            <button id='botaoplay'onClick={() => playSoundAndNavigate('/alarmes2')}  className='flex items-center justify-center w-40 h-10 bg-[#f3870c] text-white rounded-[6px] text-[10px] p-0 m-0 leading-none cursor-pointer transition-colors duration-300 hover:bg-orange-600'>
              <img src="src=/../play.png" alt="icone_play" className="w-5 h-5" />
            </button>
            <div  className='flex items-center justify-center font-bold'style={{ fontSize: '10px'}}>Play</div>
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

        <div id="back" className="fixed mt-105 mr-35 flex flex-col gap-4">
          <button onClick={() => playSoundAndNavigate('/pagina3')} className="flex flex-col items-center cursor-pointer">
            <img src="src=/../back.png" alt="voltar" className="w-5 h-5" />
            Voltar
          </button>
        </div>
      </div>

      
    <div className="flex items-center justify-center"style={{zIndex:999999999999999999}}>
      <button
        onClick={() => { anterior(); playSound(); }}
        className="px-0 py-2 "
      >
        <img src="src=/../play4.png" alt="icone_play4" className="w-5 h-5" />
      </button>

      <div className="px-8 text-[15px] font-semibold text-center">
        {alarmes[alarmeIndex]}
      </div>

      <button
        onClick={() => { proximo(); playSound(); }} 
        className="px-0 py-2"
      >
        <img src="src=/../play3.png" alt="icone_play3" className="w-5 h-5" />  
      </button>
    </div>
  

    </div>
  );
}
