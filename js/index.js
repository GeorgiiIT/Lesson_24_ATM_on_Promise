let userData = {
	'USD':1000,
	'EUR': 900,
	'UAH': 15000,
	'BIF': 20000,
	'AOA': 100
},
bankData = {
	'USD': {
		max: 3000,
		min: 100,
		img: '💵'
	},
	'EUR': {
		max: 1000,
		min: 50,
		img: '💶'
	},
	'UAH': {
		max: 0,
		min: 0,
		img: '💴'
	},
	'GBP': {
		max: 10000,
		min: 100,
		img: '💷'
	}
}
let getMoney = (userData, bankData) => {
return myPromise = new Promise(
		function(resolve, reject){
			       confirm(`Посмотреть баланс на карте`) ? resolve(userData) : reject({userData, bankData});
		}
)
}

getMoney(userData, bankData)

myPromise
    .then(
        function(userData){
			let valut = '';
			do {
				valut = prompt(`Введите название валюты в формате: USD, EUR, UAH, BIF, AOA`);	
				if (valut) {
					valut = valut.replaceAll(` `,``).toUpperCase(); 
				}
				} while (!valut || !userData[valut]);
				console.log(`Баланс составляет: ${userData[valut]} ${valut}.`)
},
)
.catch(({ userData, bankData }) => {
		let valute = '';
		do {
			valute = prompt(`Введите название валюты в формате: USD, EUR, UAH, GBP`);
			if (valute) {
				valute = valute.replaceAll(` `,``).toUpperCase(); 
			}	
				  
			} while (!valute || !bankData[valute] || valute === `GBP`);
			

			if(valute){
				let sum = 0;

				do{
					sum = +prompt(`Введите сумму для снятия наличных`);
				} while(!sum)

				if(sum > bankData[valute][`max`] || sum > userData[valute] || userData[valute > bankData[valute][`max`] || bankData[valute][`max`] > userData[valute]]){
					console.log(`Введенная сумма ${sum} больше допустимой. Максимальная сумма снятия ${userData[valute] > bankData[valute][`max`] ? bankData[valute][`max`] : userData[valute]} ${bankData[valute][`img`]}`)
				} else if(sum < bankData[valute][`min`]){
					console.log(`Введенная сумма ${sum} меньше допустимой. Максимальная сумма снятия ${bankData[valute][`min`]} ${bankData[valute][`img`]}`)
				} else {
					console.log(`Вот Ваши денежки ${sum} ${valute} ${bankData[valute][`img`]}`)
				}
			}
})
.finally(
	function(){
		 console.log(`Спасибо, хорошего дня 😊`);
	}
)

