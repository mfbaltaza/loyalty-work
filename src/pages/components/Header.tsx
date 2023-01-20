import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between px-12 py-6">
      <Image
        src="/aerolab-logo.svg"
        width={39}
        height={36}
        alt="Aerolab Logo"
      />
      <div className="user-info flex items-center text-xl text-gray-500">
        <p className="mr-4">John Kite</p>
        <div className="loyalty-points-badge flex rounded-full bg-gray-200 px-3 py-2">
          <p>6000</p>
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
