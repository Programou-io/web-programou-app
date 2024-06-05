import { ArrowRight, Bell } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className="bg-yellow-500 text-center py-3">
        <p className="text-black flex items-center justify-center gap-2">
          <Bell size={16} />
          Participe do nosso grupo de devs no WhatsApp.
          <Link
            href="https://chat.whatsapp.com/Dyfk97bLCmE9f9uVV1QSVl"
            passHref={true}
            className="font-bold"
          >
            Conhecer agora!
          </Link>
        </p>
      </div>
      <div className="mt-16 mb-12">
        <h1 className="font-extrabold text-8xl text-center">
          Desenvolva seus
          <br />
          <span className="text-turquoise-500">aplicativos móveis</span>
        </h1>
        <h2 className="mt-12 text-center grid max-w-3xl items-center justify-center mx-auto">
          Junte-se a nós e comece sua jornada ou especialize-se na criação e
          manutenção de aplicativos incríveis. Nossa comunidade de
          desenvolvedores está pronta para ajudar você a dominar o mundo da
          programação mobile para dispositivos Apple.
        </h2>
        <div className="flex items-center justify-center mt-6">
          <Link href="/sobre">
            <p className="flex gap-4 px-6 py-3 bg-turquoise-500 text-black font-bold rounded-md">
              Saiba mais
              <ArrowRight />
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
