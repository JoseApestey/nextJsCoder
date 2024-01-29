// ProductCard.js
// ProductCard.js
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
    const imageUrl = `/productos${item.image}`;
    return (
        <article className="basis-72 shadow-lg rounded">
            <Link href={`/productos/detail/${item.slug}`}>
                <p className="flex flex-col">
                    <Image
                        alt={item.title}
                        src={imageUrl}
                        width={288}
                        height={288}
                    />
                    <div className="px-4 border-t border-gray-200">
                        <h4 className="text-sm my-4">{item.title}</h4>
                        <p className="text-2xl font-semibold mb-6">$ {item.price}</p>
                    </div>
                </p>
            </Link>
        </article>
    );
};

export default ProductCard;