import React, { useEffect, useState } from "react"; // import state
import Image from "next/image";
import axios from "axios";

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
	const current = new Date();
	const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
	const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
	const d = `${current.getDay()}`;
	const day = dayNames[d];
	const date = `${current.getDate()}`;
	const m = `${current.getMonth()}`;
	const month = monthNames[m];
	const year = `${current.getFullYear()}`;
	const dates = `${day} - ${date} ${month} ${year}`;

	const [category, setCategory] = useState([]);

	useEffect(() => {
		getCategories()
	}, [])

	const getCategories = async () => {
		await axios.get('https://bisnis-indo-api.herokuapp.com/categories')
			.then((res) => {
				setCategory(res.data.data)
			})
			.catch((err) => {
				console.log(err.data);
			})
	}

	return (
		<>
			<div className="flex items-center justify-between mx-0 lg:mx-20 px-0 lg:px-5">
				<nav className="w-1/6 lg:w-1/3">
					<div className="flex ">
						<div className="w-1/5">
							<section className="MOBILE-MENU">
								<div className="HAMBURGER-ICON pt-4 pl-4 flex" style={{ fontSize: '30px' }} onClick={() => setIsNavOpen((prev) => !prev)}>
									<iconify-icon inline icon="ci:menu-duo" />&emsp;
								</div>
								<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
									<div className="container w-full flex flex-wrap p-8 text-black">
										<div className="w-2/3">
											<div className="top-0 right-0">
												<Image src='../images/logo.png' width={220} height={60} alt="logo" />
											</div>
										</div>
										<div className="w-1/3">
											<div className="CROSS-ICON top-0 right-0 float-right pt-2" onClick={() => setIsNavOpen(false)}>
												<iconify-icon inline icon="akar-icons:cross"></iconify-icon>
											</div>
										</div>
									</div>
									<div className="container mx-auto w-full text-black">
										<div className="text-sm px-8">
											{category?.map((cat) => {
												return (
													<>
														<div className="w-full p-2">
															<p className="text-base">{cat.name_category}</p>
														</div>
													</>
												)
											})}
											<div className="lg:hidden inline text-black">
												<div className="container">
													<div className="w-full">
														<div className="container pt-2">
															<input type="text" id="first_name" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg w-full py-3 pl-2" placeholder="Search" required />
														</div>
													</div>
													<div className="w-full">
														<div className="container pt-2 pb-5">
															<button className="border-2 w-full border-blue-700 p-2 pl-3 pr-3 rounded text-sm">
																Berlangganan
															</button>
														</div>
													</div>
													<div className="w-full">
														<div className="container text-center">
															<a>
																<b>
																	Login
																</b>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
						<div className="w-4/5 hidden lg:inline">
							<div className="container p-5 text-sm">
								{dates}
							</div>
						</div>
					</div>
				</nav>
				<div className="w-5/6 lg:w-1/3 mx-auto flex justify-start lg:justify-center">
					<a href="#">
						<Image width={'220'} height={'50'} src="../images/logo.png" alt="logo" />
					</a>
				</div>
				<div className="hidden lg:inline w-1/3">
					<div className="container flex">
						<div className="w-2/6">
							<div className="container pt-2 flex justify-end">
								<iconify-icon inline icon="bytesize:search" style={{ fontSize: '20px' }} />&emsp;
							</div>
						</div>
						<div className="w-3/6">
							<div className="container flex justify-center">
								<button className="border-2 border-blue-700 p-2 pl-3 pr-3 rounded text-sm">
									Berlangganan
								</button>
							</div>
						</div>
						<div className="w-1/6">
							<div className="container pr-5 pt-2 text-right">
								<a>
									<b>
										Login
									</b>
								</a>
							</div>
						</div>
					</div>
				</div>
				<style>{`
		.hideMenuNav {
			display: none;
		}
		.showMenuNav {
			display: block;
			position: absolute;
			border-right: 1px solid grey;
			border-bottom: 1px solid grey;
			width: 30%;
			height: 100vh;
			top: 0;
			left: 0;
			background: white;
			z-index: 10;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		
		@media (max-width: 768px) {
			.showMenuNav {
				width: 80%;
			}
		}
		`}</style>
			</div>
			<div className="container mx-auto w-full lg:w-5/6">
				<div className="bg-black text-white dark:bg-gray-500 dark:text-white text-md">
					<marquee>Lorem ipsum dolor sit amet</marquee>
				</div>
				<div className="container mx-auto py-3 hidden lg:inline">
					<div className="flex flex-wrap justify-between text-sm px-8">
						{category?.map((cat) => {
							return (
								<>
									<div className="w-full lg:w-fit">
										<p className="font-bold text-base">{cat.name_category}</p>
									</div>
								</>
							)
						})}
					</div>
				</div>
			</div>
		</>
	);
}