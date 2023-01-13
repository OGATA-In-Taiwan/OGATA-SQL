var redirect = ()=>{
	// 獲取裝置資訊
	let userAgent = navigator.userAgent.toLowerCase()
	/* 裝置資訊： */
	// 移動端：mozilla/5.0 (linux; android 6.0; nexus 5 build/mra58n) applewebkit/537.36 (khtml, like gecko) chrome/87.0.4280.88 mobile safari/537.36
	// PC端：mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/87.0.4280.88 safari/537.36
	
	// 用正則檢測裝置資訊
	let device = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/;
	
	if(device.test(userAgent)){//檢測出是移動端裝置
		document.getElementById(player).style.display = 'none'; // hide
	}else{
		document.getElementById(player-mobile).style.display = ''; // show
	}
}

redirect()
