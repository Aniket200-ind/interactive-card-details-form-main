import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Form } from "./Form";
import { Success } from "./Success";

export const Light = () => {
  return (
    <section className="bg-white z-0 h-3/4 sm:h-screen sm:flex sm:items-center sm:justify-center sm:w-[70%]">
      {/*  
          ! USing react router to switch between the form and success page
      */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};
