import Link, { LinkProps } from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";

type ActiveLinkProps = LinkProps & {
  activeClassName: string;
  className: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({ children, ...props }: PropsWithChildren<ActiveLinkProps>) => {
  const router: NextRouter = useRouter();
  const className: string =
    props.className + ((router.pathname === props.href && props.activeClassName) ? " " + props.activeClassName : "");
  return (
    <Link {...props}>
      <a className={className}>{children}</a>
    </Link>
  );
};
