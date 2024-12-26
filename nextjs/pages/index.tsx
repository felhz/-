import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
// const Map = dynamic(() => import("@/components/map"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Link href="/g">g</Link>
    </div>
  );
}
export const getServerSideProps = async () => {
  console.log(1111111);
  return { props: {} };
};
