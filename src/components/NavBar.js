import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()

  console.log(router.pathname)

  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a className={router.pathname === '/' ? 'active' : ''}>Hello</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx>{`
        a {
          color: white;
          text-decoration: none;
        }
        .active {
          color: red;
        }
      `}</style>
    </nav>
  )
}
