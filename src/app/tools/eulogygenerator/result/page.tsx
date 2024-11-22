'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function EulogyResult() {
  const router = useRouter();
  const [eulogy, setEulogy] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the eulogy from localStorage
    const storedEulogy = localStorage.getItem("eulogy");
    if (storedEulogy) {
      setEulogy(storedEulogy);
    } else {
      // If no eulogy is found, redirect back to the form
      router.push("/eulogy");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold">Generated Eulogy</h1>
        {eulogy ? (
          <div>
            <p>{eulogy}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button
          onClick={() => router.push("/eulogygenerator")}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Create Another Eulogy
        </button>
      </div>
    </div>
  );
}
