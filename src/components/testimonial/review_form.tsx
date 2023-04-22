import RateWidget from "@components/widgets/RateStar/rate.widget";
import React, { useState } from "react";
import { ReviewFormProps } from "../../utils/types/types";

type SubmitProps = {
  onCancelVisible: () => void;
  onSubmitReview: (info: ReviewFormProps) => void;
};
export default function ReivewForm({
  onCancelVisible,
  onSubmitReview,
}: SubmitProps) {
  const [information, setInformation] = useState<ReviewFormProps>({
    firstName: "",
    lastName: "",
    rate: 1,
    serviceName: "",
    comment: "",
    email: null,
  });
  const [formValid, setFormValid] = useState({
    firstName: false,
    lastName: false,
    comment: false,
  });
  const setRate = (star: number) => {
    setInformation((props) => {
      props.rate = star;
      return props;
    });
  };
  const onChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    value !== "" && setFormValid({ ...formValid, firstName: false });
    setInformation((props) => {
      props.firstName = value;
      return props;
    });
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInformation((props) => {
      props.email = value;
      return props;
    });
  };
  const onChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    value !== "" && setFormValid({ ...formValid, lastName: false });
    setInformation((props) => {
      props.lastName = value;
      return props;
    });
  };
  const onChangeReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    value !== "" && setFormValid({ ...formValid, comment: false });
    setInformation((props) => {
      props.comment = value;
      return props;
    });
  };
  const onChangeService = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setInformation((props) => {
      props.serviceName = value;
      return props;
    });
  };
  const onSubmit = () => {
    if (
      information.firstName == "" ||
      information.comment == "" ||
      information.lastName == ""
    ) {
      let temp = { firstName: false, lastName: false, comment: false };
      Object.entries(information).forEach((entry) => {
        const [key, value] = entry;
        if (key == "firstName" || key == "lastName" || key == "comment") {
          if (value == "") temp = { ...temp, [key]: true };
        }
      });
      setFormValid(temp);
    } else {
      onSubmitReview(information);
    }
  };
  return (
    <div className="w-full bg-[#dfefff] flex flex-col items-center py-16">
      <div className="flex flex-col w-4/5">
        <div className="flex justify-between items-center w-full pb-12">
          <p className="text-3xl font-semibold">Write a Review</p>
          <p
            onClick={onCancelVisible}
            className="font-semibold cursor-pointer text-blue-900 underline hover:text-blue-600"
          >
            CANCEL
          </p>
        </div>
        <div className="flex flex-col w-full mb-8">
          <div className="flex w-full items-center">
            <p className="text-lg mr-4">Rate Your Experience</p>
            <RateWidget setRate={setRate} />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-4 mb-8 ">
          <input
            className={`${
              formValid.firstName ? "border-[#f71111]" : "border-[#cfcfcf]"
            } py-4 flex-1 px-4  text-xl border-x-[1px] border-y-[1px] focus:outline-none focus:border-x-[1px] focus:border-y-[1px] focus:border-[#2b4c9e]`}
            placeholder="First Name *"
            onChange={onChangeFirstName}
          ></input>
          <input
            className={`${
              formValid.lastName ? "border-[#f71111]" : "border-[#cfcfcf]"
            } py-4 flex-1 px-4 text-xl focus:outline-none border-x-[1px] border-y-[1px] border-[#cfcfcf] focus:border-x-[1px] focus:border-y-[1px] focus:border-[#2b4c9e]`}
            placeholder="Last Name *"
            onChange={onChangeLastName}
          ></input>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-4">
          {/* <input
            className="py-4 flex-1 px-4 text-xl border-x-[1px] border-y-[1px] border-[#cfcfcf] focus:outline-none focus:border-x-[1px] focus:border-y-[1px] focus:border-[#2b4c9e]"
            placeholder="Service Name"
          ></input> */}

          <select
            id="services"
            placeholder="Choose A Service"
            className="py-4 px-4 flex-1 text-xl border-x-[1px] border-y-[1px] border-[#cfcfcf] focus:outline-none focus:border-x-[1px] focus:border-y-[1px] focus:border-[#2b4c9e]"
            onChange={onChangeService}
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
          <p className="flex-1 lg:hidden flex mb-[16px] text-xs text-[#4c4c4c]">
            Choose A Service
          </p>
          <input
            className="py-4 flex-1 px-4 text-xl border-x-[1px] border-y-[1px] border-[#cfcfcf] focus:outline-none focus:border-x-[1px] focus:border-y-[1px] focus:border-[#2b4c9e]"
            placeholder="Email"
            onChange={onChangeEmail}
          ></input>
        </div>
        <div className="flex gap-4 mb-4">
          <p className="flex-1 lg:flex hidden text-[#4c4c4c]">
            Choose A Service
          </p>
          <p className="flex-1 text-[#4c4c4c]">
            (Optional, will only be used to communicate with you as needed.)
          </p>
        </div>
        <div className="flex h-44 mb-16">
          <textarea
            className={`${
              formValid.comment ? "border-[#f71111]" : "border-[#cfcfcf]"
            } resize-none h-full py-4 flex-1 px-4 text-xl focus:outline-none focus:border-x-[1px] focus:border-y-[1px] focus:border-[#2b4c9e]`}
            placeholder="Review *"
            onChange={onChangeReview}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onSubmit}
            className="text-white text-lg bg-[#2b4c9e] font-semibold px-6 py-4 hover:bg-[#415ca0]"
          >
            SUBMIT REVIEW
          </button>
        </div>
      </div>
    </div>
  );
}
