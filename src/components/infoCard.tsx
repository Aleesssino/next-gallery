import { FC, ReactNode } from "react";

interface InfoCardProps {
  children: ReactNode;
}

const InfoCard: FC<InfoCardProps> = ({ children }) => {
  return (
    <div className="flex w-full md:px-48 pb-10">
      <div className=" rounded-2xl p-2 w-full pb-10 text-center border-white border-[1px]">
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};

export default InfoCard;
