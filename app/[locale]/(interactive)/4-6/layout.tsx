import pick from "lodash/pick";
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
    <NextIntlClientProvider messages={pick(messages, ["4-6", "NextButton"])}>
      {children}
    </NextIntlClientProvider>
  );
};

export default Layout;
