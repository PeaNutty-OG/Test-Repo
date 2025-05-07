import TabBar from "../components/TabBar";
import LogInButton from "../components/LogInButton";

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <LogInButton />
        <TabBar />
      </div>
    </>
  );
}
