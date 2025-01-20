import Card from "./Card";
import { useRef } from "react";

export default function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor ujjwal sit amet consectetur adipisicing.",
      fileSize: "0.9mb",
      available: true,
      tag: {
        isOpen: true,
        tagTitle: "Download now",
        tagColor: "green",
      },
    },
    {
      desc: "This is the second description.",
      fileSize: "0.5mb",
      available: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    {
      desc: "This is the second description.",
      fileSize: "0.5mb",
      available: false,
      tag: {
        isOpen: false,
        tagTitle: "Look for it",
        tagColor: "blue",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, idx) => (
        <Card data={item} key={idx} reference={ref} />
      ))}
    </div>
  );
}
