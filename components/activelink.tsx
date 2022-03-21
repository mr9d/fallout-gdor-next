import Link, { LinkProps } from "next/link";
import { NextRouter, useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";

type ActiveLinkProps = LinkProps & {
  activeClassName?: string;
  className?: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({ children, ...props }: PropsWithChildren<ActiveLinkProps>) => {
  const router: NextRouter = useRouter();
  const isActive: boolean = (router.pathname === props.href && !!props.activeClassName);
  const finalClassName: string | undefined =
    isActive || props.className ?
    (
      (props.className || "") +
      ((isActive && props.className) ? " " : "") +
      (isActive ? props.activeClassName : "")
    ):
    undefined;
    props.className + ((router.pathname === props.href && props.activeClassName) ? " " + props.activeClassName : "");
  return (
    <Link {...props}>
      <a className={finalClassName}>{children}</a>
    </Link>
  );
};
