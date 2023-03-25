import { Grid, Container } from "@mantine/core";
import { HeaderResponsive } from "./components/HeaderResponsive";
import { HeroImageBackground } from "./components/HeroImageBackground";

function App() {
  return (
    <div>
      <HeaderResponsive />
      <HeroImageBackground />
      {/* <Product />
      <FAQ />
      <PriceTable />
      <Footer /> */}
    </div>
  );
}

export default App;
