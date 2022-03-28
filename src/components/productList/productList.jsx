import "./productList.css";
import Product from "../product/product";
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Some things I have done...</h1>
                <p className="pl-desc">
                    Here are some of the projects that I learned from wonderful tutorials on YouTube. All still very 'beginner' but I am working on 'level them up"!
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} desc={item.desc} />
                ))}
            </div>
        </div>
    )
}

export default ProductList