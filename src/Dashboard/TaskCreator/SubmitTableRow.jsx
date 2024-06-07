/* eslint-disable react/prop-types */
import { RiKanbanView } from "react-icons/ri";
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";
import { Modal } from "flowbite-react";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useGetUser from "./../../Hooks/useGetUser";
import useGetSubmitByEmail from "../../Hooks/useGetSubmitByEmail";
import Swal from "sweetalert2";

const SubmitTableRow = ({ submit }) => {
  const { worker_name, worker_email, title, payable, _id, submission_details } = submit;
  const [openModal, setOpenModal] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [, , refetch] = useGetUser();
  const [, , submitCollectionRefetch] = useGetSubmitByEmail();

  const handleApprove = (id, worker_email, payable) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to Approve the Task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/approve/${id}`, { status: "Approved", worker_email, payable })
          .then((res) => {
            if (res.data) {
              refetch();
              submitCollectionRefetch();
              Swal.fire({
                icon: "success",
                text: `"${title}" Successfully Approved!`,
                title: "Approved!",
                showConfirmButton: false,
                timer: 3000,
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: err.message,
              showConfirmButton: false,
              timer: 3000,
            });
          });
      }
    });
  };

  const handleReject = (id) => {
    console.log(id);
  };
  return (
    <tr className="even:bg-gray-200">
      <td className="px-4 py-4 text-start text-sm text-gray-800">{worker_name}</td>
      <td className="px-4 py-4 text-start text-sm text-gray-800">{worker_email}</td>
      <td className="px-4 py-4 text-start text-sm text-gray-800">{title}</td>
      <td className="px-4 py-4 text-center text-sm text-gray-800">{payable}</td>
      <td className="px-4 py-4 text-center text-sm text-gray-800">
        <button onClick={() => setOpenModal(true)}>
          <RiKanbanView className="text-xl inline-block" />
        </button>
      </td>
      <td className="px-4 py-4 text-center text-sm text-gray-800">
        <button onClick={() => handleApprove(_id, worker_email, payable)} className="text-xl text-green-600">
          <GoCheck />
        </button>
      </td>
      <td className="px-4 py-4 text-center text-sm text-gray-800">
        <button onClick={() => handleReject(_id)} className="text-xl text-[#a73434]">
          <GoX />
        </button>
      </td>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p>{submission_details}</p>
          </div>
        </Modal.Body>
      </Modal>
    </tr>
  );
};

export default SubmitTableRow;
