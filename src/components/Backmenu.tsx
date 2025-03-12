import React from "react";

const Backmenu = () => {
  return (
    <div className="fixed md:absolute w-full  top-0  isolate z-50 bg-slate-950 bg-clip-padding backdrop-filter backdrop-blur-sm">
      <div
        aria-label="Global"
        className="mx-auto flex max-w-7xl py-3 items-center justify-between pr-6 p-3 lg:px-8"
      >
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SoLarMax</span>
            <img
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b40efdc805bad545e1df62628f24223b940bf9444833c8f04fd03e99b86416d6?apiKey=098ebfbb07384cf89eeedb3d40701deb&"
              className="lg:h-8 h-5 w-auto md:invisible"
            />
          </a>
        </div>
        <button
          className="-m-1.5 p-1.5 flex items-center text-white"
          onClick={() => window.history.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p className="pl-2 text-sm">Quay lại</p>
        </button>
      </div>
    </div>
  );
};

export default Backmenu;
