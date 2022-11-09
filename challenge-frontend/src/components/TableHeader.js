export const TableHeader = (props) => {
  return (
    <div className="py-2 px-4 border border-blue-700 rounded mt-4 mb-2 mx-60">
      <form>
        <div className="grid gap-2  md:grid-cols-3">
          <div>
            <input
              type="text"
              id="search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w- h-12 py-4 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ....."
            />
          </div>
          <div>
            <input
              type="button"
              id="first_name"
              value="Filter"
              class="bg-blue-500 border text-white text-m rounded-lg py-4 px-4 w-20 hover:bg-white hover:text-blue-500 hover:border-blue-500"
              placeholder="Search ....."
            />
          </div>
          <div>
            <h6 className="bg-white border text-blue-500 border-blue-500 text-m rounded-lg py-4 px-4 w-26">Results: {props.data.getCountries.length} countries</h6>
          </div>
        </div>
      </form>
    </div>
  );
};
