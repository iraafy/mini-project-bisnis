import React, { useEffect, useState } from "react"; // import state
import Image from "next/image";
import axios from "axios";

export default function Artikel() {
    const [content, setContent] = useState([]);
	useEffect(() => {
		getContents()
	}, [])

	const getContents = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?recent=1')
			.then((res) => {
				setContent(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    return (
    <>
        <div className="container py-6 mx-auto w-full lg:w-5/6 p-5">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-3/5">
                    <div className="container">
                        {content?.map((cont) => {
                            return (
                                <>            
                                    <h1 className="text-blue-700 font-bold text-xl">
                                        {cont.name_category}
                                    </h1>
                                    <h1 className="pt-2 font-bold text-2xl">
                                        {cont.title}
                                    </h1>
                                    <p className="pt-6 text-md">
                                        {cont.summary}
                                    </p>
                                    <p className="text-sm pt-4 pb-4">
                                        {cont.created_at} | {cont.author}
                                    </p>
                                </>
                            )
                        })}
                    </div>            
                </div>
                <div className="w-full lg:w-2/5">
                    <div className="container ">
                        <Image width={'500'} height={'350'} src="/images/i-pict-22.png" alt="Foto 22"/>
                    </div>            
                </div>
            </div>
            <div className="border-b-2 border-black dark:border-white pt-10"/>
        </div>
    </>
    )
  }  