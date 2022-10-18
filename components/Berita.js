import React, { useEffect, useState } from "react"; // import state
import Image from "next/image";
import axios from "axios";

export default function Berita() {
	const [pasar, setPasar] = useState([]);
	useEffect(() => {
		getPasar()
	}, [])

	const getPasar = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Pasar&length=3')
			.then((res) => {
				setPasar(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
	const [finansial, setFinansial] = useState([]);
	useEffect(() => {
		getFinansial()
	}, [])

	const getFinansial = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Finansial&length=3')
			.then((res) => {
				setFinansial(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
	const [ekonomi, setEkonomi] = useState([]);
	useEffect(() => {
		getEkonomi()
	}, [])

	const getEkonomi = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Ekonomi&length=3')
			.then((res) => {
				setEkonomi(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
	const [industri, setIndustri] = useState([]);
	useEffect(() => {
		getIndustri()
	}, [])

	const getIndustri = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Industri&length=3')
			.then((res) => {
				setIndustri(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
	const [varia, setVaria] = useState([]);
	useEffect(() => {
		getVaria()
	}, [])

	const getVaria = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Varia&length=3')
			.then((res) => {
				setVaria(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
	const [rileks, setRileks] = useState([]);
	useEffect(() => {
		getRileks()
	}, [])

	const getRileks = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Rileks&length=3')
			.then((res) => {
				setRileks(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
	const [opini, setOpini] = useState([]);
	useEffect(() => {
		getOpini()
	}, [])

	const getOpini = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Opini&length=3')
			.then((res) => {
				setOpini(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}
	const [entrepreneurship, setEntrpreneurship] = useState([]);
	useEffect(() => {
		getEntrepreneurship()
	}, [])

	const getEntrepreneurship = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/contents?category=Entrpreneurship&length=3')
			.then((res) => {
				setEntrpreneurship(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}

	return (
		<>
			<div className="p-0  m-0px-8 py-8 grid sm:grid-cols-1 lg:grid-cols-4 gap-3">
				<div className="container">
					<h1 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
						Pasar
					</h1>
					<Image width={'500'} height={'350'} className="w-full" src="/images/i-pict-8.png" alt="Foto 8"/>
					{pasar?.map((contPasar) => {
						return (
							<>
								<p className="font-medium text-md pt-3 pb-3">
									{contPasar.title}
								</p>
								< hr/>
							</>
						)
					})}
				</div>
				<div className="container">
					<h1 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
						Finansial
					</h1>
					<Image width={'500'} height={'350'} className="w-full" src="/images/i-pict-8.png" alt="Foto 8"/>
					{finansial?.map((contFinansial) => {
						return (
							<>
								<p className="font-medium text-md pt-3 pb-3">
									{contFinansial.title}
								</p>
								< hr/>
							</>
						)
					})}
				</div>
				<div className="container">
					<h1 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
						Ekonomi
					</h1>
					<Image width={'500'} height={'350'} className="w-full" src="/images/i-pict-8.png" alt="Foto 8"/>
					{ekonomi?.map((contEkonomi) => {
						return (
							<>
								<p className="font-medium text-md pt-3 pb-3">
									{contEkonomi.title}
								</p>
								< hr/>
							</>
						)
					})}
				</div>
				<div className="container">
					<h1 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
						Industri
					</h1>
					<Image width={'500'} height={'350'} className="w-full" src="/images/i-pict-8.png" alt="Foto 8"/>
					{industri?.map((contIndustri) => {
						return (
							<>
								<p className="font-medium text-md pt-3 pb-3">
									{contIndustri.title}
								</p>
								< hr/>
							</>
						)
					})}
				</div>
				<div className="container">
					<h1 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
						Rileks
					</h1>
					<Image width={'500'} height={'350'} className="w-full" src="/images/i-pict-8.png" alt="Foto 8"/>
					{rileks?.map((contRileks) => {
						return (
							<>
								<p className="font-medium text-md pt-3 pb-3">
									{contRileks.title}
								</p>
								< hr/>
							</>
						)
					})}
				</div>
				<div className="container">
					<h1 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
						Varia
					</h1>
					<Image width={'500'} height={'350'} className="w-full" src="/images/i-pict-8.png" alt="Foto 8"/>
					{varia?.map((contVaria) => {
						return (
							<>
								<p className="font-medium text-md pt-3 pb-3">
									{contVaria.title}
								</p>
								< hr/>
							</>
						)
					})}
				</div>
				<div className="container">
					<h1 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
						Opini
					</h1>
					<Image width={'500'} height={'350'} className="w-full" src="/images/i-pict-8.png" alt="Foto 8"/>
					{opini?.map((contOpini) => {
						return (
							<>
								<p className="font-medium text-md pt-3 pb-3">
									{contOpini.title}
								</p>
								< hr/>
							</>
						)
					})}
				</div>
				<div className="container">
					<h1 className="text-blue-700 font-bold pt-2 pb-2 text-lg">
						Entrepreneurship
					</h1>
					<Image width={'500'} height={'350'} className="w-full" src="/images/i-pict-8.png" alt="Foto 8"/>
					{entrepreneurship?.map((contEntrepreneurship) => {
						return (
							<>
								<p className="font-medium text-md pt-3 pb-3">
									{contEntrepreneurship.title}
								</p>
								< hr/>
							</>
						)
					})}
				</div>
			</div>   
		</>
	)
}
