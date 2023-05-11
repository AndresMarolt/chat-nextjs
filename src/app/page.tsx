import {db} from "@/lib/db"

export default async function Home() {

  await db.set('hello', 'hello')

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
