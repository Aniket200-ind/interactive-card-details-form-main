import { useSelector } from "react-redux";

export const CardFront = () => {
  //! Accessing the card details and card number from the store
  const cardDetails = useSelector((state) => state.card);
  const cardNumber = useSelector((state) => state.card.number);

  return (
    <div className="z-40 w-2/3 absolute top-[60%] left-10 sm:top-1/4 sm:left-[40%] sm:w-4/5">
      <div className="absolute z-50 inline-block bg-white rounded-full h-7 w-7 top-5 left-4 sm:h-8 sm:w-8" />
      <div className="absolute z-50 inline-block w-4 h-4 border border-white rounded-full top-7 left-14 sm:left-16" />
      <p className="text-white absolute top-[45%] text-lg px-3 tracking-wide sm:top-1/2 sm:px-6">
        {cardNumber}
      </p>
      <p className="absolute text-white uppercase card-info-text left-6">
        {cardDetails.name}
      </p>
      <p className="absolute text-white card-info-text right-5 sm:right-12">
        {`${cardDetails.expiryMonth}/${cardDetails.expiryYear}`}
      </p>
      <img src="/bg-card-front.png" alt="Card front" />
    </div>
  );
};
