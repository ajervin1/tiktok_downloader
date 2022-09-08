import './App.css';
import { useEffect, useState } from "react";
import PostItem from "./components/PostItem/PostItem";
import { post } from "./static_data";
import SideBar from "./components/SideBar/SideBar";
import PostModal from "./components/PostModal/PostModal";
import Header from "./components/Header/Header";

const axios = require("axios")

const cookie = "ttwid=1%7CU4u5m05uYYKM4GUVcRE11iz6reT0IS76d0uM3ujre_k%7C1661944775%7C120a2dba4d7e29e7e3c93bacdcbafe7d41136d593f202daacfac07aef57b96b7; _abck=ACE9AE2E3DBDF6EE4BBA0A800FB7F01A~-1~YAAQjnLBF04sQs2CAQAAbEOc8wh36Z7mJoroV8pH4DCuN2zFnyd/a0f1f8uBxEjgNt3o92us06T0HCk8BQIsH17JVXpF7F8Gm49F/PWYsLxZHaNNZPVkSDPbst6vluKWI9mHcSXoYK77lDkkQ1T3YghtFLxNy9v4APz3AYkJllYBVVkKzzaquz5JZ/1wWT44dhqZw8vBQKsEA84KAqMqnDyusQunOCrYFkuEnQO2UXH8GKXbewPUeQaXzZ9Il4gQoyFt3ANvXHmfz61k2ZHyMp0n39d6Rvc2AbS5dmAzrEpJzj/RL/wM425Z1r2MkUQJ4GUV6R7LoQFEo9FRhAHKO+7hlhsTUIUoBYsz90j4ixBA6E1sPaWniU/uaJ/pru/AzW0tHUxPPZO4cqo=~-1~-1~-1;"

async function getTrending() {
	const url = "https://corsanywhere.herokuapp.com/https://us.tiktok.com/api/user/detail/";
	try {
		const res = await axios.get(url, {
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
	} catch ( e ) {
		console.log(e)
	}
	
}


function App() {
	console.log("Im rendering")
	// Main data app works on
	const [ posts, setPosts ] = useState([])
	// For Search Form
	const [ term, setTerm ] = useState('')
	// SelectedPost
	const [ selectedPost, setSelectedPost ] = useState(null)
	// Modal State
	const [ modalOpen, setModalOpen ] = useState(true)
	function init() {
		setTimeout( () => {
			setPosts([post,post,post,post,post]);
		}, 5000)
	}
	
	useEffect(() => {
		init()
	}, [])
	let renderedList = '';
	if ( !posts.length ){
		return renderedList
	} else {
		renderedList = posts.map((post, index) => <PostItem key={index} post={post} setModalOpen={setModalOpen} setSelectedPost={setSelectedPost} />)
	}
	
	
	return <main className="app">
		<Header />
		<main className="main-container">
			<SideBar/>
			<div className="content content-container">
				<h1 style={ { marginBottom: '40px' } }>Trending Page</h1>
				{/* Post List */ }
				<section className="post-item-list">
					{renderedList}
				</section>
			
			</div>
		</main>
		{ modalOpen && selectedPost && <PostModal post={selectedPost} setModalOpen={setModalOpen} /> }
	
	</main>
}

export default App;
