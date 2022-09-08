import './SideBar.css'

function SideBarOption({icon = 'home'}) {
	
	return <button className="sidebar-option">
		<i className={`fa fa-${icon} fa-lg`}></i>
		<h2>For You</h2>
	</button>
}
export default function SideBar() {
	
	return <aside className="sidebar">
		<SideBarOption icon={'house'} />
		<SideBarOption icon={'user'} />
		<SideBarOption icon={'video'} />
	
	</aside>
}