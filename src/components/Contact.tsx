"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
    <section className="section-container" id="contact">
      <div className="space-y-4">
        <h1 className="heading">Contact Me</h1>
        <h2 className="font-lora font-semibold text-xl md:text-2xl ">
          Feel free to reach out by sending an email.
        </h2>
      </div>

      {/* form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" w-full md:w-[60%] grid gap-4 "
      >
        <div className="flex flex-col gap-1 ">
          <input
            type="text"
            id="Name"
            name="name"
            placeholder="Enter your First Name"
            className="input-style"
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your mail address"
            className="input-style"
          />
        </div>
        {/* <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <select className="input-style text-neutral-400" id="description">
            <option value="">Enter your description</option>
            <option value="Want to hire">Want to hire</option>
            <option value="Want to create a project">
              Want to create a project
            </option>

            <option value="Just talk">Just talk</option>
          </select>
        </div> */}
        <div className="flex flex-col gap-1  ">
          <textarea
            id="text"
            name="message"
            placeholder="I value your opinion"
            className="input-style h-28 "
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 rounded-lg shadow-md border-2 border-cyan-400  font-lora text-lg hover:scale-105 hover:shadow-lg transition-all ease-out duration-200 "
        >
          Send
        </button>
      </form>
      <p className="text-base  font-lora font-medium">
        Let&apos;s work together to bring your ideas to life. Reach out and
        let&apos;s build something amazing
      </p>
    </section>
  );
};

export default Contact;
