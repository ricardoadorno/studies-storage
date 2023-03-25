import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import { Counter } from "./decorator";

const nCounter = new Counter();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>

  <input type="number" id="nValue" />
<input type="button" value="Increment" id="increment" />
<input type="button" value="Decrement" id="decrement" />
    <button id="nCount" type="button"></button>


  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

document.querySelector<HTMLButtonElement>(
  "#nCount"
)!.innerHTML = `count is ${nCounter.value}`;

document
  .querySelector<HTMLButtonElement>("#increment")!
  .addEventListener("click", () => {
    nCounter.increment();
    document.querySelector<HTMLButtonElement>(
      "#nCount"
    )!.innerHTML = `count is ${nCounter.value}`;
  });

document
  .querySelector<HTMLButtonElement>("#decrement")!
  .addEventListener("click", () => {
    nCounter.decrement();
    document.querySelector<HTMLButtonElement>(
      "#nCount"
    )!.innerHTML = `count is ${nCounter.value}`;
  });

document
  .querySelector<HTMLInputElement>("#nValue")!
  .addEventListener("change", () => {
    nCounter.value = parseInt(
      document.querySelector<HTMLInputElement>("#nValue")!.value
    );
    document.querySelector<HTMLButtonElement>(
      "#nCount"
    )!.innerHTML = `count is ${nCounter.value}`;
  });
