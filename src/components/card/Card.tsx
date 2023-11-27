import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/20/solid";

export const Card = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl ">
        <div>
          <img
            src="/img/goma2.jpg"
            alt="imagen del producto elegido"
            className="rounded-lg h-60 w-60 shadow-lg border-stale-50 border-2"
          />
          <div className="flex justify-start">
            <button className="inline-flex items-center justify-center p-2 bg-indigo-500 border rounded-l shadow-lg mt-4">
              <MinusCircleIcon className="h-6 w-6 text-white" />
            </button>
            <button className="inline-flex items-center justify-center p-2 bg-indigo-500 border-y shadow-lg mt-4 text-white">
              0
            </button>
            <button className="inline-flex items-center justify-center p-2 bg-indigo-500 shadow-lg border rounded-r mt-4">
              <PlusCircleIcon className="h-6 w-6 text-white" />
            </button>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Writes Upside-Down
          </h3>
        </div>
      </div>
    </>
  );
};
