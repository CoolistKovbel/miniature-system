export default function DAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full h-full bg-[#110] text-white">
      {/* Maybe different header */}
      
      {children}
    </main>

  )
}