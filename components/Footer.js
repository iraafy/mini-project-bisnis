import React, { useEffect, useState } from "react"; // import state
import Image from "next/image";
import axios from "axios";

export default function Footer() {
    const [category1, setCategory1] = useState([]);

	useEffect(() => {
		getCategories1()
	}, [])

	const getCategories1 = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/categories/1')
			.then((res) => {
				setCategory1(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    const [category2, setCategory2] = useState([]);

	useEffect(() => {
		getCategories2()
	}, [])

	const getCategories2 = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/categories/2')
			.then((res) => {
				setCategory2(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    const [category3, setCategory3] = useState([]);

	useEffect(() => {
		getCategories3()
	}, [])

	const getCategories3 = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/categories/3')
			.then((res) => {
				setCategory3(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    const [category4, setCategory4] = useState([]);

	useEffect(() => {
		getCategories4()
	}, [])

	const getCategories4 = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/categories/4')
			.then((res) => {
				setCategory4(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    const [category5, setCategory5] = useState([]);

	useEffect(() => {
		getCategories5()
	}, [])

	const getCategories5 = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/categories/5')
			.then((res) => {
				setCategory5(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    const [category6, setCategory6] = useState([]);

	useEffect(() => {
		getCategories6()
	}, [])

	const getCategories6 = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/categories/6')
			.then((res) => {
				setCategory6(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    const [category7, setCategory7] = useState([]);

	useEffect(() => {
		getCategories7()
	}, [])

	const getCategories7 = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/categories/7')
			.then((res) => {
				setCategory7(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
    const [category, setCategory] = useState([]);

	useEffect(() => {
		getCategories()
	}, [])

	const getCategories = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/subcategories?id=1')
			.then((res) => {
				setCategory(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}

    

	return (
    <div className="container mx-auto w-full">
        <div className=" flex flex-wrap">
            <div className="w-1/2 bg-white">
                <div className="container py-5">
                    <Image width={'150'} height={'30'} src="images/logo.png" alt="logo"/>
                </div>
            </div>
            <div className="w-1/2 bg-white">
                <div className="container py-5 text-right">
                    <iconify-icon inline icon="entypo-social:facebook-with-circle" style={{color: 'black', fontSize: '25px', marginRight: '15px'}}/>
                    <iconify-icon inline icon="entypo-social:linkedin-with-circle" style={{color: 'black', fontSize: '25px', marginRight: '15px'}}/>
                    <iconify-icon inline icon="entypo-social:instagram-with-circle" style={{color: 'black', fontSize: '25px', marginRight: '15px'}}/>
                    <iconify-icon inline icon="entypo-social:youtube-with-circle" style={{color: 'black', fontSize: '25px'}}/>  
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

                    <div className="py-4 grid grid-cols-2 lg:grid-cols-4 ">
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                Pasar
                            </h1>
                            {category1?.map((cat1) => {
                                return (
                                    <>
                                        <div className='mb-3 text-sm'>
                                            <a href='#'>{cat1.name_subcategory}</a>
                                        </div>
                                    </>
                                )
                            })}
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                Finansial
                            </h1>
                            {category2?.map((cat2) => {
                                return (
                                    <>
                                        <div className='mb-3 text-sm'>
                                            <a href='#'>{cat2.name_subcategory}</a>
                                        </div>
                                    </>
                                )
                            })}
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                Data & Analisis
                            </h1>
                            {category3?.map((cat3) => {
                                return (
                                    <>
                                        <div className='mb-3 text-sm'>
                                            <a href='#'>{cat3.name_subcategory}</a>
                                        </div>
                                    </>
                                )
                            })}
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                Ekonomi
                            </h1>
                            {category4?.map((cat4) => {
                                return (
                                    <>
                                        <div className='mb-4 text-sm'>
                                            <a href='#'>{cat4.name_subcategory}</a>
                                        </div>
                                    </>
                                )
                            })}
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                Industri
                            </h1>
                            {category5?.map((cat5) => {
                                return (
                                    <>
                                        <div className='mb-5 text-sm'>
                                            <a href='#'>{cat5.name_subcategory}</a>
                                        </div>
                                    </>
                                )
                            })}
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                Entrpreneurship
                            </h1>
                            {category6?.map((cat6) => {
                                return (
                                    <>
                                        <div className='mb-6 text-sm'>
                                            <a href='#'>{cat6.name_subcategory}</a>
                                        </div>
                                    </>
                                )
                            })}
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                Varia
                            </h1>
                            {category7?.map((cat7) => {
                                return (
                                    <>
                                        <div className='mb-7 text-sm'>
                                            <a href='#'>{cat7.name_subcategory}</a>
                                        </div>
                                    </>
                                )
                            })}
                        </div> 
                        <div className="container">
                            <h1 className="text-blue-700 font-bold pt-4 pb-4 text-md">
                                LAINNYA
                            </h1>
                            <div className=" flex flex-wrap gap-2">
                                <div className="w-1/3">
                                    <a href='#'>
                                        <Image width={'150'} height={'40'} className="w-full" src="/images/gplay.png" alt="gplay"/>
                                    </a>
                                </div>
                                <div className="w-1/3">
                                    <a href='#'>
                                        <Image width={'150'} height={'40'} className="w-full" src="/images/appstr.png" alt="appstr" />
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
