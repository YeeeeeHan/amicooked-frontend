import { ChevronDownIcon } from '@radix-ui/react-icons'

export enum NavMenuItemType {
  DEFAULT = 'default',
  ARROW = 'arrow',
}

export interface NavMenuItemProps {
  text: string
  type: string // arrow or default
  selected: boolean
  clickFn: () => void
}

export function NavMenuItem({ text, type, selected, clickFn }: NavMenuItemProps): JSX.Element {
  return (
    <li
      key={text}
      // sets the cursor to pointer if the item is not selected
      className={`flex items-baseline space-x-2 ${selected ? 'cursor-default' : 'cursor-pointer'} group pb-2`}
      onClick={clickFn}
    >
      {/* text */}
      <div
        className={`${
          selected
            ? 'text-md border-b-2 border-primary pb-[2px] font-medium text-primary'
            : 'text-md font-medium text-primary-strong hover:text-primary'
        }`}
      >
        {text}
      </div>
      {/* arrow */}
      {type === 'arrow' && (
        <div className="transition-transform duration-200 ease-in-out group-hover:rotate-180">
          <ChevronDownIcon className="size-3" />
        </div>
      )}
    </li>
  )
}
