import { Link } from "react-router-dom";

const Product = ({ p }) => {
  // console.log("hello world");
  // console.log(p.category);
  // console.log(p);

  return (
    <div className="card bg-gray-200  border-4 border-gray-500 shadow-xl">
      <figure>
        <img className="h-60" src={p.product_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-extrabold text-2xl">
          {p.product_title}
        </h2>
        <p>Price : ${p.price}</p>
        <div className="card-actions justify-start">
          <Link to={`/details/${p.product_id}`}>
            <button className="btn btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
