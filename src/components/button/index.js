const { useRef } = require("react")

const borderVariant = {
  md: 2,
  lg: 4
}

const xPaddingVariant = {
  md: '[18px]',
  lg: '10'
}

const textSizeVariant = {
  md: '[12px]',
  lg: '[24px]'
}

const leadingVariant = {
  md: '[16px]',
  lg: '[31.2px]',
}

const shadowVariant = {
  md: '0px 10px 20px 5px rgba(0, 0, 0, 0.15)',
  lg: '0px 20px 40px 10px rgba(0, 0, 0, 0.15)',
}

const Button = ({ children, variant = 'md' }) => {
  const border = useRef(borderVariant[variant]).current
  const xPadding = useRef(xPaddingVariant[variant]).current
  const textSize = useRef(textSizeVariant[variant]).current
  const leading = useRef(leadingVariant[variant]).current
  const shadow = useRef(shadowVariant[variant]).current

  return (
    <button
      style={{
        background: 'linear-gradient(95.25deg, #1B3543 0%, #283A50 49.99%, #214253 50%)',
        boxShadow: shadow
      }}
      className={`rounded-full border-${border} border-[#D2D2D280] text-white flex items-center py-[7px] px-${xPadding} text-${textSize} leading-${leading}`}
    >
      {children}
    </button>
  )
}

export default Button