import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="w-[40vw] h-[70vh] flex items-center justify-center bg-slate-100 border-s rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default AuthLayout;
