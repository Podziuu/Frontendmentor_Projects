const Button = ({ text }) => {
  return (
    <button className="bg-[#303B5A] text-white w-full p-4 rounded-full text-xl font-semibold hover:scale-105 transition">
      {text}
    </button>
  );
};

export default Button;
