import { useAtom } from "jotai";
import { textLenAtom } from "../App";

function CharCount() {
  const [len] = useAtom(textLenAtom);
  return <div>Length: {len}</div>;
}

export default CharCount;
