import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[83vh] text-center px-4 gap-8">
      <h1 className="text-5xl">404</h1>
      <p className="text-lg max-w-md">
        Oops, the page you were looking for doesn&apos;t exist.
      </p>
      <a href="/">
        <button className="bg-white text-black px-6 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors">
          Go Home
        </button>
      </a>
    </div>
  );
}
