import Select from "react-select";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "reda",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <main>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold lg:text-5xl text-2xl m-10 mt-20">
          Contact Me
        </h1>
        <div className=" mb-20">
          <a href="/">
            <span className=" font-bold hover:text-pink-500">Home :</span>{" "}
            <span className="text-gray-500 dark:text-gray-500">Contact Me</span>
          </a>
        </div>
        <div className="lg:flex lg:gap-10">
          <div className="p-12 flex flex-col items-center gap-4 bg-gray-100">
            <img className="" src="/src/assets/phone.png" alt="Mobile" />
            <h1 className="font-semibold text-2xl">Phone</h1>
            <a className="text-gray-500 dark:text-gray-400 font-light" href="">
              Mobile : +197-90-56-780
            </a>
          </div>

          <div className="p-12 flex flex-col items-center gap-4 bg-gray-100">
            <img src="/src/assets/mail.png" alt="Mobile" />
            <h1 className="font-semibold text-2xl">Mail Address</h1>
            <a className="text-gray-500 dark:text-gray-400 font-light" href="">
              Assemghor.reda@gmail.com
            </a>
          </div>

          <div className="p-12 flex flex-col items-center gap-4 bg-gray-100">
            <img src="/src/assets/time.png" alt="Mobile" />
            <h1 className="font-semibold text-2xl">Our Location</h1>
            <a className="text-gray-500 dark:text-gray-400 font-light" href="">
              Morocco, Rabat
            </a>
          </div>

          <div className="p-12 flex flex-col items-center gap-4 bg-gray-100">
            <img src="/src/assets/location.png" alt="Mobile" />
            <h1 className="font-semibold text-2xl">Office Hour</h1>
            <a className="text-gray-500 dark:text-gray-400 font-light" href="">
              Sun - Thu 09 am - 06pm Fri - Sat 4 pm - 10pm
            </a>
          </div>
        </div>

        <div className="lg:flex gap-10 lg:w-full m-20">
          <iframe
            className="lg:ml-20 md:w-[600px] lg:h-[450] w-[320px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52962.05933104808!2d-6.8845567999999995!3d33.9378176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7129ada04c2fb%3A0x35aeb81f6b145b90!2zVMOpbWFyYQ!5e0!3m2!1sfr!2sma!4v1706398600301!5m2!1sfr!2sma"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />

          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-10 bg-gray-100 lg:w-1/2 lg:mr-20 gap-5"
          >
            <h1 className="font-semibold text-2xl">Leave A Message</h1>
            <div className="flex gap-4">
              <input
                onChange={(e) => setName(e.target.value)}
                className=" bg-transparent w-1/2 outline-none py-4 border-b-2 border-gray-300"
                type="text"
                value={name}
                placeholder="Name"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent w-1/2 outline-none py-4 border-b-2 border-gray-300"
                type="text"
                value={email}
                placeholder="Email"
              />
            </div>
            <Select
              options={[
                { value: "Account", label: "Account" },
                { value: "Service", label: "Service" },
                { value: "Pricing", label: "Pricing" },
                { value: "Support", label: "Support" },
              ]}
            />

            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className=" bg-transparent w-full outline-none py-4 border-b-2 border-gray-300"
              name=""
              cols="30"
              rows="4"
              value={message}
              placeholder="Message"
            ></textarea>
            <button className=" w-60 py-5 border border-gray-500 rounded-full font-bold hover:text-white hover:bg-pink-600 duration-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-between mx-20 border-b-2 pb-5">
        <h1 className="lg:text-4xl text-gray-500 dark:text-gray-400 font-light">
          Let's Work Together
        </h1>
        <h1 className="lg:text-2xl text-gray-500 dark:text-gray-400 font-light">
          SEND ME A MESSAGE
        </h1>
      </div>
    </main>
  );
}

export default ContactMe;
