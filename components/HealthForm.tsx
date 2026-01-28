"use client";

import { useState } from "react";
import { checkUrl } from "../lib/checkUrl";

export default function HealthForm() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<string | null>(null);

  async function handleCheck() {
    const status = await checkUrl(url);
    setResult(status);
  }

  return (
    <div>
      <input
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleCheck}>Check</button>

      {result && <p>Status: {result}</p>}
    </div>
  );
}