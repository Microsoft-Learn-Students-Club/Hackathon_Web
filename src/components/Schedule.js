import React from "react";
import './style/schedule.css';

const Schedule = () => {
  return (
    <div className="parent-schedule">
      <h2 className="text-3xl font-bold mb-4 text-white">Event Schedule</h2>
      {/* Day 1 */}
      <h3 className="text-2xl mb-4 text-white font-semibold">
        Day 1 - 17th February 2024
      </h3>
      <ol className="border-l border-neutral-300 dark:border-neutral-500">
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
              9:00 AM - 9:30 AM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">
              Registration and Welcome
            </h4>
          </div>
        </li>
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">10:00 AM</p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">
              Hackathon Kick-off and Coding Period starts
            </h4>
          </div>
        </li>
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
              12:00 PM - 01:00 PM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">Lunch Break</h4>
          </div>
        </li>
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
              05:00 PM - 05:30 PM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">High Tea</h4>
          </div>
        </li>
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
              07:00 PM - 09:00 PM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">
              Evaluation Round - I
            </h4>
          </div>
        </li>
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
              09:00 PM - 10:00 PM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">Dinner Break</h4>
          </div>
        </li>
      </ol>
      {/* Day 2 */}
      <h3 className="text-2xl mb-4 text-white font-semibold">
        Day 2 - 18th February 2024
      </h3>
      <ol className="border-l border-neutral-300 dark:border-neutral-500">
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
            01:00 AM - 01:30 AM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">
            Midnight Snacks
            </h4>
          </div>
        </li>
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
            07:30 AM - 08:00 AM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">
            Morning Tea and Snacks
            </h4>
          </div>
        </li>
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
            08:00 AM - 10:00 AM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">Evaluation Round - II</h4>
          </div>
        </li>
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
            10:00 AM - 10:30 AM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">Coding Period ends and Final Submission Starts</h4>
          </div>
        </li>
        <li>
          <div className="flex-start flex pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-200 dark:bg-neutral-500" />

            <p className="text-sm text-neutral-500 dark:text-white">
            12:00 PM - 02:00 PM
            </p>
          </div>
          <div className="mb-6 ml-4 mt-2 flex-start flex pt-3">
            <h4 className="text-xl font-semibold text-white">
            Result Announcement and Felicitation Ceremony
            </h4>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Schedule;
