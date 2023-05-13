import { Tab, TabList, Tabs } from '@chakra-ui/react'
import { HTMLAttributes } from 'react'
import { Logo } from './Logo'

interface HeaderProps extends HTMLAttributes<HTMLElement> {
  onTabChange?: () => void
  onProfileClick?: () => void
}

export function Header(props: HeaderProps) {
  return (
    <div className="font-bold flex items-center justify-between pt-12 max-sm:pt-8 pb-4">
      <Logo className="text-2xl" />

      <Tabs onChange={props.onTabChange}>
        <TabList>
          <Tab className="text-turquoise-500">Hub</Tab>
        </TabList>
      </Tabs>

      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={props.onProfileClick}
      >
        <div className="bg-turquoise-500 rounded-md w-8 h-8"></div>
        <span className="max-sm:hidden">Paolo P. Lopes</span>
      </div>
    </div>
  )
}
