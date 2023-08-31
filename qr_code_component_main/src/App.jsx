import qr from "./assets/image-qr-code.png";

function App() {
  return (
    <main className="w-full h-screen grid place-content-center bg-[#D6E2F0]">
      <div className="max-w-xs flex flex-col bg-white p-4 rounded-2xl drop-shadow-xl">
        <img src={qr} className="rounded-md" />
        <div className="p-4 flex flex-col gap-y-6">
          <h1 className="font-bold text-center text-xl text-[#1F3251]">Improve your front-end skills by building projects</h1>
          <p className="text-[#7B879D] text-sm text-center">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to <br/> the next level
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
