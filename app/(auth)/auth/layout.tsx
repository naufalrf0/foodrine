import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Background Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <Image
          src="/bg-auth.png"
          width={2160}
          height={1080}
          alt="Background Auth"
          className="object-cover w-full h-screen"
          priority
        />
      </div>

      {/* Content Area */}
      <div className="lg:px-36 md:px-52 sm:px-20 p-8 w-full lg:w-1/2">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" passHref>
              <Image
                src="/logo_horizontal.png"
                width={200}
                height={100}
                alt="Logo"
                className="mx-auto"
                priority
              />
          </Link>
        </div>

        {/* Children (Form Content) */}
        <div className="bg-white rounded-lg">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FoodrinE. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
