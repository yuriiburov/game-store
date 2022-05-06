type objectSort = {
  name?: string;
  release?: number;
  price?: number;
};

const sortByName = (a: objectSort, b: objectSort) => {
  if (a.name > b.name) {
    return 1;
  }

  if (a.name < b.name) {
    return -1;
  }

  return 0;
};

const sortByDate = (a: objectSort, b: objectSort) => a.release - b.release;

const sortByPrice = (a: objectSort, b: objectSort) => a.price - b.price;

const sortedFilteredProducts = (products: any[], searchValue: string, sortBy: string) =>
  products
    .filter(
      product =>
        searchValue.length === 0 || product.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'new':
          return sortByDate(b, a);
        case 'old':
          return sortByDate(a, b);
        case 'expensive':
          return sortByPrice(b, a);
        case 'cheaper':
          return sortByPrice(a, b);
        case 'name':
          return sortByName(a, b);
      }
    });

export default sortedFilteredProducts;
