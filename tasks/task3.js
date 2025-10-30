// Маємо об'єкт з інформацією про види спорту, кількість представників і кількість медалей. 
// Необхідно додати нове поле percentOfSuccess, яке буде показувати відсоток завойованих медалей від загальної кількості спортсменів у кожному виді спорту.
"ВИКОРИСТОВУВАТИ ЛИШЕ МЕТОДИ МАСИВІВ filter, map, sort та інші, які є в файлі methods.js."
"Можливо в цій задачі доведеться в методі map розкривати фігурні дужки для роботи з обʼєктом."
// Щось тиру Array.map(item => {
//   blablabla
//  .. return ЩОСЬ)
// })
"Для заокруглення числа можна до десятих використовуйте .toFixed(1)"

function addSuccessPercent(olympicRepresentation) {         // Оголошення функції, яка приймає масив об’єктів з даними про олімпійські команди
    return olympicRepresentation.map(item => {               // Створюємо новий масив, проходячи по кожному елементу вихідного масиву
        const { athletes, medals } = item;                   // Деструктуризація: дістаємо кількість спортсменів та медалей з поточного об’єкта
        let percent;                                         // Оголошуємо змінну для збереження відсотка успіху

        if (athletes === 0) {                                // Якщо кількість спортсменів дорівнює 0
            percent = '0%';                                  // Уникаємо ділення на нуль і присвоюємо відсоток '0%'
        } else {                                           
            percent = ((medals / athletes) * 100).toFixed(1) + '%';  // Обчислюємо відсоток (медалі/спортсмени)*100, округлюємо до 1 знака і додаємо '%'
        }

        return { ...item, percentOfSuccess: percent };        // Повертаємо новий об’єкт: копію старого + нове поле percentOfSuccess
    });
}


const olympicRepresentation = [
  { sport: 'Swimming', athletes: 20, medals: 6 },
  { sport: 'Gymnastics', athletes: 10, medals: 2 },
  { sport: 'Boxing', athletes: 15, medals: 5 },
  { sport: 'Athletics', athletes: 25, medals: 3 }
];

console.log(addSuccessPercent(olympicRepresentation));
module.exports = addSuccessPercent;
