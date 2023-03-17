import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {
  showMe?: boolean;
};
export const Header = ({ showMe = false }: HeaderProps) => {
  return (
    <header className="flex w-full justify-between px-[1.563rem]">
      <Image src={'/sun.svg'} width={35} height={35} alt="toggle-mode-icon" />
      <div className="flex items-end ">
        <Link href="/" className="text-[1.625rem]">
          Thales Gelinger
        </Link>
        {showMe && (
          <div className="ml-8">
            <Image
              src={'/me.png'}
              width={55}
              height={55}
              style={{
                borderRadius: 55,
              }}
              alt="Thales Gelinger"
            />
          </div>
        )}
      </div>
    </header>
  );
};
