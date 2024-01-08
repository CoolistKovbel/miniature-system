import { signOut, auth } from "@/auth";


async function SettingsPage() {
  const session = await auth();

  return (
    <div>
      <h2>SettingsPage</h2>
      {JSON.stringify(session)}

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Sign out</button>
      </form>
      
    </div>
  );
}

export default SettingsPage;
