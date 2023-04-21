import {
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
  type TooltipProps,
} from 'react-aria-components'

const _TooltipTrigger = (props) => {
  return <TooltipTrigger delay={0} closeDelay={0} trigger="hover" {...props} />
}

const _Tooltip = ({ children, ...props }: TooltipProps) => {
  return (
    <Tooltip {...props}>
      {/* <OverlayArrow>
        <svg width={8} height={8}>
          <path d="M0 0,L4 4,L8 0" />
        </svg>
      </OverlayArrow> */}
      {children}
    </Tooltip>
  )
}

export { _TooltipTrigger as TooltipTrigger, _Tooltip as Tooltip }
