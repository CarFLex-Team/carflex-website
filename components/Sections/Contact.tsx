export default function Contact() {
  return (
    <div
      className="flex flex-col justify-center mt-3 px-5 sm:px-8 md:px-15 bg-secondary-800 py-10"
      id="contact"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-background mb-10 ">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row  justify-center gap-8 md:gap-15">
        <div className="flex flex-col max-md:items-center justify-between mb-10 w-full md:w-1/2 gap-3">
          <h3 className="text-xl font-semibold text-background  text-left w-full">
            Submit a question
          </h3>
          <form className="flex flex-col items-center justify-between mb-10 w-full  gap-2">
            <input
              type="text"
              name=""
              id=""
              className="p-4 bg-white w-full"
              placeholder="Full Name"
            />
            <input
              type="email"
              name=""
              id=""
              className="p-4 bg-white w-full"
              placeholder="Email"
            />
            <input
              type="tel"
              name=""
              id=""
              className="p-4 bg-white w-full"
              placeholder="Phone Number"
            />
            <textarea
              name=""
              id=""
              className="p-4 bg-white w-full h-24"
              placeholder="Your Message
              

"
            />

            <button
              className="bg-primary-500 text-white py-2 px-4 rounded hover:bg-primary-500/90 w-full cursor-pointer transition-colors duration-300 text-xl font-medium"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col  mb-10 w-full md:w-1/2 gap-3">
          <h3 className="text-xl font-semibold text-background  text-left w-full">
            Contact us directly
          </h3>
          <div>
            <p className="text-gray-300 text-md mb-2">
              Monday - Friday 9 am - 9 pm EDT
            </p>
            <p className="text-gray-300 text-md mb-2">
              Weekends 10 am - 6 pm EDT
            </p>
            <a
              className="text-gray-300 text-md mb-2 underline underline-offset-4 hover:no-underline block "
              href="tel:(437) 505-2388"
            >
              (437) 505-2388
            </a>

            <a
              className="text-gray-300 text-md mb-2 underline underline-offset-4 hover:no-underline block "
              href="mailto:info@carflex.ca"
            >
              info@carflex.ca
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
