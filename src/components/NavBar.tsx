import Link from 'next/link'
import {motion} from 'framer-motion'
interface NavBarLink {
    name: string;
    path: string;
}


const NavBar = () => {
  const Links : NavBarLink[] = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Contact",
      path: "/contact"
    }
  ]

  return (
    <div
    className='w-full z-40 h-screen bg-white/30 backdrop-blur-xl absolute top-0 left-0 flex flex-col justify-center items-center gap-4'
    >
        {
            Links.map((link, index) => (
            <motion.div
            key={index}
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: index * 0.1}}
            >
                <Link
                className='text-4xl font-semibold text-white'
                href={link.path}>
                    {link.name}
                </Link>
            </motion.div>
            ))
        }


    </div>
  )
}

export default NavBar