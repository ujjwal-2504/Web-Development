import Product from "./Product";
import Title from "./Title";

import "./ProductTab.css";

// function ProductTab() {
//   // let phoneFeatures = [
//   //   <li>"Amoled 2k Display"</li>,
//   //   <li>"Snapdragon 12gen Processor"</li>,
//   //   <li>"7000 mah battery"</li>,
//   // ];
//   let phoneFeatures = [
//     "Amoled 2k Display",
//     "Snapdragon 12gen Processor",
//     "7000 mah battery",
//   ];
//   let LaptopFeatures = [
//     "Touch Screen Amoled 4k Display",
//     "Itel i22 20gen Processor",
//     "Liquid cooling system",
//   ];
//   let TabletFeatures = [
//     "Amoled 2k Display",
//     "M4 Processor",
//     "10000 mah battery",
//   ];
//   let CoverFeatures = [
//     "Leather finish texture",
//     "Slick design",
//     "Shock proof corner bands",
//   ];

//   // let options = { a: "Buy", b: "Add to Cart" };

//   return (
//     <>
//       <Product title="Phone" price={30000} features={phoneFeatures} />
//       <Product title="Laptop" price={55000} features={LaptopFeatures} />
//       <Product title="Tablet" price={40000} features={TabletFeatures} />
//       <Product title="Cover" price={300} features={CoverFeatures} />
//     </>
//   );
// }

// Activity

function ProductTab() {
  return (
    <div className="ProductTab">
      <Title title="Blockbuster Deals on Computer Accessories | Shop Now" />

      <div className="AllProducts">
        <Product
          title="Logitech MX Master 3S"
          description={["8,000 DPI", "5 Programmable Buttons"]}
          idx={0}
        />
        <Product
          title="Apple Pencil (2nd Gen)"
          description={["8,000 DPI", "5 Programmable Buttons"]}
          idx={1}
        />

        <Product
          title="Zebronics Zeb-Transformer"
          description={["8,000 DPI", "5 Programmable Buttons"]}
          idx={2}
        />

        <Product
          title="Portronics Toad 23 Wireless Mouse"
          description={["8,000 DPI", "5 Programmable Buttons"]}
          idx={3}
        />
      </div>
    </div>
  );
}

export default ProductTab;
