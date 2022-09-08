import Avatar from "../Avatar/Avatar";
import './AccountItem.css'
import { Link } from "react-router-dom";

export function AccountItem( {account} ) {
	const {user_info} = account
	const {avatar_thumb} = user_info
	return <article className={'account-item'}>
		<Avatar  image={avatar_thumb.url_list[0]} size={100} />
		<div className={'right'}>
			<h3 >
				<Link to={`/users/${user_info.sec_uid}`} >
					{user_info.nickname}
				</Link>
			</h3>
			<div>
				<h5 style={{opacity: 0.5, marginBottom: '2px'}} >{user_info.unique_id}</h5>
				<div className="followers" style={{marginBottom: "2px"}}>
					<strong style={{marginRight: '10px'}}>{user_info.follower_count}</strong>
					<span style={{opacity: 0.5}}>Followers</span>
				</div>
			</div>
			<p>{user_info.signature}</p>
		
		
		</div>
	</article>
}