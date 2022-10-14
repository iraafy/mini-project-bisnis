import React from 'react'

export default function Footer() {
  return (
    <div className="container mx-auto w-full">
        <div className=" flex flex-wrap">
            <div className="w-1/2">
                <div className="container py-5">
                    <img src="images/logo.png" alt="logo" width={'150px'}/>
                </div>
            </div>
            <div className="w-1/2">
                <div className="container py-5 text-right">
                    <iconify-icon inline icon="entypo-social:facebook-with-circle" style={{color: 'black', fontSize: '30px', marginRight: '15px'}}/>
                    <iconify-icon inline icon="entypo-social:linkedin-with-circle" style={{color: 'black', fontSize: '30px', marginRight: '15px'}}/>
                    <iconify-icon inline icon="entypo-social:instagram-with-circle" style={{color: 'black', fontSize: '30px', marginRight: '15px'}}/>
                    <iconify-icon inline icon="entypo-social:youtube-with-circle" style={{color: 'black', fontSize: '30px'}}/>  
                </div>
            </div>
            <div className="w-full border-b-2 border-blue-900 mb-2"/>
                <div className="content pt-4 pb-4">
                    <h1 className="font-bold text-lg text-blue-900">
                        Big Media
                    </h1>
                </div>
                <div className="link">
                    <div className="mb-5 flex flex-wrap gap-9 text-sm">
                        <div className="w-full lg:w-fit">
                            Bisnis.com
                        </div>
                        <div className="w-full lg:w-fit">
                            BisnisIndonesia.id
                        </div>
                        <div className="w-full lg:w-fit">
                            BisnisMuda.id
                        </div>
                        <div className="w-full lg:w-fit">
                            HypeAbis.id
                        </div>
                        <div className="w-full lg:w-fit">
                            Context.id
                        </div>
                        <div className="w-full lg:w-fit">
                            DataIndonesia.id
                        </div>
                        <div className="w-full lg:w-fit">
                            Solopos.com
                        </div>
                        <div className="w-full lg:w-fit">
                            HarianJogja.com                    
                        </div>
                    </div>
                    <div className="w-full border-b-2 border-blue-900"/>

                    <div className="py-4 grid sm:grid-cols-1 lg:grid-cols-4 ">
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                EKONOMI
                            </h1>
                            <div className='mb-3 text-sm'>
                                <a href='#'>APBN</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Pajak</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Fiskal/Moneter</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Ekonomi Global</a>
                            </div>
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                PASAR
                            </h1>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Portfolio</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Korporasi</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Komoditas</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Nilai Tukar</a>
                            </div>
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                DATA & ANALISIS
                            </h1>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Manufaktur</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Rintisan</a>
                            </div>
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                LAINNYA
                            </h1>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Varia</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Rileks</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Opini</a>
                            </div>
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                ENTREPRENEURSHIP
                            </h1>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Peluang Bisnis</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Tips Bisnis</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Manajemen</a>
                            </div>
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                FINANSIAL
                            </h1>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Syariah</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Asuransi</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Perbankan</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Pembiayaan</a>
                            </div>
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                INDUSTRI
                            </h1>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Manufaktur</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Rintisan</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Niaga dan Jasa</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Teknologi / IT</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Energi</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Infrastruktur</a>
                            </div>
                            <div className='mb-3 text-sm'>
                                <a href='#'>Properti</a>
                            </div>
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                LAINNYA
                            </h1>
                            <div className=" flex flex-wrap gap-2">
                                <div className="w-1/3">
                                    <a href='#'>
                                        <img className="w-full" src="/images/gplay.png" />
                                    </a>
                                </div>
                                <div className="w-1/3">
                                    <a href='#'>
                                        <img className="w-full" src="/images/appstr.png" />
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
    )
}
