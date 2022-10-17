import Image from "next/image"
export default function Opini(){
    return(
        <div className="p-0 m-0px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="container">
                <Image width={'500'} height={'350'} className="w-full" src="/images/j-pict-7.png" alt="Foto 7"/>
            </div>
            <div className="container">
                <h2 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
                    OPINI
                </h2>
                <h1 className=" font-bold pt-2 pb-2 text-3xl">
                    EDITORIAL: Alarm Resesi Global
                </h1>
                <p className="text-gray-400 text-m">
                    Lorem Ipsum Konflik geo... perkembangan proyek eksplorasi di Blok Masela.
                    Maluku, terus di nanti usai pertemuan Presiden Jokowi dengan ....
                </p><br></br>
                <div className="m-0 px-0 pt-0 py-2 grid sm:grid-flow-col-dense">
                    <div className="container">
                        <Image width={'50'} height={'50'} className="w-small" src="/images/j-pict-mini.png" alt="Foto mini"/>
                    </div>
                    <div className="container">
                        <p className="text-sm pt-5 px-0">
                            28 Juli 2022 | Lim Hedaksi
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-1/2 border-r-2 border-dotted border-blue-900 p-3">
                        <div className="border-b-2 border-blue-700">
                            <h1 className="font-bold text-md">
                                OPINI: Menjaga Denyut Ekonomi Stabil
                            </h1>
                            <p className="text-xs pt-4 pb-4">
                                28 Juli 2022 | Lim Hedaksi
                            </p>
                        </div>
                        <h1 className="font-bold text-md pt-4">
                            SPEKTRUM: Mengembalikan CFW Keasalnya
                        </h1>
                        <p className="text-xs pt-5 px-0">
                            27 Juli 2022 | Lim Hedaksi
                        </p>
                    </div>
                    <div className="w-1/2 p-3">
                        <div className="border-b-2 border-blue-700">
                            <h1 className="font-bold text-md">
                                OPINI: Menjaga Denyut Ekonomi Stabil
                            </h1>
                            <p className="text-xs pt-4 pb-4">
                                28 Juli 2022 | Lim Hedaksi
                            </p>
                        </div>
                        <h1 className="font-bold text-md pt-4">
                            SPEKTRUM: Mengembalikan CFW Keasalnya
                        </h1>
                        <p className="text-xs pt-5 px-0">
                            27 Juli 2022 | Lim Hedaksi
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}