import data from "../assets/data.json";
import Button from "./Button";
import Performance from "./Performance";

const Summary = () => {
  return (
    <section className="p-8 md:w-96">
      <h2 className="text-lg text-[#303B5A] font-bold mb-4">Summary</h2>
      <ul className="p-2 flex flex-col gap-y-4 mb-4">
        {data.map((stats, i) => {
          return <Performance key={i} data={stats} />;
        })}
      </ul>
      <Button text="Continue" />
    </section>
  );
};

export default Summary;
