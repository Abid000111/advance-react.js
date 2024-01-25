// // Two way binding

// "use client";
// import React, { useState } from "react";

// const page = () => {
// 	const [userName, setuserName] = useState("");
// 	return (
// 		<>
// 			<div>
// 				<form className="m-5">
// 					<p className="inline-block">Enter user name:</p>
// 					<input className="pl-2 ml-2 text-black" placeholder="user name" value={userName} onChange={(e) => {
// 						setuserName(e.target.value)
// 					}}></input>
// 				</form>
// 			</div>
// 		</>
// 	);
// };

// export default page;








// // API call and advance routing

// "use client";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const page = () => {
// 	const [users, setusers] = useState([]);

// 	const getUsers = async () => {
// 		const { data } = await axios.get(
// 			"https://jsonplaceholder.typicode.com/users"
// 		);
// 		setusers(data);
// 		console.log(data[0].address.street);
// 	};

// 	useEffect(() => {
// 		getUsers();
// 	}, []);

// 	return (
// 		<>
// 			<div>
// 				<button
// 					onClick={() => {
// 						getUsers();
// 					}}
// 					className="bg-red-600 font-bold text-[1.5vw] h-[3vw] w-[8vw] rounded-[2vw] m-[5vw]"
// 				>
// 					Get data
// 				</button>
// 				<div className="p-[1vw] min-h-[5vw] w-[30vw] bg-slate-300 text-black ml-[5vw]">
// 					<ul>
// 						{users.map((e) => {
// 							return (
// 								<li>
// 									{e.username} --- <a href={`/${e.id}`}>Explore</a>
// 								</li>
// 							);
// 						})}
// 					</ul>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default page;


