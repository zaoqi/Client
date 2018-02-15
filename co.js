//  CrossOrigin
//  Copyright (C) 2017-2018  Zaoqi

//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU Affero General Public License as published
//  by the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.

//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU Affero General Public License for more details.

//  You should have received a copy of the GNU Affero General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
var CrossOrigin={};
(function(){

function http_build_query(data) {
	var r='';
	for(var k in data) {
		if(r=='') {
			r=encodeURIComponent(k)+'='+encodeURIComponent(data[k]);
		} else {
			r+='&'encodeURIComponent(k)+'='+encodeURIComponent(data[k]);
		}
	}
	return r;
}

CrossOrigin.get=function(url, data, onerror, callback) {
	var q=http_build_query(data||{});
	var u=url.indexOf('?')==-1?url+'?'+q:url+q;
	var req=new XMLHttpRequest();
	req.open('GET', 'http://crossorigin.byet.duckgaga.ga/json_get.php?f='+encodeURIComponent(u), true);
	req.onload = function() {
		if(req.status==200) {
			callback(req.responseText);
		} else {
			onerror();
		}
	}
	req.error = onerror;
	req.send();
}

})();
