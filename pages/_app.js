import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <link rel="shortcut icon" href="/static/favicon.ico" />;
      </head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
