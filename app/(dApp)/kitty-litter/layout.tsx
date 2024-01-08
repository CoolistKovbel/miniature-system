export default function KittyLitterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      
      {/* Sidebar */}
      <div>
        <h2>sidebar</h2>
      </div>

      {/* Sidebar 2 */}
      <div>
        <h2>Suicide 2</h2>
      </div>


      {/* Chat room message board */}
      <div>
        {children}
      </div>
    </section>

  )
}