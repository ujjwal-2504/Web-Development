import { useState } from "react";

function BgColorChanger() {
  const [currColor, setCurrColor] = useState("#121212");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: currColor }}>
        <div className="flex flex-wrap fixed justify-center inset-x-0 top-4 py-2">
          <div className="bg-white flex flex-wrap gap-2 h-15 w-9/10 rounded-full p-2 justify-center">
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "red" }}
              onClick={() => setCurrColor("red")}
            >
              Red
            </button>
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setCurrColor("yellow")}
            >
              Yellow
            </button>
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "green" }}
              onClick={() => setCurrColor("green")}
            >
              green
            </button>
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "blue" }}
              onClick={() => setCurrColor("blue")}
            >
              blue
            </button>
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "olive" }}
              onClick={() => setCurrColor("olive")}
            >
              olive
            </button>
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "white" }}
              onClick={() => setCurrColor("white")}
            >
              white
            </button>
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "magenta" }}
              onClick={() => setCurrColor("magenta")}
            >
              magenta
            </button>
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "brown" }}
              onClick={() => setCurrColor("brown")}
            >
              brown
            </button>
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "purple" }}
              onClick={() => setCurrColor("purple")}
            >
              purple
            </button>
            <button
              className=" flex-1 rounded-full"
              style={{ backgroundColor: "lavender" }}
              onClick={() => setCurrColor("lavender")}
            >
              lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BgColorChanger;
