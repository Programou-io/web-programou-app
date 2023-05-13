import { useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'

export interface CheckboxProps {
  onChangeState?: (isCheked: boolean) => void
  isActiveByDefault: boolean
}

export function Checkbox({
  onChangeState = () => {},
  isActiveByDefault,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(isActiveByDefault)

  function onClickActionHandler() {
    const newState = !isChecked
    setIsChecked(newState)
    onChangeState(newState)
  }

  return (
    <button
      onClick={onClickActionHandler}
      className={`flex items-center justify-center w-6 h-6 rounded-md border-2 overflow-hidden ${
        isChecked &&
        'bg-turquoise-500 border-turquoise-500 ease-in-out duration-[0.2s]'
      }`}
    >
      <BsCheckLg
        className={`${
          isChecked
            ? 'ease-in duration-[0.2s]'
            : '-translate-y-6 ease-out duration-[0.2s]'
        }`}
      />
    </button>
  )
}
