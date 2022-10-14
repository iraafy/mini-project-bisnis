import Berita from "../components/Berita"
import Footer from "../components/Footer"
import Foto from "../components/foto"
import Infografis from "../components/Infografis"

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-5 lg:px-20">
        < Foto/>
        <h2 className="text-blue-700 pt-8 font-bold text-2xl">
          INFOGRAFIS
        </h2>
        < Infografis/>
        <h2 className="text-blue-700 pt-8 font-bold text-2xl">
          BERITA LAINNYA
        </h2>
        < Berita/>
        <div className="container mx-auto w-full lg:w-5/6">
          <div className="w-full border-b-4 border-black mb-2"/>
          <div className="w-full border-b-2 border-black"/>
          < Footer/>
        </div>
      </div>
      <div className="bg-blue-900">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="mx-20 flex flex-wrap">
            <div className="w-1/2 text-white text-xs p-3">
              <p className="text-white text-xs">
                © Copyright 2022 - Bisnis Indonesia. All rights reserved.
              </p>
            </div>
            <div className="w-1/2 text-white text-xs p-3 text-right">
                <a href="#"> Privacy Policy </a> &nbsp;<b>|</b>&nbsp;
                <a href="#"> Code of Conduct </a> &nbsp;<b>|</b>&nbsp;
                <a href="#"> About Us </a> &nbsp;<b>|</b>&nbsp;
                <a href="#"> Contact Us </a> &nbsp;<b>|</b>&nbsp;
                <a href="#"> Advertise with Us </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
