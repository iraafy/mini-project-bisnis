import React, { useEffect, useState } from "react"; // import state
import axios from "axios";

export default function Audio(){
    const [content, setContent] = useState([]);
	useEffect(() => {
		getContents()
	}, [])

	const getContents = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?recent=3')
			.then((res) => {
				setContent(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    return (
        <div className="p-0  m-0px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {content?.map((cont) => {
                return (
                    <>      
                        <div className="container bg-blue-200 px-5 py-3 w-auto">
                            <h2 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
                                {cont.name_category}
                            </h2>
                            <h1 className="text-black font-bold pt-2 pb-2 text-xl">
                                {cont.title}
                            </h1><br></br><br></br>
                            <p className="text-black text-sm py-3">
                                {cont.created_at} | {cont.author}
                            </p>
                        </div>      
                    </>
                )
            })}
        </div>
    )
}