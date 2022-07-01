import { GithubIcon } from "asset/assets"
import { GmailIcon } from "asset/assets"

function FooterIcon({href, svg, ...props} : {href: string, svg: React.ReactNode}) {
  return <a className='mr-9 text-gray-800 dark:text-gray-50' href={href}>
    <svg className='w-5 h-5 dark:fill-white' role="img" {...props}>
      {svg}
    </svg>
  </a>
}

export default function Footer() {
  return <footer className="bg-gray-100 dark:bg-gray-900 text-center w-full mt-10 divide-y divide-gray-300 dark:divide-gray-700">
    <div className="w-full pt-9">
      <div className="flex justify-center mb-9 w-full">
        <FooterIcon svg={<GithubIcon/>} href="https://github.com/fifteenmania/baskin-client2"/>
        <FooterIcon svg={<GmailIcon/>} href="mailto:ktthee1995@gmail.com"/>
      </div>
    </div>
    <div className="text-gray-700 dark:text-gray-100 text-center p-4 w-full">
      &copy; 2022 Copyright: <a className="text-gray-800 dark:text-gray-300" href="/">fifteenmania</a>
    </div>
  </footer>
}