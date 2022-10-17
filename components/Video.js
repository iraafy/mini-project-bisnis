import Image from "next/image"
import React, { useEffect, useState } from "react"; // import state
import axios from "axios";

export default function Video(){
    const [content, setContent] = useState([]);
	useEffect(() => {
		getContents()
	}, [])

	const getContents = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Varia&length=4')
			.then((res) => {
				setContent(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    return (
        <div className="p-0  m-0px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-4 gap-5">
            {content?.map((cont) => {
                return (
                    <>      
                         <div className="container">
                            <Image width={'500'} height={'500'} className="w-full" src="/images/j-pict-9.jpeg" alt="Foto 9"/>
                            <h1 className="text-blue-700 font-bold pt-4 text-xl">
                                {cont.name_category}
                            </h1>
                            <h2 className="font-bold text-md pt-2">
                                {cont.title}
                            </h2>
                            <p className="text-sm pt-2">
                                {cont.created_at} | {cont.author}
                            </p>
                        </div>    
                    </>
                )
            })}
        </div>
    )
}