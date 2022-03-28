import "./product.css";

const Product = ({ img, link, desc }) => {
    return (
        <div className="product">
            <div className="fontawesome">
                <a href={link} target="_blank" rel="noreferrer">
                    <div className={img}></div>
                </a>
            </div>
            <p className="product-desc">{desc}</p>
        </div>
    )
}

export default Product