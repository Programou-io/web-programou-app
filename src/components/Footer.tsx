import { BsGithub, BsYoutube } from 'react-icons/bs'

export function Footer() {
  function makeSocialBadges() {
    return (
      <div className="flex gap-2">
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
    )
  }

  return (
    <div className="w-full py-8 bg-black">
      <div className="flex items-center justify-center my-4">
        {makeSocialBadges()}
      </div>
      <p className="text-center">Copyright © 2023 Programou</p>
    </div>
  )
}
