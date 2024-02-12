import React from 'react';
import IconEraserVariant from './Eraser_Icon';

export default function EventsComponent() {
  // Replace this with your actual events data
  const events = [
    { title: 'Balances:Transfer', description: '5HGhE2166R33wtIJaUL1rVASBEOWUVAbQtUc5LyhtDnhtHpp' },
    { title: 'Balances:Withdraw', description: 'SERvoXojVEcUsX7nmi2HXMcStdg6q9JevndM3nAW9S8osrkjo' },
    { title: 'System:ExtrinsicSuccess', description: '5FFWh4xXSmKr2iYTljheMPAYhebbwB76jmxXsBi3pK8zXYGss' },
    { title: 'TransactionPayment:TransactionFeePaid', description: '5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6a' },
    { title: 'System:ExtrinsicSuccess', description: '5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6a' },
    { title: 'System:ExtrinsicSuccess', description: '5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6a' },
    { title: 'System:ExtrinsicSuccess', description: '5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6a' },
    { title: 'System:ExtrinsicSuccess', description: '5CDHUFXZ1Xchmain33gXeimyMu14nJeT4CUd1kLVkgGgH6an' },
    // Add more events here...
  ];

  const scrollBarStyle = {
    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(155, 155, 155, 0.7) transparent',
    scrollbarRadius: '10px',
  };

  return (
    <div><h1 className='w-[500px] flex justify-centera items-center mb-4 font-bold text-3xl'style={{}}>Events<button><IconEraserVariant className='ml-96 mb-0 h-6 w-6'/></button></h1>
    
    <div className="w-[500px] bg-white overflow-y-auto max-h-60 rounded" style={scrollBarStyle}>
      <ul>
        {events.map((event, index) => (
          <li key={index} className=" px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <div className=" border-l-4 border-[#d33079]">
            <h2 className=" ml-2 font-bold text-lg">{event.title}</h2>
            <p className="ml-2 text-sm text-gray-500">{event.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
