import Login from "@/components/Login/Login";
import TrackInput from "@/components/TrackInput";

export default function Home() {
  return (
    <section className="">
      <div className="w-full h-screen">
        <div className="sm:mx-auto h-full flex justify-center items-center">
          {/* <Login /> */}
          <TrackInput />
        </div>
      </div>
    </section>
  );
}
