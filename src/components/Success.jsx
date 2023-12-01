import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {resetCardValues} from '../features/cardSlice';

export const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    // ! Resetting the card values and navigating to the form page
    navigate('/')
    dispatch(resetCardValues())
  }

  return (
    <section className="flex flex-col items-center justify-center h-[75%] space-y-5 mx-5 mt-12">
      <img src="/icon-complete.svg" alt="Complete" className="w-[20%]" />
      <h1 className="text-3xl tracking-widest uppercase">thank you!</h1>
      <p>We&apos;ve added your card details</p>
      <button
        type="submit"
        className="w-full py-3 text-white rounded-lg bg-dark-violet"
        onClick={handleClick}
      >
        Continue
      </button>
    </section>
  );
};
