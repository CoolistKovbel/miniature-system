
const AutLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <div className="h-full flex items-center justify-center bg-[#111] text-white">
      {children}
    </div>
  )

}

export default AutLayout