export default {
  github: 'https://github.com/friends-with-benefits/fwb-wiki',
  docsRepositoryBase: 'https://github.com/friends-with-benefits/fwb-wiki/blob/master',
  titleSuffix: ' – FWB Wiki',
  logo: (
    <>
      <img src="/logo-wiki.svg" />
    </>
  ),
  head: (
    <>
      <meta charSet="utf-8"/>
      <meta http-equiv="x-ua-compatible" content="ie=edge"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <meta name="format-detection" content="telephone=no"/>
      <link preload="true" rel="icon" href="/favicon.ico"/>
      <link preload="true" rel="mask-icon" href="/favicon.ico" color="#000000"/>
      <title>FWB - Wiki</title>
      <meta name="description" content="FWB - Wiki"/>
      <meta property="og:title" content="FWB - Wiki"/>
      <meta name="twitter:title" content="FWB - Wiki"/>
      <meta property="og:description" content="FWB - Wiki"/>
      <meta name="twitter:description" content="FWB - Wiki"/>
      <meta property="og:image" content="/fwb-wiki.png"/>
      <meta name="twitter:image" content="/fwb-wiki.png"/>
      <meta property="og:type" content="website"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="og:site_name" content="Friends With Benefits"/>
      <meta name="next-head-count" content="18"/>
      <script
        lang="javascript"
        dangerouslySetInnerHTML={{
          __html: `if (!window.localStorage.getItem("theme_default")) {
            window.localStorage.setItem("theme", "dark");
            window.localStorage.setItem("theme_default", "dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
          }`,
        }}
      />
    </>
  ),
  darkMode: false,
  defaultMenuCollapsed: true,
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © Friends with Benefits</>,
}
