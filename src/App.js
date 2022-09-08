import './App.css';
import { useEffect, useState } from "react";
import PostItem from "./components/PostItem/PostItem";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import PostModal from "./components/PostModal/PostModal";

const results = {
	"status_code": 203,
	"data": [
		{
			"type": 4,
			"user_list": [
				{
					"user_info": {
						"uid": "67872153039147008",
						"nickname": "MAX",
						"signature": "TOUR TICKETS👇🌶",
						"avatar_thumb": {
							"uri": "tos-useast5-avt-0068-tx/07f424201bec536e324ab54e1ce855d0",
							"url_list": [
								"https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/07f424201bec536e324ab54e1ce855d0~c5_100x100.webp?x-expires=1662703200&x-signature=YGX5DaB%2FW%2B7cXjv4p3XcQLWqUw4%3D",
								"https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/07f424201bec536e324ab54e1ce855d0~c5_100x100.webp?x-expires=1662703200&x-signature=8bQzpt7W%2FQLQfLVfiHf9WQravok%3D",
								"https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/07f424201bec536e324ab54e1ce855d0~c5_100x100.jpeg?x-expires=1662703200&x-signature=b0kjzB6nP%2BqC1S4CrKV0lVLaqMM%3D"
							],
							"width": 720,
							"height": 720
						},
						"follow_status": 0,
						"follower_count": 1200000,
						"custom_verify": "Popular creator",
						"unique_id": "max",
						"room_id": 0,
						"enterprise_verify_reason": "",
						"followers_detail": null,
						"platform_sync_info": null,
						"geofencing": null,
						"cover_url": null,
						"item_list": null,
						"type_label": null,
						"ad_cover_url": null,
						"relative_users": null,
						"cha_list": null,
						"sec_uid": "MS4wLjABAAAAHNUDUGjvTdzRQ6OqgDOE4VkbztnDghejSSHc7GsuJMqSzHP9JmAIUDE19Va7EWdB",
						"need_points": null,
						"homepage_bottom_toast": null,
						"can_set_geofencing": null,
						"white_cover_url": null,
						"user_tags": null,
						"bold_fields": null,
						"search_highlight": null,
						"mutual_relation_avatars": null,
						"events": null,
						"advance_feature_item_order": null,
						"advanced_feature_info": null,
						"user_profile_guide": null,
						"shield_edit_field_info": null,
						"can_message_follow_status_list": null
					},
					"position": null,
					"uniqid_position": null,
					"effects": null,
					"musics": null,
					"items": null,
					"mix_list": null,
					"challenges": null
				},
				{
					"user_info": {
						"uid": "6631304276051787782",
						"nickname": "max :-)",
						"signature": "just follow my twitch and turn the notification on",
						"avatar_thumb": {
							"uri": "tos-maliva-avt-0068/1c63ab44528546f536815f56c32ad778",
							"url_list": [
								"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1c63ab44528546f536815f56c32ad778~c5_100x100.webp?x-expires=1662703200&x-signature=BkJQBJBoituHjhi13LyVEi38pBc%3D",
								"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1c63ab44528546f536815f56c32ad778~c5_100x100.jpeg?x-expires=1662703200&x-signature=76ajEajvMjy%2FSG7GkqNLQ%2Fem5S0%3D"
							],
							"width": 720,
							"height": 720
						},
						"follow_status": 0,
						"follower_count": 4200000,
						"custom_verify": "Popular creator",
						"unique_id": "maxdressler",
						"room_id": 0,
						"enterprise_verify_reason": "",
						"followers_detail": null,
						"platform_sync_info": null,
						"geofencing": null,
						"cover_url": null,
						"item_list": null,
						"type_label": null,
						"ad_cover_url": null,
						"relative_users": null,
						"cha_list": null,
						"sec_uid": "MS4wLjABAAAA9yffhI93dlTxryZ8bOUW91u0Y8KcDfsJTxzPnn0PNdBWLTa_ZfIDLeR0CXpS2ln7",
						"need_points": null,
						"homepage_bottom_toast": null,
						"can_set_geofencing": null,
						"white_cover_url": null,
						"user_tags": null,
						"bold_fields": null,
						"search_highlight": null,
						"mutual_relation_avatars": null,
						"events": null,
						"advance_feature_item_order": null,
						"advanced_feature_info": null,
						"user_profile_guide": null,
						"shield_edit_field_info": null,
						"can_message_follow_status_list": null
					},
					"position": null,
					"uniqid_position": null,
					"effects": null,
					"musics": null,
					"items": null,
					"mix_list": null,
					"challenges": null
				}
			],
			"has_top_user": 0,
			"view_more": true,
			"card_title": "Users"
		},
		{
			"type": 1,
			"item": {
				"id": "7105800636737867013",
				"desc": "Watch twice for surprise 🤭 || #fyp #strangerthings #viral #surprise #edit #capcut #max",
				"createTime": 1654448139,
				"video": {
					"id": "7105800636737867013",
					"height": 768,
					"width": 576,
					"duration": 5,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/af85e48508794f0ea300135d806cfb33_1654448141?x-expires=1662638400&x-signature=BffA%2F8KB4KBFISya0b%2B1dzVXGQo%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9a08b52f32f44f0a9c5b318551f835c0_1654448140?x-expires=1662638400&x-signature=RXKGAuJNaS%2Bhkj0P44mO3YIWweE%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b8f164c9dc874e7fb624b94b58e7946b_1654448140?x-expires=1662638400&x-signature=5zGDtiRxJ3UBA7mnZHb%2Bae%2FGJ9I%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/6ac99ff045e909278d7684a41b4dbf08/6319e57a/video/tos/useast2a/tos-useast2a-pve-0068/142c9ad1187a443cb5f8513d0bd17b95/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=686&bt=343&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=aDk7Zzo1ZjU4Zzw8NGRmZ0BpM2hrczQ6ZjlnZDMzNzczM0BiNTAwYV8xNTYxMGItMzFfYSNnL2JhcjRvcmJgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/6ac99ff045e909278d7684a41b4dbf08/6319e57a/video/tos/useast2a/tos-useast2a-pve-0068/142c9ad1187a443cb5f8513d0bd17b95/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=686&bt=343&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=aDk7Zzo1ZjU4Zzw8NGRmZ0BpM2hrczQ6ZjlnZDMzNzczM0BiNTAwYV8xNTYxMGItMzFfYSNnL2JhcjRvcmJgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/9a08b52f32f44f0a9c5b318551f835c0_1654448140~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=n%2BOvWj9NhQ51ijYyhcBkmrCdLTQ%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/9a08b52f32f44f0a9c5b318551f835c0_1654448140~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=zan0LPJtmsKaYZf%2BMyO3Ff%2BD4AQ%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/345e5fbb4444c1c2dc7dd4456569bd47?x-expires=1662638400&x-signature=mo%2Bqy2LnjQIk3ahRJrON9MMuCI4%3D",
					"bitrate": 351908,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "7105669389327975429",
					"uniqueId": "maxeditsst",
					"nickname": "maxeditsst",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ac4edf93b338d9fcb031efa8a16e7353~c5_100x100.jpeg?x-expires=1662789600&x-signature=Au0J4E7hpq%2BR%2FoOPGGe%2FDpp3oXc%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ac4edf93b338d9fcb031efa8a16e7353~c5_720x720.jpeg?x-expires=1662789600&x-signature=suQdGUxaIw%2FBV8DB1e10uQUQxJE%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ac4edf93b338d9fcb031efa8a16e7353~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=HyC7ufw9yPR90rPYu87IgW8SSNk%3D",
					"signature": "Editor || 13\nStranger Things = 🌍",
					"verified": false,
					"secUid": "MS4wLjABAAAA_JU0mS6E7BeAPR98Wabq-Z5gTIF_hZqKD9ywMWLQijS-f-_4Y-wSuOuycv2q1YBd",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 0,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7098394896372878086",
					"title": "original sound",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7098394886109432581.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9a9255dadc515281bdc74fe0e1049d03~c5_100x100.jpeg?x-expires=1662789600&x-signature=p9Zpwe1hxDPknkKJPdV4fp%2BIjhE%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9a9255dadc515281bdc74fe0e1049d03~c5_720x720.jpeg?x-expires=1662789600&x-signature=S29ra%2F7LjKkT2tGKDFeIEP7dLxE%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9a9255dadc515281bdc74fe0e1049d03~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=aR3%2FCUlckEoNgohIjmXn87TzeJM%3D",
					"authorName": "aesthetic.millls",
					"original": true,
					"duration": 5,
					"album": ""
				},
				"challenges": [
					{
						"id": "229207",
						"title": "fyp",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "551946",
						"title": "strangerthings",
						"desc": "Vecna awaits.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "20884",
						"title": "viral",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "15379",
						"title": "surprise",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "1518",
						"title": "edit",
						"desc": "Llevando tu contenido al siguiente nivel 🔥 todos los trucos y tips para aprender a editar tus videos en TikTok.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/db29936aaa6128627fe1ebf3f6038aca",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/db29936aaa6128627fe1ebf3f6038aca",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/db29936aaa6128627fe1ebf3f6038aca",
						"coverThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/cb514973addd54a58a6ef8bbfb815854",
						"coverMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/cb514973addd54a58a6ef8bbfb815854",
						"coverLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/cb514973addd54a58a6ef8bbfb815854",
						"isCommerce": false
					},
					{
						"id": "1663935709411330",
						"title": "capcut",
						"desc": "CapCut is a new, easy-to-use video editing tool designed for mobile platforms. CapCut provides users with a wide range of video editing functions, filters, audio &amp; visual effects, video templates, while keeping it free of charge and ads-free. Everyone can be a creator by using CapCut.  \n\nStart creating your cool videos today: \nhttps://capcut.onelink.me/XKqI/228cad85",
						"profileThumb": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/1d1c20b6de3fc0b4da37670699cbcb07",
						"profileMedium": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/1d1c20b6de3fc0b4da37670699cbcb07",
						"profileLarger": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/1d1c20b6de3fc0b4da37670699cbcb07",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "3137",
						"title": "max",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 1200000,
					"shareCount": 6671,
					"commentCount": 36700,
					"playCount": 8900000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 31,
						"end": 35,
						"hashtagName": "fyp",
						"hashtagId": "229207",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 36,
						"end": 51,
						"hashtagName": "strangerthings",
						"hashtagId": "551946",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 52,
						"end": 58,
						"hashtagName": "viral",
						"hashtagId": "20884",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 59,
						"end": 68,
						"hashtagName": "surprise",
						"hashtagId": "15379",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 69,
						"end": 74,
						"hashtagName": "edit",
						"hashtagId": "1518",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 75,
						"end": 82,
						"hashtagName": "capcut",
						"hashtagId": "1663935709411330",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 83,
						"end": 87,
						"hashtagName": "max",
						"hashtagId": "3137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 41,
					"followerCount": 51400,
					"heartCount": 1200000,
					"videoCount": 10,
					"diggCount": 413,
					"heart": 1200000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7136621362306616603",
				"desc": "and max cheering her up 😜 #strangerthings #eleven #max",
				"createTime": 1661624154,
				"video": {
					"id": "7136621362306616603",
					"height": 720,
					"width": 576,
					"duration": 10,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/a77a6767e71f423897fad0ff374d0020_1661624157?x-expires=1662638400&x-signature=GPIVGtBPy4ZOwsQQyZE66nSk40A%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/4634ec609178460c807bef00bae779b1_1661624155?x-expires=1662638400&x-signature=kxYAvN1PliYBY6yYVMg%2FKGiWY7I%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/f5e73cc8e461446193ea7cfddbcc47c5_1661624156?x-expires=1662638400&x-signature=LwvCx2T4q5AJRIm4Y2tTvPsPP70%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/83494452e691c5752f6c887a42231901/6319e57f/video/tos/useast2a/tos-useast2a-pve-0037-aiso/010559776f7843659edcf7f257bcbfb4/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2474&bt=1237&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=OWZpN2VnNmQ1Nmc2NDc3aUBpams5a2k6Zjs4ZjMzZjgzM0BiNDYzMzJjXmMxYS8wLjQ2YSNfbW4zcjRvcjJgLS1kL2Nzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/83494452e691c5752f6c887a42231901/6319e57f/video/tos/useast2a/tos-useast2a-pve-0037-aiso/010559776f7843659edcf7f257bcbfb4/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2474&bt=1237&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=OWZpN2VnNmQ1Nmc2NDc3aUBpams5a2k6Zjs4ZjMzZjgzM0BiNDYzMzJjXmMxYS8wLjQ2YSNfbW4zcjRvcjJgLS1kL2Nzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/4634ec609178460c807bef00bae779b1_1661624155~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=Nb%2BN3jaapa8HmAjNEfrZEblt0dk%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/4634ec609178460c807bef00bae779b1_1661624155~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=F7VrJUOkcM1f6G6c1%2FoQaMzAtUo%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ed7de739e046b0bf9744730a17564ab8?x-expires=1662638400&x-signature=AnofETToUwufnsCfLIzNMhOZZQQ%3D",
					"bitrate": 1266923,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "7102782347954783258",
					"uniqueId": "mikewhler",
					"nickname": "𝖒𝖆𝖝 | school",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fe4d5612d8ca6d6619018a6096bf1da7~c5_100x100.jpeg?x-expires=1662789600&x-signature=KJ82tAqWH%2FOh5nAp0oejnE9kzdQ%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fe4d5612d8ca6d6619018a6096bf1da7~c5_720x720.jpeg?x-expires=1662789600&x-signature=FlVm%2BEVjeIW4smxSIYEUVtstkSU%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fe4d5612d8ca6d6619018a6096bf1da7~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=5WOtt8Zsd%2BJ3LevrwYFhntsvzvE%3D",
					"signature": "[busy with school]\n🎧 STRANGER THINGS MERCH 🛼\n[use code max10 for 10% off]",
					"verified": false,
					"secUid": "MS4wLjABAAAA4VdGtr8z477bf4PW4iTUaq0F0EMzLO5S0imqV1wUB04tty_oN8q3rxyC4iXmoMsy",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 0,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7136621353095924506",
					"title": "original sound - 𝖒𝖆𝖝",
					"playUrl": "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7136621385769683738.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fe4d5612d8ca6d6619018a6096bf1da7~c5_100x100.jpeg?x-expires=1662789600&x-signature=KJ82tAqWH%2FOh5nAp0oejnE9kzdQ%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fe4d5612d8ca6d6619018a6096bf1da7~c5_720x720.jpeg?x-expires=1662789600&x-signature=FlVm%2BEVjeIW4smxSIYEUVtstkSU%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fe4d5612d8ca6d6619018a6096bf1da7~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=5WOtt8Zsd%2BJ3LevrwYFhntsvzvE%3D",
					"authorName": "𝖒𝖆𝖝 | school",
					"original": true,
					"duration": 10,
					"album": ""
				},
				"challenges": [
					{
						"id": "551946",
						"title": "strangerthings",
						"desc": "Vecna awaits.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "114674",
						"title": "eleven",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "3137",
						"title": "max",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 290600,
					"shareCount": 1620,
					"commentCount": 2135,
					"playCount": 1700000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 27,
						"end": 42,
						"hashtagName": "strangerthings",
						"hashtagId": "551946",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 43,
						"end": 50,
						"hashtagName": "eleven",
						"hashtagId": "114674",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 51,
						"end": 55,
						"hashtagName": "max",
						"hashtagId": "3137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 76,
					"followerCount": 602500,
					"heartCount": 32000000,
					"videoCount": 151,
					"diggCount": 10700,
					"heart": 32000000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7115355275590110470",
				"desc": "###tiktokponmeenparati #fyp #parati #strangerthings3 #volumen2hoy #netflix #madmax #max #billy #tiktok",
				"createTime": 1656672753,
				"video": {
					"id": "7115355275590110470",
					"height": 858,
					"width": 576,
					"duration": 9,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/beba4e9feebb419d8f7decc1aca881ec_1656672758?x-expires=1662638400&x-signature=TlXdmXpN1QEW83ThUrwiHVCSqMw%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/b3824b4bcf4c4ef38e126dae0a016efa_1656672755?x-expires=1662638400&x-signature=DAPs4erkMcweQbmb4OgKRwMbm44%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/14590c5dead8430da46976e3b6c1d9c5_1661505267?x-expires=1662638400&x-signature=n3RmM4%2FU5350aTSkgczh9nnvccw%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/9839e226ed239882dbe5eae8fbd41495/6319e57d/video/tos/useast2a/tos-useast2a-ve-0068c004/d60b26ed30444912aac0ce4b5962dda8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2028&bt=1014&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=NGlnNjc4OTVlODZpM2VlZEBpM3l1aWk6ZnRnZDMzNzczM0AuXmAxLjRiNS4xXjRhLjJjYSM0Ym82cjRnMHNgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/9839e226ed239882dbe5eae8fbd41495/6319e57d/video/tos/useast2a/tos-useast2a-ve-0068c004/d60b26ed30444912aac0ce4b5962dda8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2028&bt=1014&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=NGlnNjc4OTVlODZpM2VlZEBpM3l1aWk6ZnRnZDMzNzczM0AuXmAxLjRiNS4xXjRhLjJjYSM0Ym82cjRnMHNgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/b3824b4bcf4c4ef38e126dae0a016efa_1656672755~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=O0ktF6gbhN2L01iSKJisBx2%2BsR0%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/b3824b4bcf4c4ef38e126dae0a016efa_1656672755~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=WLwi31G5Gxuh2LzSrkuQoItC3Eg%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9e2268af335df1aacd704c6d5f5b4c61?x-expires=1662638400&x-signature=B4zxhSBee7IUD8XjJuMLVVsxmrE%3D",
					"bitrate": 1039105,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "7102735053948716037",
					"uniqueId": "estefaniia.gb",
					"nickname": "🤍",
					"avatarThumb": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e8b74358ce17b182da5ca5142fde4acd~c5_100x100.jpeg?x-expires=1662789600&x-signature=YtXxdbCAwgrjBhHAG2%2BHCXvKvNM%3D",
					"avatarMedium": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e8b74358ce17b182da5ca5142fde4acd~c5_720x720.jpeg?x-expires=1662789600&x-signature=Pda%2BNjMuWg%2BWLWqsh7PN5HO3rec%3D",
					"avatarLarger": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e8b74358ce17b182da5ca5142fde4acd~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=%2FcL79wAH4uS363Khqu9ke%2F%2BkxMM%3D",
					"signature": "199k🔝\ntt:stranger things",
					"verified": false,
					"secUid": "MS4wLjABAAAAJoAxUn8muZZYSYNprQ9hVkIA1WmsTwN2gcuFhhrVqXY0189kkHmwKcb5qVP7TGVo",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 0,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7115355253679131397",
					"title": "sonido original",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7115355273036434182.mp3",
					"coverThumb": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e8b74358ce17b182da5ca5142fde4acd~c5_100x100.jpeg?x-expires=1662789600&x-signature=YtXxdbCAwgrjBhHAG2%2BHCXvKvNM%3D",
					"coverMedium": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e8b74358ce17b182da5ca5142fde4acd~c5_720x720.jpeg?x-expires=1662789600&x-signature=Pda%2BNjMuWg%2BWLWqsh7PN5HO3rec%3D",
					"coverLarge": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e8b74358ce17b182da5ca5142fde4acd~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=%2FcL79wAH4uS363Khqu9ke%2F%2BkxMM%3D",
					"authorName": "🤍",
					"original": true,
					"duration": 8,
					"album": ""
				},
				"challenges": [
					{
						"id": "1620707185626277",
						"title": "tiktokponmeenparati",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "229207",
						"title": "fyp",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "65243",
						"title": "parati",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "81976113",
						"title": "strangerthings3",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "7115353832498855942",
						"title": "volumen2hoy",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "37187",
						"title": "netflix",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "609106",
						"title": "madmax",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "3137",
						"title": "max",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "66918",
						"title": "billy",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "23428",
						"title": "tiktok",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 2800000,
					"shareCount": 28500,
					"commentCount": 16700,
					"playCount": 11200000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 2,
						"end": 22,
						"hashtagName": "tiktokponmeenparati",
						"hashtagId": "1620707185626277",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 23,
						"end": 27,
						"hashtagName": "fyp",
						"hashtagId": "229207",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 28,
						"end": 35,
						"hashtagName": "parati",
						"hashtagId": "65243",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 36,
						"end": 52,
						"hashtagName": "strangerthings3",
						"hashtagId": "81976113",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 53,
						"end": 65,
						"hashtagName": "volumen2hoy",
						"hashtagId": "7115353832498855942",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 66,
						"end": 74,
						"hashtagName": "netflix",
						"hashtagId": "37187",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 75,
						"end": 82,
						"hashtagName": "madmax",
						"hashtagId": "609106",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 83,
						"end": 87,
						"hashtagName": "max",
						"hashtagId": "3137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 88,
						"end": 94,
						"hashtagName": "billy",
						"hashtagId": "66918",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 95,
						"end": 102,
						"hashtagName": "tiktok",
						"hashtagId": "23428",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 381,
					"followerCount": 208400,
					"heartCount": 7400000,
					"videoCount": 41,
					"diggCount": 1368,
					"heart": 7400000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7130584068781034794",
				"desc": "😹 I actually love how this turned out! 🥱 to answer your question of Billy being 💀, I’m doing this in a AU where he never died! 🫶 #CapCut #fyp #foryoupage #fypシ #funny #maxmayfield #max #redhead #skater #skateboard #lovely #lucassinclair #lucasxmax #lax #music #yearbook #everskiesfits #everskiesstorys #everskiesyearbook #2022 #partytime #everykiss #lucasfilm",
				"createTime": 1660218486,
				"video": {
					"id": "7130584068781034794",
					"height": 576,
					"width": 576,
					"duration": 7,
					"ratio": "720p",
					"cover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/120fcd8a81fe4270ad292bfc975adf72_1660218487?x-expires=1662638400&x-signature=lCiDfF%2FhhD39cocAze93rrQu7Qk%3D",
					"originCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/50a3ada6f36749e1ad122e2c7649e1ae_1660218487?x-expires=1662638400&x-signature=KnFOC5LtefHImCr1VTU6PyyiOho%3D",
					"dynamicCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/124f39b7bb34450dabb69bc409b9c7fb_1660218487?x-expires=1662638400&x-signature=8FdZ5AgG8IZUiwPCd7z%2BYfGfnnM%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/fb4ed50bc21056669032cac903eb52b2/6319e57b/video/tos/useast5/tos-useast5-ve-0068c003-tx/d9aa1e6a45144ffbbc7ae54d7073a6c8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=908&bt=454&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=OmY1NTxpZmY8Z2VoOTo3NEBpanIzcDo6ZjRoZTMzZzczNEBiLmI2MWEvNl4xMV5hLV5eYSNjajJucjRfa25gLS1kMS9zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/fb4ed50bc21056669032cac903eb52b2/6319e57b/video/tos/useast5/tos-useast5-ve-0068c003-tx/d9aa1e6a45144ffbbc7ae54d7073a6c8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=908&bt=454&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=OmY1NTxpZmY8Z2VoOTo3NEBpanIzcDo6ZjRoZTMzZzczNEBiLmI2MWEvNl4xMV5hLV5eYSNjajJucjRfa25gLS1kMS9zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/50a3ada6f36749e1ad122e2c7649e1ae_1660218487~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=Gq%2BFoAQ5QqzgX5wfdKdxFyq8m0o%3D",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/50a3ada6f36749e1ad122e2c7649e1ae_1660218487~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=SIjHFXwFe5gfKDI43Z9s66SppdI%3D"
					],
					"reflowCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/120fcd8a81fe4270ad292bfc975adf72_1660218487?x-expires=1662638400&x-signature=LL7ZN7NohmdGAnFujSTSSXYlrOk%3D",
					"bitrate": 465024,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "7124797461604713515",
					"uniqueId": "maxsskies",
					"nickname": "max mayfeild 💀",
					"avatarThumb": "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a816cb7c34d2b17d3000d2f3e8970fdc~c5_100x100.jpeg?x-expires=1662789600&x-signature=vq%2BvohFYFnIS6HSJRIfstjXWCJU%3D",
					"avatarMedium": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a816cb7c34d2b17d3000d2f3e8970fdc~c5_720x720.jpeg?x-expires=1662789600&x-signature=1OuKUAYRx7sbypGFToHbIohxM3g%3D",
					"avatarLarger": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a816cb7c34d2b17d3000d2f3e8970fdc~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=gwExNksvDrV7glXWoMKJJaFn6OY%3D",
					"signature": "😍 TYSM for so much love already! 🥳\n😅 my goal is 15K if we can! 😜\nEVERSKIES",
					"verified": false,
					"secUid": "MS4wLjABAAAA4WOZa8fEbp9iALvkeQ6ZEQ6vMNVxd3-WYKHzTig8-nHcAUa-OxPWB9menGAaKN9d",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 0,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7130583959628630830",
					"title": "original sound",
					"playUrl": "https://sf16.tiktokcdn-us.com/obj/ies-music-tx/7130584008643332910.mp3",
					"coverThumb": "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a816cb7c34d2b17d3000d2f3e8970fdc~c5_100x100.jpeg?x-expires=1662789600&x-signature=vq%2BvohFYFnIS6HSJRIfstjXWCJU%3D",
					"coverMedium": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a816cb7c34d2b17d3000d2f3e8970fdc~c5_720x720.jpeg?x-expires=1662789600&x-signature=1OuKUAYRx7sbypGFToHbIohxM3g%3D",
					"coverLarge": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/a816cb7c34d2b17d3000d2f3e8970fdc~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=gwExNksvDrV7glXWoMKJJaFn6OY%3D",
					"authorName": "max mayfeild 💀",
					"original": true,
					"duration": 6,
					"album": ""
				},
				"challenges": [
					{
						"id": "1663935709411330",
						"title": "capcut",
						"desc": "CapCut is a new, easy-to-use video editing tool designed for mobile platforms. CapCut provides users with a wide range of video editing functions, filters, audio &amp; visual effects, video templates, while keeping it free of charge and ads-free. Everyone can be a creator by using CapCut.  \n\nStart creating your cool videos today: \nhttps://capcut.onelink.me/XKqI/228cad85",
						"profileThumb": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/1d1c20b6de3fc0b4da37670699cbcb07",
						"profileMedium": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/1d1c20b6de3fc0b4da37670699cbcb07",
						"profileLarger": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/1d1c20b6de3fc0b4da37670699cbcb07",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "229207",
						"title": "fyp",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "88764338",
						"title": "foryoupage",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "1637342470396934",
						"title": "fypシ",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "5424",
						"title": "funny",
						"desc": "What's so #Funny?",
						"profileThumb": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/be28720eebca22cdd301d2ea221af814.png",
						"profileMedium": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/be28720eebca22cdd301d2ea221af814.png",
						"profileLarger": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/be28720eebca22cdd301d2ea221af814.png",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "82069218",
						"title": "maxmayfield",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "3137",
						"title": "max",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "18376",
						"title": "redhead",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "32491",
						"title": "skater",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "9015",
						"title": "skateboard",
						"desc": "Got sick skateboard tricks? 🔥 Show us your flips, grinds, and spins! 🤘🏼 Jacob will pick his faves! ⚡️ watch the official music video here https://youtu.be/NpA0Aa18xDo",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "10832",
						"title": "lovely",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "38869483",
						"title": "lucassinclair",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "82023120",
						"title": "lucasxmax",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "49739",
						"title": "lax",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "5636",
						"title": "music",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "304208",
						"title": "yearbook",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "1685936304385026",
						"title": "everskiesfits",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "1704010116283397",
						"title": "everskiesstorys",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "7124709106460983322",
						"title": "everskiesyearbook",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "27507942",
						"title": "2022",
						"desc": "",
						"profileThumb": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/c673654e1272ece38101a3fda37876d3",
						"profileMedium": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/c673654e1272ece38101a3fda37876d3",
						"profileLarger": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/c673654e1272ece38101a3fda37876d3",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "5171",
						"title": "partytime",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "103774",
						"title": "EveryKiss",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": true
					},
					{
						"id": "3748126",
						"title": "lucasfilm",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 286600,
					"shareCount": 200,
					"commentCount": 1098,
					"playCount": 2000000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 133,
						"end": 140,
						"hashtagName": "capcut",
						"hashtagId": "1663935709411330",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 141,
						"end": 145,
						"hashtagName": "fyp",
						"hashtagId": "229207",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 146,
						"end": 157,
						"hashtagName": "foryoupage",
						"hashtagId": "88764338",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 158,
						"end": 163,
						"hashtagName": "fypシ",
						"hashtagId": "1637342470396934",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 164,
						"end": 170,
						"hashtagName": "funny",
						"hashtagId": "5424",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 171,
						"end": 183,
						"hashtagName": "maxmayfield",
						"hashtagId": "82069218",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 184,
						"end": 188,
						"hashtagName": "max",
						"hashtagId": "3137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 189,
						"end": 197,
						"hashtagName": "redhead",
						"hashtagId": "18376",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 198,
						"end": 205,
						"hashtagName": "skater",
						"hashtagId": "32491",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 206,
						"end": 217,
						"hashtagName": "skateboard",
						"hashtagId": "9015",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 218,
						"end": 225,
						"hashtagName": "lovely",
						"hashtagId": "10832",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 226,
						"end": 240,
						"hashtagName": "lucassinclair",
						"hashtagId": "38869483",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 241,
						"end": 251,
						"hashtagName": "lucasxmax",
						"hashtagId": "82023120",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 252,
						"end": 256,
						"hashtagName": "lax",
						"hashtagId": "49739",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 257,
						"end": 263,
						"hashtagName": "music",
						"hashtagId": "5636",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 264,
						"end": 273,
						"hashtagName": "yearbook",
						"hashtagId": "304208",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 274,
						"end": 288,
						"hashtagName": "everskiesfits",
						"hashtagId": "1685936304385026",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 289,
						"end": 305,
						"hashtagName": "everskiesstorys",
						"hashtagId": "1704010116283397",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 306,
						"end": 324,
						"hashtagName": "everskiesyearbook",
						"hashtagId": "7124709106460983322",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 325,
						"end": 330,
						"hashtagName": "2022",
						"hashtagId": "27507942",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 331,
						"end": 341,
						"hashtagName": "partytime",
						"hashtagId": "5171",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 342,
						"end": 352,
						"hashtagName": "everykiss",
						"hashtagId": "",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 353,
						"end": 363,
						"hashtagName": "lucasfilm",
						"hashtagId": "3748126",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 2,
					"followerCount": 13500,
					"heartCount": 326200,
					"videoCount": 7,
					"diggCount": 2021,
					"heart": 326200
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7136358513118367018",
				"desc": "Leaked footage of max in her mind after vecna snatched her wig🤭😘 #PartyWithVMAs ",
				"createTime": 1661562948,
				"video": {
					"id": "7136358513118367018",
					"height": 906,
					"width": 576,
					"duration": 21,
					"ratio": "720p",
					"cover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/15b6181d16e54655855517c3dde542e5_1661562950?x-expires=1662638400&x-signature=dUC%2BswcKupNw0ILK6EDf4yj5B3k%3D",
					"originCover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/4d6d3fd05365420c8d6829e27387d929_1661562949?x-expires=1662638400&x-signature=tvGQNV9KY%2FZFRWLhU4hTlYgz3M0%3D",
					"dynamicCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/3848b403434e4ac3b825f4350452b422_1661562949?x-expires=1662638400&x-signature=X%2FJ%2Bl4kVaP9z1LTqfciMUJDzgY4%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/602b308a6749d86a8bd037869aa8c5dc/6319e58a/video/tos/useast5/tos-useast5-ve-0068c004-tx/79b7af4436d945c4a3481aee4a78ead8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2734&bt=1367&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=Nmc0NTw0ZDw6NTZlZjU5aEBpMzZpcDo6ZmdwZjMzZzczNEBgYzVfYC1jNjMxLV5eYjEwYSM2cS9ucjRvcTFgLS1kMS9zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/602b308a6749d86a8bd037869aa8c5dc/6319e58a/video/tos/useast5/tos-useast5-ve-0068c004-tx/79b7af4436d945c4a3481aee4a78ead8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2734&bt=1367&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=Nmc0NTw0ZDw6NTZlZjU5aEBpMzZpcDo6ZmdwZjMzZzczNEBgYzVfYC1jNjMxLV5eYjEwYSM2cS9ucjRvcTFgLS1kMS9zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/4d6d3fd05365420c8d6829e27387d929_1661562949~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=03fjs4oscYwzYWjpHQg5hhUiaDU%3D",
						"https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/4d6d3fd05365420c8d6829e27387d929_1661562949~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=YBWsvfVJofEH47M3Qq7fdydyxfA%3D"
					],
					"reflowCover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/15b6181d16e54655855517c3dde542e5_1661562950?x-expires=1662638400&x-signature=EMQJUOPwAKE4IBklljerIsqEyuA%3D",
					"bitrate": 1400317,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6905579940135273477",
					"uniqueId": "maxmayfieldsneckbrace",
					"nickname": "Urfavexhusband",
					"avatarThumb": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c721c35799b5bf2b554032f088665492~c5_100x100.jpeg?x-expires=1662789600&x-signature=w6lRlZ4vJelCV%2BijOMgAEfYJI1U%3D",
					"avatarMedium": "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c721c35799b5bf2b554032f088665492~c5_720x720.jpeg?x-expires=1662789600&x-signature=ktonw9FvK52E5sI9J4afa%2Flh%2FrY%3D",
					"avatarLarger": "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c721c35799b5bf2b554032f088665492~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=Bj5BhL%2FVIQ6k64BR6%2FtrvdnQVzY%3D",
					"signature": "Istg if you like that euphoria edit ima block you and please DONT SPAM LIKE🤬❤️",
					"verified": false,
					"secUid": "MS4wLjABAAAAMGZDAlWzYVzm1vJZbeUUworGCT9_Y5WlF4GEGl4-FbktKosxbmMSlVNLDT1KpqIR",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 0,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7136358461876652846",
					"title": "original sound",
					"playUrl": "https://sf16.tiktokcdn-us.com/obj/ies-music-tx/7136358499797191467.mp3",
					"coverThumb": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c721c35799b5bf2b554032f088665492~c5_100x100.jpeg?x-expires=1662789600&x-signature=w6lRlZ4vJelCV%2BijOMgAEfYJI1U%3D",
					"coverMedium": "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c721c35799b5bf2b554032f088665492~c5_720x720.jpeg?x-expires=1662789600&x-signature=ktonw9FvK52E5sI9J4afa%2Flh%2FrY%3D",
					"coverLarge": "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c721c35799b5bf2b554032f088665492~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=Bj5BhL%2FVIQ6k64BR6%2FtrvdnQVzY%3D",
					"authorName": "Urfavexhusband",
					"original": true,
					"duration": 21,
					"album": ""
				},
				"challenges": [
					{
						"id": "7132548853723496449",
						"title": "PartyWithVMAs",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": true
					}
				],
				"stats": {
					"diggCount": 167200,
					"shareCount": 1240,
					"commentCount": 1409,
					"playCount": 629200
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 67,
						"end": 81,
						"hashtagName": "partywithvmas",
						"hashtagId": "",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 383,
					"followerCount": 4404,
					"heartCount": 452000,
					"videoCount": 221,
					"diggCount": 18500,
					"heart": 452000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7132825019339787566",
				"desc": "Max’s Song (Vecna’s Version) #StrangerThings #Vecna #FallonTonight",
				"createTime": 1660740247,
				"video": {
					"id": "7132825019339787566",
					"height": 1024,
					"width": 576,
					"duration": 10,
					"ratio": "720p",
					"cover": "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/cf05038c5c43400fb3450728e3bf745b_1660740248~tplv-dmt-logom:tos-useast5-i-0068-tx/7ee270d64c9244e8add2ccdcaa13501b.image?x-expires=1662638400&x-signature=RrQ9omQrmi7NlmAsg5cRuJRxVOo%3D",
					"originCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/26c24e0b50354b40abe9d5f46e28ff07_1660740247?x-expires=1662638400&x-signature=ERQlPCcFvbM%2B6MW4R%2BpnC3qDAgQ%3D",
					"dynamicCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/2811276f4cdb45ff8d1774e4c3af62b1_1660740248?x-expires=1662638400&x-signature=FWRQH1r2puMj3jquOQmy33%2B1Hvg%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/2fcd093f9054a0debba76c300f656446/6319e57f/video/tos/useast5/tos-useast5-pve-0068-tx/62a3ccb90a9f477fa350e54ea77e0d00/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3474&bt=1737&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=ZjQ1PGg8ODk5Ozk4NGY1M0BpMzdtZ2c6ZjtoZTMzZzczNEBeNjMtNl9gX18xMzJjMC02YSMxZXIvcjRvMXJgLS1kMS9zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/2fcd093f9054a0debba76c300f656446/6319e57f/video/tos/useast5/tos-useast5-pve-0068-tx/62a3ccb90a9f477fa350e54ea77e0d00/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3474&bt=1737&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=ZjQ1PGg8ODk5Ozk4NGY1M0BpMzdtZ2c6ZjtoZTMzZzczNEBeNjMtNl9gX18xMzJjMC02YSMxZXIvcjRvMXJgLS1kMS9zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/26c24e0b50354b40abe9d5f46e28ff07_1660740247~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=2LPQvC4bhWTdEbbaCQ4WweWd9iM%3D",
						"https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/26c24e0b50354b40abe9d5f46e28ff07_1660740247~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=kaH9IrM7QL6cYg1XDgP8l8RL1z4%3D"
					],
					"reflowCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/cf05038c5c43400fb3450728e3bf745b_1660740248?x-expires=1662638400&x-signature=xaXpTXpNbJiH8dZW6m7av8exuqo%3D",
					"bitrate": 1778786,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6600107989528985606",
					"uniqueId": "fallontonight",
					"nickname": "FallonTonight",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/70dbe62216ea01e404908172c0e673d6~c5_100x100.jpeg?x-expires=1662789600&x-signature=%2FRTmm4EC3x4hglnTK%2F8%2BDg8eH7U%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/70dbe62216ea01e404908172c0e673d6~c5_720x720.jpeg?x-expires=1662789600&x-signature=2wkX921DPqpSbyGRpBnViCiNdPs%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/70dbe62216ea01e404908172c0e673d6~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=C4zL1xVeeDX8lFvq0YHcugCluG0%3D",
					"signature": "Official Account of The Tonight Show Starring Jimmy Fallon",
					"verified": true,
					"secUid": "MS4wLjABAAAAM3PechvFCeF9tQCQznyHMYzvfa-NirCBZ_Rt_nnREPbguE3yJCIT0XwcFBQ3jJ-i",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 0,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7132824939052174122",
					"title": "original sound",
					"playUrl": "https://sf16.tiktokcdn-us.com/obj/ies-music-tx/7132824990604462891.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/70dbe62216ea01e404908172c0e673d6~c5_100x100.jpeg?x-expires=1662789600&x-signature=%2FRTmm4EC3x4hglnTK%2F8%2BDg8eH7U%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/70dbe62216ea01e404908172c0e673d6~c5_720x720.jpeg?x-expires=1662789600&x-signature=2wkX921DPqpSbyGRpBnViCiNdPs%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/70dbe62216ea01e404908172c0e673d6~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=C4zL1xVeeDX8lFvq0YHcugCluG0%3D",
					"authorName": "FallonTonight",
					"original": true,
					"duration": 10,
					"album": ""
				},
				"challenges": [
					{
						"id": "551946",
						"title": "strangerthings",
						"desc": "Vecna awaits.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "42361501",
						"title": "vecna",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "12376824",
						"title": "fallontonight",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 172000,
					"shareCount": 924,
					"commentCount": 1295,
					"playCount": 1600000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 29,
						"end": 44,
						"hashtagName": "strangerthings",
						"hashtagId": "551946",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 45,
						"end": 51,
						"hashtagName": "vecna",
						"hashtagId": "42361501",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 52,
						"end": 66,
						"hashtagName": "fallontonight",
						"hashtagId": "12376824",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 292,
					"followerCount": 12500000,
					"heartCount": 344400000,
					"videoCount": 832,
					"diggCount": 414,
					"heart": 344400000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 9,
						"stickerText": [
							"       MAX’S SONG \n(VECNA’S VERSION) "
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7133289636574579974",
				"desc": "how did i not notice this --- #strangerthingsedit #strangerthingsedits #strangerthings #eleven #max ",
				"createTime": 1660848422,
				"video": {
					"id": "7133289636574579974",
					"height": 768,
					"width": 576,
					"duration": 7,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/58c1d9c2919d4865a3de965722ef1313_1660848424?x-expires=1662638400&x-signature=5Xgl5M4r6PlvWg%2FqeZ2syzFdpAU%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d308e07c864d417699ae2ee15462e571_1660848423?x-expires=1662638400&x-signature=PLdaAp0ICH2lKsaTPLB%2Fybe2j9o%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/0442d0df98e647268b543c8b60d7dbb4_1660848423?x-expires=1662638400&x-signature=hB7T%2Bd5jj5%2FRdL5qIUJE7LNVlTA%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/c3d196bbcc09dd365f7d6ef98f2905b4/6319e57c/video/tos/useast2a/tos-useast2a-pve-0068/2720c5bf8bbe4219a7b07e89dd778cb7/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1680&bt=840&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=ZTc1ODhoZmVmOWlmOWg8ZkBpajtyNjg6Zjw7ZTMzNzczM0A1XzZiXjYtXjYxMDMyLjJiYSMxcWktcjQwZXNgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/c3d196bbcc09dd365f7d6ef98f2905b4/6319e57c/video/tos/useast2a/tos-useast2a-pve-0068/2720c5bf8bbe4219a7b07e89dd778cb7/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1680&bt=840&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=ZTc1ODhoZmVmOWlmOWg8ZkBpajtyNjg6Zjw7ZTMzNzczM0A1XzZiXjYtXjYxMDMyLjJiYSMxcWktcjQwZXNgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/d308e07c864d417699ae2ee15462e571_1660848423~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=c45un343todHUMri3a0zoHBKr98%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/d308e07c864d417699ae2ee15462e571_1660848423~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=884pxCa4e726%2BmUkF4HfC8CpxHc%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/58c1d9c2919d4865a3de965722ef1313_1660848424?x-expires=1662638400&x-signature=5Xgl5M4r6PlvWg%2FqeZ2syzFdpAU%3D",
					"bitrate": 860252,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "7131086331127874565",
					"uniqueId": "editsth.aep",
					"nickname": "𝓣𝓱𝓪𝓵𝓵𝓮𝓼",
					"avatarThumb": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/69e0416c6383646fe48edf4dab10439c~c5_100x100.jpeg?x-expires=1662789600&x-signature=SfXnzCUryleRpe0Aocj8AXDQPS8%3D",
					"avatarMedium": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/69e0416c6383646fe48edf4dab10439c~c5_720x720.jpeg?x-expires=1662789600&x-signature=ZSOvS6A7HK1Fc5B61mIxY3cnPI4%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/69e0416c6383646fe48edf4dab10439c~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=q7mgmQihqwrdZhGGspr3uN%2FFNck%3D",
					"signature": "after effects",
					"verified": false,
					"secUid": "MS4wLjABAAAAWlvI13zL-cQAhKMkBqMo4WXI8uTIlMEMJweTBGIYPkeOydSH2EmMB6b00D_jJebA",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 0,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7133289645026118405",
					"title": "original sound",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7133289632413846277.mp3",
					"coverThumb": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/69e0416c6383646fe48edf4dab10439c~c5_100x100.jpeg?x-expires=1662789600&x-signature=SfXnzCUryleRpe0Aocj8AXDQPS8%3D",
					"coverMedium": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/69e0416c6383646fe48edf4dab10439c~c5_720x720.jpeg?x-expires=1662789600&x-signature=ZSOvS6A7HK1Fc5B61mIxY3cnPI4%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/69e0416c6383646fe48edf4dab10439c~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=q7mgmQihqwrdZhGGspr3uN%2FFNck%3D",
					"authorName": "𝓣𝓱𝓪𝓵𝓵𝓮𝓼",
					"original": true,
					"duration": 7,
					"album": ""
				},
				"challenges": [
					{
						"id": "28598137",
						"title": "strangerthingsedit",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "28346237",
						"title": "strangerthingsedits",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "551946",
						"title": "strangerthings",
						"desc": "Vecna awaits.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "114674",
						"title": "eleven",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "3137",
						"title": "max",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 630300,
					"shareCount": 2452,
					"commentCount": 4594,
					"playCount": 3200000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 30,
						"end": 49,
						"hashtagName": "strangerthingsedit",
						"hashtagId": "28598137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 50,
						"end": 70,
						"hashtagName": "strangerthingsedits",
						"hashtagId": "28346237",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 71,
						"end": 86,
						"hashtagName": "strangerthings",
						"hashtagId": "551946",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 87,
						"end": 94,
						"hashtagName": "eleven",
						"hashtagId": "114674",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 95,
						"end": 99,
						"hashtagName": "max",
						"hashtagId": "3137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 95,
					"followerCount": 33200,
					"heartCount": 3400000,
					"videoCount": 50,
					"diggCount": 6736,
					"heart": 3400000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7102844495691107590",
				"desc": "i'm back 🕴 #strangerthings #srangerthings4 #max #maxmayfield #sts4",
				"createTime": 1653759858,
				"video": {
					"id": "7102844495691107590",
					"height": 1016,
					"width": 576,
					"duration": 7,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ab7c1d08f62d465b990025db26f90bd0_1653759860?x-expires=1662638400&x-signature=JrswLrHFaSvgN8DW%2FgleV07Ir28%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7d391a88e5224a3e9d40989b6b28e649_1653759860?x-expires=1662638400&x-signature=6ul%2BDJudBvRJCvlGE3K7%2BNwxuSQ%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/a99d3b74512d49cc8bc70ddf05f1167d_1653759860?x-expires=1662638400&x-signature=TwCY6YMw%2Bp%2FCFneHbwbyqYnW0HY%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/94a35ad3f5bdb0e13f2feba06c9d8d66/6319e57c/video/tos/useast2a/tos-useast2a-ve-0068c004/f215e4ad9c3c4ad4b8f98401aa0616b2/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4012&bt=2006&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=O2U6ZWU6OWZlOmU1aTM2ZEBpamducjQ6ZjY4ZDMzNzgzM0A2Ml4uY15iXzQxYTIzNTYtYSNhZm0tcjRvcDZgLS1kLzZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/94a35ad3f5bdb0e13f2feba06c9d8d66/6319e57c/video/tos/useast2a/tos-useast2a-ve-0068c004/f215e4ad9c3c4ad4b8f98401aa0616b2/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=4012&bt=2006&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=O2U6ZWU6OWZlOmU1aTM2ZEBpamducjQ6ZjY4ZDMzNzgzM0A2Ml4uY15iXzQxYTIzNTYtYSNhZm0tcjRvcDZgLS1kLzZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/7d391a88e5224a3e9d40989b6b28e649_1653759860~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=SBP9CbT8h%2FpF4hzKTrdr0QzIra8%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/7d391a88e5224a3e9d40989b6b28e649_1653759860~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=s9e2v2ymnw5VmITkDUQ5Lc7vXdY%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ab7c1d08f62d465b990025db26f90bd0_1653759860?x-expires=1662638400&x-signature=JrswLrHFaSvgN8DW%2FgleV07Ir28%3D",
					"bitrate": 2055098,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6972595414147548166",
					"uniqueId": ".fraedits",
					"nickname": "Frank",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/893a0cd6b3345cc464354c78d15439ef~c5_100x100.jpeg?x-expires=1662789600&x-signature=4Z4%2BQ9D%2FHgVIw6TdT3C3%2B4mTkAI%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/893a0cd6b3345cc464354c78d15439ef~c5_720x720.jpeg?x-expires=1662789600&x-signature=jxaVU2n%2B7hZSf81n0uPdpHZiYmg%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/893a0cd6b3345cc464354c78d15439ef~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=Fejtqqp1%2BlNfxniCz51%2BROK2LPg%3D",
					"signature": "Muchas gracias por los 900k 😭🖤\nSpam de likes/bloqueo\nAfter effects",
					"verified": false,
					"secUid": "MS4wLjABAAAA4xi3Ggz7QnHmGOvyxVStKE5PLV3WmCcS68dVGXnNeKRwid82wuk_Lw2QS76RhNqA",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 3,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7102844488535575301",
					"title": "sonido original",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7102844471562455813.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/893a0cd6b3345cc464354c78d15439ef~c5_100x100.jpeg?x-expires=1662789600&x-signature=4Z4%2BQ9D%2FHgVIw6TdT3C3%2B4mTkAI%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/893a0cd6b3345cc464354c78d15439ef~c5_720x720.jpeg?x-expires=1662789600&x-signature=jxaVU2n%2B7hZSf81n0uPdpHZiYmg%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/893a0cd6b3345cc464354c78d15439ef~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=Fejtqqp1%2BlNfxniCz51%2BROK2LPg%3D",
					"authorName": "Frank",
					"original": true,
					"duration": 7,
					"album": ""
				},
				"challenges": [
					{
						"id": "551946",
						"title": "strangerthings",
						"desc": "Vecna awaits.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "1646484752926742",
						"title": "srangerthings4",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "3137",
						"title": "max",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "82069218",
						"title": "maxmayfield",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "88498968",
						"title": "sts4",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 394200,
					"shareCount": 10500,
					"commentCount": 2251,
					"playCount": 3600000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 12,
						"end": 27,
						"hashtagName": "strangerthings",
						"hashtagId": "551946",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 28,
						"end": 43,
						"hashtagName": "srangerthings4",
						"hashtagId": "1646484752926742",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 44,
						"end": 48,
						"hashtagName": "max",
						"hashtagId": "3137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 49,
						"end": 61,
						"hashtagName": "maxmayfield",
						"hashtagId": "82069218",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 62,
						"end": 67,
						"hashtagName": "sts4",
						"hashtagId": "88498968",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 181,
					"followerCount": 1100000,
					"heartCount": 52200000,
					"videoCount": 232,
					"diggCount": 13400,
					"heart": 52200000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7139942095124729134",
				"desc": "Go to college or get slimed hmmmm ",
				"createTime": 1662397316,
				"video": {
					"id": "7139942095124729134",
					"height": 1024,
					"width": 576,
					"duration": 6,
					"ratio": "720p",
					"cover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/27c9722b6615419583bb08696f611030?x-expires=1662638400&x-signature=lVQM01TVeMLGcRiPl76kr4gOeEA%3D",
					"originCover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/42e6ac2c27b440c6bba3a8059e4c444c_1662397317?x-expires=1662638400&x-signature=LIlqXDqRVVhzTAr5pybTjxrK9Cc%3D",
					"dynamicCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/19e5a3dcb8464cbb92279779df71615f_1662397318?x-expires=1662638400&x-signature=Kif%2FkuTEdNLvLW7UC7iTdmiPRUk%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/e2d2afa2337ec970632f9e8fefa0053b/6319e57b/video/tos/useast5/tos-useast5-ve-0068c003-tx/f937d79fb2f14bb5af1bec458b973121/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2504&bt=1252&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=OTM2NjtnMzk0MzVmZ2U2NEBpanRtcmc6ZnI1ZjMzZzczNEBhMC4yMDFjX14xYzUuNWE2YSNoM180cjQwaV9gLS1kMS9zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/e2d2afa2337ec970632f9e8fefa0053b/6319e57b/video/tos/useast5/tos-useast5-ve-0068c003-tx/f937d79fb2f14bb5af1bec458b973121/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2504&bt=1252&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=OTM2NjtnMzk0MzVmZ2U2NEBpanRtcmc6ZnI1ZjMzZzczNEBhMC4yMDFjX14xYzUuNWE2YSNoM180cjQwaV9gLS1kMS9zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/42e6ac2c27b440c6bba3a8059e4c444c_1662397317~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=XT7wwhgXGPwnZkKY5WBYVEfW704%3D",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/42e6ac2c27b440c6bba3a8059e4c444c_1662397317~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=hGOensZzBCFeCEbME7dG8RBFw%2Bc%3D"
					],
					"reflowCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/27c9722b6615419583bb08696f611030?x-expires=1662638400&x-signature=lVQM01TVeMLGcRiPl76kr4gOeEA%3D",
					"bitrate": 1282132,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "67872153039147008",
					"uniqueId": "max",
					"nickname": "MAX",
					"avatarThumb": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/07f424201bec536e324ab54e1ce855d0~c5_100x100.jpeg?x-expires=1662789600&x-signature=HpWXLJbSHV6bAiTxE%2Frh5SAAaFs%3D",
					"avatarMedium": "https://p19-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/07f424201bec536e324ab54e1ce855d0~c5_720x720.jpeg?x-expires=1662789600&x-signature=KlQ%2FqUGsZHHFsVYZZe93mMf1p5Y%3D",
					"avatarLarger": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/07f424201bec536e324ab54e1ce855d0~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=gdM0VdJB43j0qvy65Gy%2Fi4ve1tE%3D",
					"signature": "TOUR TICKETS👇🌶",
					"verified": true,
					"secUid": "MS4wLjABAAAAHNUDUGjvTdzRQ6OqgDOE4VkbztnDghejSSHc7GsuJMqSzHP9JmAIUDE19Va7EWdB",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 0,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "6987585589218773766",
					"title": "original sound",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6987585658973850373.mp3",
					"coverThumb": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/f6690fc6c839df424b40b5ed184005e0~c5_100x100.jpeg?x-expires=1662789600&x-signature=oFVDjTgsBEuq4IuhFiHy988n5m8%3D",
					"coverMedium": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/f6690fc6c839df424b40b5ed184005e0~c5_720x720.jpeg?x-expires=1662789600&x-signature=JDOsb3KJbfRzLKB2AHEi2Rmk2ug%3D",
					"coverLarge": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/f6690fc6c839df424b40b5ed184005e0~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=TF2po0BQSdMiLtHUMou8ydLDKgM%3D",
					"authorName": "TRINA VEGA FOR PRESIDENT",
					"original": true,
					"duration": 117,
					"album": ""
				},
				"stats": {
					"diggCount": 43400,
					"shareCount": 82,
					"commentCount": 163,
					"playCount": 244000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 411,
					"followerCount": 1200000,
					"heartCount": 31100000,
					"videoCount": 243,
					"diggCount": 1435,
					"heart": 31100000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 4,
						"stickerText": [
							"Pov: telling my parents I’m dropping out of NYU to be on Nickelodeon "
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7136377828752313605",
				"desc": "MAX FILTRA SU CANCIÓN #viral #fer #fyp #erafalsotodoloquemedijiste #fer💔😿#max 🩹🥺",
				"createTime": 1661567452,
				"video": {
					"id": "7136377828752313605",
					"height": 1248,
					"width": 576,
					"duration": 101,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/68dfd948be9c4dd2a48e31e21d29ee7e?x-expires=1662638400&x-signature=aIPfrm%2BqP1imnZdzkcH3a606GHg%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/00e7a818e6544bab85cd301d9cd45920_1661567454?x-expires=1662638400&x-signature=ZMWSm02OL6GMaEMi3KQMAwHvTeE%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d449cf8cd7f94d51bce9d468c7c74a43_1661567454?x-expires=1662638400&x-signature=mgl%2B4NV9PX%2F84a1%2BwD%2FTfSOerlM%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/ef2854fabb2f9a33793e05b51e9a020f/6319e5da/video/tos/useast2a/tos-useast2a-pve-0068/0665adab62b441f884716ef3ab71abdb/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1590&bt=795&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=aTNnNWg8O2c3OzNlZGRnOUBpanZoeDg6ZnFxZjMzNzczM0A1LWNhLl82Xi8xMi8vLjIyYSM2cmhxcjRvbjFgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/ef2854fabb2f9a33793e05b51e9a020f/6319e5da/video/tos/useast2a/tos-useast2a-pve-0068/0665adab62b441f884716ef3ab71abdb/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1590&bt=795&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=aTNnNWg8O2c3OzNlZGRnOUBpanZoeDg6ZnFxZjMzNzczM0A1LWNhLl82Xi8xMi8vLjIyYSM2cmhxcjRvbjFgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/00e7a818e6544bab85cd301d9cd45920_1661567454~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=q3bPvZQ7l3qyywld%2FwrG0xsTVdI%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/00e7a818e6544bab85cd301d9cd45920_1661567454~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=Wf0vKJEZbJ10eRokdtmkgRSXTIY%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/da6fb2e7940b95d4e39a527bc91481a3?x-expires=1662638400&x-signature=1qs%2BgIN3Kws0DLpHkr77ECMXpmA%3D",
					"bitrate": 814181,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6626435644426584070",
					"uniqueId": "katherinedb21",
					"nickname": "katte💎",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/abe1deb84e03fefc954c93610d894686~c5_100x100.jpeg?x-expires=1662789600&x-signature=Ex92URsORBYZtVstQps8JGwvFf8%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/abe1deb84e03fefc954c93610d894686~c5_720x720.jpeg?x-expires=1662789600&x-signature=mUFM76qyalp9tvjZiUAsR8k2HaU%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/abe1deb84e03fefc954c93610d894686~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=vv5at8Wxq77mEWLR6oxeQHP0i8A%3D",
					"signature": "Kate 💙\nsígueme en Instagram🥰",
					"verified": false,
					"secUid": "MS4wLjABAAAAdsnrtwGJMunV26SUQXFF6O3qzkbRSUjHuiSHS7G8bZL8qMi83Ndz8z-C8XDkgZZM",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 3,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7136377857890519814",
					"title": "si tocamoslaestrellas",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7136377875783617285.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/abe1deb84e03fefc954c93610d894686~c5_100x100.jpeg?x-expires=1662789600&x-signature=Ex92URsORBYZtVstQps8JGwvFf8%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/abe1deb84e03fefc954c93610d894686~c5_720x720.jpeg?x-expires=1662789600&x-signature=mUFM76qyalp9tvjZiUAsR8k2HaU%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/abe1deb84e03fefc954c93610d894686~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=vv5at8Wxq77mEWLR6oxeQHP0i8A%3D",
					"authorName": "katte💎",
					"original": true,
					"duration": 101,
					"album": ""
				},
				"challenges": [
					{
						"id": "20884",
						"title": "viral",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "267257",
						"title": "fer",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "229207",
						"title": "fyp",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "7136374918987874309",
						"title": "erafalsotodoloquemedijiste",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "7136377017024380933",
						"title": "fer💔😿",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "3137",
						"title": "max",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 100600,
					"shareCount": 321,
					"commentCount": 602,
					"playCount": 697000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 22,
						"end": 28,
						"hashtagName": "viral",
						"hashtagId": "20884",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 29,
						"end": 33,
						"hashtagName": "fer",
						"hashtagId": "267257",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 34,
						"end": 38,
						"hashtagName": "fyp",
						"hashtagId": "229207",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 39,
						"end": 66,
						"hashtagName": "erafalsotodoloquemedijiste",
						"hashtagId": "7136374918987874309",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 67,
						"end": 75,
						"hashtagName": "fer💔😿",
						"hashtagId": "7136377017024380933",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 75,
						"end": 79,
						"hashtagName": "max",
						"hashtagId": "3137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 1919,
					"followerCount": 3305,
					"heartCount": 105500,
					"videoCount": 105,
					"diggCount": 1043,
					"heart": 105500
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": false,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 4,
						"stickerText": [
							"Max sigue pensando en F3r"
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7134948491700227329",
				"desc": "i fucking hated him idk why tho lmao #max #thegrabber #theblackphone ",
				"createTime": 1661234659,
				"video": {
					"id": "7134948491700227329",
					"height": 960,
					"width": 540,
					"duration": 5,
					"ratio": "720p",
					"cover": "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/17fdace2d8b14b8289cc7400d65e4e68?x-expires=1662638400&x-signature=j2x4cHCvEBkKuNyYZJUIpZgit%2Fk%3D",
					"originCover": "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/cb0d0f41b2a247169c02476b683f6116_1661234660?x-expires=1662638400&x-signature=QVfUhjK9IrX%2FAHS%2F%2BM4KcLnZd5A%3D",
					"dynamicCover": "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/bc8774fd5ff9439cbc5b528bfc7443b8_1661234660?x-expires=1662638400&x-signature=UCPNkRQOWk61Ggu5%2FzG4ntsW33A%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/3e69aa96a9d9648fcc54db6a5f79a33d/6319e579/video/tos/alisg/tos-alisg-pve-0037c001/f7c89f6a35d44e43b18ccc59ab70c657/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2006&bt=1003&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=NjY0NDNpNTo4ZGU5Ozk0ZUBpM2Z2cWk6Zjg5ZjMzODczNEA1MmI2MV4uXzMxXi8tNmE1YSM0bC1ocjQwby9gLS1kMS1zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/3e69aa96a9d9648fcc54db6a5f79a33d/6319e579/video/tos/alisg/tos-alisg-pve-0037c001/f7c89f6a35d44e43b18ccc59ab70c657/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2006&bt=1003&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=NjY0NDNpNTo4ZGU5Ozk0ZUBpM2Z2cWk6Zjg5ZjMzODczNEA1MmI2MV4uXzMxXi8tNmE1YSM0bC1ocjQwby9gLS1kMS1zcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/cb0d0f41b2a247169c02476b683f6116_1661234660~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=SXG622u2Vdu7LXIhB6MggAzHwj8%3D",
						"https://p16-sign-sg.tiktokcdn.com/tos-alisg-p-0037/cb0d0f41b2a247169c02476b683f6116_1661234660~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=wVS8kBhZETh2BRmN1D5Xm5NWZqw%3D"
					],
					"reflowCover": "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/17fdace2d8b14b8289cc7400d65e4e68?x-expires=1662638400&x-signature=j2x4cHCvEBkKuNyYZJUIpZgit%2Fk%3D",
					"bitrate": 1027533,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6832940447267488774",
					"uniqueId": "_lostinthought_",
					"nickname": "Max <3",
					"avatarThumb": "https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a15d32270f598eb5cb23c056093be88c.jpeg?x-expires=1662789600&x-signature=BOt%2B73QWnplcq386rsFY7MpYSVg%3D",
					"avatarMedium": "https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/a15d32270f598eb5cb23c056093be88c.jpeg?x-expires=1662789600&x-signature=aaquEFDvsw7MIgnXYxwu%2B1vI38Y%3D",
					"avatarLarger": "https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/a15d32270f598eb5cb23c056093be88c.jpeg?x-expires=1662789600&x-signature=AguNRA1xHb%2BSIuB%2BtiGC%2BWKsTS8%3D",
					"signature": "Queensland \nIdk what i’m doing with my life\nminor",
					"verified": false,
					"secUid": "MS4wLjABAAAAcawuDbt7LORRzgyYhC9a6tTIoo6URpJFQyqDWTs5y69WS2UqtZQ-CKkOBCcGaGK-",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 1,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "7020921361199631109",
					"title": "Thats me if i gave af",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7020921505701759749.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/56eb2e2594348117b4a2c674820635b2~c5_100x100.jpeg?x-expires=1662789600&x-signature=aXQCxoiCq6%2F18%2Bt8525E4fvkFpY%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/56eb2e2594348117b4a2c674820635b2~c5_720x720.jpeg?x-expires=1662789600&x-signature=QjD0yYlGBDZ5f89QmY06a9zZ8AU%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/56eb2e2594348117b4a2c674820635b2~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=oMZ125hCaWJaOfw6NH6oQC94V7s%3D",
					"authorName": "AUSTIMUS PRIME🔱",
					"original": true,
					"duration": 12,
					"album": ""
				},
				"challenges": [
					{
						"id": "3137",
						"title": "max",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "6882157",
						"title": "thegrabber",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "1694680920221702",
						"title": "theblackphone",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 126800,
					"shareCount": 392,
					"commentCount": 3233,
					"playCount": 628800
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 37,
						"end": 41,
						"hashtagName": "max",
						"hashtagId": "3137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 42,
						"end": 53,
						"hashtagName": "thegrabber",
						"hashtagId": "6882157",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 54,
						"end": 68,
						"hashtagName": "theblackphone",
						"hashtagId": "1694680920221702",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 201,
					"followerCount": 2779,
					"heartCount": 218000,
					"videoCount": 231,
					"diggCount": 47000,
					"heart": 218000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 4,
						"stickerText": [
							"me when max d!ed"
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7106582458249923846",
				"desc": "Max 🎧 #strangerthings #strangerthings4 #max #netflix",
				"createTime": 1654630172,
				"video": {
					"id": "7106582458249923846",
					"height": 1026,
					"width": 576,
					"duration": 27,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/13be4cc2798441eea28b03d1b3d58140_1654630177?x-expires=1662638400&x-signature=jcxqijlpDMGZtpQWJBMEHdk7iDk%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2b11f6580ac344918799f38e579905cf_1654630174?x-expires=1662638400&x-signature=MCbI7T0VuzTfHTT4EovCxXAR%2Ftg%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d465afa303df4343bcd1fe5e32d713e4_1654630173?x-expires=1662638400&x-signature=Jy3xCaAfOHLjkNrU%2F8ab819E6u4%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/15440c41a7ec3735a461fd29f77a6a5d/6319e590/video/tos/useast2a/tos-useast2a-ve-0068c002/58f872f695dd42d2ae2e57bd2238010c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1210&bt=605&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=MzRkOmlnOTczaGU1PDw7OEBpajZ1Zzg6ZjZ0ZDMzNzczM0AyMzRhXl8xNjQxXl5gYTE2YSNfaV5mcjRnYmNgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/15440c41a7ec3735a461fd29f77a6a5d/6319e590/video/tos/useast2a/tos-useast2a-ve-0068c002/58f872f695dd42d2ae2e57bd2238010c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1210&bt=605&cs=0&ds=3&ft=ebtHKH-qMyq8Zzs_xhe2NxUGfl7Gb&mime_type=video_mp4&qs=0&rc=MzRkOmlnOTczaGU1PDw7OEBpajZ1Zzg6ZjZ0ZDMzNzczM0AyMzRhXl8xNjQxXl5gYTE2YSNfaV5mcjRnYmNgLS1kMTZzcw%3D%3D&l=20220908065205125DBACBD293E916E525",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/2b11f6580ac344918799f38e579905cf_1654630174~tplv-tiktok-play.jpeg?x-expires=1663221600&x-signature=oM9vR8JeR35gIxdR%2FEFQ6alpw8w%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/2b11f6580ac344918799f38e579905cf_1654630174~tplv-tiktokx-share-play.jpeg?x-expires=1663221600&x-signature=4f%2B5VpLPc1H6Or7%2B3FTndsDK8mY%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/13be4cc2798441eea28b03d1b3d58140_1654630177?x-expires=1662638400&x-signature=jcxqijlpDMGZtpQWJBMEHdk7iDk%3D",
					"bitrate": 620267,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6810617174593668102",
					"uniqueId": "joaodoce",
					"nickname": "Joao Doce",
					"avatarThumb": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/524df123b40efd26758bf36dde07024d~c5_100x100.jpeg?x-expires=1662789600&x-signature=15nZ9QXBu6ojiv27R2YdSZHMP7E%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/524df123b40efd26758bf36dde07024d~c5_720x720.jpeg?x-expires=1662789600&x-signature=GZNKPNU2Ug61tdNZd4ipY1M%2F4eM%3D",
					"avatarLarger": "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/524df123b40efd26758bf36dde07024d~c5_1080x1080.jpeg?x-expires=1662789600&x-signature=FXSrJOkYjtbjaWaRL1vE7ag9I5s%3D",
					"signature": "Sculpture Creator \ncontatojoaodoce@gmail.com",
					"verified": false,
					"secUid": "MS4wLjABAAAAUVorrc_7-V3v4utPsGDrQf254OLq7i0NVhLun04ehpmQeWAADdjXrkG2FM7Qdi3B",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 0,
					"stitchSetting": 0,
					"privateAccount": false,
					"downloadSetting": 0
				},
				"music": {
					"id": "235918692176371712",
					"title": "Running Up That Hill (A Deal With God)",
					"playUrl": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/6d335ac102544a6ab353728b2469dbd4",
					"coverThumb": "https://p16-sg.tiktokcdn.com/aweme/100x100/tos-alisg-v-2774/7fc1b50164d446079a4d03114dbe29cb.jpeg",
					"coverMedium": "https://p16-sg.tiktokcdn.com/aweme/200x200/tos-alisg-v-2774/7fc1b50164d446079a4d03114dbe29cb.jpeg",
					"coverLarge": "https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/7fc1b50164d446079a4d03114dbe29cb.jpeg",
					"authorName": "Kate Bush",
					"original": false,
					"duration": 30,
					"album": "Hounds Of Love"
				},
				"challenges": [
					{
						"id": "551946",
						"title": "strangerthings",
						"desc": "Vecna awaits.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/822d774c91b78a429b8246fdd668df87.jpeg",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "60865584",
						"title": "strangerthings4",
						"desc": "Have you watched Stranger Things season 4? What do you imagine part 2 will be like? Share your thoughts on the latest season of the show with hashtag #StrangerThings4 🎬 Remember, no spoilers!",
						"profileThumb": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/214bb9f2f7173e0adb1ac6bc4cb975dc.png",
						"profileMedium": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/214bb9f2f7173e0adb1ac6bc4cb975dc.png",
						"profileLarger": "https://p16-sg.tiktokcdn.com/obj/tiktok-obj/214bb9f2f7173e0adb1ac6bc4cb975dc.png",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "3137",
						"title": "max",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "37187",
						"title": "netflix",
						"desc": "",
						"profileThumb": "",
						"profileMedium": "",
						"profileLarger": "",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 2300000,
					"shareCount": 13600,
					"commentCount": 10600,
					"playCount": 18100000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 7,
						"end": 22,
						"hashtagName": "strangerthings",
						"hashtagId": "551946",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 23,
						"end": 39,
						"hashtagName": "strangerthings4",
						"hashtagId": "60865584",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 40,
						"end": 44,
						"hashtagName": "max",
						"hashtagId": "3137",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 45,
						"end": 53,
						"hashtagName": "netflix",
						"hashtagId": "37187",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					}
				],
				"secret": false,
				"forFriend": false,
				"digged": false,
				"itemCommentStatus": 0,
				"showNotPass": false,
				"vl1": false,
				"itemMute": false,
				"authorStats": {
					"followingCount": 342,
					"followerCount": 2900000,
					"heartCount": 48500000,
					"videoCount": 135,
					"diggCount": 6912,
					"heart": 48500000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"isAd": false
			}
		}
	],
	"qc": "",
	"cursor": 12,
	"has_more": 1,
	"ad_info": {},
	"extra": {
		"now": 1662619925000,
		"logid": "20220908065205125DBACBD293E916E525",
		"fatal_item_ids": [],
		"search_request_id": ""
	},
	"log_pb": {
		"impr_id": "20220908065205125DBACBD293E916E525"
	},
	"backtrace": ""
}

function App() {
	const [ data, setData ] = useState(results.data);

	const [ selectedPost, setSelectedPost ] = useState(null);
	const [ modalOpen, setModalOpen ] = useState(false);
	const accounts = data.filter(item => {
		return item.type === 4;
	});
	const posts = data.filter(item => {
		return item.type === 1;
	});
	return <main className="app">
		<Header/>
		<main className="main-container">
			<SideBar/>
			<div className="content content-container">
				<div className="post-item-list">
					{ posts.map(post => {
						return <PostItem key={post.item.id} post={ post.item }  setSelectedPost={ setSelectedPost } setModalOpen={ setModalOpen }/>
					}) }
				</div>
			
			</div>
			{ selectedPost && modalOpen  && <PostModal post={selectedPost} setModalOpen={setModalOpen} /> }
		</main>
	
	
	</main>
}

export default App;
