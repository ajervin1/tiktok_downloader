import './App.css';
import Header from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TrendingPage from "./pages/TrendingPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import UserPostsPage from "./pages/UserPostsPage";




function App() {
	
	return <main className="app">
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path="/" exact={true} element={<TrendingPage />} />
				<Route path="/search" exact={true} element={ <SearchResultsPage /> } />
				<Route path="/users/:userId" exact={true} element={ <UserPostsPage /> } />
			</Routes>
		</BrowserRouter>


	
	</main>
}

export default App;
