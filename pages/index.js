import Header from "../components/Header"
import Isi from "../components/Isi"
import Artikel from "../components/Artikel"
import Ekonomi from "../components/Ekonomi"
import Berita from "../components/Berita"
import Footer from "../components/Footer"
import Foto from "../components/foto"
import Infografis from "../components/Infografis"
import Terpopuler from "../components/Terpopuler"
import Industri from "../components/Industri"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  useEffect(()=> setMounted(true), [])
  if(!mounted) return null
  return (
    <>
      <div className="bg-blue-900 h-20">
        <div className="container lg:px-24">
          <div className="mx-20 flex flex-wrap">
            <div className="text-white text-2xl p-3 text-right">
              <div className="relative inline-block w-10 mr-2 align-middle select-noneml-20 mt-5 my-5">
                <input type="checkbox" className="checked:bg-white outline-none focus:outline-none right-4 
                checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full 
                bg-gray-500 border-4 appearance-none cursor-pointer"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                />
                <label className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">

                </label>
                </div>
                {theme === 'light' ? 'Light' : 'Dark'} Mode
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div className="container mx-auto w-full lg:w-5/6">
        <div className="border-b-2 border-black dark:border-white"/>
      </div>
      <div className="mx-20 flex flex-wrap justify-center py-16">
        <img src="images/iklan1.png" alt="iklan" width={'1050px'}/>
      </div>
      <Isi />
      <div className="container pt-7 mx-auto w-full lg:w-5/6">
        <div className="border-b-2 border-blue-900"/>
        <div className="border-b-8 pt-3 border-blue-900"/>
      </div>
      <h1 className="container mx-auto lg:w-5/6 text-blue-700 pt-8 font-bold text-3xl">
        ARTIKEL TERBARU
      </h1>
      <div className="container pt-7 mx-auto w-full lg:w-5/6">
        <div className="border-b-4 border-gray-500 dark:border-white"/>
      </div>
      <Artikel />
      <Ekonomi />
      <div className="container mx-auto px-5 lg:px-20">
        < Terpopuler/>
        < Industri/>
        <h2 className="text-blue-700 pt-8 font-bold text-2xl">
          INDUSTRI
        </h2>
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
