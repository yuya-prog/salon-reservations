const Page = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-4xl">salon-reservations-system</h1>
        <div className="w-80">
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="userId" className="mb-2">
              userId
            </label>
            <input
              name="userId"
              type="text"
              placeholder="userId"
              className="border-2 border-gray-300 rounded-md p-2"
            />

            <label htmlFor="password" className="mb-2">
              password
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="border-2 border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          Login
        </button>
      </div>
    </>
  );
};

export default Page;
