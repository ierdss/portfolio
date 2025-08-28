import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center bg-pattern">
      <h2 className="text-redberry">404 Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
