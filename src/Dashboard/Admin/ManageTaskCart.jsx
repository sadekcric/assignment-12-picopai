/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { RiKanbanView } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import useDateFunc from "./../../Hooks/useDateFunc";

const ManageTaskCart = ({ task, handleDelete }) => {
  const [openModal, setOpenModal] = useState(false);
  const date = useDateFunc();

  const { title, creator, quantity, payable, taskImage, completionDate, createTime, email, details, submissionInfo } = task;

  return (
    <>
      <tr>
        <td className="px-4 py-4 text-start text-sm text-gray-800">{title}</td>
        <td className="px-4 py-4 text-center text-sm text-gray-800">{creator}</td>
        <td className="px-4 py-4 text-center text-sm text-gray-800">{quantity}</td>
        <td className="px-4 py-4 text-center text-sm text-gray-800">{quantity * payable}</td>
        <td className="px-4 py-4 text-center text-sm text-gray-800">
          {quantity * payable > 0 ? (
            <FaCheck className="inline text-success font-semibold" />
          ) : (
            <HiMiniXMark className="inline font-semibold text-[#c20f0f] text-xl" />
          )}
        </td>
        <td className="px-4 py-4 text-center text-sm text-gray-800">
          <button onClick={() => setOpenModal(true)} className="text-xl  text-[#078017]">
            <RiKanbanView />
          </button>
        </td>
        <td className="px-4 py-4 text-center text-sm text-gray-800">
          <button onClick={() => handleDelete(task._id)} className="text-xl text-[#c20f0f]">
            <MdDelete />
          </button>
        </td>

        {/* Modal from Flowbite Component */}

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
            <div className="ml-7">{title}</div>
          </Modal.Header>
          <Modal.Body>
            <div className="space-y-6 p-6">
              <div>
                <img src={taskImage} className="w-full object-cover h-[400px]" alt="" />
              </div>

              <div className="space-y-4">
                <p className="lg:text-lg">
                  <span className="font-semibold">Details:</span> <br /> {details}
                </p>

                <p>
                  <span className="font-semibold">Submission Information:</span> <br />
                  {submissionInfo}
                </p>
              </div>

              <div className="space-y-1">
                <p>
                  <span className="font-semibold">Completion Date: </span>
                  {date(completionDate)}
                </p>
                <p>
                  <span className="font-semibold">Created: </span>
                  {date(createTime)}
                </p>
                <p>
                  <span className="font-semibold">Task Quantity: </span>
                  {quantity}
                </p>
                <p>
                  <span className="font-semibold">Task Payable: </span>
                  {payable} (coin)
                </p>
              </div>

              <div>
                <p>
                  <span className="font-semibold">Creator: </span>
                  {creator}
                </p>
                <p>
                  <span className="font-semibold">Creator Email: </span>
                  {email}
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>

        {/* flowBite done  */}
      </tr>
    </>
  );
};

export default ManageTaskCart;
