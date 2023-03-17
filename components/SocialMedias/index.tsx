import Image from 'next/image';
import Link from 'next/link';

export const SocialMedias = () => {
  return (
    <div className="flex flex-row w-full justify-around bg-gray py-2 border-gray border-solid border shadow-md shadow-lightGray">
      <Link href={'https://www.linkedin.com/in/thalesgelinger'}>
        <Image src={'/linkedin.svg'} width={35} height={35} alt="linkedin" />
      </Link>
      <Link href={'https://github.com/thalesgelinger'}>
        <Image src={'/github.svg'} width={35} height={35} alt="github" />
      </Link>
      <Link href={'https://www.instagram.com/thalesgelinger/'}>
        <Image src={'/insta.svg'} width={35} height={35} alt="instagram" />
      </Link>
      <Link href={'mailto: thalesgelinger@gmail.com'}>
        <Image src={'/mail.svg'} width={35} height={35} alt="e-mail" />
      </Link>
    </div>
  );
};
