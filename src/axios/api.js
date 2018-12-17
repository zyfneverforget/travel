let host = 'http://rap2api.taobao.org/app/mock/119848'
let url = {
	home:  '/index',
	city:  '/city',
	detail:  '/detail'
}

for(let key in url){
	if(url.hasOwnProperty(key)){
		url[key] = host + url[key]
	}
}

export default url
