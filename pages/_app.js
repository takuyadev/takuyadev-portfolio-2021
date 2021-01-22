import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>Takuya Toyokawa</title>;
        <meta
          name="description"
          content="Takuya Toyokawa's Front-end Developer's portfolio based in Canada"
        ></meta>
      </head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
