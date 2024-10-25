import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    nickname: "",
    birthdate: "",
    parentFirstName: "",
    parentLastName: "",
    parentBirthdate: "",
    partnerFirstName: "",
    partnerLastName: "",
    partnerBirthdate: "",
    petName: "",
    companyName: "",
    keywords: "",
    randomNumbers: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedData = {
        ...formData,
        keywords: formData.keywords.split(",").map((keyword) => keyword.trim()),
        randomNumbers: formData.randomNumbers.split(",").map(Number),
        parent: {
          firstName: formData.parentFirstName,
          lastName: formData.parentLastName,
          birthdate: formData.parentBirthdate,
        },
        partner: {
          firstName: formData.partnerFirstName,
          lastName: formData.partnerLastName,
          birthdate: formData.partnerBirthdate,
        },
      };

      await axios.post("https://enig-api.vercel.app/submit", formattedData);
      alert("Data saved successfully");
      setFormData({
        email: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        nickname: "",
        birthdate: "",
        parentFirstName: "",
        parentLastName: "",
        parentBirthdate: "",
        partnerFirstName: "",
        partnerLastName: "",
        partnerBirthdate: "",
        petName: "",
        companyName: "",
        keywords: "",
        randomNumbers: "",
      });
    } catch (error) {
      alert("Error saving data");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full"
      >
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          User Information
        </h2>

        {/* Input Fields */}
        {[
          {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            required: true,
          },
          {
            label: "Phone Number",
            name: "phoneNumber",
            type: "text",
            placeholder: "Enter your phone number",
            required: true,
          },
          {
            label: "First Name",
            name: "firstName",
            type: "text",
            placeholder: "Enter your first name",
            required: true,
          },
          {
            label: "Last Name",
            name: "lastName",
            type: "text",
            placeholder: "Enter your last name",
            required: true,
          },
          {
            label: "Nickname",
            name: "nickname",
            type: "text",
            placeholder: "Enter a nickname (optional)",
            required: true,
          },
          {
            label: "Birthdate",
            name: "birthdate",
            type: "text",
            placeholder:"example DDMMYYYY : 15101993",
            required: true,
          },
          {
            label: "Parent's First Name",
            name: "parentFirstName",
            type: "text",
            placeholder: "Enter parent's first name",
            required: true,
          },
          {
            label: "Parent's Last Name",
            name: "parentLastName",
            type: "text",
            placeholder: "Enter parent's last name",
            required: true,
          },
          {
            label: "Parent's Birthdate",
            name: "parentBirthdate",
            type: "text",
            placeholder:"example DDMMYYYY : 15101993",
            required: true,
          },
          {
            label: "Partner's First Name",
            name: "partnerFirstName",
            type: "text",
            placeholder: "Enter partner's first name",
            required: true,
          },
          {
            label: "Partner's Last Name",
            name: "partnerLastName",
            type: "text",
            placeholder: "Enter partner's last name",
            required: true,
          },
          {
            label: "Partner's Birthdate",
            name: "partnerBirthdate",
            type: "text",
            placeholder:"example DDMMYYYY : 15101993",
            required: true,
          },
          {
            label: "Pet Name",
            name: "petName",
            type: "text",
            placeholder: "Enter pet's name",
            required: true,
          },
          {
            label: "Company Name",
            name: "companyName",
            type: "text",
            placeholder: "Enter company name (optional)",
          },
          {
            label: "Keywords",
            name: "keywords",
            type: "text",
            placeholder: "Enter keywords separated by commas",
          },
          {
            label: "Random Numbers",
            name: "randomNumbers",
            type: "text",
            placeholder: "Enter random numbers separated by commas",
          },
        ].map(({ label, name, type, placeholder, required }, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-600 font-semibold mb-1">
              {label}:
            </label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
              className="block w-full border-gray-300 rounded-lg shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
