import DropDownContent from "@components/widgets/DropDownContent/DropDownContent";
import React from "react";

export default function QuestionComponent() {
  return (
    <div className="pb-9">
      <div className="py-6 bg-[#efefef] mb-4"></div>
      <p className="text-center pb-10 pt-4 mt-16">
        <strong className="text-3xl">Frequently Asked Questions</strong>
      </p>
      <div className="flex flex-col items-center mb-32">
        <DropDownContent title="What's included in a maid service cleaning ?">
          <p className="break-words text-lg text-[#4c4c4c] mb-4">
            See what's included in a deep cleaning service here.
          </p>
        </DropDownContent>
        <DropDownContent title="Which professional will come to my place?">
          <p className="break-words text-lg text-[#4c4c4c] mb-4">
            Handy has a vast network of experienced, top-rated cleaners. Based
            on the time and date of your request, we will connect you with the
            best professional available. Like working with a specific pro? Add
            them to your Pro Team from the mobile app and they'll be requested
            first for all future bookings. You will receive an email with
            details about your professional prior to your appointment.
          </p>
        </DropDownContent>
        <DropDownContent title="Can I skip or reschedule bookings?">
          <p className="break-words text-lg text-[#4c4c4c] mb-4">
            You can reschedule any booking for free at least 24 hours in advance
            of the scheduled start time. If you need to skip a booking within
            the minimum commitment, we’ll credit the value of the booking to
            your account. You can use this credit on future cleanings and other
            Handy services.
          </p>
        </DropDownContent>
        <DropDownContent title="I need more help.">
          <p className="break-words text-lg text-[#4c4c4c] mb-4">
            Please see the Help Center.
          </p>
        </DropDownContent>
        {/* <DropDownContent title="☕️Should I return the earrings I received ?">
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
        </DropDownContent>
        <DropDownContent title="🎁Should I return the earrings I received ?">
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
        </DropDownContent>
        <DropDownContent title="❓Should I return the earrings I received ?">
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
          <p className="break-words">
            Earrings tend to lose their light and get away from my heart over
            time, so please don't hesitate to enjoy them!
          </p>
        </DropDownContent> */}
      </div>
    </div>
  );
}
