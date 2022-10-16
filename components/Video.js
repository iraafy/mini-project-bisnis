import Image from "next/image"
export default function Video(){
    return(
        <div className="p-0  m-0px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-4 gap-5">
            <div className="container">
                <Image width={'100%'} height={'100%'} className="w-full" src="/images/j-pict-9.jpeg" alt="Foto 9"/>
                <h1 className="text-blue-700 font-bold pt-4 text-xl">
                    VARIA
                </h1>
                <h2 className="font-bold text-md pt-2">
                    Sandiaga Uno Tak Ingi8n Citayam Fashion Week Dimonopoli Elite
                </h2>
                <p className="text-sm pt-2">
                    26 Juli 2022 | David Eka
                </p>
            </div>
            <div className="container">
                <Image width={'100%'} height={'100%'} className="w-full" src="/images/j-pict-10.jpeg" alt="Foto 9"/>
                <h1 className="text-blue-700 font-bold pt-4 text-xl">
                    VARIA
                </h1>
                <h2 className="font-bold text-md pt-2">
                    ACT Selewengkan Dana Boeing Rp34 M Untuk Koperasi Syariah 212
                </h2>
                <p className="text-sm pt-2">
                    26 Juli 2022 | David Eka
                </p>
            </div>
            <div className="container">
                <Image width={'100%'} height={'100%'} className="w-full" src="/images/j-pict-11.jpeg" alt="Foto 9"/>
                <h1 className="text-blue-700 font-bold pt-4 text-xl">
                    VARIA
                </h1>
                <h2 className="font-bold text-md pt-2">
                    Persiapan Autopsi Ulang Brigadir J, Libatkan Dokter dari TNI
                </h2>
                <p className="text-sm pt-2">
                    26 Juli 2022 | David Eka
                </p>
            </div>
            <div className="container">
                <Image width={'100%'} height={'100%'} className="w-full" src="/images/j-pict-9.jpeg" alt="Foto 9"/>
                <h1 className="text-blue-700 font-bold pt-4 text-xl">
                    VARIA
                </h1>
                <h2 className="font-bold text-md pt-2">
                    Citayam Fashion Week Didaftarkan HKI z Pihak, Warganet Meradang
                </h2>
                <p className="text-sm pt-2">
                    26 Juli 2022 | David Eka
                </p>
            </div>
        </div>
    )
}