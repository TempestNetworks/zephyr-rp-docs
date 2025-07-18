import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://docs.madd.network${asPath}`;
  const description = frontMatter.description || "Zephyr RP";

  return (
    <>
      <title>{title ? `${title} - Zephyr RP` : 'Zephyr RP'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="https://r2.fivemanage.com/C7VNUJE5Bo07WayfJSyol/logo-small.png" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title || 'Zephyr RP'} />
      <meta property="og:description" content={description} />
      <meta name="og:url" content={url} />
      <meta property="og:image" content="https://r2.fivemanage.com/C7VNUJE5Bo07WayfJSyol/logo-notext.png" />
      <meta name="theme-color" content="#7151b5" />
    </>
  );
}

const config: DocsThemeConfig = {
  color: {
    hue: 258,
    saturation: 50,
  },
  head: useHead,
  backgroundColor: {
    dark: '28, 28, 28',
  },
  logo: (
    <div
      style={{
        paddingLeft: '50px',
        lineHeight: '38px',
        background: "url('https://r2.fivemanage.com/C7VNUJE5Bo07WayfJSyol/logo-notext.png') no-repeat left",
        backgroundSize: '38px',
        fontWeight: 550,
      }}
    >
      Zephyr Roleplay
    </div>
  ),
  chat: {
    link: 'https://discord.gg/wkrQTr8hsk',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  navigation: true,
  feedback: {
    content: null,
    useLink: () => 'https://discord.gg/wkrQTr8hsk',
  },
  editLink: {
    component: null,
  },
  footer: {
    content: 'Zephyr Roleplay',
  },
};

export default config;