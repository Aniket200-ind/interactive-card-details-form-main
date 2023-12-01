import { useSelector } from "react-redux";

export const CardBack = () => {
  //! Accessing the card details from the store
  const cardDetails = useSelector((state) => state.card);

  return (
    <div className="absolute top-[15%] left-1/4 w-2/3 sm:top-[55%] sm:left-[60%] sm:w-4/5">
      <p className="text-white absolute top-[42%] left-3/4 text-sm inline">
        {cardDetails.cvv}
      </p>
      <img src="/bg-card-back.png" alt="Card back" className="z-50" />
    </div>
  );
};
