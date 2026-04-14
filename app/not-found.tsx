import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-gray-800 px-6">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      
      <h2 className="text-2xl font-semibold mb-2">
        Page not found
      </h2>
      
      <p className="text-gray-500 mb-6 text-center max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It might have been removed, renamed, or doesn’t exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
}