import localFont from 'next/font/local'
import "@/globals.css"

const poppin = localFont({
  src: [
    {
      path: "../assets/fonts/Poppins-Thin.ttf",
      weight: '100',
      style: 'thin',
    },
    {
      path: "../assets/fonts/Poppins-Light.ttf",
      weight: '200',
      style: 'light',
    },
    {
      path: "../assets/fonts/Poppins-Italic.ttf",
      weight: '300',
      style: 'italic',
    },
    {
      path: "../assets/fonts/Poppins-Regular.ttf",
      weight: '400',
      style: 'normal',
    },
    {
      path: "../assets/fonts/Poppins-Medium.ttf",
      weight: '500',
      style: 'medium',
    },
    {
      path: "../assets/fonts/Poppins-SemiBold.ttf",
      weight: '600',
      style: 'semibold',
    },
    {
      path: "../assets/fonts/Poppins-Bold.ttf",
      weight: '700',
      style: 'bold',
    },
  ]
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppin.className}>
      {children}
    </html>
  );
}
