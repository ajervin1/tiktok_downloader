import UserDetails from "../UserDetails/UserDetails";
import Avatar from "../Avatar/Avatar";
import './RecomendItem.css'
export default function RecommendedItem({post}) {
	const {author, stats} = post;
	const {avatarLarger, uniqueId, nickname, signature} = author
	
	return <article className="recommend-item recommend-item-container">
		<div className="user-details user-details-container">
			<div className="top">
				<div className="avatar-container">
					<Avatar image={avatarLarger} size={"50px"} />
				</div>
				
				<div className="user-info">
					<div style={{display: "flex", alignItems: 'baseline'}}>
						<h1>{uniqueId}</h1>
						<p style={{marginLeft: '10px'}}>{nickname}</p>
					</div>
				
					<div className="bio">
						<p>{signature}</p>
					</div>
					<div className="music">
						<h4 style={{fontWeight: "500"}}>
							<i className="fa fa-music" style={{marginRight: '10px'}}></i>
							{post.music.title}</h4>
					</div>
				</div>
				<div className="follow-button-container">
					<button className={'follow-button'}>Follow</button>
				</div>
			</div>
		
		</div>
		<div className="bottom">
			<div className="image-container">
				<video src={"https://v16m-webapp.tiktokcdn-us.com/f73bac0681dd6d85c34f58fc362d56d9/630fa22c/video/tos/useast5/tos-useast5-pve-0068-tx/0a8164c2ab434a8d8129704ddea62004/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2774&bt=1387&cs=0&ds=3&ft=ebtHKH-qMyq8ZDka-he2NZMofl7Gb&mime_type=video_mp4&qs=0&rc=M2RmNjc8OTdkPGU6aTMzPEBpamU3c2Q6ZnlwZTMzZzczNEAvM140MTQyNjUxLTNiYS8yYSNqc3FjcjRnY29gLS1kMS9zcw%3D%3D&l=20220831115920D1FEFFE5BE1A97091EBD"} controls={true}/>
			</div>
			<div className="action-buttons-container">
				<div className="action-button">
					<h3>
						<i className="fa fa-heart"></i>
					</h3>
					<h6>{stats.diggCount}</h6>
				</div>
				<div className="action-button">
					<h3>
						<i className="fa fa-comment"></i>
					</h3>
					<h6>{stats.commentCount}</h6>
				</div>
				<div className="action-button">
					<h3>
						<i className="fa fa-reply"></i>
					</h3>
					<h6>{stats.shareCount}</h6>
				</div>
			</div>
		</div>
		
		
		

	</article>
}