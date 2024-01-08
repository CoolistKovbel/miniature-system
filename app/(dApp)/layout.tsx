export default function DAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {/* Maybe different header */}
      
      {children}
    </main>

  )
}