'use client'
import { useState } from 'react'; // ✅ Importação no topo do arquivo
import { useRouter } from 'next/navigation';
import { useCallback } from 'react'; //Para música



export default function pagina2() {
  console.log('TypeScript funciona;');

  const [senhaDigitada, setSenhaDigitada] = useState(""); // [Adicionado] Estado que armazena os * digitados
  const maxCaracteres = 4; // [Adicionado] Limite máximo de caracteres
  const router = useRouter(); // ✅ Inicialização do roteador

  const playSoundAndNavigate = useCallback((path: string) => {
    const audio = new Audio("/sounds/click.mp3");
    audio.play();
    setTimeout(() => {
      router.push(path); // Redireciona após tocar o som
    }, 150); // Pequeno delay para o som iniciar
  }, [router]);


  const playSound = useCallback(() => {
  const audio = new Audio("/sounds/click.mp3"); // Caminho dentro da pasta public
  audio.play();
  }, []);



  const handleClick = (valor: string) => { // [Adicionado] Lógica que trata os cliques dos botões
    playSound();
    if (valor === "Anula") {
      setSenhaDigitada("");
      return;
    }
    if (valor === "Entra" && senhaDigitada.length == maxCaracteres) {
      router.push("/pagina3"); // ✅ Redireciona para page3
      return;
    }


    if (!isNaN(Number(valor)) && senhaDigitada.length < maxCaracteres) {
      setSenhaDigitada(senhaDigitada + "*");
    }
  };

  return (
    <div className=' flex flex-col justify-center items-center h-screen'>
      <div className="fixed flex flex-col justify-center items-center h-screen p-0">
        <img  
          src="/display.png" 
          alt="display"
          className="w-85  h-auto z-99 select-none"
        />
          
      </div>
      <div className='fixed  mt-50 mr-30' style={{ zIndex: -1 }}><img className='h-97' src="src=/../exclamacao.png" alt="exclamacao" /></div> 
      
      {/* Campo visual para mostrar os * */}
      <div className="fixed inset-0 flex items-center justify-center mt-20">
        <div className=' fixed flex justify-center items-center mb-150 '>
          <img src="src=/../veili.png" alt="outralogo" className='mt-100 h-10 z-999' />
        </div>
        <div className="fixed font-bold mb-55 mr-40">Login</div>
        <div className='fixed font-bold mb-35' >Digite a senha</div>

      


        <div id="campoSenha" className="text-2xl font-bold text-black">
          {senhaDigitada}
        </div>
      </div>

      <div className="fixed inset-0 flex items-center justify-center mt-45">
        <div className="mt-70 w-fit h-90 overflow-hidden break-words">
          <div id='botoes' className="grid grid-cols-3 grid-rows-4 gap-x-[1px] gap-y-[2px]">
            {[
              "1", "2", "3",
              "4", "5", "6",
              "7", "8", "9",
              "Anula", "0", "Entra"
            ].map((label, idx) => (
              <button
                key={idx}
                onClick={() => handleClick(label)} // ✅ Evento conectado
                className="w-10 h-10 bg-[#f3870c] text-white rounded-[6px] text-[10px] p-0 m-0 leading-none
                           cursor-pointer transition-colors duration-300 hover:bg-orange-600"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
        <div id="back" className="fixed mt-125 mr-35 flex flex-col gap-4">
          <button onClick={() => playSoundAndNavigate('/')} className="flex flex-col items-center cursor-pointer">
            <img src="src=/../back.png" alt="voltar" className="w-5 h-5" />
            Voltar
          </button>
        </div>


      
    </div>
  );
}
