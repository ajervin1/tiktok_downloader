import './PostModal.css'
import PostItem from "../PostItem/PostItem";

import Avatar from "../Avatar/Avatar";
export default function PostModal({setModalOpen, post}) {
	const {author, video} = post
	
	function closeModal(  ) {
		setModalOpen(false)
	}
	return <>
		<section className="modal-container">
			<div className="modal-wrapper">
				<article className="modal">
					{/* Video */}
					<section className="video-item">
						<video controls={true}  src={video.playAddr}></video>
					</section>
					{/* User Details */}
					<section className="user-details">
						<div className="top">
							<Avatar  image={author.avatarMedium} size={80} />
							<div className="username-meta">
								<h3>{author.nickname}</h3>
								<h5 style={{opacity: 0.5}}>{author.uniqueId}</h5>
							</div>
							
							
						</div>
						<div className="middle">
							<p style={{marginBottom: '5px'}} className={'desc'}>{post.desc}</p>
							<h4 className={'music'}><i className="fa fa-music"></i> {post.music.title} </h4>
						</div>
						<div className="bottom stats">
							<div className={'stat-item'}>
								<i className="fa fa-heart"></i>
								<h6>{post.stats.diggCount}</h6>
							</div>
							<div className="stat-item">
								<i className="fa fa-play"></i>
								<h6>{post.stats.playCount}</h6>
							</div>
							<div className="stat-item">
								<i className="fa fa-comment"></i>
								<h6>{post.stats.commentCount}</h6>
							</div>
						</div>
					</section>
					<button onClick={closeModal} className={'close-btn'}>
						<i className="fa fa-lg fa-xmark"></i>
					</button>
				</article>
			</div>
		
		</section>
		<div className={'modal-backdrop'}></div>
	</>
}