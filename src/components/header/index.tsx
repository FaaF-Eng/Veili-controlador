export function Header(){
    return (
        <header className="select-none">
            <div className="fixed flex items-center justify-between w-full mx-auto max-w-7x1 z-1 ">
                <div className="mt-10 ml-5">
                    <a href="https://veili.com.br/">
                        <img  
                        src="/veili.png " 
                        alt="logo veili"
                        className="w-32 h-auto transition-transform duration-300 hover:scale-110" // Define a largura e altura em Tailwind 
                        />
                    </a>    
                </div>
            </div>
            <div
            className="fixed top-0 right-0 w-full h-[70%] bg-[#f3870c]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 0%)' }}
            ></div>
        </header>
    )
}