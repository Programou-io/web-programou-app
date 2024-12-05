'use client'

import { ArrowRight, Bell } from 'lucide-react'
import Link from 'next/link'
import { analyticsClient } from 'programou/utils/firebase/client'

export default function Home() {
  function alertLinkActionHandler() {
    analyticsClient.trackClick({
      item: 'link:grupo-comunidade-whats-app',
    })
    // analytics.log({
    //   name: 'click',
    //   object: {
    //     detail: 'grupo-comunidade-whats-app',
    //     feature: 'home',
    //   },
    // })
  }

  function knowMoreActionHandler() {
    analyticsClient.trackClick({
      item: 'link:saiba-mais',
    })
    // analyticsClient.log({
    //   name: 'click',
    //   object: {
    //     detail: 'saiba-mais',
    //     feature: 'home',
    //   },
    // })
  }

  // analyticsClient.trackPage({
  //   path: '/home',
  //   title: 'home',
  // })

  // analyticsClient.log({
  //   name: 'screen_view',
  //   object: {
  //     detail: '',
  //     feature: 'home',
  //   },
  // })

  return (
    <div>
      <div className="bg-yellow-500 text-center py-3">
        <p className="text-black text-left flex items-center justify-center gap-2 max-md:px-4">
          <Bell />
          Participe do nosso grupo de devs no WhatsApp.
          <Link
            href="https://chat.whatsapp.com/Dyfk97bLCmE9f9uVV1QSVl"
            passHref={true}
            className="font-bold"
            onClick={alertLinkActionHandler}
          >
            Conhecer agora!
          </Link>
        </p>
      </div>
      <div className="mt-16 pb-12 px-2">
        <h1 className="font-extrabold text-8xl max-md:text-6xl text-center">
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
          <Link onClick={knowMoreActionHandler} href="/sobre">
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
