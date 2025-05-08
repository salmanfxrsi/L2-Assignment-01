function formatString(input: string, toUpper?: boolean): string 
{
    if(toUpper || toUpper == undefined) return input.toUpperCase();
    else return input.toLowerCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] 
{
    return items.filter (item  => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[]
{
    return arrays.reduce( (previous, current) => previous.concat(current));
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}  

function processValue(value: string | number): number 
{
    if(typeof value === "string") return (value.length);
    else return value * 2;
}

interface Product {
    name: string;
    price: number;
}
  
function getMostExpensiveProduct(products: Product[]): Product | null 
{
    if(products.length == 0) return null;

    return products.reduce((current, max) => current.price > max.price ? current : max);
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
  
function getDayType(day: Day): string
{
  return day == Day.Saturday || day == Day.Sunday ? "Weekend" : "Weekday"
}

async function squareAsync(n: number): Promise<number>
{
  return new Promise((resolve, reject) => {
    if (n >= 0) {
        setTimeout(() => {
            return resolve (n * n);
        }, 1000)
    }
    else {
        return reject(new Error ("Negative number not allowed"));
    }
  })
}