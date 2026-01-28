import HealthForm from "../components/HealthForm";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Site Health Check</h1>
      <p>Check if a website is online.</p>
      <HealthForm />
    </main>
  );
}