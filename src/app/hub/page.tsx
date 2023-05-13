'use client'

import { Box } from 'programou/components/Box'
import { Button } from 'programou/components/Button'
import { Loader } from 'programou/components/Loader'
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

  function onSuggestionChangeActionHandler(
    event: FormEvent<HTMLTextAreaElement>,
  ) {
    const target = event.target as HTMLInputElement
    setSuggestion(target.value)
  }

  function onSendSuggestionActionHandler() {
    alert('Sua suggestao foi enviada com sucesso!')
    setSuggestion('')
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
      <div className="flex items-center justify-center mb-12">
        <Box>
          <TextArea
            value={suggestion}
            onChange={onSuggestionChangeActionHandler}
          />

          <Text className="text-gray-400 text-sm">
            Essa funcionaliadde ainda está em desenvolvimento, mas voce pode
            contruibuir com uma sugestão.
          </Text>

          <Button
            variant="primary"
            onClick={onSendSuggestionActionHandler}
            disabled={isEmpty(suggestion)}
          >
            Sugerir
          </Button>
        </Box>
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
    <div className="h-screen w-full">
      {animation === null ? <Loader /> : makeBuildingStatePlaceholder()}
    </div>
  )
}
