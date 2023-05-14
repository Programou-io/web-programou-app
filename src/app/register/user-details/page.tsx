'use client'

import { useRouter } from 'next/navigation'
import { FormStepPage } from 'programou/app/register/components/FormStepPage'
import { Button } from 'programou/components/Button'
import { Text } from 'programou/components/Text'
import { TextArea } from 'programou/components/TextArea'
import { routes } from 'programou/constants/routes'
import { FormEvent, useState } from 'react'

export default function UserDetails() {
  const router = useRouter()
  const [about, setAbout] = useState<string>('')
  const [showLoader, setShowLoader] = useState<boolean>(false)

  const currentStep = 4
  const totalSteps = 4

  function onBackClickActionHandler() {
    router.push(routes.registerStacks.path)
  }

  function onAboutChangeActionHandler(event: FormEvent<HTMLTextAreaElement>) {
    const textAreaElement = event.target as HTMLTextAreaElement
    setAbout(textAreaElement.value)
  }

  function onClickNextStepActionHandler() {
    setShowLoader(true)
    router.push(routes.hub.path)
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
        isLoading={showLoader}
        disabled={showLoader}
        onClick={onClickNextStepActionHandler}
      >
        Criar conta
      </Button>
    </FormStepPage>
  )
}
