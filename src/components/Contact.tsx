import React from "react";

const Contact = () => {
  return (
    <section className="section-container" id="contact">
      <div className="space-y-4">
        <h1 className="heading">Contact Me</h1>
        <h2 className="font-lora font-semibold text-xl md:text-2xl ">
          Feel free to reach out by sending an email.
        </h2>
      </div>

      {/* form */}
      <div className=" w-full md:w-[60%] sm:grid  flex flex-col gap-4 ">
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
          <label htmlFor="LastName">Last Name (optional)</label>
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
          <label htmlFor="description">Description</label>
          <select className="input-style text-neutral-400" id="description">
            <option value="">Enter your description</option>
            <option value="Want to hire">Want to hire</option>
            <option value="Want to create a project">
              Want to create a project
            </option>

            <option value="Just talk">Just talk</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 col-span-2 ">
          <label htmlFor="text" className="text-sm md:text-base font-lora ">
            What are your thoughts on my website?
          </label>
          <textarea
            id="text"
            placeholder="I value your opinion"
            className="input-style h-28 "
          />
        </div>
        <button className="px-6 py-2 rounded-lg shadow-md border-2 border-cyan-400 col-span-2 font-lora text-lg hover:scale-105 hover:shadow-lg transition-all ease-out duration-200 ">
          Send
        </button>
      </div>
      <p className="text-base  font-lora font-medium">
        Let&apos;s work together to bring your ideas to life. Reach out and
        let&apos;s build something amazing
      </p>
    </section>
  );
};

export default Contact;
