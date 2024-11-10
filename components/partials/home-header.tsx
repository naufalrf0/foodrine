"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { signOut, useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/organisasi', label: 'Organisasi' },
  { href: '/mitra', label: 'Mitra' },
  { href: '/hubungi-kami', label: 'Hubungi Kami' },
];

const HomeHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const { data: session } = useSession();

  const controlHeaderVisibility = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', controlHeaderVisibility);
    return () => {
      window.removeEventListener('scroll', controlHeaderVisibility);
    };
  }, [controlHeaderVisibility]);

  const handleLogout = async () => {
    Swal.fire({
      title: 'Anda yakin ingin logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, logout!',
      cancelButtonText: 'Batal'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await signOut({ redirect: false });
        Swal.fire('Logout Berhasil!', 'Anda telah logout.', 'success').then(() => {
          window.location.href = '/';
        });
      }
    });
  };

  return (
    <header
      className={clsx(
        'fixed top-0 w-full bg-white shadow-lg transition-transform duration-300 z-50',
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <nav className="container mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_horizontal.png"
            alt="FoodrinE Logo"
            width={512}
            height={48}
            className="h-12 w-auto"
          />
        </Link>

        <ul className="hidden md:flex space-x-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={clsx(
                  'hover:text-green-700 transition-colors',
                  pathname === link.href ? 'text-green-700 font-bold' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex space-x-4">
          {session ? (
            <>
              <Link href="/dashboard">
                <Button className="hidden md:block bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition duration-300">
                  Dashboard
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                className="bg-red-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition duration-300"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/register">
                <Button className="hidden md:block bg-orange-400 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-500 transition duration-300">
                  Daftar
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button
                  variant="link"
                  className="hidden md:block text-orange-400 font-semibold hover:text-orange-500 transition duration-300"
                >
                  Masuk
                </Button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-40 flex flex-col px-6 pb-4 overflow-y-auto">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_horizontal.png"
                alt="FoodrinE Logo"
                width={250}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </Button>
          </div>
          <ul className="space-y-2 text-green-900 font-bold font-poppins text-md">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={clsx(
                    'block py-2 transition-colors',
                    pathname === link.href ? 'text-green-700 font-bold' : 'hover:text-green-700'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2">
            {session ? (
              <>
                <Link href="/dashboard">
                  <Button variant="default" className="w-full">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="default"
                  className="w-full"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/register">
                  <Button variant="default" className="w-full">
                    Daftar
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button variant="outline" className="w-full">
                    Masuk
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
