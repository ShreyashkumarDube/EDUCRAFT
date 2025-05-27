'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use } from 'react';

const navItems = [
    { label : 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' }
    ];
const NavItems = () => {
    const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({label, href}) => (
            <Link href={href} key={label} 
            className={classNames(pathname===href && 'text-primary font-semibold underline', 'text-sm text-gray-600 hover:text-primary transition-colors')}>
                {label}
            </Link>
        )) }
    </nav>
  )
}

export default NavItems