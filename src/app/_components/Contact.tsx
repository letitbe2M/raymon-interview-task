import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import FormSubmitMessageInContact from "./ContactForm";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="py-12">
      <h1 className="text-center font-bold text-2xl mb-8">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <FormSubmitMessageInContact />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 font-serif">
          <h2 className="font-bold text-xl mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out to me for collaboration or just a friendly
            chat. I am always open to discussing new projects, creative ideas,
            or opportunities.
          </p>

          <div className="mb-4 flex items-center">
            <FaPhoneAlt className="text-blue-500 text-2xl mr-3" />
            <span className="text-gray-700">+989335892735</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-red-500 text-2xl mr-3" />
            <span className="text-gray-700">mohammad.2m1997@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
