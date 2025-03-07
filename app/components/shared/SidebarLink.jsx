import React from 'react'
import Link from 'next/link'


export const SidebarLink = ({ text, href="#" }) => {
  return (
    <Link href={href} className="hover:text-pink-400">
      { text }
    </Link>
  )
}
