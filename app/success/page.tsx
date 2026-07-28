import Link from "next/link";
import Image from "next/image";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-brand-darker flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6 animate-float">🦑</div>
        <h1 className="text-3xl font-black text-brand-heading mb-4">
          You&apos;re in!
        </h1>
        <p className="text-brand-text mb-8">
          Your Calamari account is being set up. Check your email for login credentials and next steps.
        </p>
        <a
          href="https://dashboard.calamaritrading.ai"
          className="btn-primary inline-block px-8 py-4 rounded-xl font-bold text-white w-full text-center mb-4"
        >
          Go to Dashboard
        </a>
        <Link
          href="/"
          className="block text-brand-text hover:text-brand-heading transition-colors text-sm"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
