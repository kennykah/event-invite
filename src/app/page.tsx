import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">event-invite</h1>
        <p className="text-gray-600 mb-8">
          Digital invitation platform — weddings, traditional ceremonies, events. RDC-first MVP.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/invitations/new" className="bg-black text-white px-6 py-3 rounded">New invitation</Link>
          <Link href="/preview/demo" className="border border-gray-300 px-6 py-3 rounded">View preview</Link>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Phase: alpha/internal lab — submissions are processed asynchronously.
        </p>
      </div>
    </div>
  );
}
