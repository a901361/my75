var a = document.body;
var b = 100;
var h = document.createElement('div');
var g = document.createElement('div');
var f = document.createElement('div');
var e = document.createElement('img');
var d = document.createElement('img');
var c = document.createElement('img');
var ka = document.createElement('img');
var ae = document.createElement('a');
var ad = document.createElement('a');
var ac = document.createElement('a');
var aka = document.createElement('a');
var dn = document.createElement('div');
var da = document.createElement('div');

setTimeout(function() {
	a.setAttribute('style', 'padding-top: ' + b + 'px;')
	h.setAttribute('style', 'position: relative;padding: 0;margin: 0;margin-top: -' + b + 'px;height: ' + b +
		'px;background-color: rgba(255,255,255,0);width: 100%;');
	// h.setAttribute('id','httplunbo1818118toptopjs_div_a');
	a.insertBefore(h, a.childNodes[0]);
	g.setAttribute('style', 'padding: 0;margin: 0;width: 100%;height: 100%;text-align: center;');
	f.setAttribute('style', 'display: none;');
	h.appendChild(g);
	h.appendChild(f);
	ae.setAttribute('href', 'https://1495p4.com:8080/PageRegister?Agent=vip405');
	ae.setAttribute('target', '_blank');
	ad.setAttribute('href', 'https://1495p4.com:8080/PageRegister?Agent=vip405');
	ad.setAttribute('target', '_blank');
	ac.setAttribute('href', 'https://1495p4.com:8080/PageRegister?Agent=vip405');
	ac.setAttribute('target', '_blank');
	aka.setAttribute('href', 'https://1495p4.com:8080/PageRegister?Agent=vip405');
	aka.setAttribute('target', '_blank');
	g.appendChild(ae);
	f.appendChild(ad);
	f.appendChild(ac);
	f.appendChild(aka);
	e.setAttribute('src', 'https://cdn.jsdelivr.net/gh/a901361/my75@1.6/22d3e126009f6dd2.gif');
	e.setAttribute('style', 'height:100%; width:100%; border:0;');
	d.setAttribute('src', 'https://cdn.jsdelivr.net/gh/a901361/my75@1.6/22d3e126009f6dd2.gif');
	d.setAttribute('style', 'height:100%; width:100%; border:0;');
	c.setAttribute('src', 'https://cdn.jsdelivr.net/gh/a901361/my75@1.6/22d3e126009f6dd2.gif');
	c.setAttribute('style', 'height:100%; width:100%; border:0;');
	ka.setAttribute('src', 'https://cdn.jsdelivr.net/gh/a901361/my75@1.6/22d3e126009f6dd2.gif');
	ka.setAttribute('style', 'height:100%; width:100%; border:0;');
	ae.appendChild(e);
	ad.appendChild(d);
	ac.appendChild(c);
	aka.appendChild(ka);
  	dn.setAttribute('style', 'position: absolute;left: 20px;top: 100px;height: 20px;width: 20px;border-left: 2px solid rgba(255,255,255,1);border-top: 2px solid rgba(255,255,255,1);transform:rotate(-45deg);');
  	dn.setAttribute('onclick','last()');
  	da.setAttribute('style', 'position: absolute;right: 20px;top: 100px;height: 20px;width: 20px;border-right: 2px solid rgba(255,255,255,1);border-bottom: 2px solid rgba(255,255,255,1);transform:rotate(-45deg);');
  	da.setAttribute('onclick','next()');
  	h.appendChild(dn);
  	h.appendChild(da);
}, 700);
setInterval(function() {
	next();
}, 3000);
function next(){
	g.insertBefore(f.lastChild, g.childNodes[0]);
	f.insertBefore(g.lastChild, f.childNodes[0]);
}
function last(){
	g.insertBefore(f.firstChild, g.childNodes[0]);
	f.appendChild(g.lastChild);
}