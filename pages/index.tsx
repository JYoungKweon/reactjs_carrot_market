import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
      {/* Example No.1 */}
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between even:bg-yellow-50 odd:bg-blue-50"
            >
              <span className="text-gray-500 my-1 ">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span>Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <button
          className="block mt-5 bg-blue-500 text-white p-3 
        text-center rounded-xl w-2/4 mx-auto 
        hover:bg-teal-500 hover:text-black active:bg-yellow-500
        "
        >
          Checkout
        </button>
      </div>
      {/* Example No.2 */}
      <div className="group bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div
            className="flex relative -top-16
           items-end justify-between"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-teal-500 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2310</span>
            </div>
          </div>
          <div className="relative -mt-10 -mb-5 flex flex-col items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-400">USA</span>
          </div>
        </div>
      </div>
      {/* Example No.3 */}
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅</span>
          <div className="space-x-3">
            <span>🔶 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💘</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 bg-opacity-70 ring-opacity-80 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 bg-opacity-70 ring-opacity-80 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 bg-opacity-70 ring-opacity-80 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-1.5 bg-blue-200 flex rounded-lg justify-center items-center aspect-square w-10 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 bg-blue-200 flex rounded-lg justify-center items-center aspect-square w-10 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-xl">$450</span>
            <button className="bg-blue-500 py-2 px-5 rounded-lg text-xs text-center text-white ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* Example No.4 _ form*/}
      <form className="flex flex-col space-y-2  p-5 ">
        <input
          type="text"
          required
          placeholder="Username"
          className="border p-1 peer border-gray-400 rounded-md "
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Hello
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
      <div className="flex flex-col space-y-2 p-5">
        <details className="open:text-white open:bg-indigo-400">
          <summary className="select-none cursor-pointer">
            What is my fav. food.
          </summary>
          <span className="selection:bg-indigo-500 selection:text-white">
            김치
          </span>
        </details>
        {/* Example No.5 _ file selector, ul*/}}
        <div>
          <ul className="list-decimal marker:text-teal-400">
            <li>hi</li>
            <li>hello</li>
            <li>bye</li>
            <input
              type="file"
              className="file:text-white file:bor-0 file:rounded-xl file:px-2 file:transition file:cursor-pointer file:bg-purple-400 file:hover:bg-white file:hover:text-purple-400 file:hover:border-purple-400"
            />
          </ul>
          <div className="flex flex-col space-y-2  p-5 ">
            <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
              Hello everyone!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
