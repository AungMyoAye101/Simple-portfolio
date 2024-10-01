import React from "react";

const Contact = () => {
  return (
    <section
      className="min-h-screen py-16 flex flex-col items-center gap-10 px-10"
      id="contact"
    >
      <div className="space-y-4">
        <h1 className="font-poppin font-bold text-2xl sm:text3xl md:text-4xl lg:text-5xl text-center">
          Contact Me
        </h1>
        <h2 className="font-lora font-semibold text-xl md:text-2xl ">
          Feel free to reach out by sending an email.
        </h2>
      </div>

      {/* form */}
      <div className=" w-full md:w-[50%] sm:grid flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="FirstName"
            className="text-sm md:text-base font-lora "
          >
            First Name
          </label>
          <input
            type="text"
            id="FirstName"
            placeholder="Enter your First Name"
            className="input-style"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            id="LastName"
            placeholder="Enter your Last Name"
            className="input-style"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your mail address"
            className="input-style"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="Description"
            className="text-sm md:text-base font-lora "
          >
            Description
          </label>
          <input
            type="text"
            id="Description"
            placeholder="Enter your Description"
            className="input-style"
          />
        </div>
        <div className="flex flex-col gap-1 col-span-2 ">
          <label htmlFor="text" className="text-sm md:text-base font-lora ">
            What are your thoughts on my website?
          </label>
          <textarea
            id="text"
            placeholder="I value your opinion"
            className="input-style h-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
