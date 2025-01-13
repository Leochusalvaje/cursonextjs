import Link from "next/link";


export default function Home() {
  return (
    
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  <span className="text-5xl">Evangelina estaremos siempre juntos todo esto es para darte la vida que merces ♥!!</span>
  <Link href={'/about'}>About page</Link>
  </main>
  
  )
}
