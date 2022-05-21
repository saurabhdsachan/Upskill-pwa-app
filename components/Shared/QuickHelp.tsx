import { LightBulbIcon } from '@heroicons/react/outline';
import React from 'react';

const QuickHelp = () => {
  return (
    <div className="mt-4">
      <LightBulbIcon className="w-10 h-10 text-slate-400" />
      <h2 className="text-xl font-bold mb-10 text-slate-400">How to join</h2>
      <h4 className="font-semibold mb-2">Option 1 - Through Expert&apos;s Pep Website:</h4>
      <p className="prose prose-sm">
        Click on the expert&apos;s Pep website link → Login/Signup → click on ‘Bookings‘ → You will see booking details
        with ‘Join Now‘ button before 10 min of the start time
      </p>
      <br />
      <h4 className="font-semibold mb-2">Option 2 - Through Pep App:</h4>
      <p className="prose prose-sm">
        Install Pep app from Google Playstore → Login/Signup → click on ‘Bookings‘ tab → You will see booking details
        with ‘Join Now‘ button before 10 min of the start time
      </p>
    </div>
  );
};

export default QuickHelp;
