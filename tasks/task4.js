// Маємо масив об'єктів, де кожен об'єкт представляє автомобіль з інформацією про її бренд, модель і витрату палива. 
// Завдання — перевірити, чи всі машини в масиві мають витрату палива менше 6 л/100 км. 
// Якщо це так, то фільтруємо машини по бренду і повертаємо ті, що найбільш економні.

function getMostFuelEfficientCars(cars, brand) {// Оголошення функції, яка приймає:
// cars — масив об’єктів автомобілів,
// brand — назву бренду, для якого шукаємо найекономніші авто.
    const allEfficient = cars.every(car => car.fuelConsumption < 6); // Перевіряємо, чи УСІ автомобілі мають витрату палива менше 6 л/100 км.
// Метод every() поверне true, якщо умова виконується для кожного елемента.

    if (!allEfficient) {// Якщо знайдеться хоча б один автомобіль із витратою 6 або більше
        return []; // Повертаємо порожній масив (функція завершує роботу).
    }

    const leastConsumption = cars.filter(car => car.fuelConsumption < 6); // Фільтруємо автомобілі, залишаючи лише ті, що мають витрату < 6 л/100 км.
    const branded = leastConsumption.filter(car => car.brand === brand);  // Із цих економних авто вибираємо лише ті, що належать заданому бренду.

    const carsDescOrder = branded.sort((a, b) => a.fuelConsumption - b.fuelConsumption); 
// Сортуємо вибрані автомобілі за зростанням витрати палива.
// Тобто найекономніші (з найменшим fuelConsumption) будуть першими.
    return carsDescOrder; // Повертаємо відсортований список автомобілів цього бренду з найменшою витратою.
}


// Приклад використання:
const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },  
  { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },  
  { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 }, 
  { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 }, 
];

console.log(getMostFuelEfficientCars(cars, 'Toyota')); 

console.log(getMostFuelEfficientCars(cars, 'Honda')); 

console.log(getMostFuelEfficientCars(cars, 'Audi'));  

console.log(getMostFuelEfficientCars(cars, 'Dodge'));  

console.log(getMostFuelEfficientCars(cars, 'Ford'));  
module.exports = getMostFuelEfficientCars;
