export const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      image: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 39.99,
      image: 'https://example.com/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 49.99,
      image: 'https://example.com/product3.jpg',
    },
  ];
  


export function ProductsList({ products }) {
  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <div className="group flex flex-col items-center rounded-lg overflow-hidden bg-black hover:shadow-md transition duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover object-center group-hover:opacity-75"
              />
              <h2 className="mt-4 text-primary">{product.name}</h2>
              <p className="mt-1 text-lg font-medium text-gray-900">Kr{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


