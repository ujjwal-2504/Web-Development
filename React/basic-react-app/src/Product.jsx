import "./Product.css";
import Title from "./Title.jsx";
import { Description } from "./Description.jsx";
import Price from "./Price.jsx";

// function Product({ title, price = 1000, features }) {
//   // let list = features.map((feature) => <li> ${feature} </li>);
//   let isDiscount = price > 30000;
//   let style = { backgroundColor: isDiscount && "#593b00" };
//   return (
//     <div className="Product" style={style}>
//       <h3>{title}</h3>
//       <h4>Price: {price.toLocaleString("en-IN")}</h4>
//       {/* {price > 30000 ? <p>"Discount of 5%" </p> : null} */}
//       {isDiscount && <p>Discount of 5%</p>}
//       <p>
//         Features:{" "}
//         {features.map((feature) => (
//           <li> ${feature} </li>
//         ))}
//       </p>
//     </div>
//   );
// }

// Activity

function Product({ title, description, idx }) {
  let oldPrice = [12495, 11900, 1599, 599];
  let newPrice = [8999, 9199, 899, 278];
  return (
    <div className="Product">
      <Title title={title} />
      <Description description={description} />
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
