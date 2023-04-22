import Card from "@components/widgets/Card/card";
import Pagination from "@components/widgets/pagination/pagination";
import React from "react";

export default function ReviewView() {
  const updatePage = (page: number) => {
    console.log("selected pages");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-12 lg:w-[80%] w-[90%] mb-16 mt-16">
          <Card
            name="Drew"
            star={5}
            comment="“In my previous life when I was consulting, I didn’t have near the flexibility of my schedule that I have now. I work hard but I can come and go on my own schedule.”"
          />
          <Card
            name="Drew"
            star={5}
            comment="“In my previous life when I was consulting, I didn’t have near the flexibility of my schedule that I have now. I work hard but I can come and go on my own schedule.”"
          />
          <Card
            name="Drew"
            star={5}
            comment="“In my previous life when I was consulting, I didn’t have near the flexibility of my schedule that I have now. I work hard but I can come and go on my own schedule.”"
          />
          <Card
            name="Drew"
            star={5}
            comment="“In my previous life when I was consulting, I didn’t have near the flexibility of my schedule that I have now. I work hard but I can come and go on my own schedule.”"
          />
          <Card
            name="Drew"
            star={5}
            comment="“In my previous life when I was consulting, I didn’t have near the flexibility of my schedule that I have now. I work hard but I can come and go on my own schedule.”"
          />
          <Card
            name="Drew"
            star={5}
            comment="“In my previous life when I was consulting, I didn’t have near the flexibility of my schedule that I have now. I work hard but I can come and go on my own schedule.”"
          />
          <Card
            name="Drew"
            star={5}
            comment="“In my previous life when I was consulting, I didn’t have near the flexibility of my schedule that I have now. I work hard but I can come and go on my own schedule.”"
          />
          <Card
            name="Drew"
            star={5}
            comment="“In my previous life when I was consulting, I didn’t have near the flexibility of my schedule that I have now. I work hard but I can come and go on my own schedule.”"
          />
        </div>
        <Pagination total={100} onSubmit={updatePage} />
      </div>
    </div>
  );
}
