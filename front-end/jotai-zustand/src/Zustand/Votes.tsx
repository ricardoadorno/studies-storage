import { useBearStore } from "../App";

function Votes() {
  const bears = useBearStore((state) => state.bears);

  const increasePopulation = useBearStore((state) => state.increasePopulation);

  return (
    <h1>
      {bears} around here ...
      <button onClick={increasePopulation}>one up</button>
    </h1>
  );
}

export default Votes;
