import { useRef, useState } from "react";
import Select from "react-select";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BlurryCursor from "../components/Cursor";
import ScrollUpButton from "../components/ScrollUpButton";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const thankYouText =
    "Thank you for your message! I will get back to you soon.";

  const [isHovered, setIsHovered] = useState(false);

  // Function to handle hover state from Hero component
  const handleHoverChange = (hoverState) => {
    setIsHovered(hoverState);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".text",
      {
        opacity: 0,
        x: 30,
      },
      {
        duration: 2,
        opacity: 1,
        x: 0,
        ease: "back.out",
      }
    );

    gsap.fromTo(
      ".footerText",
      {
        opacity: 0,
        y: 30,
      },
      {
        duration: 2,
        opacity: 1,
        y: 0,
        ease: "bounce",
        scrollTrigger: {
          top: "top bottom",
          trigger: ".footerText",
        },
      }
    );

    gsap.utils.toArray(".card").forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "back.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // thank you message animation
    gsap.from(".thankYouText", {
      opacity: 0,
      stagger: 0.05,
      ease: "expo",
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Reda Assemghor",
      message: message,
      selected_option: selectedOption ? selectedOption.value : "", // Add selected option to templateParams
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setSelectedOption(null); // Reset the selected option
        setSent(true);
        setLoading(false); // Set loading state to false
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setLoading(false); // Set loading state to false
      });
  };

  return (
    <div>
      <main ref={ref} id="contact">
        <ScrollUpButton onHoverChange={handleHoverChange} />
        <BlurryCursor isHovered={isHovered} />
        <Helmet>
          <title>Contact | Reda Assemghor,developer&designer</title>
          <meta name="description" content="This is the home page" />
          <meta name="keywords" content="home, landing" />
        </Helmet>
        <div className="flex flex-col items-center">
          <h1 className="text font-semibold lg:text-5xl text-2xl m-10 mt-20">
            Contact Me
          </h1>
          <div className="text mb-20 font-semibold">
            <a
              href="/"
              onMouseEnter={handleHoverChange.bind(this, true)}
              onMouseLeave={handleHoverChange.bind(this, false)}
              className="text-[#181818]"
            >
              <span className="hover:text-pink-500">Home :</span>{" "}
            </a>
            <span className=""> Contact Me</span>
          </div>

          <div className="flex flex-col gap-8 p-8">
            <div className="cards flex md:flex-row flex-col gap-4">
              <div className="card p-12 flex flex-col items-center gap-4 bg-gray-100">
                <img className="w-10" src="/phone.png" alt="Mobile" />
                <h1 className="font-semibold lg:text-2xl">Phone</h1>
                <p className="text-[#181818] font-light">
                  Mobile : +212 600-190-494
                </p>
              </div>

              <div className="card p-12 flex flex-col items-center gap-4 bg-gray-100">
                <img className="w-10" src="/mail.png" alt="Mobile" />
                <h1 className="font-semibold lg:text-2xl">Mail Address</h1>
                <a className="text-[#181818] font-light" href="">
                  Assemghor.reda@gmail.com
                </a>
              </div>

              <div className="card p-12 flex flex-col items-center gap-4 bg-gray-100">
                <img className="w-10" src="/time.png" alt="Mobile" />
                <h1 className="font-semibold lg:text-2xl">Our Location</h1>
                <a className="text-[#181818] font-light" href="">
                  Morocco, Rabat
                </a>
              </div>

              <div className="card p-12 flex flex-col items-center gap-4 bg-gray-100">
                <img className="w-10" src="/location.png" alt="Mobile" />
                <h1 className="font-semibold lg:text-2xl">Office Hour</h1>
                <a className="text-[#181818] font-light" href=""></a>
              </div>
            </div>

            <div className="card flex md:flex-row flex-col w-full items-center justify-center gap-10 relative">
              <iframe
                className="md:h-[500px] w-full flex-1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52962.05933104808!2d-6.8845567999999995!3d33.9378176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7129ada04c2fb%3A0x35aeb81f6b145b90!2zVMOpbWFyYQ!5e0!3m2!1sfr!2sma!4v1706398600301!5m2!1sfr!2sma"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
              {!sent && (
                <form
                  onSubmit={handleSubmit}
                  className="card flex flex-col flex-1 h-[500px] p-10 bg-gray-100 gap-5 relative"
                >
                  {loading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                      <div className="flex items-center justify-center loader ease-linear rounded-full border-8 border-pink-600 h-40 w-40">
                        <div className="outerLoader ease-linear rounded-full border-4 border-pink-600 h-[120px] w-[120px]"></div>
                      </div>
                    </div>
                  )}
                  <h1 className="font-semibold text-2xl">Leave A Message</h1>
                  <div className="flex gap-4">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      className="bg-transparent w-1/2 outline-none py-4 border-b-2 border-gray-300"
                      type="text"
                      value={name}
                      placeholder="Name"
                      onMouseEnter={handleHoverChange.bind(this, true)}
                      onMouseLeave={handleHoverChange.bind(this, false)}
                    />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent w-1/2 outline-none py-4 border-b-2 border-gray-300"
                      type="text"
                      value={email}
                      placeholder="Email"
                      onMouseEnter={handleHoverChange.bind(this, true)}
                      onMouseLeave={handleHoverChange.bind(this, false)}
                    />
                  </div>
                  <Select
                    className="cursor-pointer"
                    options={[
                      { value: "Consultation", label: "Consultation" },
                      { value: "Service", label: "Service" },
                      { value: "Pricing", label: "Pricing" },
                      { value: "Support", label: "Support" },
                    ]}
                    value={selectedOption}
                    onChange={setSelectedOption}
                  />
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-transparent w-full outline-none py-4 border-b-2 border-gray-300"
                    name=""
                    cols="30"
                    rows="4"
                    value={message}
                    placeholder="Message"
                    onMouseEnter={handleHoverChange.bind(this, true)}
                    onMouseLeave={handleHoverChange.bind(this, false)}
                  ></textarea>
                  <button
                    className="w-60 py-5 border border-gray-500 rounded-full font-bold hover:text-white hover:bg-pink-600 duration-500 flex items-center justify-center"
                    type="submit"
                    disabled={loading}
                    onMouseEnter={handleHoverChange.bind(this, true)}
                    onMouseLeave={handleHoverChange.bind(this, false)}
                  >
                    Send Message
                  </button>
                </form>
              )}
              {sent && (
                <div className="flex flex-1 flex-col justify-around items-center gap-4 bg-gray-100 p-10 h-[500px] w-full lg:mr-6">
                  <p className="lg:text-2xl text-[#181818] font-light">
                    {thankYouText.split("").map((word, i) => (
                      <span key={i} className="thankYouText">
                        {word}
                      </span>
                    ))}
                  </p>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ fontSize: "144px", color: "gray" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footerText text-[#181818] flex justify-between border-b-2 mt-10 p-5">
          <h1 className="lg:text-4xl font-light">Let&apos;s Work Together</h1>
          <h1 className="lg:text-2xl font-light">SEND ME A MESSAGE</h1>
        </div>
      </main>

      <Footer onHoverChange={handleHoverChange} />
    </div>
  );
}

export default ContactMe;
