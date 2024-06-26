import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
    return <Link className="text-4xl sm:text-5xl text-white font-thin" href="/">
    {"{N}"}
  </Link>
}

export default Logo