import Image from "next/image";
import { useAtom } from "jotai";
import { userAtom } from "..";

const Header = () => {
  const [user] = useAtom(userAtom);

  return (
    <header className="flex justify-between px-12 py-4">
      <Image
        src="/aerolab-logo.svg"
        width={39}
        height={36}
        alt="Aerolab Logo"
      />
      <div className="user-info flex items-center text-xl text-gray-500">
        <p className="mr-4">{user?.name}</p>
        <div className="loyalty-points-badge flex rounded-full bg-gray-200 px-3 py-2">
          <p>{user?.points}</p>
          <Image
            className="ml-2 mt-1"
            src="/icons/coin.svg"
            width={24}
            height={24}
            alt="Coin"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
