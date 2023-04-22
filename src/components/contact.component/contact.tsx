import React, { useState } from "react";
import { ContactFormProps } from "../../utils/types/types";

type ContactProps = {
  onSubmitForm: (info: ContactFormProps) => void;
};
export default function Contact({ onSubmitForm }: ContactProps) {
  const [information, setInformation] = useState<ContactFormProps>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    serviceName: "",
    zipcode: "",
    comment: "",
  });
  const [valid, setValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipcode: false,
    termCheck: false,
  });
  const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInformation({ ...information, firstName: value });
  };
  const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInformation({ ...information, lastName: value });
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInformation({ ...information, email: value });
  };
  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInformation({ ...information, address: value });
  };
  const onChangeZipCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInformation({ ...information, zipcode: value });
  };
  const onChangeService = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInformation({ ...information, serviceName: value });
  };
  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInformation({ ...information, comment: value });
  };
  const onChangePhoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInformation({ ...information, phoneNumber: value });
  };
  return (
    <div className="flex flex-col items-center lg:px-[16px] lg:pt-[84px] pt-[48px] pb-[96px]">
      <div className="relative text-center">
        <p className="text-4xl text-[#3c3c3c]">
          <strong>Contact Corporate Today</strong>
        </p>
        <p className="mt-4 mb-8 px-5 text-2xl">
          Please complete the form below or call us at
        </p>
      </div>
      <div className="flex gap-6 mb-20">
        <a
          href="tel:(888) 490-4227"
          className="text-blue-600 font-semibold cursor-pointer text-xl"
        >
          (888) 490-4227
        </a>
        <a
          href="mailto:shinetime@email.com"
          className="text-blue-600 font-semibold cursor-pointer text-xl"
        >
          shinetime@email.com
        </a>
      </div>
      <form className="lg:w-1/3 w-full">
        <div className="relative z-0 w-full mb-6">
          <div className="flex justify-center">
            <input
              type="text"
              name="floating_firstname"
              id="floating_firstname"
              className="block py-2.5 px-0 lg:w-full w-[90%] text-2xl text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_firstname"
              className="lg:w-full w-[90%] peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] lg:peer-focus:left-0 peer-focus:left-[5%] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First Name *
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <div className="flex justify-center">
            <input
              type="text"
              name="floating_lastname"
              id="floating_lastname"
              className="block py-2.5 px-0 lg:w-full w-[90%] text-2xl text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_lastname"
              className="lg:w-full w-[90%] peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] lg:peer-focus:left-0 peer-focus:left-[5%] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last Name *
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <div className="flex justify-center">
            <input
              type="email"
              name="floating_email"
              id="floating_repeat_email"
              className="block py-2.5 px-0 lg:w-full w-[90%] text-2xl text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="lg:w-full w-[90%] peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] lg:peer-focus:left-0 peer-focus:left-[5%] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email *
            </label>
          </div>
        </div>

        <div className="relative z-0 w-full mb-6 group">
          <div className="flex justify-center">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 lg:w-full w-[90%] text-2xl text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="lg:w-full w-[90%] peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] lg:peer-focus:left-0 peer-focus:left-[5%] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890) *
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <div className="flex justify-center">
            <input
              type="text"
              name="floating_zipcode"
              id="floating_zipcode"
              className="block py-2.5 px-0 lg:w-full w-[90%] text-2xl text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_zipcode"
              className="lg:w-full w-[90%] peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] lg:peer-focus:left-0 peer-focus:left-[5%] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Zip Code *
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <div className="flex justify-center">
            <input
              type="text"
              name="floating_address"
              id="floating_address"
              className="block py-2.5 px-0 lg:w-full w-[90%] text-2xl text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-gray-900 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_address"
              className="lg:w-full w-[90%] peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] lg:peer-focus:left-0 peer-focus:left-[5%] peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Address *
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 flex flex-col items-center">
          <select
            id="services"
            placeholder="Choose A Service"
            className="py-4 px-4 flex-1 lg:w-full w-[90%] text-xl border-x-[1px] border-y-[1px] border-[#cfcfcf] focus:outline-none focus:border-x-[1px] focus:border-y-[1px] focus:border-[#2b4c9e]"
            // onChange={onChangeService}
          >
            <option value="pool">Pool Patio Cleaning</option>
            <option value="house">House Wash</option>
            <option value="deck">Decks</option>
            <option value="concrete">Concrete Cleaning</option>
            <option value="patio">Patio Cleaning</option>
            <option value="paver">Paver Sanding</option>
            <option value="window">Window Cleaning</option>
            <option value="driveway">Driveway Cleaning</option>
            <option value="fence">Fence Cleaning</option>
            <option value="asphalt">Asphalt Sealing</option>
          </select>
          <div className="flex justify-start lg:w-full w-[90%]">
            <p className="text-sm text-[#8c8c8c]">Choose A Service</p>
          </div>
        </div>
        <div className="flex h-44 mb-4 justify-center">
          <textarea
            className="resize-none h-full lg:w-full w-[90%] placeholder:italic placeholder:text-base py-4 px-4 text-xl focus:outline-none focus:border-x-[1px] focus:border-y-[1px] focus:border-[#2b4c9e]"
            placeholder="Please explain"
            // onChange={onChangeReview}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <p className="lg:w-full w-[90%] text-left text-sm">
            By clicking ‘Submit’, I give Merry Maids & its franchisees consent
            to call/text me at my phone number above about offers (including via
            automated technology) . Consent is not a condition of purchase. Opt
            out anytime. I understand that the information I submit may be
            recorded.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center lg:w-full w-[90%] ">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0  dark:bg-white dark:border-gray-600"
            />
            <span className="text-blue-700 ">Do you agree with the above?</span>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium  text-xl lg:w-full w-4/5 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
