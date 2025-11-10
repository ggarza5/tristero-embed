import Image from 'next/image';

export default function Home() {
  const widgetUrl = process.env.NEXT_PUBLIC_WIDGET_URL || 'https://app.mach.exchange/embed?chains=1,10,143,56,43114&showBranding=true&hideAIInput=true&logoUrl=https://upload.wikimedia.org/wikipedia/commons/3/3d/Injective_l.png';

  return (
    <div className="grid grid-rows-[20px_auto_auto_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Tristero Embedded Swap Widget</h1>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Experience seamless cross-chain swaps using{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              Tristero
            </code>
          </li>
          <li className="tracking-[-.01em]">Deploy your own widget in minutes with one click!</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fggarza5%2Fembedded-mach"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
            Deploy now
          </a>
        </div>
      </main>
      <iframe
        className="w-full max-w-[500px] h-[600px] border-0 rounded-lg shadow-lg row-start-3"
        src={widgetUrl}
      />
    </div>
  );
}
