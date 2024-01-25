"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
	// console.log(params.id); // see the terminal for output
	const { id } = params;
	const [users, setusers] = useState([]);
	const getUsers = async () => {
		const {data} = await axios.get(
			"https://jsonplaceholder.typicode.com/users/"+id
		);
		setusers(data);
		console.log(data);
	};
	
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<>
			<div className="p-20 leading-10">{JSON.stringify(users)}</div>
		</>
	);
};

export default page;

