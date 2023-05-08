import { Footer } from 'programou/components/Footer'

import { BsGithub, BsYoutube } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <div className="h-screen grid max-w-[1080px] m-auto">
        <div />

        <div className="text-center mx-auto">
          <h1 className="font-bold text-4xl text-turquoise-500">
            &lt; Programou /&gt;
          </h1>

          <h2 className="font-bold mt-4 font-mono">
            Onde suas ideias se transformam em códigos poderosos!
          </h2>
        </div>

        <div className="mx-4">
          <div className="text-center gap-3 bg-gray-900 rounded-lg p-4">
            <p className="text-justify m-2">
              O Nosso site está nesse momento em desenvolvimento para poder
              atender as necessidades dos usuários da melhor forma possível. Nos
              acompanhe nas redes sociais para não perder as novidades que estão
              por vir!
            </p>
          </div>
        </div>

        <div className="mb-4 mx-auto flex items-center justify-center gap-4">
          <a href="https://www.youtube.com/@programou">
            <BsYoutube size={32} />
          </a>
          <a href="#https://github.com/programou">
            <BsGithub size={32} />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
