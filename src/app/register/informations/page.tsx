'use client'

import { useRouter } from 'next/navigation'
import { Box } from 'programou/components/Box'
import { Button } from 'programou/components/Button'
import { MultiStep } from 'programou/components/MultiStep'
import { OutsideHeading } from 'programou/components/OutsideHeading'
import { TextField } from 'programou/components/TextField'
import { PROGRAMOU_APP_ROUTES } from 'programou/constants/routes'
import { BsArrowRight } from 'react-icons/bs'

export default function InformationPage() {
  const router = useRouter()
  const currentStep = 2
  const totalSteps = 4

  function onBackActionHandler() {
    router.push(PROGRAMOU_APP_ROUTES.PUBLIC.REGISTER)
  }

  return (
    <div className="w-[550px] mt-36 mx-auto gap-2 grid">
      <div>
        <OutsideHeading
          title="Informe seus dados"
          description="Precisamos de mais algumas informações para criar seu perfil! Ah, você pode editar essas informações depois."
          onClick={onBackActionHandler}
        />
      </div>

      <MultiStep current={currentStep} total={totalSteps} className="p-2" />

      <div>
        <Box>
          <TextField
            label="E-mal"
            type="email"
            placeholder="Digite seu nome aqui ..."
          />
          <TextField
            className="dark:text-white"
            label="Data de nascimento"
            placeholder="dd/mm/yyyy"
            type="text"
          />

          <Button
            className="flex items-center justify-center p-4"
            variant="primary"
          >
            Proximo Passo
            <BsArrowRight size={24} />
          </Button>
        </Box>
      </div>
    </div>
  )
}
