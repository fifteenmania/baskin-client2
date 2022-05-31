import githubIcon from '../asset/github.svg';
import gmailIcon from '../asset/gmail.svg';

function FooterIcon({href, src, alt} : {href: string, src: string, alt: string}) {
  return <a className='mr-9 text-gray-800' href={href}>
    <img src={src} alt={alt} className="w-5"/>
  </a>
}

export default function Footer() {
  return <footer className="bg-gray-100 text-center w-full mt-10 divide-y divide-gray-300">
    <div className="w-full pt-9">
      <div className="flex justify-center mb-9 w-full">
        <FooterIcon src={githubIcon} alt="github" href="/#!"/>
        <FooterIcon src={gmailIcon} alt="gmail" href="/#!"/>
      </div>
    </div>
    <div className="text-gray-700 text-center p-4 w-full">
      &copy; 2022 Copyright: <a className="text-gray-800" href="/">fifteenmania</a>
    </div>
  </footer>
}