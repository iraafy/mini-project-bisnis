export default function Header() {
    return (
    <>
    <div className="bg-white py-5 container mx-auto w-full lg:w-5/6">
        <div className="container mx-auto px-5 lg:px-20 ">
            <div className="mx-20 flex flex-wrap justify-center">
                <img src="images/logo.png" alt="logo" width={'550px'}/>
            </div>    
        </div>        
    </div>
    <div className="container mx-auto w-full lg:w-5/6">
        <div className="bg-black text-white dark:bg-gray-500 dark:text-white text-2xl">
            <marquee>Lorem ipsum dolor sit amet</marquee>
        </div>
        <div className="container mx-auto px-5 lg:px-20 py-7">
            <div className="flex flex-wrap justify-center gap-10 text-sm">
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">UTAMA</a> 
                </div>
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">PASAR</a> 
                </div>
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">FINANSIAL</a> 
                </div>
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">DATA & ANALISIS</a> 
                </div>
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">EKONOMI</a> 
                </div>
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">INDUSTRI</a> 
                </div>
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">ENTREPRENEURSHIP</a> 
                </div>
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">VARIA</a> 
                </div>
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">RILEKS</a> 
                </div>
                <div className="w-full lg:w-fit">
                    <a href="#" className="font-bold text-xl">OPINI</a> 
                </div>
            </div>     
        </div>
    </div>
    </>
    )
  }
  