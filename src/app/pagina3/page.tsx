export default function page3(){
    return(
        <div className=' flex flex-col justify-center items-center h-screen'>
            <div className="fixed flex flex-col justify-center items-center h-screen p-0">
                <img  
                    src="/display.png" 
                    alt="display"
                    className="w-85  h-auto z-99 select-none"></img>
            </div>

            
            <div className="fixed inset-0 flex items-center justify-center mt-20 ">
                <div className=' fixed flex justify-center items-center mb-150 '>
                    <img src="src=/../veili.png" alt="outralogo" className='mt-100 h-10 z-999 ' />
                </div>
                <div className="fixed font-bold mb-55 mr-40">Menu</div>
                <div id="botoes" className="fixed mt-30 flex flex-col gap-4">
                    <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-10 rounded-lg transition duration-300">
                        <img src="src=/../cadastro.png" alt="icone_cadastro" className="w-5 h-5 mr-2" />Cadastro</button>

                    <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-10 rounded-lg transition duration-300">
                        <img src="src=/../volume.png" alt="icone_cadastro" className="w-5 h-5 mr-3" />Alarme</button>

                    <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-10 rounded-lg transition duration-300">
                        <img src="src=/../relatorio.png" alt="icone_cadastro" className="w-5 h-5 mr-3" />Relatório</button>   
                
                    <button className="flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-10 rounded-lg transition duration-300">
                        <img src="src=/../dataehora.png" alt="icone_cadastro" className="w-5 h-5 mr-2" />Data e Hora</button>                   
                </div>
            </div>
            
        




        </div>
        
    )
}

//oi