import Image from "next/image"
export default function Header() {
    const current = new Date();
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni","Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const dayNames = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu","Minggu"];
    const d = `${current.getDay()}`;
    const day = dayNames[d];
    const date = `${current.getDate()}`;
    const m =  `${current.getMonth()+1}`;
    const month = monthNames[m];
    const year = `${current.getFullYear()}`;
    const dates = `${day} - ${date} ${month} ${year}`;
    return (
    <>
        <div className="container mx-auto w-full lg:w-5/6">
            <div className="container flex flex-wrap bg-white text-black">
                <div className="lg:w-1/3">
                    <div className="flex">
                        <div className="w-1/5">
                            <div className="container p-4 bg-white">
                                <iconify-icon inline icon="ci:menu-duo" style={{fontSize: '30px', paddingTop: '2%'}}/>&emsp;
                            </div>
                        </div>
                        <div className="w-4/5">
                            <div className="container p-5 bg-white text0sm">
                                {dates}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="container justify-center p-4 bg-white">
                        <Image width={'150px'} height={'100%'} src="images/logo.png" alt="logo" className="h-full w-full"/>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="container flex">
                        <div className="w-1/6">
                            <div className="container pt-4 bg-white pl-24">
                                <iconify-icon inline icon="bytesize:search" style={{fontSize: '20px', paddingTop: '10px'}}/>&emsp;
                            </div>
                        </div>
                        <div className="w-4/6">
                            <div className="container pt-4 pr-5 bg-white">
                               <button className="border-2 border-blue-700 p-2 pl-3 pr-3 rounded text-sm" style={{float: 'right'}}>
                                    Berlangganan
                               </button>
                            </div>
                        </div>
                        <div className="w-1/6">
                            <div className="container pr-4 pt-5 bg-white text-right">
                                <a>
                                    <b>
                                        Login
                                    </b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white dark:bg-gray-500 dark:text-white text-md">
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
  