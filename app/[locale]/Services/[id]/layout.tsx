import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "my - title",
    template: "%s | my-title",
  },
  description: {
    template: "%s",
  },
};

export default function Products({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>{children}</div>
  );
}