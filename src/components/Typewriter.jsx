import { useEffect, useState } from "react";

export function Typewriter({ words = [], speed = 40 }) {
  const [output, setOutput] = useState("");
  const [index, setIndex] = useState(0);

  const fullText = words.map(w => w.text).join(" ");

  useEffect(() => {
    if (index < fullText.length) {
      const t = setTimeout(() => {
        setOutput(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(t);
    }
  }, [index, fullText, speed]);

  // color mapping logic
  let charCount = 0;

  return (
    <span className="type-pro">
      {words.map((word, i) => {
        const start = charCount;
        const end = charCount + word.text.length;

        const visible = output.slice(start, end);

        charCount += word.text.length + 1;

        return (
          <span key={i} className={word.color}>
            {visible}
            {" "}
          </span>
        );
      })}
      <span className="cursor-pro"></span>
    </span>
  );
}