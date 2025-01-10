function handelClick(event) {
  console.log(event);
  console.log("Hello!");
}

function handelMouseOver() {
  console.log("Bye!");
}

function handelDblClick() {
  console.log("2!");
}

export default function Button() {
  return (
    <div>
      <button onClick={handelClick}>click me</button>
      <p onMouseOver={handelMouseOver}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        quam, ab, modi, dolorem eveniet laborum iste consequatur dolor repellat
        nobis quod. Pariatur suscipit aut porro atque earum distinctio aperiam
        vero! Delectus vero beatae ratione eligendi voluptatibus commodi
        laudantium asperiores itaque eos deleniti? Ipsa id fugiat doloremque
        natus quia officia vitae repellendus eius similique eum, dolores,
        blanditiis totam iste, et tempora? Dolores placeat, expedita quidem
        numquam ab sapiente nulla eum quae, cum earum hic itaque sunt
        perferendis odio repellat assumenda illum minima voluptates harum
        officiis veniam laborum aspernatur. Ut, nemo amet.
      </p>

      <button onDoubleClick={handelDblClick}>Double Click</button>
    </div>
  );
}
