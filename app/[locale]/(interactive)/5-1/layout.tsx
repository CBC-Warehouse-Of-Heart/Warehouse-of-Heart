import { pick } from "lodash";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { PropsWithChildren } from "react";

const Layout = ({
  children,
  params: { locale },
}: PropsWithChildren<{
  params: {
    locale: string;
  };
}>) => {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, ["5-1", "NextButton"])}>
      {children}
    </NextIntlClientProvider>
  );
};

export default Layout;
