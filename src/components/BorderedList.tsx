import { CheckboxField } from './CheckboxField'

interface BorderedListProps {
  options: string[]
}

export function BorderedList(props: BorderedListProps) {
  return (
    <div className="grid border rounded-md border-gray-500">
      {props.options.map((option) => {
        const isLastRow = option === props.options.at(props.options.length - 1)
        return (
          <div key={option}>
            <div className="p-2">
              <CheckboxField isActiveByDefault={false} label={option} />
            </div>
            {!isLastRow && <div className="border-b border-gray-500" />}
          </div>
        )
      })}
    </div>
  )
}
