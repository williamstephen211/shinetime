import React from "react";

export default function ExplainSeven() {
  return (
    <div className="lg:px-[16px] py-[64px] bg-[#fafafa]">
      <div className="lg:py-8 py-4 mb-8">
        <p className="lg:text-2xl text-lg text-center">
          <strong>Reason why you'm Loved by So Many People</strong>
        </p>
      </div>
      <div className="flex flex-wrap mx-6">
        <div className="flex flex-col gap-5 items-center lg:px-1 px-12 lg:w-1/4 w-full lg:my-1 my-8">
          <img src="/new_story.png" className="max-w-[120px] h-auto" />
          <p>
            <strong>New Story Monthly</strong>
          </p>
          <p className="text-center pb-4 px-4 break-words">
            It's fun to wait for what kind of contents are in the next month.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center lg:px-1 px-12 lg:w-1/4 w-full lg:my-1 my-8">
          <img src="/helping.png" className="max-w-[120px] h-auto" />
          <p>
            <strong>New Story Monthly</strong>
          </p>
          <p className="text-center pb-4 px-4 break-words">
            It's fun to wait for what kind of contents are in the next month.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center lg:px-1 px-12 lg:w-1/4 w-full lg:my-1 my-8">
          <img src="/subscribe.png" className="max-w-[120px] h-auto" />
          <p>
            <strong>New Story Monthly</strong>
          </p>
          <p className="text-center pb-4 px-4 break-words">
            It's fun to wait for what kind of contents are in the next month.
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center lg:px-1 px-12 lg:w-1/4 w-full lg:my-1 my-8">
          <img src="/stop.png" className="max-w-[120px] h-auto" />
          <p>
            <strong>New Story Monthly</strong>
          </p>
          <p className="text-center pb-4 px-4 break-words">
            It's fun to wait for what kind of contents are in the next month.
          </p>
        </div>
      </div>
    </div>
  );
}
