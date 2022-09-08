import SideBar from "../components/SideBar/SideBar";
import PostModal from "../components/PostModal/PostModal";
import { useState } from "react";
import { AccountItem } from "../components/AccountItem/AccountItem";
import PostItem from "../components/PostItem/PostItem";
import Avatar from "../components/Avatar/Avatar";
const results =
	[
		{
			"type": 4,
			"user_list": [
				{
					"user_info": {
						"uid": "6971439945630401541",
						"nickname": "thereallisaann",
						"signature": "Living life to the fullest-1 chapter at a time. 2x Author Podcaster Sports Host",
						"avatar_thumb": {
							"uri": "tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b",
							"url_list": [
								"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_100x100.webp?x-expires=1662717600&x-signature=i8wWTMtFAp24z2JW0Gt4ycTof%2BQ%3D",
								"https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_100x100.jpeg?x-expires=1662717600&x-signature=iXP8M2n89uFgzZ9YrJa9nWbuBvw%3D"
							],
							"width": 720,
							"height": 720
						},
						"follow_status": 0,
						"follower_count": 51800,
						"custom_verify": "",
						"unique_id": "thereallisaann",
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
						"sec_uid": "MS4wLjABAAAAL2pDnluamd0fOL9rokSJmXF2L05HRNUxXX4zB2UqCAN5PDhVF9peJHRVpqzUQ1vl",
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
				"id": "7078702986083503403",
				"desc": "“This is your show.. don’t be a p*ssy” - Lisa Ann",
				"createTime": 1648138974,
				"video": {
					"id": "7078702986083503403",
					"height": 1024,
					"width": 576,
					"duration": 25,
					"ratio": "720p",
					"cover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/17e224f3ecf84bc3a75206464e8f389c_1648138976?x-expires=1662652800&x-signature=Pg3T%2FDi6O8ngoHHXe%2FbdBhAexVg%3D",
					"originCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/0c6eefa4610a4897b38934c5e20ce2e7_1648138974?x-expires=1662652800&x-signature=CR1CNy8tKJnOc1A5LNC6OEtiRY4%3D",
					"dynamicCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/26e7b7b43db94c90a14ec99cca6f7d52_1648138975?x-expires=1662652800&x-signature=atY4C%2B8bPxncC3cHF9kCQkV3FuM%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/86f4a81262c66a1bf16890ec26af17f6/631a171c/video/tos/useast5/tos-useast5-pve-0068-tx/9d04eb7e0f77452783ce8649fd4b3875/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1958&bt=979&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ODNlOmk2aDY5NGY1NDo1OkBpajptd2k6Zm88OzMzZzczNEAzMi81NGEzXjAxMWMyYmAwYSNgbzFycjRnaXJgLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/86f4a81262c66a1bf16890ec26af17f6/631a171c/video/tos/useast5/tos-useast5-pve-0068-tx/9d04eb7e0f77452783ce8649fd4b3875/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1958&bt=979&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ODNlOmk2aDY5NGY1NDo1OkBpajptd2k6Zm88OzMzZzczNEAzMi81NGEzXjAxMWMyYmAwYSNgbzFycjRnaXJgLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/0c6eefa4610a4897b38934c5e20ce2e7_1648138974~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=LRsMUAuixTeBAyb71t3vXcCVbaY%3D",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/0c6eefa4610a4897b38934c5e20ce2e7_1648138974~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=tip1VVW7eXBiUccLwUhDgiPHjeg%3D"
					],
					"reflowCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/17e224f3ecf84bc3a75206464e8f389c_1648138976?x-expires=1662652800&x-signature=Pg3T%2FDi6O8ngoHHXe%2FbdBhAexVg%3D",
					"bitrate": 1003214,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6662094461244342278",
					"uniqueId": "loweringthebar",
					"nickname": "Lowering The Bar",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1650034690911237~c5_100x100.jpeg?x-expires=1662804000&x-signature=VBiggFopVyVVhfRgsnQrrDnVy8o%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1650034690911237~c5_720x720.jpeg?x-expires=1662804000&x-signature=YjHFGUgm2yQDCpFPyXG0EhzswA4%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1650034690911237~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=aQxiYItAFxIObc2AI9h2gdhui4g%3D",
					"signature": "The Bar Has Never Been Lower ⬇️\nBarstool Sports - Youtube - IG",
					"verified": false,
					"secUid": "MS4wLjABAAAA6tQJwC0ye9TfGf1_ebCrgJ7flcOgL8K9l_ENf1bcPZ_qBnO3F-arV-9pMaI2uxHe",
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
					"id": "7078702949261642538",
					"title": "original sound",
					"playUrl": "https://sf19.tiktokcdn-us.com/obj/ies-music-tx/7078702986368797486.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1650034690911237~c5_100x100.jpeg?x-expires=1662804000&x-signature=VBiggFopVyVVhfRgsnQrrDnVy8o%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1650034690911237~c5_720x720.jpeg?x-expires=1662804000&x-signature=YjHFGUgm2yQDCpFPyXG0EhzswA4%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1650034690911237~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=aQxiYItAFxIObc2AI9h2gdhui4g%3D",
					"authorName": "Lowering The Bar",
					"original": true,
					"duration": 25,
					"album": ""
				},
				"stats": {
					"diggCount": 56100,
					"shareCount": 725,
					"commentCount": 398,
					"playCount": 1300000
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
					"followingCount": 194,
					"followerCount": 67900,
					"heartCount": 1000000,
					"videoCount": 565,
					"diggCount": 7893,
					"heart": 1000000
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
				"id": "7098806943044652330",
				"desc": "Foreign films 👀 #stiffsockspod",
				"createTime": 1652819790,
				"video": {
					"id": "7098806943044652330",
					"height": 1024,
					"width": 576,
					"duration": 40,
					"ratio": "720p",
					"cover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/0719c6b63b7a478c99598e0f2e869f1d?x-expires=1662652800&x-signature=8a%2BoTyo5%2BPzdPGobfZpx8LhIEMI%3D",
					"originCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/316b8f7884f44357a517b2fff14e0e7e_1652819791?x-expires=1662652800&x-signature=0gZjw9ugAFSNotPv2t5wbMUY41o%3D",
					"dynamicCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/6f1f0f28e28a43a1bfb488aa152add9d_1652819792?x-expires=1662652800&x-signature=VbCRLFwrNJ5FVcVrc0fnrCGma9k%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/b67014083980ba0ab96acb996cb3758d/631a172b/video/tos/useast5/tos-useast5-ve-0068c002-tx/9566c780729c4d9a865c5110639491e1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2468&bt=1234&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=NjkzZ2c0OjtlZWdnZzdlaEBpMzR5OjU6ZmkzZDMzZzczNEAxYF8tNl4zX2ExLWEvNTU0YSM2ZXEtcjQwYi9gLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/b67014083980ba0ab96acb996cb3758d/631a172b/video/tos/useast5/tos-useast5-ve-0068c002-tx/9566c780729c4d9a865c5110639491e1/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2468&bt=1234&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=NjkzZ2c0OjtlZWdnZzdlaEBpMzR5OjU6ZmkzZDMzZzczNEAxYF8tNl4zX2ExLWEvNTU0YSM2ZXEtcjQwYi9gLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/316b8f7884f44357a517b2fff14e0e7e_1652819791~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=a4YMIcrH40WxYSJRG8lC9Kfq8Tc%3D",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/316b8f7884f44357a517b2fff14e0e7e_1652819791~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=SY%2B8Sd8WC1HgfSB1FYV74KUo09U%3D"
					],
					"reflowCover": "https://p16-sign-sg.tiktokcdn.com/obj/v0201/a41c2596014c1f23dc1b9846d96f0557?x-expires=1662652800&x-signature=JDA9WXJI7m0kdcGks3lco%2BtqD70%3D",
					"bitrate": 1263863,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6738237865198748677",
					"uniqueId": "stiffsockspod",
					"nickname": "Stiff Socks Podcast",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_100x100.jpeg?x-expires=1662804000&x-signature=RvT1AK2UbcZxmhOLbQGIsHGML8g%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_720x720.jpeg?x-expires=1662804000&x-signature=NuBs9YQ9Ia2ZYb6enbtp2GzCes0%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=KYDJHbwF30hiDsRSHiN8lmNUV%2FU%3D",
					"signature": "Trevor Wallace & Michael Blaustein talk crazy. \nnew ep every wed + bonus eps ⤵️",
					"verified": true,
					"secUid": "MS4wLjABAAAAJ2Vyce4yrMfTxkzfEBEkV1eRK-8XpkPTwiMrOPoG8qUNuDKkg4ZpjyNp0bAV6HkA",
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
					"id": "7098806894587874094",
					"title": "original sound",
					"playUrl": "https://sf16.tiktokcdn-us.com/obj/ies-music-tx/7098806936988109610.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_100x100.jpeg?x-expires=1662804000&x-signature=RvT1AK2UbcZxmhOLbQGIsHGML8g%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_720x720.jpeg?x-expires=1662804000&x-signature=NuBs9YQ9Ia2ZYb6enbtp2GzCes0%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=KYDJHbwF30hiDsRSHiN8lmNUV%2FU%3D",
					"authorName": "Stiff Socks Podcast",
					"original": true,
					"duration": 40,
					"album": ""
				},
				"challenges": [
					{
						"id": "1645078777230342",
						"title": "stiffsockspod",
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
					"diggCount": 164600,
					"shareCount": 554,
					"commentCount": 224,
					"playCount": 1800000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 17,
						"end": 31,
						"hashtagName": "stiffsockspod",
						"hashtagId": "1645078777230342",
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
					"followerCount": 2300000,
					"heartCount": 64200000,
					"videoCount": 737,
					"diggCount": 252,
					"heart": 64200000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 4,
						"stickerText": [
							"Watching 🌽 with the GF",
							"With Lisa Ann"
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7020574971214777606",
				"desc": "#morph #retrospectiva #lisaann #fyp #fypシ #edit #trending #actress #model #vintage #parati",
				"createTime": 1634604990,
				"video": {
					"id": "7020574971214777606",
					"height": 1024,
					"width": 576,
					"duration": 9,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/29be920d8a194781afdfe92b4a326823~tplv-dmt-logom:tos-maliva-p-0000/a9020569eb0e434e8bc70cda700eb505.image?x-expires=1662652800&x-signature=%2BtyOE0d4ZNH0p5iMus0iYk%2Fk1C8%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/0b0afb712a414571bea2b104e4a1b25e_1634604991?x-expires=1662652800&x-signature=F%2B8WAq0u9XEPYWGG7ogAp3YXkfk%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e4952dfefb65459d929d5f5946bc6686_1634604991?x-expires=1662652800&x-signature=k0b8nD%2FV%2FD2CmjDBboTeMMI4jB0%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/4939dc387902bae9094c22717dcd3bd0/631a170c/video/tos/useast2a/tos-useast2a-pve-0068/baa980ee47374efaa11d2c2ed10bbba3/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2150&bt=1075&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=aTNoODxlZDpkNTM1N2VoNUBpajpkZDg6Znk0ODMzNzczM0AtLS42LTYuXmIxMV5iXl80YSNlYm4tcjRnYGtgLS1kMTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/4939dc387902bae9094c22717dcd3bd0/631a170c/video/tos/useast2a/tos-useast2a-pve-0068/baa980ee47374efaa11d2c2ed10bbba3/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2150&bt=1075&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=aTNoODxlZDpkNTM1N2VoNUBpajpkZDg6Znk0ODMzNzczM0AtLS42LTYuXmIxMV5iXl80YSNlYm4tcjRnYGtgLS1kMTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/0b0afb712a414571bea2b104e4a1b25e_1634604991~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=tn9x2CNNxK0OHNFwC3nhQw8%2FUWw%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/0b0afb712a414571bea2b104e4a1b25e_1634604991~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=dstullPogYvoz0auXhmngJ5MJOU%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/5e7689c7c9b4c0674d4e8bc0a60bb1e9?x-expires=1662652800&x-signature=lPreZ2tZEIhrR9YY68nzWR3BUBc%3D",
					"bitrate": 1101159,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6961870914347664390",
					"uniqueId": "aquagamer_",
					"nickname": "aquaGamer_",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/53e37abfd382b4fd8c3643f58dafca3b~c5_100x100.jpeg?x-expires=1662804000&x-signature=aOZ8VBqIJpzHv%2FVv7bHdkmgUriU%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/53e37abfd382b4fd8c3643f58dafca3b~c5_720x720.jpeg?x-expires=1662804000&x-signature=BRyjQnFFOo9n%2FQVz5nhh3%2FRLC%2Bs%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/53e37abfd382b4fd8c3643f58dafca3b~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=Mq2Hw2mw7l35gg5bda5jakVFab4%3D",
					"signature": "✨ 750k?✨ \nMi Twitter 👇",
					"verified": false,
					"secUid": "MS4wLjABAAAA11MOiX4kQljqntW0zHdX0bhofOUjleHzPP17TJwc_t2soK2KghU_l6yMXX705wYj",
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
					"id": "",
					"title": "original sound - aquaGamer_",
					"playUrl": "",
					"coverThumb": "",
					"coverMedium": "",
					"coverLarge": "",
					"original": false
				},
				"challenges": [
					{
						"id": "198457",
						"title": "morph",
						"desc": "Use our new Creative Effect and show us what you morph into.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/e7e512a61d79b9645ee55363882d2603",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/e7e512a61d79b9645ee55363882d2603",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/e7e512a61d79b9645ee55363882d2603",
						"coverThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/baa242e51d0a597804a97a3d941ee414",
						"coverMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/baa242e51d0a597804a97a3d941ee414",
						"coverLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/baa242e51d0a597804a97a3d941ee414",
						"isCommerce": false
					},
					{
						"id": "19581789",
						"title": "retrospectiva",
						"desc": "Será que você mudou muito com o passar dos anos? Ou continua com carinha de bebê? 🤨🕰 Use nosso novo modo de MV e faça a sua #retrospectiva",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/024a39fde162efdb30ce0e4440897a26",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/024a39fde162efdb30ce0e4440897a26",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/024a39fde162efdb30ce0e4440897a26",
						"coverThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/8514b9a6261d760cac5883ce67846b4d",
						"coverMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/8514b9a6261d760cac5883ce67846b4d",
						"coverLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/8514b9a6261d760cac5883ce67846b4d",
						"isCommerce": false
					},
					{
						"id": "15361007",
						"title": "lisaann",
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
						"id": "20105",
						"title": "trending",
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
						"id": "32241",
						"title": "actress",
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
						"id": "4361",
						"title": "model",
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
						"id": "21743",
						"title": "vintage",
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
					}
				],
				"stats": {
					"diggCount": 2519,
					"shareCount": 47,
					"commentCount": 38,
					"playCount": 187300
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 0,
						"end": 6,
						"hashtagName": "morph",
						"hashtagId": "198457",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 7,
						"end": 21,
						"hashtagName": "retrospectiva",
						"hashtagId": "19581789",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 22,
						"end": 30,
						"hashtagName": "lisaann",
						"hashtagId": "15361007",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
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
						"end": 41,
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
						"start": 42,
						"end": 47,
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
						"start": 48,
						"end": 57,
						"hashtagName": "trending",
						"hashtagId": "20105",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 58,
						"end": 66,
						"hashtagName": "actress",
						"hashtagId": "32241",
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
						"end": 73,
						"hashtagName": "model",
						"hashtagId": "4361",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 74,
						"end": 82,
						"hashtagName": "vintage",
						"hashtagId": "21743",
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
						"end": 90,
						"hashtagName": "parati",
						"hashtagId": "65243",
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
					"followingCount": 323,
					"followerCount": 727800,
					"heartCount": 6300000,
					"videoCount": 360,
					"diggCount": 14200,
					"heart": 6300000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 4,
						"stickerText": [
							"Lisa Ann"
						]
					},
					{
						"stickerType": 9,
						"stickerText": [
							"Retroespectiva de Lisa Ann"
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7133996902374231342",
				"desc": "Love this game! If you try it out let me know! #teachertiptuesday #teachertips #homeschooling #teachersoftiktok ",
				"createTime": 1661013094,
				"video": {
					"id": "7133996902374231342",
					"height": 1024,
					"width": 576,
					"duration": 31,
					"ratio": "720p",
					"cover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/e0b587012e2a459fa91e6d35d070f9d4_1661013102?x-expires=1662652800&x-signature=au1DZt%2B4SCJh%2BNToKjku7KpMLLA%3D",
					"originCover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/a23a14cbabf342a1b62b210e68a7f2c3_1661013096?x-expires=1662652800&x-signature=4KA2cjHNoWUQbMK1AXJTDrGi6k4%3D",
					"dynamicCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/adb1f898f3ae42f488c66630d96f216d_1661013095?x-expires=1662652800&x-signature=uxdMB5H0Arz%2FbNBclMPftHswGaU%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/e5ded48f4835239eae6e0fac1cb7a77d/631a1722/video/tos/useast5/tos-useast5-ve-0068c003-tx/78207fdf2d174517838a342ccc9a43d0/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2960&bt=1480&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZjNnODw7NGQ0aGk2OmdkZkBpam5oeWY6ZmZqZjMzZzczNEA1My5hMV9iNS4xXmAzNjZhYSMuZi9ocjQwai1gLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/e5ded48f4835239eae6e0fac1cb7a77d/631a1722/video/tos/useast5/tos-useast5-ve-0068c003-tx/78207fdf2d174517838a342ccc9a43d0/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2960&bt=1480&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZjNnODw7NGQ0aGk2OmdkZkBpam5oeWY6ZmZqZjMzZzczNEA1My5hMV9iNS4xXmAzNjZhYSMuZi9ocjQwai1gLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/a23a14cbabf342a1b62b210e68a7f2c3_1661013096~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=aAkls6D8Q5llmw0fVtamJuvv%2BTA%3D",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/a23a14cbabf342a1b62b210e68a7f2c3_1661013096~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=hyvUd8ZLn16%2By0ptfIT2Y%2FnatYc%3D"
					],
					"reflowCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/e0b587012e2a459fa91e6d35d070f9d4_1661013102?x-expires=1662652800&x-signature=au1DZt%2B4SCJh%2BNToKjku7KpMLLA%3D",
					"bitrate": 1515689,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6788215413186921478",
					"uniqueId": "terrificteaching",
					"nickname": "Lisa Ann",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/399490f2fdba9a76b9b67bc6a31d9074~c5_100x100.jpeg?x-expires=1662804000&x-signature=%2F4ESyvrlGsUVLbddmfh%2B5Hbs%2FbQ%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/399490f2fdba9a76b9b67bc6a31d9074~c5_720x720.jpeg?x-expires=1662804000&x-signature=PBoZ0ou1yY37%2Bc4spv72Enzwz7o%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/399490f2fdba9a76b9b67bc6a31d9074~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=iHLlbtGL817UQO9fogGs6g4opbU%3D",
					"signature": "Let’s school each other!",
					"verified": false,
					"secUid": "MS4wLjABAAAAaVRpMTdwf3AnnN18Lnf6jD2B5NxRsHNvQ2q1h2r947XN2ufu0Smz5GiRm1gLBZlq",
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
					"id": "6873574781875128322",
					"title": "Ukulele and whistling happy instrument(860804)",
					"playUrl": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tos-alisg-ve-2774/cc4231789f3f4af495fd4e7f3ac16196",
					"coverThumb": "https://p16-sg.tiktokcdn.com/aweme/100x100/tos-alisg-v-2774/43faa110cb7545508bcb8448e005da2d.jpeg",
					"coverMedium": "https://p16-sg.tiktokcdn.com/aweme/200x200/tos-alisg-v-2774/43faa110cb7545508bcb8448e005da2d.jpeg",
					"coverLarge": "https://p16-sg.tiktokcdn.com/aweme/720x720/tos-alisg-v-2774/43faa110cb7545508bcb8448e005da2d.jpeg",
					"authorName": "half-dim",
					"original": false,
					"duration": 133,
					"album": ""
				},
				"challenges": [
					{
						"id": "1663335273889798",
						"title": "teachertiptuesday",
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
						"id": "13058617",
						"title": "teachertips",
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
						"id": "5724856",
						"title": "homeschooling",
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
						"id": "1607493519937537",
						"title": "teachersoftiktok",
						"desc": "Here's to all the #TeachersOfTikTok.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/78925cf0efe2f0dd9f059692d04dfd27.png",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/78925cf0efe2f0dd9f059692d04dfd27.png",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/78925cf0efe2f0dd9f059692d04dfd27.png",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					}
				],
				"stats": {
					"diggCount": 21200,
					"shareCount": 1167,
					"commentCount": 51,
					"playCount": 280300
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 47,
						"end": 65,
						"hashtagName": "teachertiptuesday",
						"hashtagId": "1663335273889798",
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
						"end": 78,
						"hashtagName": "teachertips",
						"hashtagId": "13058617",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 79,
						"end": 93,
						"hashtagName": "homeschooling",
						"hashtagId": "5724856",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 94,
						"end": 111,
						"hashtagName": "teachersoftiktok",
						"hashtagId": "1607493519937537",
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
					"followingCount": 470,
					"followerCount": 68400,
					"heartCount": 1600000,
					"videoCount": 399,
					"diggCount": 12500,
					"heart": 1600000
				},
				"privateItem": false,
				"duetEnabled": false,
				"stitchEnabled": false,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7012502112957467930",
				"desc": "#CapCut please don’t under review my video 🥺( Lisa Ann🙈)  #foryou #foryoupage #fypシ #foryourpage #fyp #burhan_tv #standwithkashmir @tiktok @nimra.jutt1",
				"createTime": 1632725381,
				"video": {
					"id": "7012502112957467930",
					"height": 1168,
					"width": 540,
					"duration": 8,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/04999dffb2c04b3f9bdaa881cb82dd26_1632725383?x-expires=1662652800&x-signature=Re32jfF9iXaxvQoPGTlKff6PJzQ%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/6e79196194244947b8ef3537334448ca_1632725382?x-expires=1662652800&x-signature=Eo7Qhgu0hSHDvM0tlt43%2Fh%2FBjyg%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/be3deb27c0ec4d8d8f657606dba10301_1632725383?x-expires=1662652800&x-signature=%2BY3DjGZu3HKrX06vrcuye42%2Ff74%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/76936f2fbd450ca6f9d98850fff696d3/631a170b/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/49ee16af9f314419b922e8d7df292ed8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=714&bt=357&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=PDVoOTg7ZWY6aThpZDM8N0Bpam08ZGg6ZmRwODMzZjczM0BfLTEvNDItNjExNTAzLWFhYSNycGxwcjQwZTVgLS1kMWNzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/76936f2fbd450ca6f9d98850fff696d3/631a170b/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/49ee16af9f314419b922e8d7df292ed8/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=714&bt=357&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=PDVoOTg7ZWY6aThpZDM8N0Bpam08ZGg6ZmRwODMzZjczM0BfLTEvNDItNjExNTAzLWFhYSNycGxwcjQwZTVgLS1kMWNzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/6e79196194244947b8ef3537334448ca_1632725382~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=PbmC10YOFJutAHBG7eWzv9cB5qM%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-useast2a-p-0037-aiso/6e79196194244947b8ef3537334448ca_1632725382~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=8Yseuw4WfSoy9W028nPhRXOtWqc%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/04999dffb2c04b3f9bdaa881cb82dd26_1632725383?x-expires=1662652800&x-signature=Re32jfF9iXaxvQoPGTlKff6PJzQ%3D",
					"bitrate": 365631,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6607020332388876294",
					"uniqueId": "iamdaniyalll",
					"nickname": "Teddy Bear🧸❤️",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9a7069aafe0498188a3f18076ca15e5e~c5_100x100.jpeg?x-expires=1662804000&x-signature=vWnToYutDU1WThUpCVefIorA34g%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9a7069aafe0498188a3f18076ca15e5e~c5_720x720.jpeg?x-expires=1662804000&x-signature=1YrsVaeX4AfH5IHIbU4zgK%2BKK8U%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9a7069aafe0498188a3f18076ca15e5e~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=%2BcafVJDjVL4iDRyyJUJEaWRhMoo%3D",
					"signature": "❤️🥀اَلْحَمْدُ لِلّٰهِ\n\nMAYO RAJPOOT ❤️🥀",
					"verified": false,
					"secUid": "MS4wLjABAAAA1q8KVegWjiEnFiDediIXF6qt_R9DrUs1QZBhqWPkeMKNm0gIN6ZmctKCJNDwGX5S",
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
					"id": "6963617416328776453",
					"title": "Jimin is hot asf",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6967758412801346310.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c96ad212dd9fd94e6a4badefc207dfd9~c5_100x100.jpeg?x-expires=1662804000&x-signature=%2BYIMwrcgDOEheWpBPsiJozn1bC0%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c96ad212dd9fd94e6a4badefc207dfd9~c5_720x720.jpeg?x-expires=1662804000&x-signature=amENsEUKileGuGtLP%2BcxnXbQHTk%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c96ad212dd9fd94e6a4badefc207dfd9~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=rEAEuX7M8teG1YHeMw%2BvoWb0xYE%3D",
					"authorName": "𝑯",
					"original": true,
					"duration": 8,
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
						"id": "42164",
						"title": "foryou",
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
						"id": "1598498371111942",
						"title": "foryourpage",
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
						"id": "1640911455753222",
						"title": "burhan_tv",
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
						"id": "1624626732781573",
						"title": "standwithkashmir",
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
					"diggCount": 6013,
					"shareCount": 139,
					"commentCount": 239,
					"playCount": 205400
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
						"hashtagName": "",
						"hashtagId": "",
						"type": 0,
						"userId": "107955",
						"isCommerce": false,
						"userUniqueId": "tiktok",
						"secUid": "MS4wLjABAAAAv7iSuuXDJGDvJkmH_vz1qkDZYo1apxgzaxdBSeIuPiM",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 141,
						"end": 153,
						"hashtagName": "",
						"hashtagId": "",
						"type": 0,
						"userId": "6581512062777819141",
						"isCommerce": false,
						"userUniqueId": "nimra.jutt1",
						"secUid": "MS4wLjABAAAAXg39ae6lWmqU6ca_EbmOKqAto72GRNKo8OUVTsGY3RsDlM0-7pPJsFMfTnDaeANI",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 0,
						"end": 7,
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
						"start": 60,
						"end": 67,
						"hashtagName": "foryou",
						"hashtagId": "42164",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 68,
						"end": 79,
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
						"start": 80,
						"end": 85,
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
						"start": 86,
						"end": 98,
						"hashtagName": "foryourpage",
						"hashtagId": "1598498371111942",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 99,
						"end": 103,
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
						"start": 104,
						"end": 114,
						"hashtagName": "burhan_tv",
						"hashtagId": "1640911455753222",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 115,
						"end": 132,
						"hashtagName": "standwithkashmir",
						"hashtagId": "1624626732781573",
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
					"followingCount": 241,
					"followerCount": 109800,
					"heartCount": 1500000,
					"videoCount": 2801,
					"diggCount": 89600,
					"heart": 1500000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 4,
						"stickerText": [
							"I Am From 🇵🇰 but My ❤️Beats For🙈🤪",
							"Lisa Ann🤪😘"
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7106162266441125166",
				"desc": "Back in the office on a Monday - but you get a new ep of “Dudes Do Better” at 1pm et on my YouTube - #thereallisaann #lisaann #dudesdobetter #podcast #youtube",
				"createTime": 1654532335,
				"video": {
					"id": "7106162266441125166",
					"height": 1024,
					"width": 576,
					"duration": 15,
					"ratio": "720p",
					"cover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/8bb74d2e918b4bd0a236ed3b6213f110?x-expires=1662652800&x-signature=gauRuutq%2B76z1gIRTl4bUD8F8V4%3D",
					"originCover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/7d7fe74e509640c8a66600e2691c441a_1654532336?x-expires=1662652800&x-signature=rUhS71kXwj%2FKtUHh2tWlCwJN8eE%3D",
					"dynamicCover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/c127c19c9ed7469aa8ef488aed275375_1654532336?x-expires=1662652800&x-signature=D%2BFMLoxxszLzQuXPvZIMOHIIQiI%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/fb94d9f789d2f3b269aa9a3f555114c7/631a1712/video/tos/useast5/tos-useast5-ve-0068c004-tx/dc5dd414f5124ab9a0c700843be3a276/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2058&bt=1029&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=NTxkaGZlOWY2ZTc0OmQ6OkBpanFwPGc6ZjQ1ZDMzZzczNEBfYzEwMDVhXl8xLmEyYDIzYSNnXjVvcjRvZGNgLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/fb94d9f789d2f3b269aa9a3f555114c7/631a1712/video/tos/useast5/tos-useast5-ve-0068c004-tx/dc5dd414f5124ab9a0c700843be3a276/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2058&bt=1029&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=NTxkaGZlOWY2ZTc0OmQ6OkBpanFwPGc6ZjQ1ZDMzZzczNEBfYzEwMDVhXl8xLmEyYDIzYSNnXjVvcjRvZGNgLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/7d7fe74e509640c8a66600e2691c441a_1654532336~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=KWccOti7gjBrsiTquiqiooJxMlg%3D",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/7d7fe74e509640c8a66600e2691c441a_1654532336~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=HE2lGN4glLywtSsr9tHutURRjwc%3D"
					],
					"reflowCover": "https://p16-sign-sg.tiktokcdn.com/obj/v0201/9a2b66551a093990a341d9dcbb2840f3?x-expires=1662652800&x-signature=vCfibUTLJAAm%2BDWkdlMnJuLosVg%3D",
					"bitrate": 1053871,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6971439945630401541",
					"uniqueId": "thereallisaann",
					"nickname": "thereallisaann",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_100x100.jpeg?x-expires=1662804000&x-signature=Ud%2FA4MTUUXzciQdy9tbXIq%2BwNfU%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_720x720.jpeg?x-expires=1662804000&x-signature=HYwkJqXf1ti4O9OXTwlg9%2BY2TbU%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=tyg%2BoQTl1NK6dSCWzy%2FgU%2FB0yQ0%3D",
					"signature": "Living life to the fullest-1 chapter at a time. 2x Author Podcaster Sports Host",
					"verified": false,
					"secUid": "MS4wLjABAAAAL2pDnluamd0fOL9rokSJmXF2L05HRNUxXX4zB2UqCAN5PDhVF9peJHRVpqzUQ1vl",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 3,
					"stitchSetting": 1,
					"privateAccount": false,
					"downloadSetting": 3
				},
				"music": {
					"id": "7106162221255871278",
					"title": "original sound",
					"playUrl": "https://sf19.tiktokcdn-us.com/obj/ies-music-tx/7106162249970060074.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_100x100.jpeg?x-expires=1662804000&x-signature=Ud%2FA4MTUUXzciQdy9tbXIq%2BwNfU%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_720x720.jpeg?x-expires=1662804000&x-signature=HYwkJqXf1ti4O9OXTwlg9%2BY2TbU%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=tyg%2BoQTl1NK6dSCWzy%2FgU%2FB0yQ0%3D",
					"authorName": "thereallisaann",
					"original": true,
					"duration": 15,
					"album": ""
				},
				"challenges": [
					{
						"id": "1662268761917446",
						"title": "thereallisaann",
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
						"id": "15361007",
						"title": "lisaann",
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
						"id": "1674428825534469",
						"title": "dudesdobetter",
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
						"id": "3611815",
						"title": "podcast",
						"desc": "Grab your mic and show us your #Podcast.",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/d0e1c793a1e033bf84e3d6dc4d9a3718.jpeg",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/d0e1c793a1e033bf84e3d6dc4d9a3718.jpeg",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/d0e1c793a1e033bf84e3d6dc4d9a3718.jpeg",
						"coverThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/0ff39c5cb75bc42dc7d8fca612ab6f36.jpeg",
						"coverMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/0ff39c5cb75bc42dc7d8fca612ab6f36.jpeg",
						"coverLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/0ff39c5cb75bc42dc7d8fca612ab6f36.jpeg",
						"isCommerce": false
					},
					{
						"id": "7904",
						"title": "youtube",
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
					"diggCount": 9488,
					"shareCount": 56,
					"commentCount": 219,
					"playCount": 263700
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 101,
						"end": 116,
						"hashtagName": "thereallisaann",
						"hashtagId": "1662268761917446",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 117,
						"end": 125,
						"hashtagName": "lisaann",
						"hashtagId": "15361007",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 126,
						"end": 140,
						"hashtagName": "dudesdobetter",
						"hashtagId": "1674428825534469",
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
						"end": 149,
						"hashtagName": "podcast",
						"hashtagId": "3611815",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 150,
						"end": 158,
						"hashtagName": "youtube",
						"hashtagId": "7904",
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
					"followingCount": 88,
					"followerCount": 51800,
					"heartCount": 124500,
					"videoCount": 169,
					"diggCount": 932,
					"heart": 124500
				},
				"privateItem": false,
				"duetEnabled": false,
				"stitchEnabled": false,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "6969221625745132805",
				"desc": "#hub #LisaAnn",
				"createTime": 1622648360,
				"video": {
					"id": "6969221625745132805",
					"height": 1024,
					"width": 576,
					"duration": 38,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/bea9c32d1e374df0b7f8d6e7b113ea05?x-expires=1662652800&x-signature=aipyZO3%2BMioc4PqEJt8Xi6UDoTE%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9c78f5b9b5bc4fdbbe2b3ecc50fc037d_1622648362?x-expires=1662652800&x-signature=bvWS%2FCJQKx%2BXSbWwfl5dnBdzor8%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/da222b5823304fe1987760af48a7cbc0_1622648363?x-expires=1662652800&x-signature=MfODxAgFfPIbsoMs28uu9Rwru4c%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/b1cb870efe490fdf3f25b5102a5dfa82/631a1729/video/tos/useast2a/tos-useast2a-ve-0068c004/6524d1a6a61d4841a71673438d4b3aca/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=910&bt=455&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZzZlN2g5PDc0ZzZoNTlkNkBpMzd3M3BtZjV0NTMzNzczM0BfY2EwXi01NTQxYTQwLzJfYSNzZ25yaHJfX29gLS1kMTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/b1cb870efe490fdf3f25b5102a5dfa82/631a1729/video/tos/useast2a/tos-useast2a-ve-0068c004/6524d1a6a61d4841a71673438d4b3aca/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=910&bt=455&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZzZlN2g5PDc0ZzZoNTlkNkBpMzd3M3BtZjV0NTMzNzczM0BfY2EwXi01NTQxYTQwLzJfYSNzZ25yaHJfX29gLS1kMTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/9c78f5b9b5bc4fdbbe2b3ecc50fc037d_1622648362~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=WeZC7ZIKl0FuXMjUHeyGIxhD6hw%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/9c78f5b9b5bc4fdbbe2b3ecc50fc037d_1622648362~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=NJo%2BwbxuP6JGXuHLfv8gIPIAhjI%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/2fe4653c201a015ea8aad0d588c62cd1?x-expires=1662652800&x-signature=zd8vI57t1PkIKr5rLon9mD2kmo4%3D",
					"bitrate": 466813,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6968873510870107141",
					"uniqueId": "motivadorashistorias",
					"nickname": "Mujeres Empoderadas",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7f37b6d089912ed0573a81183ca1751b~c5_100x100.jpeg?x-expires=1662804000&x-signature=oNuJ4kcaQ4tstc%2BWmN8Yz2T2Ehw%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7f37b6d089912ed0573a81183ca1751b~c5_720x720.jpeg?x-expires=1662804000&x-signature=zpXttau%2FUJEFCnLDgmbtleusQus%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7f37b6d089912ed0573a81183ca1751b~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=bucmPHznK8cVbZQ9otqDhgZBi8A%3D",
					"signature": "Mujeres empoderadas cambiando la historia con sus talentos.",
					"verified": false,
					"secUid": "MS4wLjABAAAApEPorN8XWqHDuM4Nq7LBXEowBYiGhj6Iv2oKYFfOE9Ukr8Xjinfa8QUakqcF7FkP",
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
					"id": "6904829874091887365",
					"title": "orfeo remix used to know",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6904829942606269189.mp3",
					"coverThumb": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c0cc5d5a13c12150cd803644d4fa190c~c5_100x100.jpeg?x-expires=1662804000&x-signature=A5zfhkxgc9BI5NRWfoeWAR3kYQE%3D",
					"coverMedium": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c0cc5d5a13c12150cd803644d4fa190c~c5_720x720.jpeg?x-expires=1662804000&x-signature=9Y4eYtZ8Agx0kso9H3tG%2FlKI12I%3D",
					"coverLarge": "https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/c0cc5d5a13c12150cd803644d4fa190c~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=nXpwRaoLAsQKJv1PuPh5IKor00Y%3D",
					"authorName": "alena ☆",
					"original": true,
					"duration": 36,
					"album": ""
				},
				"challenges": [
					{
						"id": "488962",
						"title": "hub",
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
						"id": "15361007",
						"title": "lisaann",
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
					"diggCount": 2114,
					"shareCount": 56,
					"commentCount": 21,
					"playCount": 233400
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 0,
						"end": 4,
						"hashtagName": "hub",
						"hashtagId": "488962",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 5,
						"end": 13,
						"hashtagName": "lisaann",
						"hashtagId": "15361007",
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
					"followingCount": 5,
					"followerCount": 57100,
					"heartCount": 344900,
					"videoCount": 28,
					"diggCount": 0,
					"heart": 344900
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 4,
						"stickerText": [
							"Abogada habla con el fiscal para tratar de liberar a su cliente, acusado injustamente."
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7023432217720343814",
				"desc": "It’s soup season! #carrotsoup #ginger #cooking #lisaann #thereallisaann #healthylifestyle #healthydiet #3ingredientsrecipes",
				"createTime": 1635270245,
				"video": {
					"id": "7023432217720343814",
					"height": 1024,
					"width": 576,
					"duration": 180,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8ada7df74d7b42b3bde50a79b867e462?x-expires=1662652800&x-signature=ZR%2BEahSPWX565dJKTxe0Iwbvp7M%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9cb99815809d46e1962405f8541cbe58_1635270246?x-expires=1662652800&x-signature=nwZ4ieJpUsTV80fXmef6xJH4A7c%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/7d309cf6a4af4548beb22253427abc0b_1635270246?x-expires=1662652800&x-signature=hp0HEQVQATSH030qeMFzOUO0ORs%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/58bc75a01ff81c712c30465a8b9bbbb4/631a17b7/video/tos/useast5/tos-useast5-pve-0068-tx/e6e2c7e5c8964c8a9b6dae799690bb15/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2104&bt=1052&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZzM4aTUzaTUzNjM1Zjw4NUBpM3BsZWk6ZnM2ODMzNzczM0AwYDNeYl8xNl8xXzJfLy1hYSNpcW8vcjRfb3BgLS1kMTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/58bc75a01ff81c712c30465a8b9bbbb4/631a17b7/video/tos/useast5/tos-useast5-pve-0068-tx/e6e2c7e5c8964c8a9b6dae799690bb15/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2104&bt=1052&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZzM4aTUzaTUzNjM1Zjw4NUBpM3BsZWk6ZnM2ODMzNzczM0AwYDNeYl8xNl8xXzJfLy1hYSNpcW8vcjRfb3BgLS1kMTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/9cb99815809d46e1962405f8541cbe58_1635270246~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=7uN19lLzUpydi5smCKbJRBLunjk%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/9cb99815809d46e1962405f8541cbe58_1635270246~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=084eGMN%2FS7iIUELJeA5N01OYWwg%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8ada7df74d7b42b3bde50a79b867e462?x-expires=1662652800&x-signature=ZR%2BEahSPWX565dJKTxe0Iwbvp7M%3D",
					"bitrate": 1077491,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6971439945630401541",
					"uniqueId": "thereallisaann",
					"nickname": "thereallisaann",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_100x100.jpeg?x-expires=1662804000&x-signature=Ud%2FA4MTUUXzciQdy9tbXIq%2BwNfU%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_720x720.jpeg?x-expires=1662804000&x-signature=HYwkJqXf1ti4O9OXTwlg9%2BY2TbU%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=tyg%2BoQTl1NK6dSCWzy%2FgU%2FB0yQ0%3D",
					"signature": "Living life to the fullest-1 chapter at a time. 2x Author Podcaster Sports Host",
					"verified": false,
					"secUid": "MS4wLjABAAAAL2pDnluamd0fOL9rokSJmXF2L05HRNUxXX4zB2UqCAN5PDhVF9peJHRVpqzUQ1vl",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 3,
					"stitchSetting": 1,
					"privateAccount": false,
					"downloadSetting": 3
				},
				"music": {
					"id": "7023432145691511558",
					"title": "original sound",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7023432165828479750.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_100x100.jpeg?x-expires=1662804000&x-signature=Ud%2FA4MTUUXzciQdy9tbXIq%2BwNfU%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_720x720.jpeg?x-expires=1662804000&x-signature=HYwkJqXf1ti4O9OXTwlg9%2BY2TbU%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/98bb58bb507d0d6c22f32e84ba70f62b~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=tyg%2BoQTl1NK6dSCWzy%2FgU%2FB0yQ0%3D",
					"authorName": "thereallisaann",
					"original": true,
					"duration": 180,
					"album": ""
				},
				"challenges": [
					{
						"id": "17619120",
						"title": "carrotsoup",
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
						"id": "20457",
						"title": "ginger",
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
						"id": "18973",
						"title": "cooking",
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
						"id": "15361007",
						"title": "lisaann",
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
						"id": "1662268761917446",
						"title": "thereallisaann",
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
						"id": "332422",
						"title": "healthylifestyle",
						"desc": "Show us how you live a #HealthyLifestyle",
						"profileThumb": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/c47cb88838b762997fd888c717dba729",
						"profileMedium": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/c47cb88838b762997fd888c717dba729",
						"profileLarger": "https://p16-amd-va.tiktokcdn.com/obj/musically-maliva-obj/c47cb88838b762997fd888c717dba729",
						"coverThumb": "",
						"coverMedium": "",
						"coverLarger": "",
						"isCommerce": false
					},
					{
						"id": "12985582",
						"title": "healthydiet",
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
						"id": "1667822161817601",
						"title": "3ingredientsrecipes",
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
					"diggCount": 904,
					"shareCount": 19,
					"commentCount": 43,
					"playCount": 57700
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 18,
						"end": 29,
						"hashtagName": "carrotsoup",
						"hashtagId": "17619120",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 30,
						"end": 37,
						"hashtagName": "ginger",
						"hashtagId": "20457",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 38,
						"end": 46,
						"hashtagName": "cooking",
						"hashtagId": "18973",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 47,
						"end": 55,
						"hashtagName": "lisaann",
						"hashtagId": "15361007",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 56,
						"end": 71,
						"hashtagName": "thereallisaann",
						"hashtagId": "1662268761917446",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 72,
						"end": 89,
						"hashtagName": "healthylifestyle",
						"hashtagId": "332422",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 90,
						"end": 102,
						"hashtagName": "healthydiet",
						"hashtagId": "12985582",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 103,
						"end": 123,
						"hashtagName": "3ingredientsrecipes",
						"hashtagId": "1667822161817601",
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
					"followingCount": 88,
					"followerCount": 51800,
					"heartCount": 124500,
					"videoCount": 169,
					"diggCount": 932,
					"heart": 124500
				},
				"privateItem": false,
				"duetEnabled": false,
				"stitchEnabled": false,
				"shareEnabled": true,
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7096622747450690858",
				"desc": "@thereallisaann is savage #stiffsockspod",
				"createTime": 1652311243,
				"video": {
					"id": "7096622747450690858",
					"height": 1024,
					"width": 576,
					"duration": 31,
					"ratio": "720p",
					"cover": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/e49a8f836b9c4ce5b85f3fb5b6ff2182?x-expires=1662652800&x-signature=8xH7EEGp5I4KDCXiGiZVlq8DjGY%3D",
					"originCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/64ee67b624f146d49e32a6a1fc994ac2_1652311243?x-expires=1662652800&x-signature=LhuHvfeKwyLD14CrbhNwukjJC34%3D",
					"dynamicCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/baae7d80cfb44b8cb3434f2d689f81c2_1652311244?x-expires=1662652800&x-signature=bURNHTVbRnHKV55EKrUWOUF6%2Bgs%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/50f3e806e59280b52eef87fd75e85a8e/631a1722/video/tos/useast5/tos-useast5-ve-0068c002-tx/79d3641a68be41a8b1a64df6749cd59f/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2286&bt=1143&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZjxmZDxlZDs0aTQ5OGkzO0BpanZ2bTY6ZnQ3PDMzZzczNEAtMWJeLS41Nl8xLWAzMGI0YSMxbmlncjQwNHJgLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/50f3e806e59280b52eef87fd75e85a8e/631a1722/video/tos/useast5/tos-useast5-ve-0068c002-tx/79d3641a68be41a8b1a64df6749cd59f/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2286&bt=1143&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZjxmZDxlZDs0aTQ5OGkzO0BpanZ2bTY6ZnQ3PDMzZzczNEAtMWJeLS41Nl8xLWAzMGI0YSMxbmlncjQwNHJgLS1kMS9zcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/64ee67b624f146d49e32a6a1fc994ac2_1652311243~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=EB4%2B0rOqRnh777CUOkepqMeroGY%3D",
						"https://p19-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/64ee67b624f146d49e32a6a1fc994ac2_1652311243~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=%2F7aFK2qW1IPsbA9OwtsCkSBbAS0%3D"
					],
					"reflowCover": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/e49a8f836b9c4ce5b85f3fb5b6ff2182?x-expires=1662652800&x-signature=NlYyZJCgyQzcOTyzsT7la35LTqU%3D",
					"bitrate": 1171053,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6738237865198748677",
					"uniqueId": "stiffsockspod",
					"nickname": "Stiff Socks Podcast",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_100x100.jpeg?x-expires=1662804000&x-signature=RvT1AK2UbcZxmhOLbQGIsHGML8g%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_720x720.jpeg?x-expires=1662804000&x-signature=NuBs9YQ9Ia2ZYb6enbtp2GzCes0%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=KYDJHbwF30hiDsRSHiN8lmNUV%2FU%3D",
					"signature": "Trevor Wallace & Michael Blaustein talk crazy. \nnew ep every wed + bonus eps ⤵️",
					"verified": true,
					"secUid": "MS4wLjABAAAAJ2Vyce4yrMfTxkzfEBEkV1eRK-8XpkPTwiMrOPoG8qUNuDKkg4ZpjyNp0bAV6HkA",
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
					"id": "7096622723920808750",
					"title": "original sound",
					"playUrl": "https://sf16.tiktokcdn-us.com/obj/ies-music-tx/7096622751364205358.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_100x100.jpeg?x-expires=1662804000&x-signature=RvT1AK2UbcZxmhOLbQGIsHGML8g%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_720x720.jpeg?x-expires=1662804000&x-signature=NuBs9YQ9Ia2ZYb6enbtp2GzCes0%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1645077875535878~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=KYDJHbwF30hiDsRSHiN8lmNUV%2FU%3D",
					"authorName": "Stiff Socks Podcast",
					"original": true,
					"duration": 31,
					"album": ""
				},
				"challenges": [
					{
						"id": "1645078777230342",
						"title": "stiffsockspod",
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
					"diggCount": 223700,
					"shareCount": 516,
					"commentCount": 313,
					"playCount": 4100000
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 0,
						"end": 15,
						"hashtagName": "",
						"hashtagId": "",
						"type": 0,
						"userId": "6971439945630401541",
						"isCommerce": false,
						"userUniqueId": "thereallisaann",
						"secUid": "MS4wLjABAAAAL2pDnluamd0fOL9rokSJmXF2L05HRNUxXX4zB2UqCAN5PDhVF9peJHRVpqzUQ1vl",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 26,
						"end": 40,
						"hashtagName": "stiffsockspod",
						"hashtagId": "1645078777230342",
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
					"followerCount": 2300000,
					"heartCount": 64200000,
					"videoCount": 737,
					"diggCount": 252,
					"heart": 64200000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 4,
						"stickerText": [
							"With Lisa Ann",
							"How to ruin a man"
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "6894265136639397126",
				"desc": "Lisa Ann is a true professional",
				"createTime": 1605196261,
				"video": {
					"id": "6894265136639397126",
					"height": 1024,
					"width": 576,
					"duration": 55,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/166827f7daf647baa751934144e8d6e5_1605196264?x-expires=1662652800&x-signature=74UuIQVyjVFhMeDuBUVLAV2BzO4%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/43ece58a536d486f8189244092b1425e_1605196262?x-expires=1662652800&x-signature=N8ZpNeePzYuyucQFU4bfxIORcvo%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/9ec21d91540f4ac48cfd89e003409f8d_1605196262?x-expires=1662652800&x-signature=eJOTFqr8krVc5gAewoJdBxRFwNs%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/b4c54f84bd9547b75a8e9e2523280323/631a173a/video/tos/useast5/tos-useast5-ve-0068c003-tx/082d3ebf1f8f4765a39cb34cba3b55f6/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1510&bt=755&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=OTw3NTplNjc6OTg3NDM4OUBpanczNHFsO3FveDMzOjczM0AwYjUvL2JfNjMxMTNeX2AwYSNjNGFyZXAwZ2pfLS01MTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/b4c54f84bd9547b75a8e9e2523280323/631a173a/video/tos/useast5/tos-useast5-ve-0068c003-tx/082d3ebf1f8f4765a39cb34cba3b55f6/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1510&bt=755&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=OTw3NTplNjc6OTg3NDM4OUBpanczNHFsO3FveDMzOjczM0AwYjUvL2JfNjMxMTNeX2AwYSNjNGFyZXAwZ2pfLS01MTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/43ece58a536d486f8189244092b1425e_1605196262~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=rFlXtqPWyf93Sj9B8olldQVEOX8%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/43ece58a536d486f8189244092b1425e_1605196262~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=X0Qbk3755BwUrLx%2FemJoNxmb98k%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/166827f7daf647baa751934144e8d6e5_1605196264?x-expires=1662652800&x-signature=74UuIQVyjVFhMeDuBUVLAV2BzO4%3D",
					"bitrate": 773205,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "6646764999833403398",
					"uniqueId": "barstoolsports",
					"nickname": "Barstool Sports",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1622757102140422~c5_100x100.jpeg?x-expires=1662804000&x-signature=lvGM6qT08f0e83eGgy03qXBEFKQ%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1622757102140422~c5_720x720.jpeg?x-expires=1662804000&x-signature=04q4ZnP3owfKCgyWJALUsOJyH4w%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1622757102140422~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=MBs0eeiKup7ktwUIHeJVY%2FgQpwQ%3D",
					"signature": "🗣 Viva La Stool",
					"verified": true,
					"secUid": "MS4wLjABAAAAV-FnuTQImr7z9AvHTeDfA1zge-srWKQv8vEEQT5mKno29McR2xS1-br6cXWZUUHx",
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
					"id": "6894265266407000837",
					"title": "original sound",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/6894264782011124486.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1622757102140422~c5_100x100.jpeg?x-expires=1662804000&x-signature=lvGM6qT08f0e83eGgy03qXBEFKQ%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1622757102140422~c5_720x720.jpeg?x-expires=1662804000&x-signature=04q4ZnP3owfKCgyWJALUsOJyH4w%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1622757102140422~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=MBs0eeiKup7ktwUIHeJVY%2FgQpwQ%3D",
					"authorName": "Barstool Sports",
					"original": true,
					"duration": 55,
					"album": ""
				},
				"stats": {
					"diggCount": 60500,
					"shareCount": 546,
					"commentCount": 195,
					"playCount": 683700
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
					"followingCount": 149,
					"followerCount": 18400000,
					"heartCount": 1500000000,
					"videoCount": 7973,
					"diggCount": 881,
					"heart": 1500000000
				},
				"privateItem": false,
				"duetEnabled": true,
				"stitchEnabled": true,
				"shareEnabled": true,
				"stickersOnItem": [
					{
						"stickerType": 4,
						"stickerText": [
							"Barstool employees and Lisa Ann try “thick water” "
						]
					}
				],
				"isAd": false
			}
		},
		{
			"type": 1,
			"item": {
				"id": "7078928496545828102",
				"desc": "#kendralust #lisaann #jasminejae #nicoletteshea #nicoleaniston #lilyrader #khrizyangel #venbailalo #viral",
				"createTime": 1648191481,
				"video": {
					"id": "7078928496545828102",
					"height": 1024,
					"width": 576,
					"duration": 59,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/17f9957c3d52498aa4cfebc41938b467_1648191489?x-expires=1662652800&x-signature=RaVjWzIYI9IbW0sWGLsQ6JH5B70%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/3273dde42020446c8363e74f2ac576df_1648191482?x-expires=1662652800&x-signature=lnPSqqOzYyiuGbcQbUSda3DEQUg%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/e239ff392f424ebf90381346edbc4b30_1648191483?x-expires=1662652800&x-signature=h2MkKIeZurndjqkL8DT1o76tDa0%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/a58061595a85ae64afa3de0b7c364826/631a173e/video/tos/useast2a/tos-useast2a-ve-0068c003/8b6a2829d9754550b889125dd8693916/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2602&bt=1301&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=N2VoaGRlZzpmZDxnPGU6Z0BpamRlZTc6ZjtwOzMzNzgzM0AuLjM0MC4yXzAxLTQ2NV9fYSNuZ2IxcjRnYnJgLS1kLzZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/a58061595a85ae64afa3de0b7c364826/631a173e/video/tos/useast2a/tos-useast2a-ve-0068c003/8b6a2829d9754550b889125dd8693916/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2602&bt=1301&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=N2VoaGRlZzpmZDxnPGU6Z0BpamRlZTc6ZjtwOzMzNzgzM0AuLjM0MC4yXzAxLTQ2NV9fYSNuZ2IxcjRnYnJgLS1kLzZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/3273dde42020446c8363e74f2ac576df_1648191482~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=rEr4ZmAkjdZys5ZwXiaE2uAkado%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/3273dde42020446c8363e74f2ac576df_1648191482~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=6J1RIN8wgNPaUQraHysyP0PKZJc%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/17f9957c3d52498aa4cfebc41938b467_1648191489?x-expires=1662652800&x-signature=RaVjWzIYI9IbW0sWGLsQ6JH5B70%3D",
					"bitrate": 1332999,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "7072724940570969094",
					"uniqueId": "la_encontre_star",
					"nickname": "carlos flores513",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7072763564095700998~c5_100x100.jpeg?x-expires=1662804000&x-signature=Bq2ZFSDF%2BFETLpVP9wZpVX%2FSfAY%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7072763564095700998~c5_720x720.jpeg?x-expires=1662804000&x-signature=qL1thkkz2gm0iU%2FKeYpAEj8AmOQ%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7072763564095700998~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=LZRA51s5Ge1Y22%2Bv9qdIXbtNjcM%3D",
					"signature": "",
					"verified": false,
					"secUid": "MS4wLjABAAAAUZaNDK65FCimYDyuVBtweFi1C8p77HfAsF4cB2XEOs-B004kD7PmRrKlP093qSHF",
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
					"id": "7078928451717139205",
					"title": "sonido original",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7078928473120606981.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7072763564095700998~c5_100x100.jpeg?x-expires=1662804000&x-signature=Bq2ZFSDF%2BFETLpVP9wZpVX%2FSfAY%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7072763564095700998~c5_720x720.jpeg?x-expires=1662804000&x-signature=qL1thkkz2gm0iU%2FKeYpAEj8AmOQ%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7072763564095700998~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=LZRA51s5Ge1Y22%2Bv9qdIXbtNjcM%3D",
					"authorName": "carlos flores513",
					"original": true,
					"duration": 59,
					"album": ""
				},
				"challenges": [
					{
						"id": "43678620",
						"title": "kendralust",
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
						"id": "15361007",
						"title": "lisaann",
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
						"id": "51031083",
						"title": "jasminejae",
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
						"id": "1595808584152069",
						"title": "nicoletteshea",
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
						"id": "1636060975764486",
						"title": "nicoleaniston",
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
						"id": "3713833",
						"title": "lilyrader",
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
						"id": "8108706",
						"title": "khrizyangel",
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
						"id": "35403",
						"title": "venbailalo",
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
					}
				],
				"stats": {
					"diggCount": 7785,
					"shareCount": 183,
					"commentCount": 109,
					"playCount": 412300
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 0,
						"end": 11,
						"hashtagName": "kendralust",
						"hashtagId": "43678620",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 12,
						"end": 20,
						"hashtagName": "lisaann",
						"hashtagId": "15361007",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 21,
						"end": 32,
						"hashtagName": "jasminejae",
						"hashtagId": "51031083",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 33,
						"end": 47,
						"hashtagName": "nicoletteshea",
						"hashtagId": "1595808584152069",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 48,
						"end": 62,
						"hashtagName": "nicoleaniston",
						"hashtagId": "1636060975764486",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 63,
						"end": 73,
						"hashtagName": "lilyrader",
						"hashtagId": "3713833",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 74,
						"end": 86,
						"hashtagName": "khrizyangel",
						"hashtagId": "8108706",
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
						"end": 98,
						"hashtagName": "venbailalo",
						"hashtagId": "35403",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 99,
						"end": 105,
						"hashtagName": "viral",
						"hashtagId": "20884",
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
					"followingCount": 1,
					"followerCount": 31100,
					"heartCount": 141400,
					"videoCount": 36,
					"diggCount": 2,
					"heart": 141400
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
				"id": "7102143422584114437",
				"desc": "#lisaann #Viral #parati #ganzo #fyp #apoyen #aplausossinmanos😏😜",
				"createTime": 1653596626,
				"video": {
					"id": "7102143422584114437",
					"height": 1024,
					"width": 576,
					"duration": 11,
					"ratio": "720p",
					"cover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/db6771faf7d84316ae07c0cfc7d03b26?x-expires=1662652800&x-signature=vcGcUwPoPGr8AXK3qaiQy%2FLRqdI%3D",
					"originCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/d80627c9e2454dbc84a72e931fa65d77_1653596626?x-expires=1662652800&x-signature=BlZDB05eiRBdTHEGYOqko9KoJMw%3D",
					"dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/8a0acfd685ff4ceeb232671b44d7cd06_1653596627?x-expires=1662652800&x-signature=wzsEaLUebRChL5rH7tJ7BoFeulY%3D",
					"playAddr": "https://v16m-webapp.tiktokcdn-us.com/8c97eb82d591fe7665ce6a0b87dbf358/631a170e/video/tos/useast5/tos-useast5-ve-0068c799-tx/9d3bca5003bc4623b6c3b9b44f7c6539/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1056&bt=528&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZThoODk7ZmQ6NTZpNTs6ZEBpM3k8bGU6Zmt4ZDMzNzczM0BjNDFeYmFjNi0xLi9iYC9eYSMzc2tjcjRnMDRgLS1kMTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"downloadAddr": "https://v16m-webapp.tiktokcdn-us.com/8c97eb82d591fe7665ce6a0b87dbf358/631a170e/video/tos/useast5/tos-useast5-ve-0068c799-tx/9d3bca5003bc4623b6c3b9b44f7c6539/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1056&bt=528&cs=0&ds=3&ft=ebtHKH-qMyq8Znfvxhe2Nsz7fl7Gb&mime_type=video_mp4&qs=0&rc=ZThoODk7ZmQ6NTZpNTs6ZEBpM3k8bGU6Zmt4ZDMzNzczM0BjNDFeYmFjNi0xLi9iYC9eYSMzc2tjcjRnMDRgLS1kMTZzcw%3D%3D&l=20220908102330790CEF6678908A1DF78B",
					"shareCover": [
						"",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/d80627c9e2454dbc84a72e931fa65d77_1653596626~tplv-tiktok-play.jpeg?x-expires=1663236000&x-signature=TVjnkiP2gjpO3100vp1VZ4VOW9k%3D",
						"https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/d80627c9e2454dbc84a72e931fa65d77_1653596626~tplv-tiktokx-share-play.jpeg?x-expires=1663236000&x-signature=8OwLfYHEnmFymQRwUiAv8hYvOmc%3D"
					],
					"reflowCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/db6771faf7d84316ae07c0cfc7d03b26?x-expires=1662652800&x-signature=vcGcUwPoPGr8AXK3qaiQy%2FLRqdI%3D",
					"bitrate": 541642,
					"encodedType": "normal",
					"format": "mp4",
					"videoQuality": "normal",
					"encodeUserTag": ""
				},
				"author": {
					"id": "7055531139839083526",
					"uniqueId": "mr_xxx35a",
					"nickname": "2 xxx señor",
					"avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8af6b1b256245c498f9acb1de4fe573b~c5_100x100.jpeg?x-expires=1662804000&x-signature=JnhQr5%2BmC0kA%2Fdhzw0ea1HEaDXY%3D",
					"avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8af6b1b256245c498f9acb1de4fe573b~c5_720x720.jpeg?x-expires=1662804000&x-signature=oyOhqMo%2FNCWcviUeOMz7mTTv5iQ%3D",
					"avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8af6b1b256245c498f9acb1de4fe573b~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=lhpA8jm6kJHoVmkjfuIQfU8BT7M%3D",
					"signature": "No Olviden su 👍 y unirse para mas contenido\n👉  https://t.me/+vncMwH2Lljk1Mzhh",
					"verified": false,
					"secUid": "MS4wLjABAAAA3RA532K9MHDy68WWyEYi2Ya6mqpxxzvNmSO-ELkTAwVNwFMoPy6Ap6ACqhqLhpNl",
					"secret": false,
					"ftc": false,
					"relation": 0,
					"openFavorite": false,
					"commentSetting": 0,
					"duetSetting": 3,
					"stitchSetting": 3,
					"privateAccount": false,
					"downloadSetting": 3
				},
				"music": {
					"id": "7069798820334357254",
					"title": "sonido original",
					"playUrl": "https://sf16-ies-music-va.tiktokcdn.com/obj/musically-maliva-obj/7069798820062448389.mp3",
					"coverThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/982b970a238ae4a04c1916f8a349948e~c5_100x100.jpeg?x-expires=1662804000&x-signature=k0iQn%2BiXrCPy4BlaM28HiiNFsJc%3D",
					"coverMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/982b970a238ae4a04c1916f8a349948e~c5_720x720.jpeg?x-expires=1662804000&x-signature=03SufYo6ZYzYAt1uYKNiY8WVzX8%3D",
					"coverLarge": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/982b970a238ae4a04c1916f8a349948e~c5_1080x1080.jpeg?x-expires=1662804000&x-signature=X1SlkwRRMaXSkL49HIozPRYwwYQ%3D",
					"authorName": "Judacny Rondon",
					"original": true,
					"duration": 13,
					"album": ""
				},
				"challenges": [
					{
						"id": "15361007",
						"title": "lisaann",
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
						"id": "47241",
						"title": "ganzo",
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
						"id": "5671028",
						"title": "apoyen",
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
						"id": "1663560836642821",
						"title": "aplausossinmanos😏😜",
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
					"diggCount": 4480,
					"shareCount": 35,
					"commentCount": 17,
					"playCount": 275600
				},
				"duetInfo": {
					"duetFromId": "0"
				},
				"originalItem": false,
				"officalItem": false,
				"textExtra": [
					{
						"awemeId": "",
						"start": 0,
						"end": 8,
						"hashtagName": "lisaann",
						"hashtagId": "15361007",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
					{
						"awemeId": "",
						"start": 9,
						"end": 15,
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
						"start": 16,
						"end": 23,
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
						"start": 24,
						"end": 30,
						"hashtagName": "ganzo",
						"hashtagId": "47241",
						"type": 1,
						"userId": "",
						"isCommerce": false,
						"userUniqueId": "",
						"secUid": "",
						"subType": 0
					},
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
						"end": 43,
						"hashtagName": "apoyen",
						"hashtagId": "5671028",
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
						"end": 65,
						"hashtagName": "aplausossinmanos😏😜",
						"hashtagId": "1663560836642821",
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
					"followingCount": 4709,
					"followerCount": 11600,
					"heartCount": 54400,
					"videoCount": 70,
					"diggCount": 12400,
					"heart": 54400
				},
				"privateItem": false,
				"duetEnabled": false,
				"stitchEnabled": false,
				"shareEnabled": true,
				"isAd": false
			}
		}
	]

export default function SearchResultsPage() {
	const [ data, setData ] = useState(results);
	const [ selectedPost, setSelectedPost ] = useState(null);
	const [ modalOpen, setModalOpen ] = useState(false);
	const accounts = data.filter(item => {
		return item.type === 4;
	})[0].user_list
	
	const posts = data.filter(item => {
		return item.type === 1;
	});
	return <main className="search-results main-container">
		
			<SideBar/>
			<div className="content content-container">
				<h2 style={{marginBottom: "20px"}}>Accounts</h2>
				{ accounts.map(account => {
					return <AccountItem account={account} />
				}) }
				<h2 style={{marginBottom: "20px"}}>Videos</h2>
				<div className="post-item-list">
					{ posts.map(post => {
						return <PostItem key={post.item.id} post={ post.item }  setSelectedPost={ setSelectedPost } setModalOpen={ setModalOpen }/>
					}) }
				</div>
			
			</div>
			{ selectedPost && modalOpen  && <PostModal post={selectedPost} setModalOpen={setModalOpen} /> }
	
		<SideBar/>
	</main>
}