
interface HeaderCompProps {
  label: string
}

export const HeaderComp = ({label}:HeaderCompProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-3xl font-semibold">Mystic Kitten Portal🌻</h1>
      <p className="text-sm text-emerald-200 font-bold">{label}</p>
    </div>
  )
}
