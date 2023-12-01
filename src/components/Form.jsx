import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { object, string } from "zod";
import {
  setCVV,
  setCardName,
  setCardNumber,
  setExpiryMonth,
  setExpiryYear,
} from "../features/cardSlice";

export const Form = () => {
  // ! Defining zod schema for form validation 
  const schema = object({
    name: string()
      .min(5, { message: "Enter a appropriate name" })
      .max(50, { message: "Enter a appropriate name" }),
    expiryDatem: string().length(2, { message: "Month must be 2 digits" }),
    expiryDatey: string().length(2, { message: "Date must be 2 digits each" }),
    cvc: string().length(3, { message: "CVC must be 3 digits" }),
  });

  // ! Using react hook form to handle form state and validation
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  });

  const dispatch = useDispatch();
  const cardNumber = useSelector((state) => state.card.formattedCardNumber);
  const navigate = useNavigate();
  
  // ! Checking if there are any errors in the form
  const hasNameError = formState.errors.name !== undefined;
  const hasExpiryMonthError = formState.errors.expiryDatem !== undefined;
  const hasExpiryYearError = formState.errors.expiryDatey !== undefined;
  const hasCVVError = formState.errors.cvc !== undefined;

  const handleCardNameChange = (newName) => {
    dispatch(setCardName(newName));
  };

  const handleCardNumberChange = (newNumber) => {
    dispatch(setCardNumber(newNumber));
  };

  const handleExpiryMonthChange = (newExpiryMonth) => {
    dispatch(setExpiryMonth(newExpiryMonth));
  };

  const handleExpiryYearChange = (newExpiryYear) => {
    dispatch(setExpiryYear(newExpiryYear));
  };

  const handleCVVChange = (newCVV) => {
    dispatch(setCVV(newCVV));
  };

  const onSubmit = () => {
    // ! Navigating to the success page on form submission
    navigate("/success");
  };

  return (
    <section className="mt-24 w-[90%] mx-auto sm:mt-0 sm:mx-0 sm:w-[40%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <label htmlFor="name" className="block">
            CARDHOLDER NAME
          </label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                value={field.value || ""}
                id="name"
                {...field}
                placeholder="e.g. Jane Appleseed"
                className="block w-full input-border"
                style={{
                  borderColor: hasNameError ? "#FF5C5C" : "",
                  borderImage: hasNameError ? "none" : "",
                }}
                autoComplete="off"
                onChange={(e) => {
                  field.onChange(e);
                  handleCardNameChange(e.target.value);
                }}
              />
            )}
          />
          {formState.errors.name && (
            <p className="text-error-red">{formState.errors.name.message}</p>
          )}
        </div>
        <div className="input-box">
          <label htmlFor="number" className="block">
            CARD NUMBER
          </label>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                id="number"
                {...field}
                placeholder="e.g. 1234 5678 9123 0000"
                className="block w-full input-border"
                maxLength={19}
                minLength={19}
                autoComplete="off"
                value={cardNumber || ""}
                onChange={(e) => {
                  field.onChange(e);
                  handleCardNumberChange(e.target.value);
                }}
              />
            )}
          />
        </div>
        <div className="flex input-box">
          <div className="w-1/2">
            <span>EXP. DATE (MM/YY)</span>
            <Controller
              name="expiryDatem"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="date"
                  {...field}
                  placeholder="MM"
                  className="input-border w-[40%] mr-4"
                  style={{
                    borderColor: hasExpiryMonthError ? "#FF5C5C" : "",
                    borderImage: hasExpiryMonthError ? "none" : "",
                  }}
                  maxLength={2}
                  autoComplete="off"
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e);
                    handleExpiryMonthChange(e.target.value);
                  }}
                />
              )}
            />
            <Controller
              name="expiryDatey"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="date2"
                  {...field}
                  placeholder="YY"
                  className="input-border w-[40%]"
                  style={{
                    borderColor: hasExpiryYearError ? "#FF5C5C" : "",
                    borderImage: hasExpiryYearError ? "none" : "",
                  }}
                  maxLength={2}
                  autoComplete="off"
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e);
                    handleExpiryYearChange(e.target.value);
                  }}
                />
              )}
            />
            {formState.errors.expiryDatey && (
              <p className="mr-2 text-error-red">
                {formState.errors.expiryDatey.message}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <p>CVC</p>
            <Controller
              name="cvc"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  id="cvc"
                  {...field}
                  placeholder="e.g. 123"
                  className="w-full input-border"
                  style={{
                    borderColor: hasCVVError ? "#FF5C5C" : "",
                    borderImage: hasCVVError ? "none" : "",
                  }}
                  maxLength={3}
                  autoComplete="off"
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e);
                    handleCVVChange(e.target.value);
                  }}
                />
              )}
            />
            {formState.errors.cvc && (
              <p className="ml-2 text-error-red">
                {formState.errors.cvc.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white rounded-lg bg-dark-violet"
        >
          Confirm
        </button>
      </form>
    </section>
  );
};
