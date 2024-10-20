import {
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineArrowUp,
} from "react-icons/ai";

const DecorativeDots: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2 mt-8">
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-400" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-200" />
      <div className="w-3 h-3 bg-teal-600 rounded-full animate-bounce delay-400" />
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-900 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start px-6 space-y-8 md:space-y-0">
        {/* Contact Info */}
        <div className="contact-info flex-1 p-8 mb-8 md:mb-0 justify-center mt-16 md:mt-0">
          <div className="info text-gray-400">
            <p className="mb-6 flex items-center">
              <span className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-xl mr-3">
                <AiOutlineEnvironment className="text-teal-500 text-4xl" />
              </span>
              <span>
                <strong>Location:</strong>
                <br />
                <span className="text-sm text-cyan-500 font-mono">
                  Karachi, Pakistan
                </span>
              </span>
            </p>
            <p className="mb-6 flex items-center">
              <span className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-xl mr-3">
                <AiOutlineMail className="text-teal-500 text-4xl" />
              </span>
              <span>
                <strong>Email:</strong>
                <br />
                <span className="text-sm text-cyan-500 font-bold font-mono">
                  areebasadiq96@gmail.com
                </span>
              </span>
            </p>
          </div>
          <DecorativeDots />
        </div>

        {/* Contact Form */}
        <div className="contact-form flex-1 bg-gray-800 p-8 rounded-lg shadow-lg mx-auto md:mx-0 w-full md:max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-600 text-center">
            Get in Touch
          </h2>
          <form>
            <div className="form-group mb-4 flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Your First Name"
                  required
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent placeholder-light-gray"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Your Last Name"
                  required
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent placeholder-light-gray"
                />
              </div>
            </div>

            <div className="form-group mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent placeholder-light-gray"
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-transparent placeholder-light-gray"
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-700 text-white py-3 px-6 rounded-lg border border-cyan-500 flex items-center justify-center mx-auto hover:bg-cyan-500 transition duration-300"
            >
              <AiOutlineArrowUp size={20} className="mr-2" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
