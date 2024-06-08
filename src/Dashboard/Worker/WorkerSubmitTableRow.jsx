/* eslint-disable react/prop-types */

const WorkerSubmitTableRow = ({ submit }) => {
  const { title, payable, creator_name, status } = submit;
  return (
    <tr className="even:bg-gray-200">
      <td className="px-4 py-4 text-start text-sm text-gray-800">{title}</td>

      <td className="px-4 py-4 text-start text-sm text-gray-800">{creator_name}</td>

      <td className="px-4 py-4 text-center text-sm text-gray-800">{payable}</td>

      <td className="px-4 py-4 text-center text-sm text-gray-800">
        <div className="bg-green-600 rounded-full py-1 px-4 text-white inline-block">{status}</div>
      </td>
    </tr>
  );
};

export default WorkerSubmitTableRow;
