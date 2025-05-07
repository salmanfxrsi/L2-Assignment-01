function formatString(input: string, toUpper?: boolean): string {
    if(toUpper || toUpper == undefined) return input.toUpperCase();
    else return input.toLowerCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter (item  => item.rating >= 4);
}

interface Product {
    name: string;
    price: number;
  }
  
function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length == 0) return null;

    return products.reduce((current, max) => current.price > max.price ? current : max);
}