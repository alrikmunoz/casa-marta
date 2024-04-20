import Link, { LinkProps } from "next/link";

type SocialButtonProps = LinkProps & {
  children: React.ReactNode,
  newTab?: boolean,
}

export default function SocialButton({ children, newTab = false, href, ...props }: SocialButtonProps) {
  // TODO: combine/merge passed down className prop, instead of ignoring it
  return (
    <Link href={href} target={newTab ? "_blank" : "_self"} className="transition duration-150 ease-out active:drop-shadow-lg active:bg-[#9db79c] hover:bg-[#bad7b9] hover:-translate-x-0.5 hover:-translate-y-0.5 text-[#4f7e4e] rounded-lg py-8 px-10 text-2xl border-4 border-[#4f7e4e] uppercase tracking-widest" {...props}>{children} &nbsp;-&gt;</Link>
  );
}
