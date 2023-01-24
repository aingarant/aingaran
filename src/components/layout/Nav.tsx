type Props = {}

const Nav = (props: Props) => {
  return (
    <ul className="flex justify-between text-sm">
      <li className="px-2">About</li>
      <li className="px-2">Blog</li>
      <li className="px-2">Projects</li>
    </ul>
  )
}

export default Nav