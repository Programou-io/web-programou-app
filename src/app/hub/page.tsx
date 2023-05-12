'use client'

import { Loader } from 'programou/components/Loader'
import { PrimaryButton } from 'programou/components/PrimaryButton'
import { Text } from 'programou/components/Text'
import { TextArea } from 'programou/components/TextArea'

import { FormEvent, useEffect, useRef, useState } from 'react'

export default function Hub() {
  const [animation, setAnimation] = useState<Object | null>(null)
  const [suggestion, setSuggestion] = useState<string>('')
  const ref = useRef(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://assets4.lottiefiles.com/packages/lf20_rbpv9urtg6.json',
      )
      const data = await response.json()

      setAnimation(data)
    }

    import('@lottiefiles/lottie-player')
    fetchData()
  }, [setAnimation])

  function onSuggestionChangeActionHandler(event: FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement
    setSuggestion(target.value)
  }

  function onSendSuggestionActionHandler() {
    alert('Sua suggestao foi enviada com sucesso!')
  }

  function isEmpty(suggestion: string): boolean {
    return suggestion.length === 0
  }

  function makeLottieAnimation() {
    return (
      <div className="flex items-center justify-center">
        <lottie-player
          id="typing-lottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src={JSON.stringify(animation)}
          style={{ width: '34rem' }}
        />
      </div>
    )
  }

  function makeSuggestionBox() {
    return (
      <div className="flex items-center justify-center  mb-12">
        <div className="bg-gray-800 rounded-md border border-gray-500 p-6 gap-4 grid">
          <TextArea onChange={onSuggestionChangeActionHandler} />

          <Text className="text-gray-400 text-sm">
            Essa funcionaliadde ainda está em desenvolvimento, mas voce pode
            contruibuir com uma sugestão.
          </Text>

          <PrimaryButton
            onClick={onSendSuggestionActionHandler}
            disabled={isEmpty(suggestion)}
          >
            Sugerir
          </PrimaryButton>
        </div>
      </div>
    )
  }

  function makeBuildingStatePlaceholder() {
    return (
      <div className="flex items-center justify-center mt-14">
        <div>
          {makeLottieAnimation()}

          {makeSuggestionBox()}
        </div>
      </div>
    )
  }

  return (
    <div>
      {animation === null ? <Loader /> : makeBuildingStatePlaceholder()}
    </div>
  )
}
