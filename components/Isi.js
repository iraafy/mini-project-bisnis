import Image from "next/image"
export default function Isi() {
    return (
    <>
        <div className="container mx-auto w-full lg:w-5/6 p-5 pb-0">
            <div className="flex flex-wrap pb-4">
                <div className="container w-full lg:w-1/2 pr-6">
                    <h1 className="text-blue-700 font-bold text-xl">
                        EKONOMI
                    </h1>
                    <h2 className="pt-2 font-bold text-3xl">
                        Sikap The Fed dan IMF jadi Sinyal Beruntun Resesi Global
                    </h2>
                    <p className="pt-5 text-base">
                        Federal Reserve menaikkan suku bangsa sebesar 75 baris poin 
                        pada Rabu (27/7/2022) waktu Washington, sebuah langkah yang 
                        sudah diperkirakan oleh pasar. Pengumuman keputusan itu 
                        dilakukan di hari yang sama pemangkasan prospek ekonomi 
                        global oleh Internasional Monetary Fund (IMF).
                    </p>
                    <p className="py-5 text-sm font-semibold">
                        28 Juli 2022 | Nindya Ardila
                    </p>
                </div>
                <div className="container w-full lg:w-1/2 pb-10">
                    <Image width={'500'} height={'350'} src="/images/i-pict-16.png" alt="Foto 16"/>
                </div>
                <div className="flex flex-wrap">
                    <div className="container lg:w-1/3 w-full">
                        <div className="flex flex-wrap">
                            <div className="w-1/3 p-2">
                                <Image width={'150'} height={'150'} src="/images/i-pict-17.png" alt="Foto 17"/>
                            </div>
                            <div className="w-2/3 p-2">
                                <h2 className="text-blue-700 font-bold">
                                    INDUSTRI
                                </h2> 
                                <p className="font-bold text-sm pt-2">
                                    Top 5 News <br/>
                                    BisnisIndonesia.id Blok 
                                    Masela Hingga Kereta Cepat
                                </p>
                                <p className="text-xs pt-2">
                                    28 Juli 2022 | Nindya Ardila
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container lg:w-1/3 w-full">
                        <div className="flex flex-wrap border-2 border-red-500 border-dotted">
                            <div className="w-1/3 p-2">
                                <Image width={'150'} height={'150'} src="/images/i-pict-18.png" alt="Foto 18"/>
                            </div>
                            <div className="w-2/3 p-2">
                                <h2 className="text-blue-700 font-bold">
                                    INDUSTRI
                                </h2> 
                                <p className="font-bold text-sm pt-2">
                                    Top 5 News <br/>
                                    BisnisIndonesia.id Blok 
                                    Masela Hingga Kereta Cepat
                                </p>
                                <p className="text-xs pt-2">
                                    28 Juli 2022 | Nindya Ardila
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container lg:w-1/3 w-full">
                        <div className="flex flex-wrap">
                            <div className="w-1/3 p-2">
                                <Image width={'150'} height={'150'} src="/images/i-pict-19.png" alt="Foto 19"/>
                            </div>
                            <div className="w-2/3 p-2">
                                <h2 className="text-blue-700 font-bold">
                                    INDUSTRI
                                </h2> 
                                <p className="font-bold text-sm pt-2">
                                    Top 5 News <br/>
                                    BisnisIndonesia.id Blok 
                                    Masela Hingga Kereta Cepat
                                </p>
                                <p className="text-xs pt-2">
                                    28 Juli 2022 | Nindya Ardila
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap pt-5">
                    <div className="container w-full lg:w-1/2 p-3">
                        <Image width={'500'} height={'300'} className="rounded" src="/images/i-pict-20.png" alt="Foto 20"/>
                    </div>
                    <div className="container w-full lg:w-1/2 p-3">
                        <Image width={'500'} height={'300'} className="rounded" src="/images/i-pict-21.png" alt="Foto 21"/>
                    </div>
                </div>
            </div>
        </div> 
    </>
    )
  }
  