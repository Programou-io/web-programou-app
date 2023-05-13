'use client'

import { useRouter } from 'next/navigation'
import { Button } from 'programou/components/Button'
import { FormStepPage } from 'programou/components/FormStepPage'
import { Text } from 'programou/components/Text'
import { TextArea } from 'programou/components/TextArea'
import { PROGRAMOU_APP_ROUTES } from 'programou/constants/routes'
import { FormEvent, useState } from 'react'

export default function UserDetails() {
  const router = useRouter()
  const [about, setAbout] = useState<string>('')

  const currentStep = 4
  const totalSteps = 4

  function onBackClickActionHandler() {
    router.push(PROGRAMOU_APP_ROUTES.PUBLIC.REGISTER_STACKS)
  }

  function onAboutChangeActionHandler(event: FormEvent<HTMLTextAreaElement>) {
    const textAreaElement = event.target as HTMLTextAreaElement
    setAbout(textAreaElement.value)
  }

  function onClickNextStepActionHandler() {
    router.push(PROGRAMOU_APP_ROUTES.PRIVATE.HUB)
  }

  return (
    <FormStepPage
      title="Para finalizar"
      description="Nos conte um pouco sobre quais temas você tem interesse."
      currentStep={currentStep}
      totalSteps={totalSteps}
      onBackClick={onBackClickActionHandler}
    >
      <div className="grid gap-4">
        <Text>Foto de perfil</Text>
        <div className="flex gap-4 items-center">
          <button className="w-16 h-16 bg-turquoise-500 rounded-md border-spacing-1 overflow-hidden" />

          <div>
            <Text className="text-xl font-bold">Paolo P. Lopes</Text>
            <Text className="text-gray-400">@PaoloProdossimoLopes</Text>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <Text>Foto de perfil</Text>
        <div className="grid gap-2">
          <TextArea value={about} onChange={onAboutChangeActionHandler} />
          <Text className="text-gray-400">
            Fale um pouco sobre você. Isto será exibido em sua página pessoal.
          </Text>
        </div>
      </div>

      <Button
        className="flex items-center justify-center p-4"
        variant="primary"
        onClick={onClickNextStepActionHandler}
      >
        Criar conta
      </Button>
    </FormStepPage>
  )
}
