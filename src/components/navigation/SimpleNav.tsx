import { Link } from "react-router";

export default function SimpleNav() {
  return (
    <header className="bg-white border-b border-kui-border">
      <div className="flex justify-center items-center w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl sm:text-4xl font-bold">Kylith</h1>
        </Link>
      </div>
    </header>
  );
}
