import { Figma, Github, Linkedin, MessageCircle, Youtube } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

interface AboutLinkProps {
  icon: ReactNode
  name: string
  path: string
}

function AboutLink(props: AboutLinkProps) {
  return (
    <Link href={props.path}>
      <div className="flex gap-2 py-2 items-center hover:text-turquoise-500">
        {props.icon}
        {props.name}
      </div>
    </Link>
  )
}

export default function Abount() {
  return (
    <div className="max-w-3xl mx-auto mb-8">
      <div>
        <h1 className="font-bold text-3xl mt-8">Conheça mais sobre nós</h1>
        <p className="mt-3">
          Bem-vindo ao Programou! Nosso projeto é dedicado a ensinar
          programação, com foco específico em dispositivos Apple, de maneira
          prática. Aqui, você encontrará tutoriais detalhados, vídeos passo a
          passo e uma comunidade engajada de desenvolvedores sempre dispostos a
          ajudar. Se você está começando agora ou quer se especializar ainda
          mais, este é o lugar certo para você!
        </p>
      </div>

      <div>
        <h2 className="font-bold text-3xl mt-8">Nossa presença online</h2>
        <p className="mt-3">
          Estamos presentes em diversas plataformas, oferecendo projetos e
          conteúdos. Confira a seguir:
        </p>
        <div className="mt-3">
          <AboutLink icon={<Github />} name="Pagina no Github" path="/" />
          <AboutLink icon={<Youtube />} name="Canal no Youtube" path="/" />
          <AboutLink icon={<Linkedin />} name="Pagina no LinkedIn" path="/" />
          <AboutLink icon={<Figma />} name="Projetos no Figma" path="/" />
          <AboutLink
            icon={<MessageCircle />}
            name="Grupo no WhatsApp"
            path="/"
          />
        </div>
      </div>
    </div>
  )
}
