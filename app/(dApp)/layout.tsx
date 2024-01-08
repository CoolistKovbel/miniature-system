export default function DAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full h-full bg-[#110] text-white">
      {/* Maybe different header */}
      <header className="bg-[#112] p-4 text-center">
        <h2 className="text-2xl font-bold">Mystic Kitten</h2>
      </header>
      {children}
    </main>

  )
}