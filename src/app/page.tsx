import { Footer } from 'programou/components/Footer'
import { Logo } from 'programou/components/Logo'

import { AiFillNotification } from 'react-icons/ai'
import { BsGithub, BsYoutube } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <div className="h-screen grid max-w-[1080px] m-auto">
        <div />

        <div className="font-bold text-center mx-auto p-4">
          <Logo />

          <h2 className="mt-4 font-mono">
            Onde suas ideias se transformam em códigos poderosos!
          </h2>
        </div>

        <div className="mx-4">
          <div className="text-center gap-3 bg-gray-900 rounded-lg p-4 md:flex md:items-center md:justify-center ">
            <AiFillNotification className="m-auto min-w-[32px]" size="32px" />
            <p className="text-justify m-2">
              O Nosso site está nesse momento em desenvolvimento para poder
              atender as necessidades dos usuários da melhor forma possível. Nos
              acompanhe nas redes sociais para não perder as novidades que estão
              por vir!
            </p>
          </div>
        </div>

        <div className="mb-4 mx-auto flex items-center justify-center gap-4">
          <a
            href="https://www.youtube.com/@programou"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube size={32} />
          </a>
          <a
            href="https://github.com/Programou-io"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={32} />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
