
import ProductCard from "./ProductCard";


const ProductList = async ({ category }) => {
    const items = await fetch(`http://localhost:3000/api/productos/${category}`, {
        cache: 'no-store',
        next:{
            revalidate:0
        }
    }).then(res => res.json())

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map((item) => <ProductCard key={item.slug} item={item} />)
            }
        </section>
    )

};


    


export default ProductList