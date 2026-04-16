import "./global.css";

import { Banner, Button } from "@e-commerce/ui-utils";

export default function Root() {
  return (
    <section className="container">
      <h1 className="text-subheading-sm">Home</h1>
      <Button>Press</Button>
      <Banner />
    </section>
  );
}
