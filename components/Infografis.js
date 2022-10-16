import Image from "next/image"
export default function Infografis() {
    return (
      <div className="p-0  m-0px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-4 gap-5">
         <div className="container">
            <Image width={'100%'} height={'100%'} className="w-full" src="/images/i-pict-4.png" alt="Foto 4"/>
            <h1 className="text-blue-700 font-bold pt-4 text-xl">
                DATA & ANALISIS
            </h1>
            <p className="font-bold text-md pt-2">
                Kolaborasi Demi Intergrasikan Data Pajak Kendaraan Bermotor
            </p>
            <p className="text-sm pt-2">
                23 Juli 2022 | Emanuel Berkah Caesario
            </p>
         </div>  
         <div className="container">
            <Image width={'100%'} height={'100%'} className="w-full" src="/images/i-pict-5.png" alt="Foto 5"/>
            <h1 className="text-blue-700 font-bold pt-4 text-xl">
                DATA & ANALISIS
            </h1>
            <p className="font-bold text-md pt-2">
                Kebijakan Moneter Longgar Penuh Perhitungan ala BI
            </p>
            <p className="text-sm pt-2">
                22 Juli 2022 | Emanuel Berkah Caesario
            </p>
         </div>  
         <div className="container">
            <Image width={'100%'} height={'100%'} className="w-full" src="/images/i-pict-6.png" alt="Foto 6"/>
            <h1 className="text-blue-700 font-bold pt-4 text-xl">
                VARIA
            </h1>
            <p className="font-bold text-md pt-2">
                Menteri PUPR Umumkan Pemenang Sayembara Konsep Perancangan IKN
            </p>
            <p className="text-sm pt-2">
                22 Juli 2022 | Dvid Eka
            </p>
         </div>  
         <div className="container">
            <Image width={'100%'} height={'100%'} className="w-full" src="/images/i-pict-7.png" alt="Foto 7"/>
            <h1 className="text-blue-700 font-bold pt-4 text-xl">
                DATA & ANALISIS
            </h1>
            <p className="font-bold text-md pt-2">
                Inflasi Meningkat, Saatnya Bank Indonesia Naikan Suku Bunga
            </p>
            <p className="text-sm pt-2">
                20 Juli 2022 | Emanuel Berkah Caesario
            </p>
         </div>  
        
      </div>
    )
  }
  