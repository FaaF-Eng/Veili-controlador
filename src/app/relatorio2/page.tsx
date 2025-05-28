'use client'; // ✅ Necessário para usar hooks e navegação

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Hook de navegação do Next.js

export default function relatorio2(){
   const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // ✅ Redireciona para a Home após 5 segundos
    }, 5000);

        return () => clearTimeout(timer); // ✅ Limpa o timer se o componente for desmontado
  }, [router]);


    return(
        <div className=' flex flex-col justify-center items-center h-screen'>
            <div className="fixed flex flex-col justify-center items-center h-screen p-0">
                <img  
                    src="/display.png" 
                    alt="display"
                    className="w-85  h-auto z-99 select-none"></img>
            </div>

            
            <div className="fixed inset-0 flex items-center justify-center mt-20 select-none">
                <div className=' fixed flex justify-center items-center mb-150 '>
                    <img src="src=/../veili.png" alt="outralogo" className='mt-100 h-10 z-999 ' />
                </div>
                <img className="fixed h-25 w-25 ml-7" src="src=/../sdcardwifi.png" alt="sdwifi" />
                <img className="fixed h-25 w-25 mt-50" src="src=/../check.png" alt="check" />
                <div className="text-[12px] fixed font-bold mt-80">Transferência concluída</div>

            </div>
            <div className='fixed  mt-50 mr-30' style={{ zIndex: -1 }}><img className='h-97' src="src=/../exclamacao.png" alt="exclamacao" /></div>

            
        




        </div>
        
    )
}

//oi