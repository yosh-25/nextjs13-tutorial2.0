import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Page1</h1>
      <h1>page2へ</h1>
      <Link href="/page2">page2</Link>
    </>
  );
}
