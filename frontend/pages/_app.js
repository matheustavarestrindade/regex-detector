import "../styles/bootstrap.scss";

function MyApp({ Component, pageProps }) {
    if (typeof window !== "undefined") {
        require("bootstrap/dist/js/bootstrap.bundle");
    }
    return <Component {...pageProps} />;
}

export default MyApp;
