import './PostItem.css'

export default function PostItem( { post } ) {
	const {desc, stats, video} = post;
	return <article className="post-item post-item-container">
		<div className="image-container">
			<img src={video.dynamicCover} alt=""/>
		</div>
		<div className="bottom">
			<p className="description">
				{desc.slice(0, 10)}
			</p>
		</div>
		<div className="overlay">
			<div className="plays">
				<i className="fa fa-play"></i>
				<strong>{stats.playCount}</strong>
			</div>
		</div>
	</article>
}