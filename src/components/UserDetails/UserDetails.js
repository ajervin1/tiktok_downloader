import Avatar from "../Avatar/Avatar";
import './UserDetails.css'
export default function UserDetails({user, stats}) {
	const {followingCount, followerCount, heartCount} = stats;
	const {avatarLarger, uniqueId, nickname, signature} = user
	return <div className="user-details user-details-container">
		<div className="top">
			<div className="avatar-container">
				<Avatar image={avatarLarger} size={"200px"} />
			</div>
			
			<div className="user-info">
				<h1>{uniqueId}</h1>
				<h4 >{nickname}</h4>
			</div>
		</div>
		
		<div className="user-stats">
			<div className="stat-item">
				<strong>{followingCount}</strong>
				<p>Following</p>
			</div>
			<div className="stat-item">
				<strong>{followerCount}</strong>
				<p>Followers</p>
			</div>
			<div className="stat-item">
				<strong>{heartCount}</strong>
				<p>Likes</p>
			</div>
		
		</div>
		<div className="bio">
			<p>{signature}</p>
		</div>
	</div>
}