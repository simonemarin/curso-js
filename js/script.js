var url = 'myjson.json'

function AJAX(url, callback) {
var client = new XMLHttpRequest()
		client.onreadystatechange = function() {
			if (client.readyState == 4 && client.status == 200)
			callback(client.responseText)
		}
client.open('GET', url)
		client.send()
	}
	AJAX('/data.json', function(d) { console.log(JSON.parse(d)) })
