"use client";

import Button from "@mui/material/Button";

export const CTAButton = ({ children, href }: { children: any; href: string }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      href={href}
      className="!py-3 !px-6 !rounded-xl !text-black !font-semibold"
    >
      {children}
    </Button>
  );
};
