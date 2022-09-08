
import './App.css';
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import PostItem from "./components/PostItem/PostItem";
import { author, post, stats, userStats } from "./static_data";
import UserDetails from "./components/UserDetails/UserDetails";
import RecommendedItem from "./components/RecommendedList/RecommendedItem";
import SideBar from "./components/SideBar/SideBar";

const axios = require("axios")

const cookie = "ttwid=1%7CU4u5m05uYYKM4GUVcRE11iz6reT0IS76d0uM3ujre_k%7C1661944775%7C120a2dba4d7e29e7e3c93bacdcbafe7d41136d593f202daacfac07aef57b96b7; _abck=ACE9AE2E3DBDF6EE4BBA0A800FB7F01A~-1~YAAQjnLBF04sQs2CAQAAbEOc8wh36Z7mJoroV8pH4DCuN2zFnyd/a0f1f8uBxEjgNt3o92us06T0HCk8BQIsH17JVXpF7F8Gm49F/PWYsLxZHaNNZPVkSDPbst6vluKWI9mHcSXoYK77lDkkQ1T3YghtFLxNy9v4APz3AYkJllYBVVkKzzaquz5JZ/1wWT44dhqZw8vBQKsEA84KAqMqnDyusQunOCrYFkuEnQO2UXH8GKXbewPUeQaXzZ9Il4gQoyFt3ANvXHmfz61k2ZHyMp0n39d6Rvc2AbS5dmAzrEpJzj/RL/wM425Z1r2MkUQJ4GUV6R7LoQFEo9FRhAHKO+7hlhsTUIUoBYsz90j4ixBA6E1sPaWniU/uaJ/pru/AzW0tHUxPPZO4cqo=~-1~-1~-1;"

async  function getTrending(){
	const url = "https://corsanywhere.herokuapp.com/https://us.tiktok.com/api/user/detail/";
	try {
		const  res = await axios.get(url, {
			withCredentials: true,
			credentials: 'same-origin',
			headers: {
			
				"cookie": cookie,
				
			},
			params: {
				aid: 1988,
				count: 5,
				uniqueId: "therock"
			}
		})
		console.log(res);
	}catch ( e ){
		console.log(e)
	}
	
}


function App() {
	// Main data app works on
	const [ gifs, setGifs ] = useState([])
	// For opening and closing sidebar
	const [ open, setOpen ] = useState(false)
	// For Search Form
	const [ term, setTerm ] = useState('')
	async function init(  ) {
		
		
		// const {data} = await axios.get("http://localhost:8000/trending")
		// setGifs(data.itemList);
	}
	useEffect(() => {
	
	}, [])
	return <main className="app">
		<Header />
		<main className="main-container">
			<SideBar />
			<div className="content content-container">
				<UserDetails user={author} stats={userStats} />
			</div>
		</main>
	
	</main>
}

export default App;
