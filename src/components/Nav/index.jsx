import Link from 'next/link'

const Nav = () => {
  const menus = [
    {
      name: 'Home',
      slug: '/'
    },
    {
      name: 'About',
      slug: 'about'
    }
  ]

  return (
    <nav>
      <ul>
        {menus.map((menu) => (
          <li key={menu.slug}>
            <Link href={menu.slug} passHref>
              <a>{menu.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
