import Image from "next/image"
export default function Industri(){
    return (
        <div className="p-0  m-0px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="container">
                <Image className="h-50 w-100" src="/images/j-pict-3.jpg" alt="Foto 1"/>
                <h2 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
                    INDUSTRI
                </h2>
                <h1 className=" font-bold pt-2 pb-2 text-2xl">
                    Siasat MAB Membuat Bus Listrik Otonom Metropod
                </h1>
                <p className="text-sm pt-2">
                    28 Juli 2022 | Fathkul Maskur
                </p>
            </div>
            <div className="text-center w-12/12  container pt-12 px-2 border-2 border-l-indigo-500 border-r-indigo-500 border-t-indigo-500">
                <h2 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
                    INDUSTRI
                </h2>
                <h1 className=" font-bold pt-2 pb-2 text-3xl">
                    Top 5 BisnisIndonesia.Id: Blok Masela Hingga Kereta Cepat
                </h1><br></br>
                <p className="text-gray-400 text-m">
                    Perkembangan proyek eksplorasi di Blok Masela.
                    Maluku, terus di nanti usai pertemuan Presiden Jokowi dengan ....
                </p><br></br>
                <p className="text-sm pt-2">
                    28 Juli 2022 | Nindya Aldila
                </p>
            </div>
            <div className="p-0 m-0 grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="container">
                    <Image className="w-small" src="/images/j-pict-4.jpg" alt="Foto 4"/>
                </div>
                <div className="container">
                    <h1 className="text-blue-500 font-bold pt-0 pb-1 text-lg">
                        INDUSTRI
                    </h1>            
                    <h2 className=" font-bold text-sm">
                        Didesak china, RI Pikul Beban Biaya Proyek Kereta Cepat.
                    </h2>
                    <p className="text-sm pt-2">
                        28 Juli 2022 | Rayful Muassir
                    </p>
                </div>
                
                <div className="container">
                    <Image className="w-small" src="/images/j-pict-5.jpg" alt="Foto 5"/>
                </div>
                <div className="container">
                    <h1 className="text-blue-500 font-bold pt-0 pb-1 text-lg">
                        INDUSTRI
                    </h1>            
                    <h2 className=" font-bold text-sm px-0 mx-0">
                        Didesak china, RI Pikul Beban Biaya Proyek Kereta Cepat.
                    </h2>
                    <p className="text-sm pt-2">
                        28 Juli 2022 | Ibeth Nurbaiti
                    </p>
                </div>
  
                <div className="container">
                    <Image className="w-small" src="/images/j-pict-6.jpg" alt="Foto 6"/>
                </div>
                <div className="container">
                    <h1 className="text-blue-500 font-bold pt-0 pb-1 text-lg">
                        INDUSTRI
                    </h1>            
                    <h2 className=" font-bold text-sm">
                        Didesak china, RI Pikul Beban Biaya Proyek Kereta Cepat.
                    </h2>
                    <p className="text-sm pt-2">
                        28 Juli 2022 | Yanita Petdella
                    </p>
                </div>
            </div>
        </div>
        
      )
}