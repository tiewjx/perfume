// var buyf = 0;

// var mememe = 11;
// mememe = 11+4;

// var bebebe = 'Hello'

// var a = prompt('Введите имя')

// alert('Привет, ' + a);

function buy() 
{
	if (buyf == 0) 
	{
		document.getElementById('btn').style.background = 'pink'; /*Изменение цвета фона*/
		document.getElementById('btn').innerHTML = 'В корзине'; /*Текст*/
		document.getElementById('btn').style.color = 'grey'; /*Изменение цвета текста*/
		buyf = 1;
	}
	else
	{
		document.getElementById('btn').style.background = 'silver';
		document.getElementById('btn').innerHTML = 'Купить';
		document.getElementById('btn').style.color = 'black';
		buyf = 0;
	}

	
}


