import React, { useEffect, useState } from "react"; // import state
import Image from "next/image";
import axios from "axios";

export default function Industri(){
    const [industri, setIndustri] = useState([]);
    useEffect(() => {
        getIndustri()
    }, [])

    const getIndustri = async () => {
        await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Industri&length=1')
            .then((res) => {
                setIndustri(res.data.data)
            })
            .catch((err) => {
                console.log(err.data);
            })
    }
    const [industri2, setIndustri2] = useState([]);
    useEffect(() => {
        getIndustri2()
    }, [])

    const getIndustri2 = async () => {
        await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Industri&length=1')
            .then((res) => {
                setIndustri2(res.data.data)
            })
            .catch((err) => {
                console.log(err.data);
            })
    }
    const [industri3, setIndustri3] = useState([]);
    useEffect(() => {
        getIndustri3()
    }, [])

    const getIndustri3 = async () => {
        await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Industri&length=3')
            .then((res) => {
                setIndustri3(res.data.data)
            })
            .catch((err) => {
                console.log(err.data);
            })
    }
    return (
        <div className="p-0  m-0px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-3 gap-4 p-5">
            <div className="container">
                <Image width={'500'} height={'300'} className="h-50 w-100" src="/images/j-pict-3.jpg" alt="Foto 1"/>
                {industri?.map((contIndustri) => {
                    return (
                        <>
                            <h2 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
                                {contIndustri.name_category}
                            </h2>
                            <h1 className=" font-bold pt-2 pb-2 text-2xl">
                                {contIndustri.title}
                            </h1>
                            <p className="text-sm pt-2">
                                {contIndustri.created_at} | {contIndustri.author}
                            </p>
                        </>
                    )
                })}
            </div>
            <div className="text-center w-12/12 p-2 container pt-12 px-2 border-2 border-l-indigo-500 border-r-indigo-500 border-t-indigo-500">
                {industri?.map((contIndustri) => {
                    return (
                        <>
                            <h2 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
                                {contIndustri.name_category}
                            </h2>
                            <h1 className=" font-bold pt-2 pb-2 text-3xl">
                                {contIndustri.title}
                            </h1><br></br>
                            <p className="text-gray-400 text-m">
                                {contIndustri.summary}
                            </p><br></br>
                            <p className="text-sm pt-2">
                                {contIndustri.created_at} | {contIndustri.author}
                            </p>
                        </>
                    )
                })}
            </div>
            <div className="p-0 m-0 grid sm:grid-cols-1 lg:grid-cols-2 gap-3">
                {industri3?.map((contIndustri3) => {
                    return (
                        <>
                            <div className="container">
                                <Image width={'500'} height={'350'} className="w-small" src="/images/j-pict-4.jpg" alt="Foto 4"/>
                            </div>
                            <div className="container">
                                <h1 className="text-blue-500 font-bold pt-0 pb-1 text-lg">
                                    {contIndustri3.name_category}
                                </h1>            
                                <h2 className=" font-bold text-sm">
                                    {contIndustri3.title}
                                </h2>
                                <p className="text-sm pt-2">
                                    {contIndustri3.created_at} | {contIndustri3.author}
                                </p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
        
      )
}