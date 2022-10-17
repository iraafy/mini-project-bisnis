import Image from "next/image"
export default function Artikel() {
    return (
    <>
        <div className="container py-6 mx-auto w-full lg:w-5/6 p-5">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-3/5">
                    <div className="container">
                        <h1 className="text-blue-700 font-bold text-xl">
                            PASAR
                        </h1>
                        <h1 className="pt-2 font-bold text-2xl">
                            Jejak Bisnis Digital Sinar Mas hingga Kongsi Alibaba
                        </h1>
                        <p className="pt-6 text-md">
                            Kolaborasi bisnis Grup Sinar Mas dan Grup Alibaba disinyalir semakin erat. 
                            Apalagi kedua konglomerant tersebut memiliki agenda yang sama untuk 
                            memperkuat bisnis digital di Indonesia.
                        </p>
                        <p className="text-sm pt-4 pb-4">
                            17 Agustus 2022 | Aaaaaaa Desi Kaaaaaaa
                        </p>
                    </div>            
                </div>
                <div className="w-full lg:w-2/5">
                    <div className="container ">
                        <Image width={'500'} height={'350'} src="/images/i-pict-22.png" alt="Foto 22"/>
                    </div>            
                </div>
            </div>
            <div className="border-b-2 border-black dark:border-white pt-10"/>
        </div>
    </>
    )
  }  