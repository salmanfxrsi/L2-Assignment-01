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