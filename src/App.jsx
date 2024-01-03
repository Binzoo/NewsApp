import { useState } from "react";
import "./index.css";
import useNews from "./hooks/useNews";

function App() {
  const [news, setNews] = useState([]);
  return (
    <>
      <Navbar setNews={setNews} />
      <Main news={news} />
    </>
  );
}

function Navbar({ setNews }) {
  const [newTitle, setNewsTitle] = useState();

  async function onClickNews() {
    const news = await useNews(newTitle);

    setNews(news);
  }

  return (
    <>
      <nav className=" pt-5">
        <ul className="flex justify-between">
          <li className=" ml-9">App Logo</li>
          <li className="flex">
            <input
              className="outline rounded h-14 w-96 text-3xl"
              type="text"
              placeholder="Search for news..."
              onChange={(e) => setNewsTitle(e.target.value)}
            />

            <button
              className=" bg-custom-color text-black h-14 ml-6 w-40 rounded"
              onClick={onClickNews}
            >
              Search
            </button>
          </li>
          <li className=" mr-9">About Us</li>
        </ul>
      </nav>
    </>
  );
}

function Main({ news }) {
  return (
    <>
      <div className=" ml-4 mt-11 grid grid-cols-3 gap-4 place-content-end ">
        {news.map((data, index) =>
          data.urlToImage === null ? null : (
            <NewSections
              key={index}
              title={data.title}
              image={data.urlToImage}
              info={data.content}
              learnMore={data.url}
            />
          )
        )}
      </div>
    </>
  );
}

function NewSections({ title, image, info, learnMore }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {info}
        </p>
        <a
          href={learnMore}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
