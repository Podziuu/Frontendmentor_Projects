const Score = ({ score }) => {
  return (
    <div className="w-36 h-36 bg-gradient-to-b from-[#4E21CA] to-[#2421CA]/0 rounded-full p-8 my-8 text-center">
      <div className="text-white text-6xl mb-2 font-bold">{score}</div>
      <div className="text-[#C8C7FF]">of 100</div>
    </div>
  );
};

export default Score;
