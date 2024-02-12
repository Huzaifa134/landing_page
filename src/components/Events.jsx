import React from 'react';

export default function EventsComponent() {
  // Replace this with your actual events data
  const events = [
    { title: ':Balances:Transfer', description: 'Some description' },
    { title: ':System:ExtrinsicSuccess', description: 'Some description' },
    // Add more events here...
  ];

  return (
    <div className="w-full max-w-xs bg-white overflow-y-auto max-h-60">
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
  );
}
