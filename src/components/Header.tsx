import { Tab, TabList, Tabs } from '@chakra-ui/react'
import { Logo } from './Logo'

export function Header() {
  return (
    <div className="font-bold flex justify-between pt-12 pb-4">
      <Logo className="text-2xl" />

      <Tabs>
        <TabList>
          <Tab className="text-turquoise-500">Hub</Tab>
        </TabList>
      </Tabs>

      <div className="flex gap-2 items-center cursor-pointer ">
        <div className="bg-turquoise-500 rounded-md w-8 h-8"></div>
        <span>Paolo P. Lopes</span>
      </div>
    </div>
  )
}
