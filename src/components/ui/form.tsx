import React, { useRef } from "react";
import SubmitButton from "./SubmitButton";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useFormStatus } from "react-dom";

const Form = () => {
  const { pending } = useFormStatus();
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = () => {
    if (!form.current) return;
    emailjs
      .sendForm(
        "service_jfthy5f",
        "template_jn7xbx8",
        form.current,
        "uE4oObU-ushf6zRRS"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 4,
        duration: 1,
      }}
      ref={form}
      action={sendEmail}
      className=" w-full md:w-[60%] grid gap-4 "
    >
      <div className="flex flex-col gap-1 ">
        <input
          type="text"
          id="Name"
          name="name"
          disabled={pending}
          placeholder="Enter your  Name"
          className="input-style"
        />
      </div>

      <div className="flex flex-col gap-1 ">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          className="input-style"
        />
      </div>

      <div className="flex flex-col gap-1  ">
        <textarea
          id="text"
          name="message"
          placeholder="I value your opinion"
          className="input-style h-28 "
        />
      </div>
      {/* <button
    type="submit"
    className="px-6 py-2 rounded-lg shadow-md border-2 border-cyan-400  font-lora text-lg hover:scale-105 hover:shadow-lg transition-all ease-out duration-200 "
  >
    {pending ? "Submiting..." : "Submit"}
  </button> */}
      <SubmitButton />
    </motion.form>
  );
};

export default Form;
