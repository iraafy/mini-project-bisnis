import React, { useEffect, useState } from "react"; // import state
import Image from "next/image";
import axios from "axios";

export default function Terpopuler(){
    const [content, setContent] = useState([]);

	useEffect(() => {
		getCategories()
	}, [])

	const getCategories = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?length=1')
			.then((res) => {
				setContent(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}

    return(
        <div className="m-0 px-2 py-2 p-5">
            <div className="flex flex-wrap">
                <div className="w-1/3 pl-0 lg:pl-7">
                    <div className="container">
                        <Image width={'500'} height={'150'} src="/images/j-pict-1.jpg" alt="Foto 1"/>
                    </div>
                </div>
                <div className="w-2/3">
                    <div className="container pl-5">
                        <h2 className="text-blue-700 font-bold text-xl">
                            TERPOPULER
                        </h2>
                        <div className="flex flex-wrap pt-7">
                            <div className="w-20">
                                <div className="container">
                                    <h1 className="text-gray-400 font-bold pl-2 text-xl mr-0 pr-0 lg:text-2xl">
                                        03.
                                    </h1>
                                </div>
                            </div>
                            <div className="w-80">
                                <div className="container text-left">
                                {content?.map((cont) => {
                                    return (
                                        <>
                                            <h2 className=" font-bold pr-2 text-md lg:text-xl line-clamp-2">
                                                {cont.summary}
                                            </h2>
                                            <p className="text-sm pt-4">
                                                {cont.created_at} | {cont.author}
                                            </p>
                                        </>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        
    )
}