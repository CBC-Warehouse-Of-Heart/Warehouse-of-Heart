import pick from "lodash/pick";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "1-6a")}>
      {children}
    </NextIntlClientProvider>
  );
};

export default Layout;