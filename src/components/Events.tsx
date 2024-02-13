import React, { CSSProperties } from "react";
import IconEraserVariant from "./Eraser_Icon";

export default function EventsComponent() {
  const events = [
    {
      title: "Balances:Transfer",
      description: "5HGhE2166R33wtIJaUL1rVASBEOWUVAbQtUc5LyhtDnhtHpp",
    },
    {
      title: "Balances:Withdraw",
      description: "SERvoXojVEcUsX7nmi2HXMcStdg6q9JevndM3nAW9S8osrkjo",
    },
    {
      title: "System:ExtrinsicSuccess",
      description: "5FFWh4xXSmKr2iYTljheMPAYhebbwB76jmxXsBi3pK8zXYGss",
    },
    {
      title: "TransactionPayment:TransactionFeePaid",
      description: "5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6a",
    },
    {
      title: "System:ExtrinsicSuccess",
      description: "5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6a",
    },
    {
      title: "System:ExtrinsicSuccess",
      description: "5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6a",
    },
    {
      title: "System:ExtrinsicSuccess",
      description: "5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6a",
    },
    {
      title: "System:ExtrinsicSuccess",
      description: "5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6an",
    },
    // Add more events here...
  ];

  const scrollBarStyle: CSSProperties = {
    scrollbarWidth: "thin",
    scrollbarColor: "rgba(155, 155, 155, 0.7) transparent",
  };

  return (
    <div className="mt-10 mx-auto  max-w-full md:max-w-screen-sm">
      <h1 className="text-[#3f3f3f] mb-4 font-bold text-3xl flex items-center">
        Events
        <button className="ml-2">
          <IconEraserVariant className="h-6 w-6" />
        </button>
      </h1>

      <div
        className="bg-white overflow-y-auto max-h-60 rounded"
        style={scrollBarStyle}
      >
        <ul>
          {events.map((event, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <div className="border-l-4 border-[#d33079]">
                <h2 className="text-[#3f3f3f] ml-2 font-bold text-lg">
                  {event.title}
                </h2>
                <p className="ml-2 text-sm text-[#555555]">
                  {event.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
