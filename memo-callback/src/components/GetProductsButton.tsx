import React, { useEffect } from "react";

export const GetProductsButton = React.memo(
	({ fetchProducts }: { fetchProducts: () => void }) => {
		console.log("Rendered Button Component");

		return (
			<button type="button" onClick={fetchProducts}>
				Fetch Products
			</button>
		);
	},
);
