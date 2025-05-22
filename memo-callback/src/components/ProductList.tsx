// ProductList.tsx

import { useState, useCallback } from "react";
import { GetProductsButton } from "./GetProductsButton";

const ProductList = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = useCallback(async () => {
		const response = await fetch("https://dummyjson.com/products");
		const data = await response.json();
		setProducts(data.products);
	}, []);

	return (
		<div>
			<h2>Product List</h2>
			<ul>
				{products.map((product: any) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
			<GetProductsButton fetchProducts={fetchProducts} />
		</div>
	);
};

export default ProductList;
