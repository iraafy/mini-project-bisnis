export default function Terpopuler(){
    return(
       <div className="p-0  m-0px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="container">
            <img className="w-full" src="/images/j-pict-1.jpg" alt="Foto 1"/>
        </div>
        <div className="container">
            <h2 className="text-blue-700 font-bold pl-2 pr-2 text-lg">
                TERPOPULER
            </h2>
            <div className=" flex flex-wrap">
                <div className="w-1/2">
                    <div className="container py-5">
                        <h1 className="text-gray-400 font-bold pl-2 pr-2 text-lg">
                            03.
                        </h1>
                    </div>
                </div>
                <div className="w-2/2">
                    <div className="container py-5 text-left">
                        <h2 className="text-black font-bold pl-2 pr-2 text-lg">
                            Sumatra Mandiri Pangan, Solusi Kolektif Amankan Pasokan
                        </h2>
                    </div>
                </div>
            </div>
        </div>
       </div> 
    )
}