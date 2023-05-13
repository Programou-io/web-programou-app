'use client'

import { Box } from 'programou/components/Box'
import { Button } from 'programou/components/Button'
import { MultiStep } from 'programou/components/MultiStep'
import { OutsideHeading } from 'programou/components/OutsideHeading'
import { TextField } from 'programou/components/TextField'
import { BsArrowRight } from 'react-icons/bs'

export default function RegisterPage() {
  function onBackActionHandler() {}
  const totalSteps = 4
  const currentStep = 1

  return (
    <div className="w-[550px] mt-36 mx-auto gap-2 grid">
      <div>
        <OutsideHeading
          title="Bem-vindo"
          description="Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois."
          onClick={onBackActionHandler}
        />
      </div>

      <MultiStep current={currentStep} total={totalSteps} className="p-2" />

      <div>
        <Box>
          <TextField
            label="Nome completo"
            type="text"
            placeholder="Digite seu nome aqui ..."
          />
          <TextField
            label="Nome de usuario"
            prefix="@"
            type="email"
            placeholder="seu-usuario"
          />
          <TextField
            label="Senha"
            type="password"
            placeholder="Digite sua senha aqui ..."
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
