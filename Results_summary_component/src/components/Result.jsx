import Score from "./Score";

const Result = () => {
  return (
    <div className="bg-gradient-to-b from-[#7857FF] to-[#2E2BE9] flex flex-col justify-center items-center p-8 md:py-16 rounded-b-[35px] md:rounded-[35px] md:max-w-[375px]">
      <h1 className="text-[#C8C7FF] text-lg font-semibold">Your Result</h1>
      <Score score={76} />
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-white text-2xl font-bold">Great</h3>
        <p className="text-[#C8C7FF] px-4">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
