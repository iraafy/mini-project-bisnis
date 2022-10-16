import Image from "next/image"
export default function Terpopuler(){
    return(
        <div className="p-0  m-0 px-2 py-2">
            <div className="flex flex-wrap">
                <div className="w-1/3">
                    <div className="container">
                        <Image className="w-max" src="/images/j-pict-1.jpg" alt="Foto 1"/>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="container pl-5">
                        <h2 className="text-blue-700 font-bold text-2xl">
                            TERPOPULER
                        </h2>
                        <div className=" flex flex-wrap pt-7">
                            <div className="w-20">
                                <div className="container">
                                    <h1 className="text-gray-400 font-bold pl-2 text-3xl mr-0 pr-0">
                                        03.
                                    </h1>
                                </div>
                            </div>
                            <div className="w-65">
                                <div className="container text-left">
                                    <h2 className=" font-bold pr-2 text-lg">
                                        Sumatra Mandiri Pangan, Solusi <br/> Kolektif Amankan Pasokan
                                    </h2>
                                    <p className="text-sm pt-5">
                                        22 Juli 2022 | Rustam agus
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        
    )
}