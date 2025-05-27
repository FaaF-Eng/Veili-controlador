'use client'; // ✅ Necessário para usar hooks e navegação

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Hook de navegação do Next.js

export default function Cadastro3() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // ✅ Redireciona para a Home após 5 segundos
    }, 5000);

    return () => clearTimeout(timer); // ✅ Limpa o timer se o componente for desmontado
  }, [router]);

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="fixed flex flex-col justify-center items-center h-screen p-0">
        <img  
          src="/display.png" 
          alt="display"
          className="w-85 h-auto z-99 select-none"
        />
      </div>

      <div className="fixed inset-0 flex items-center justify-center mt-20 select-none">
        <div className='fixed flex justify-center items-center mb-150'>
          <img src="src=/../veili.png" alt="outralogo" className='mt-100 h-10 z-999' />
        </div>
        <div className="text-[15px] fixed font-bold mb-55 mr-34">Cadastro</div>
        <div className="text-[12px] fixed font-bold mb-30">Operador:</div>
        <img className="fixed h-25 w-25 mt-10" src="src=/../alert.png" alt="nocheck" />
        <div className="text-[12px] fixed font-bold mt-60">Senha não cadastrada!!!</div>
        <div className="text-[10px] fixed font-bold mt-70">Digite uma senha de 4 números</div>
      </div>

      <div className='fixed mt-50 mr-30' style={{ zIndex: -1 }}>
        <img className='h-97' src="src=/../exclamacao.png" alt="exclamacao" />
      </div>
    </div>
  );
}
