export function Footer() {
  const today = new Date()
  return (
    <div className="w-full py-8 bg-gray-900 bottom-0 static">
      <p className="text-center">
        Copyright © {today.getFullYear()} Programou. Todos os direitos
        reservados
      </p>
    </div>
  )
}
