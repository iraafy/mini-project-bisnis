import React, { useEffect, useState } from "react"; // import state
import Image from "next/image";
import axios from "axios";

export default function Ekonomi() {
    const [contentEkonomiLeft, setContentEkonomiLeft] = useState([]);
	useEffect(() => {
		getContentsEkonomiLeft()
	}, [])

	const getContentsEkonomiLeft = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Ekonomi&length=1&likes=1')
			.then((res) => {
				setContentEkonomiLeft(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    const [contentEkonomiRight, setContentEkonomiRight] = useState([]);
	useEffect(() => {
		getContentsEkonomiRight()
	}, [])
    
	const getContentsEkonomiRight = async () => {
        await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Ekonomi&length=2')
        .then((res) => {
            setContentEkonomiRight(res.data.data)
        })
        .catch((err) => {
            console.log(err.data);
        })
	}
    const [contentMarket, setContentMarket] = useState([]);
    useEffect(() => {
        getContentsMarket()
    }, [])
	const getContentsMarket = async () => {
        await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Pasar&length=4')
			.then((res) => {
				setContentMarket(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    return (
    <>
        <div className="container mx-auto w-full lg:w-5/6">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 container  p-5 pr-0 lg:pr-10 border-r-0 lg:border-r-2  border-blue-900 border-dotted">
                    {contentEkonomiLeft?.map((contLeft) => {
                        return (
                            <>
                                <h1 className="text-blue-700 font-bold text-xl pt-2">
                                    {contLeft.name_category}
                                </h1>
                                <h1 className="pt-2 font-bold text-lg">
                                    {contLeft.title}
                                </h1>
                                <p className="pt-4 text-base">
                                    {contLeft.summary}
                                </p>
                                <p className="text-sm pt-4">
                                    {contLeft.created_at} | {contLeft.author}
                                </p>
                            </>
                        )
                    })}
                </div>
                {contentEkonomiRight?.map((contMarket) => {
                    return (
                        <>
                            <div className="w-full lg:w-3/12 container p-5">
                                <h1 className="text-blue-700 font-bold text-xl pt-2">
                                    {contMarket.name_category}
                                </h1>
                                <h1 className="pt-2 font-bold text-lg">
                                    {contMarket.title}
                                </h1>
                                <p className="pt-4 text-base line-clamp-3">
                                    {contMarket.summary}
                                </p>
                                <p className="text-sm pt-4">
                                    {contMarket.created_at} | {contMarket.author}
                                </p>
                            </div>
                        </>
                    )
                })}
            </div>

            <div className="grid lg:grid-cols-4 gap-4 py-10 p-5">
                {contentMarket?.map((contRight) => {
                    return (
                        <>
                            <div className="container">
                                <Image width={'500'} height={'500'} src="/images/i-pict-23.png" alt="Foto 23"/>
                                <h1 className="text-blue-700 font-bold text-lg pt-4">
                                    {contRight.name_category}
                                </h1>
                                <h1 className="pt-2 font-bold text-lg">
                                    {contRight.title}
                                </h1>
                                <p className="pt-4 text-sm">
                                    {contRight.summary}
                                </p>
                                <p className="text-sm pt-3 pb-4">
                                    {contRight.created_at} | {contRight.author}
                                </p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    </>
    )
  }
  