let mon = document.querySelector(".monster"),
monPos = mon.getBoundingClientRect(),
monstDiv = document.querySelector(".monstDiv"),
life = document.querySelector(".life"),
los = document.querySelector(".lose"),
gans = document.querySelector(".gans"),
monXp = document.querySelector(".monXp"),radiuss
radiuss = document.querySelector(".radiuss"),
balPlus = document.querySelector(".balPlus"),

game = document.querySelector(".game"),
login = document.querySelector(".login"),
loginInput = document.querySelector(".loginInput"),
loginBut = document.querySelector(".loginBut"),

info = document.querySelector(".info"),
infoText = document.querySelectorAll(".infoText"),
radiusDiv = document.querySelectorAll(".radiusDiv"),
card = document.querySelectorAll(".card"),
delDiv = document.querySelector(".delDiv"),
map = document.querySelector(".map").getBoundingClientRect(),
radiusCat = document.querySelector(".radiusCat"),
radiusVi = document.querySelector(".radiusVi"),
radiusNi = document.querySelector(".radiusNi"),
del = document.querySelector(".del"),
grass = document.querySelectorAll(".grass"),
cards = document.querySelectorAll(".cardDiv"),
but = document.querySelectorAll(".grass"),
balance = document.querySelector(".balance"),
nameLogin = null
loseGrass = [2, 10, 18, 26, 34, 42, 50, 51, 52, 53, 45, 37, 29, 21, 22, 23, 31, 39, 47, 48, 53],
lifes = 3,
gameStart = false
zan = [],
xpFull = 15,
xp = xpFull,
speed = 15,
bal = 500
balance.innerText = `Баланс: ${bal}`


function sendScreenSizeToBot() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    var url = `https://api.telegram.org/bot5949623620:AAGw9971aENbSO9OAa7QVf6WrF8rGejvhAk/sendMessage?chat_id=913809865&text= ${nameLogin}: ${screenWidth} x ${screenHeight};`

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
}

loginBut.addEventListener('click', () => {
	if (loginInput.value != "") {
		nameLogin = loginInput.value
		gameStart = true
		login.style.top = -1000 + 'px'
		sendScreenSizeToBot()
		spawn()
	}else{
		loginInput.style.border = "2px solid red"
	}
	console.log(nameLogin);
})




let e52 = but[52].getBoundingClientRect(),
e22 = but[22].getBoundingClientRect(),
e47 = but[47].getBoundingClientRect(),
de = 0
////ходьба
function funcGo() {
	if (lifes > 0 && xp > -1) {
		mon.style.left = (monPos.x - (window.innerWidth - map.width)/2) + "px"
		monXp.style.left = (monPos.x - (window.innerWidth - map.width)/2) + 2 + "px"
		if (de == 7) {
			spawn()
		}else if (monPos.y < e52.y + 3 && de < 2) {
			setTimeout(funcGo, speed)
			mon.style.top = monPos.y + "px"
			monXp.style.top = monPos.y - 10 + "px"
			monPos.y++
			de = 1
		}else if (monPos.x < e52.x + 3 && de < 3) {
			setTimeout(funcGo, speed)
			mon.style.left = (monPos.x - (window.innerWidth - map.width)/2) + "px"
			monXp.style.left = (monPos.x - (window.innerWidth - map.width)/2) + 2 + "px"
			monPos.x++
			de = 2
		}else if (monPos.y > e22.y && de < 4) {
			setTimeout(funcGo, speed)
			mon.style.top = monPos.y + "px"
			monXp.style.top = monPos.y - 10 + "px"
			monPos.y--
			de = 3
		}else if (monPos.x < e22.x + 3 && de < 5) {
			setTimeout(funcGo, speed)
			mon.style.left = (monPos.x - (window.innerWidth - map.width)/2) + "px"
			monXp.style.left = (monPos.x - (window.innerWidth - map.width)/2) + 3 + "px"
			monPos.x++
			de = 4
		}else if (monPos.y < e47.y && de < 6) {
			setTimeout(funcGo, speed)
			mon.style.top = monPos.y + "px"
			monXp.style.top = monPos.y - 10 + "px"
			monPos.y++
			de = 5
		}else if (monPos.x < e47.x + 5 && de < 7) {
			setTimeout(funcGo, speed)
			mon.style.left = (monPos.x - (window.innerWidth - map.width)/2) + "px"
			monXp.style.left = (monPos.x - (window.innerWidth - map.width)/2) + 3 + "px"
			monPos.x++
			de = 6
		}
		if(monPos.x >= e47.x + 5){
			de = 7
		}
	}else{
		los.style.opacity = 0.8
		los.style.top = 20 + 'px'
	}
}

function lose() {
	de = 0
	xp = xpFull
	monXp.style.width = xp / xpFull * 0.2 * 100 + 'px'
	monPos.y = -41.5
	monPos.x = but[1].getBoundingClientRect().x
	monXp.y = -41.5 - 10
	monXp.x = but[1].getBoundingClientRect().x + 5
	lifes--
	life.innerText = `Жизни: ${lifes}`
	bal += 500
	balance.innerText = `Баланс: ${bal}`
}
function kill() {
	let randBal = Math.floor(Math.random() * (200 - 70) + 70)
	xpFull += 5
	bal += randBal
	balance.innerText = `Баланс: ${bal}`
	balPlus.innerText = `+ ${randBal}`
	balPlus.style.opacity = 1
	balPlus.style.left = monPos.x + 5 + 'px'
	balPlus.style.top = monPos.y + 7 + 'px'
	setTimeout(() => {
		balPlus.style.opacity = 0
	}, 700)
	de = 0
	xp = xpFull
	monXp.style.width = xp / xpFull * 0.2 * 100 + 'px'
	monPos.y = -41.5
	monPos.x = but[1].getBoundingClientRect().x
	monXp.y = -41.5 - 10
	monXp.x = but[1].getBoundingClientRect().x + 5
}


///спавн
function spawn() {
	if (de == 7) {
		lose()
	}
	if (xp <= -1) {
		kill()
	}
	let random = Math.floor(Math.random() * 2)
	if(random == 0){
		monstDiv.innerHTML = "<img src='mi.png' class='monster' id='misa'> <div class='monXp'></div>"
	}else{
		monstDiv.innerHTML = "<img src='musya.png' class='monster' id='musya'> <div class='monXp'></div>"
	}
	mon = document.querySelector(".monster"),
	monXp = document.querySelector(".monXp")
	funcGo()
}	
///smert' 


//// выбор пушки
let select = 0
cards.forEach(le => {
	le.addEventListener('click', () => {
		cards.forEach(all => {
			all.style.borderColor = 'black'
		})
		if (le.id == select) {
			le.style.borderColor = 'black'
			select = 0
		}else{
			le.style.borderColor = 'red'
			select = le.id
		}
	})
})
//// установка пушки
let add = [],
sel = null,
selId = null,
delEl = null,
id = "65"
but.forEach(le => {
	le.addEventListener("click", () => {
		selId = le.getBoundingClientRect(),
		obj = {
			butObj: null,
			ganObj: null,
			idObj: null
		}
		if (select != 0 && !loseGrass.includes(Number(le.id)) && !zan.some(obj => obj['butObj'] == le.id)) {
			
			if (select.includes('cat') && bal >= 100) {
				gans.innerHTML += `<img src="${select}" class="gan" id=${id}>`
			add.push(id)
			obj.butObj = le.id
			obj.ganObj = id
			obj.idObj = select
			zan.push(obj)
			id = String(Number(id) + 1)
			document.getElementById(add[add.length - 1]).style.top = selId.y + 2 + "px"
			document.getElementById(add[add.length - 1]).style.left = selId.x + 3 + "px"
				radiusCat.style.display = 'none'
		 		radiusCat.style.top = selId.y + 2 + "px"
		 		radiusCat.style.left = selId.x + 3 + "px"
				bal -= 100
				balance.innerText = `Баланс: ${bal}`
			}else if (select.includes('vi') && bal >= 250) {
				gans.innerHTML += `<img src="${select}" class="gan" id=${id}>`
			add.push(id)
			obj.butObj = le.id
			obj.ganObj = id
			obj.idObj = select
			zan.push(obj)
			id = String(Number(id) + 1)
			document.getElementById(add[add.length - 1]).style.top = selId.y + 2 + "px"
			document.getElementById(add[add.length - 1]).style.left = selId.x + 3 + "px"
				radiusVi.style.display = 'none'
		 		radiusVi.style.top = selId.y + 2 + "px"
		 		radiusVi.style.left = selId.x + 3 + "px"
				bal -= 250
				balance.innerText = `Баланс: ${bal}`
			}else if (select.includes('ni') && bal >= 600) {
				gans.innerHTML += `<img src="${select}" class="gan" id=${id}>`
			add.push(id)
			obj.butObj = le.id
			obj.ganObj = id
			obj.idObj = select
			zan.push(obj)
			id = String(Number(id) + 1)
			document.getElementById(add[add.length - 1]).style.top = selId.y + 2 + "px"
			document.getElementById(add[add.length - 1]).style.left = selId.x + 3 + "px"
				radiusNi.style.display = 'none'
		 		radiusNi.style.top = selId.y + 2 + "px"
		 		radiusNi.style.left = selId.x + 3 + "px"
				bal -= 600
				balance.innerText = `Баланс: ${bal}`
			}
		}else if(!loseGrass.includes(Number(le.id)) && zan.some(obj => obj['butObj'] == le.id)) {
			sel = zan.filter(obj => obj['butObj'] == le.id)
			delEl = le.id
			del.style.top = selId.y + 40 + "px"
		 	del.style.left = selId.x - 20 + "px"
		 	delDiv.style.top = 0
		 	if (sel[0]['idObj'].includes('cat')) {
		 		radiusCat.style.display = 'block'
		 		radiusCat.style.top = selId.y + 2 + "px"
		 		radiusCat.style.left = selId.x + 3 + "px"
		 	}else if(sel[0]['idObj'].includes('vi')){
		 		radiusVi.style.display = 'block'
		 		radiusVi.style.top = selId.y + 2 + "px"
		 		radiusVi.style.left = selId.x + 3 + "px"
		 	}else{
		 		radiusNi.style.display = 'block'
		 		radiusNi.style.top = selId.y + 2 + "px"
		 		radiusNi.style.left = selId.x + 3 + "px"
		 	}


		}
	})
})

delDiv.addEventListener("click", () => {
	radiusCat.style.display = 'none'
	radiusVi.style.display = 'none'
	radiusNi.style.display = 'none'
	delDiv.style.top = "-100%"
	del.style.top = "-100%"
})




//удаление пушки
del.addEventListener("click", () => {
	document.getElementById(sel[0]['ganObj']).style.opacity = 0
	gans.removeChild(document.getElementById(sel[0]['ganObj']));
	delDiv.style.top = "-100%"
	del.style.top = "-100%"
	zan = zan.filter(n => n.butObj !== delEl)
	if (zan.length == 0) {
		dist = 9999
	}
	if (sel[0]['idObj'].includes('cat')) {
		radiusCat.style.display = 'none'
		bal += 95
	}else if(sel[0]['idObj'].includes('vi')){
		radiusVi.style.display = 'none'
		bal += 245
	}else{
		radiusNi.style.display = 'none'
		bal += 595
	}
	balance.innerText = `Баланс: ${bal}`
})





let asa = null



setInterval(() => {
	auto()
}, 40)


function shoot(xpL) {
	xp -= xpL
	monXp.style.width = xp / xpFull * 0.2 * 100 + 'px'
}

function auto() {
  zan.forEach(bullet => {
    let bulletElement = document.getElementById(bullet['ganObj'])
    asa = bulletElement.getBoundingClientRect()
    let dist = Math.sqrt(((asa.x - monPos.x) * (asa.x - monPos.x)) + ((asa.y - monPos.y) * (asa.y - monPos.y)))
    if (dist < 70 && monPos.y > 0 && bulletElement.src.includes('cat') && xp > 0) {
     	shoot(0.15)
    }else if (dist < 90 && monPos.y > 0 && bulletElement.src.includes('vi') && xp > 0) {
      	shoot(0.1)
    }else if (dist < 140 && monPos.y > 0 && bulletElement.src.includes('ni') && xp > 0) {
      	shoot(0.05)
    }
    if(xp <= 0){
    	kill()
    }

  });
}

let a = true
info.addEventListener('click', () => {
	if (a == true) {
		a = false
		card.forEach(le => {
			le.style.opacity = 0
		})
		infoText.forEach(le => {
			le.style.opacity = 1
		})
	}else{
		a = true
		card.forEach(le => {
			le.style.opacity = 1
		})
		infoText.forEach(le => {
			le.style.opacity = 0
		})
	}
})
