import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
export default function ContactForm({ setIsOpen }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    designation: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_ipn3cfc", // Replace with your service ID
        "template_9a3j7gj", // Replace with your template ID
        formData,
        "X681zyi-mMZdQG3Di" // Replace with your user ID from EmailJS
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setIsOpen(false); // Close form on successful submission
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border-[8px] border-black p-[18px] w-[60%] text-left shadow-lg relative">
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="close-btn">
          &times;
        </button>

        <form className="space-y-2" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="text-[20px] block text-black font-normal font-[Calibri]">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-3 mt-[10px] bg-[#00000017] text-[18px] text-black rounded-sm font-[Calibri]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-[20px] block text-black font-normal font-[Calibri]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 mt-[10px] bg-[#00000017] text-[18px] text-black rounded-sm font-[Calibri]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-[20px] block text-black font-normal font-[Calibri]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 mt-[10px] bg-[#00000017] text-[18px] text-black rounded-sm font-[Calibri]"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="text-[20px] block text-black font-normal font-[Calibri]">
              Company Name (Brand Name)
            </label>
            <input
              type="text"
              placeholder="Enter your company or brand name"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-3 mt-[10px] bg-[#00000017] text-[18px] text-black rounded-sm font-[Calibri]"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="text-[20px] block text-black font-normal font-[Calibri]">
              Designation
            </label>
            <input
              type="text"
              placeholder="Enter your designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              className="w-full p-3 mt-[10px] bg-[#00000017] text-[18px] text-black rounded-sm font-[Calibri]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-[20px] block text-black font-normal font-[Calibri]">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 mt-[10px] bg-[#00000017] text-[18px] text-black rounded-sm font-[Calibri] h-24"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button className="w-full p-3 bg-[#BDA10E] text-white font-bold rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
