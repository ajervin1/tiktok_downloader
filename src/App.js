import './App.css';
import Header from "./components/Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import TrendingPage from "./pages/TrendingPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import UserPostsPage from "./pages/UserPostsPage";




function App() {
	return <main className="app">
		<Header />
		<Routes>
			<Route path="/" element={<TrendingPage />} />
			<Route path="/search" element={ <SearchResultsPage /> } />
			<Route path="/users/:userId" element={ <UserPostsPage /> } />
		</Routes>

	
	</main>
}

export default App;
