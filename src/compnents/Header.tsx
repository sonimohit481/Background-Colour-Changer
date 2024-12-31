const Header = ({
  isBasic,
  setIsBasic,
}: {
  isBasic: boolean;
  setIsBasic: (args: boolean) => void;
}) => {
  return (
    <header className="bg-white shadow-sm dark:bg-gray-800 drop-shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex ">
          <div className="-m-1.5 p-1.5 flex flex-row-reverse justify-center items-center ">
            <span className="ml-2 text-xl hidden md:border text-black">
              Dynamic Background
            </span>
            <img className="h-8 w-auto" src="/logo.png" alt="logo" />
          </div>
        </div>

        <div className="flex flex-row gap-4 cursor-pointer">
          <div
            onClick={() => setIsBasic(true)}
            className={`font-semibold flex ${
              !isBasic ? "" : "text-green-700 underline"
            }`}
          >
            Basic <span className="hidden md:block">Version</span>
          </div>
          <div
            onClick={() => setIsBasic(false)}
            className={`font-semibold flex ${
              isBasic ? "" : "text-green-700 underline"
            }`}
          >
            Advance <span className="hidden md:block">Version</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
