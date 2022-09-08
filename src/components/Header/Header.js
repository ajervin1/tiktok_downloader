import './Header.css'

import SearchForm from "../SearchForm/SearchForm";
import LoginButton from "../AuthButtons/LoginButton";
export default function Header() {
	
	return <div className="header-container">
		<header className="container header">
				<div className="header-left">
					<div className="logo-container">
						<img src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-common-sg/mtact/static/images/logo_144c91a.png" alt=""/>
					</div>
					<h3>TikTok</h3>
				</div>
				<div className="header-middle">
					<SearchForm />
				</div>
				<div className="header-right">
					<LoginButton />
				</div>
		</header>
	
	</div>
}