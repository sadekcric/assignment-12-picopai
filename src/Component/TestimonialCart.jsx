// eslint-disable-next-line react/prop-types
const TestimonialCart = ({ img, comment, name }) => {
  return (
    <div className="p-3 -translate-x-10 lg:-translate-x-0">
      <div className=" max-w-[350px] h-[244px] p-8 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative my-12 bg-primary bg-opacity-10 ">
        <img src={img} className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7" />
        <div className="mt-8 text-center flex flex-col  h-full">
          <p className="text-sm text-[#333] leading-relaxed flex-grow">{comment}</p>
          <h4 className="text-base font-extrabold mb-8">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCart;
