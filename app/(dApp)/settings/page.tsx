
import {auth} from "@/auth"


async function SettingsPage() {

  const session = await auth()

  return (
    <div >
      <h2>SettingsPage</h2>
      {JSON.stringify(session)}
    </div>
  )
}

export default SettingsPage