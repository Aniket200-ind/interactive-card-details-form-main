import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";

export const Dark = () => {
  return (
    <section className="bg-dark-violet h-1/4 z-50 relative sm:w-[30%] sm:h-screen">
      <CardBack />
      <CardFront />
    </section>
  );
};
