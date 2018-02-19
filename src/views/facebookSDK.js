(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=1154923567943109';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

 window.fbAsyncInit = function(){  // this gets triggered when FB object gets initialized
	console.log("FB Object initiated");
	FB.XFBML.parse(); // now we can safely call parse method
};