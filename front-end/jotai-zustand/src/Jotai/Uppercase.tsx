import { useAtom } from "jotai";
import { uppercaseAtom } from "../App";

function Uppercase() {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
}

export default Uppercase;
