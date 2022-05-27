let a = ''; //перше число
let b = ''; //друге число
let sign = ''; //знак
let finish = false;

//створюю масиви з числами і знаками
let number =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let arrSign = ['+', '-', '*', '/', '%', '^'];

//ввожу зміну out, яка буде виводити результат у параграф
const out = document.querySelector(".calc-screen p");

//out.textContent = 'a';

// оброблюємо подію натиску на область екрана
document.querySelector('.cbutton').onclick = (event) => 
{
	if (!event.target.classList.contains('mybtn')) return;
	//if (event.target.classList.contains('ac')) return;

	const key = event.target.textContent; //отримуємо назву нажатої кнопки у змінну key
	out.textContent = key;
	
	
	if (number.includes(key)) 
	{
		if (b == '' && sign == '' && finish == false) 
		{
			a += key;
			out.textContent = a;
		} 
		else 
		{
			b += key;
			out.textContent = b;
		}
	} 
	else if (arrSign.includes(key)) 
	{
		sign = key;
		out.textContent = sign;
	} 
	else if (!a == '' && !b == '' && !sign == '' && key == '=')
	{
		a = count(a, b, sign); //a=num1, b=num2, sign = mark
		b = '';
		sign = '';
	} 

	else if (key == 'C')
	{		
		clearAll();
	}

}

//створюю функцію очищення параграфа і змінних калькулятора
function clearAll() 
{
		a = '';
		b = '';
		sign = '';
		finish = false;
		out.textContent = 0;
}

//створюю функцію підрахунку
function count(num1, num2, mark) 
{
	//parseFloat функція щоб перетворити стрічку у цифру враховуючи дроби 
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);

	switch(mark) 
	{
		case '+':			
			num1 = num1 + num2;
			out.textContent = num1;
		break;

		case '-':
			num1 = num1 - num2;
			out.textContent = num1;
		break;

		case '*':
			num1 = num1 * num2;
			out.textContent = num1;
		break;

		case '/':

		//ділення на 0
			if (num2 == '0') 
			{
				clearAll();
				out.textContent = "Не можна";
				return;
			}
			else 
			{
				num1 = num1 / num2;
				out.textContent = num1;
			}
			
		break;

		case '%':
			num1 = (num1 * num2) / 100;
			out.textContent = num1;
		break;

		case '^':
			num1 = Math.pow(num1, num2); //функція Math.pow для степенів, де num1 - число, а num2 - введений степінь
			/*num1 = num1 ** num2;// альтернатива функції степенів*/
			out.textContent = num1;
		break;
	} 
	return num1;
}