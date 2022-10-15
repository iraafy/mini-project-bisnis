export default function Header() {
    return (
    <>
        <div className="container mx-auto w-full lg:w-5/6">
            <div className="container mx-auto flex flex-wrap justify-center bg-white">
                <img src="images/logo.png" alt="logo" width={'350px'}/>
            </div>
            <div className="bg-black text-white dark:bg-gray-500 dark:text-white text-2xl">
                <marquee>Lorem ipsum dolor sit amet</marquee>
            </div>
            <div className="container mx-auto py-3">
                <div className="flex flex-wrap justify-between text-sm px-8">
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">UTAMA</a> 
                    </div>
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">PASAR</a> 
                    </div>
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">FINANSIAL</a> 
                    </div>
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">DATA & ANALISIS</a> 
                    </div>
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">EKONOMI</a> 
                    </div>
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">INDUSTRI</a> 
                    </div>
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">ENTREPRENEURSHIP</a> 
                    </div>
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">VARIA</a> 
                    </div>
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">RILEKS</a> 
                    </div>
                    <div className="w-full lg:w-fit">
                        <a href="#" className="font-bold text-l">OPINI</a> 
                    </div>
                </div>     
            </div>
        </div>
    </>
    )
  }
  