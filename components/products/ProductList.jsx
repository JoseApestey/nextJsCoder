import { mockData } from "@/utils/data";
import ProductCard from "./ProductCard";

const ProductList = ({ category }) => {
    const items = mockData.filter((item) =>
        category === "all" ? true : item.type === category
    );

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {items.map((item) => (
                <ProductCard key={item.slug} item={item} />
            ))}
        </section>
    );
};

export default ProductList;