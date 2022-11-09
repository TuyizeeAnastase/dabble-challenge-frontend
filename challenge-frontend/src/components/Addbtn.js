export const Addbtn = ({setShowModal}) => {
  return (
    <button onClick={()=>(setShowModal(true))} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4 ml-64">
      Add new Country
    </button>
  );
};