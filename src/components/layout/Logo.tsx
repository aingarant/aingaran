import Link from "next/link"

type Props = {}

const Logo = (props: Props) => {
  return (
    <span className="text-3xl font-bold">
      <Link href="https://www.github.com/aingarant">aingaran</Link></span>
  )
}

export default Logo