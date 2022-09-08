import SideBar from "../components/SideBar/SideBar";
import PostModal from "../components/PostModal/PostModal";
import { useEffect, useState } from "react";
import { post } from "../static_data";
import PostItem from "../components/PostItem/PostItem";
const user_post = { adAuthorization: false,
	adLabelVersion: 0,
	author:
		{ avatarLarger: 'https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/390879407b5d728e934e7c60a01f64f1~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=Pm7DjmjgX2VfjslkqGxFMsFe0j0%3D',
			avatarMedium: 'https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/390879407b5d728e934e7c60a01f64f1~c5_720x720.jpeg?x-expires=1662804000&x-signature=SrUXiYSEc0GTW%2BHz9dWAH6zrxUA%3D',
			avatarThumb: 'https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/390879407b5d728e934e7c60a01f64f1~c5_100x100.jpeg?x-expires=1662804000&x-signature=y2O1u%2BfNQGaQc5NPhG9cmrizeUA%3D',
			commentSetting: 0,
			downloadSetting: 0,
			duetSetting: 0,
			ftc: false,
			id: '6724529785801901062',
			isADVirtual: false,
			nickname: 'via<3',
			openFavorite: false,
			privateAccount: false,
			relation: 0,
			secUid: 'MS4wLjABAAAAkHqDeyBnVyzzQuNOTvVovc8nECyp7ltnevHrJ7M4m865FlyzYPz-wglzujTcQyd6',
			secret: false,
			signature: '☆.。.・°☆.。.:*・°☆\nsports illustrated rookie\n❤️🧡💛💚💙💜💗\n@imgmodels @dba',
			stitchSetting: 0,
			ttSeller: false,
			uniqueId: 'iamoliviaponton',
			verified: true },
	authorStats:
		{ diggCount: 152400,
			followerCount: 7900000,
			followingCount: 899,
			heart: 855900000,
			heartCount: 855900000,
			videoCount: 3369 },
	createTime: 1662605772,
	desc: 'got my red dress on tonight💋',
	digged: false,
	duetDisplay: 0,
	duetEnabled: true,
	duetInfo: { duetFromId: '0' },
	effectStickers: [ { ID: '1350936', name: 'POSH', stickerStats: { useCount: 0 } } ],
	forFriend: false,
	id: '7140837403236994350',
	isAd: false,
	itemCommentStatus: 0,
	itemMute: false,
	music:
		{ album: '',
			authorName: 'ᥫ᭡',
			coverLarge: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3980d22b27d6fa7d5c64c9cebfbb6657~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=fMRm3H0wqczYdhvE8yDqeXVkkg4%3D',
			coverMedium: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3980d22b27d6fa7d5c64c9cebfbb6657~c5_720x720.jpeg?x-expires=1662804000&x-signature=ehPurQXZoVgcXSValK88J3yOZ9c%3D',
			coverThumb: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3980d22b27d6fa7d5c64c9cebfbb6657~c5_100x100.jpeg?x-expires=1662804000&x-signature=0%2Bm7sYg92hPvsngvpB9H7lDnzro%3D',
			duration: 20,
			id: '7054192764724005638',
			original: true,
			playUrl: 'https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7054192785104194309.mp3',
			title: 'Originalton' },
	officalItem: false,
	originalItem: false,
	privateItem: false,
	secret: false,
	shareEnabled: true,
	showNotPass: false,
	stats:
		{ commentCount: 116,
			diggCount: 35600,
			playCount: 202100,
			shareCount: 98 },
	stitchDisplay: 0,
	stitchEnabled: true,
	video:
		{ bitrate: 1369454,
			codecType: 'h264',
			cover: 'https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/91f15166b91a4d17a80912b200e42f99_1662605773?x-expires=1662652800&x-signature=TRZFC%2FvRZplVS7IPOQ3wdMQr1DA%3D',
			definition: '720p',
			downloadAddr: 'https://v16m-webapp.tiktokcdn-us.com/165972466f33e90d37476bf2967cd657/631a1a59/video/tos/useast5/tos-useast5-pve-0068-tx/25e3bccbb3f744819ee776b943e402f4/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2674&bt=1337&cs=0&ds=3&ft=ebtHKH-qMyq8ZKQvxhe2N4u7fl7Gb&mime_type=video_mp4&qs=0&rc=PDpmaGc8ZThoNzU2aDhkZEBpM2k7bTo6ZjRvZjMzZzczNEBeYmJfLzE2XzQxYC0vMy41YSNnczIwcjRvZ2BgLS1kMS9zcw%3D%3D&l=202209081037385C3157F0BC277C1ED57C',
			duration: 7,
			dynamicCover: 'https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/42a38897576546298cad35cb1cb38ca3_1662605773?x-expires=1662652800&x-signature=vSyIRoHjSKIu4fULTC47SKJo3aY%3D',
			encodeUserTag: '',
			encodedType: 'normal',
			format: 'mp4',
			height: 1024,
			id: '7140837403236994350',
			originCover: 'https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/225943e662f441b787387ee42a3578cd_1662605773?x-expires=1662652800&x-signature=8qqA33j5SvBKAA%2FDe7cNk%2B3Jo0M%3D',
			playAddr: 'https://v16m-webapp.tiktokcdn-us.com/165972466f33e90d37476bf2967cd657/631a1a59/video/tos/useast5/tos-useast5-pve-0068-tx/25e3bccbb3f744819ee776b943e402f4/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2674&bt=1337&cs=0&ds=3&ft=ebtHKH-qMyq8ZKQvxhe2N4u7fl7Gb&mime_type=video_mp4&qs=0&rc=PDpmaGc8ZThoNzU2aDhkZEBpM2k7bTo6ZjRvZjMzZzczNEBeYmJfLzE2XzQxYC0vMy41YSNnczIwcjRvZ2BgLS1kMS9zcw%3D%3D&l=202209081037385C3157F0BC277C1ED57C',
			ratio: '720p',
			reflowCover: 'https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/91f15166b91a4d17a80912b200e42f99_1662605773?x-expires=1662652800&x-signature=TRZFC%2FvRZplVS7IPOQ3wdMQr1DA%3D',
			shareCover:
				[ '',
					'https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/225943e662f441b787387ee42a3578cd_1662605773~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=zwvHEKTebae5nVxjv%2FpgmTMJimw%3D',
					'https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/225943e662f441b787387ee42a3578cd_1662605773~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=ojEKQ%2FSZbKbQ5aj6tU1f8YvWvzE%3D' ],
			videoQuality: 'normal',
			volumeInfo: { Loudness: -18.4, Peak: 0.46774 },
			width: 576,
			zoomCover:
				{ 240: 'https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/91f15166b91a4d17a80912b200e42f99_1662605773~tplv-r00ih4996s-1:240:240.jpeg?x-expires=1662652800&x-signature=aAnvn6EWFec4BZJuc4FfUqIbaAI%3D',
					480: 'https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/91f15166b91a4d17a80912b200e42f99_1662605773~tplv-r00ih4996s-1:480:480.jpeg?x-expires=1662652800&x-signature=gZPtRr%2BiO6bPU4tJBMMmz8pxrDE%3D',
					720: 'https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/91f15166b91a4d17a80912b200e42f99_1662605773~tplv-r00ih4996s-1:720:720.jpeg?x-expires=1662652800&x-signature=%2BU1LeP9cn3FWcPdKdGTQ%2BAlSrvc%3D',
					960: 'https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/91f15166b91a4d17a80912b200e42f99_1662605773~tplv-r00ih4996s-1:960:960.jpeg?x-expires=1662652800&x-signature=xJC2l4cL3eHSOTGEyYcuUVm6pCY%3D' } },
	vl1: false }
export default function UserPostsPage() {
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
			setPosts([user_post, user_post, user_post]);
		}, 1000)
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
	
	return <main className="trending main-container">
		
		<SideBar/>
		<div className="content content-container">
			<h1 style={ { marginBottom: '40px' } }>Users Posts Page</h1>
			{/* Post List */ }
			<section className="post-item-list">
				{renderedList}
			</section>
		
		</div>
		
		{ modalOpen && selectedPost && <PostModal post={selectedPost} setModalOpen={setModalOpen} /> }
	</main>
}