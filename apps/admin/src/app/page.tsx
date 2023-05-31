import { getServerSession } from 'next-auth'
import { Button, Spinner } from 'ui'

export default async function Home() {
  const session = await getServerSession()

  return (
    <div>
      <h1>Admin</h1>
      <Button />
      <Spinner />
      <pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
