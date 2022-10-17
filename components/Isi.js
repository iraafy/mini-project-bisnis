import React, { useEffect, useState } from "react"; // import state
import Image from "next/image"
import axios from "axios";

export default function Isi() {
    
    const [content, setContent] = useState([]);
	useEffect(() => {
		getContents()
	}, [])

	const getContents = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?length=1')
			.then((res) => {
				setContent(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    
    const [listContent, setListContent] = useState([]);
	useEffect(() => {
		getListContents()
	}, [])

	const getListContents = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?likes=3')
			.then((res) => {
				setListContent(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    return (
    <>
        <div className="container mx-auto w-full lg:w-5/6 p-5 pb-0">
            <div className="flex flex-wrap pb-4">
                <div className="container w-full lg:w-1/2 pr-6">
                    {content?.map((cont) => {
                        return (
                            <>
                                <h1 className="text-blue-700 font-bold text-xl">
                                    {cont.name_category}
                                </h1>
                                <h2 className="pt-2 font-bold text-3xl">
                                    {cont.title}
                                </h2>
                                <p className="pt-5 text-base">
                                    {cont.summary}
                                </p>
                                <p className="py-5 text-sm font-semibold">
                                    {cont.created_at} | {cont.author}
                                </p>
                            </>
                        )
                    })}
                </div>
                <div className="container w-full lg:w-1/2 pb-10">
                    <Image width={'500'} height={'350'} src="/images/i-pict-16.png" alt="Foto 16"/>
                </div>
                <div className="flex flex-wrap">
                    {listContent?.map((listCont) => {
                        return (
                            <>
                                <div className="container lg:w-1/3 w-full">
                                    <div className="flex flex-wrap">
                                        <div className="w-1/3 p-2">
                                            <Image width={'150'} height={'150'} src="/images/i-pict-17.png" alt="Foto 17"/>
                                        </div>
                                        <div className="w-2/3 p-2">
                                            <h2 className="text-blue-700 font-bold">
                                                {listCont.name_category}
                                            </h2> 
                                            <p className="font-bold text-sm pt-2 line-clamp-2">
                                                {listCont.summary}
                                            </p>
                                            <p className="text-xs pt-2">
                                                {listCont.author}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </> 
                        )
                    })}
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
  