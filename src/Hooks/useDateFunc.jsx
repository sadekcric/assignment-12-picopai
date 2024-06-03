import moment from "moment";

const useDateFunc = () => {
  const dateFunc = (date) => {
    const currentDate = moment(date);
    const formatDate = currentDate.format("MMMM DD, YYYY");
    return formatDate;
  };

  return dateFunc;
};

export default useDateFunc;
