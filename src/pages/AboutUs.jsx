const AboutUs = () => {
    const styleLinks = "font-bold text-violet-500 hover:text-violet-700";
    const stylePharagraph = "text-md";

    return (
        <>
            <div className="container mx-auto px-10 md:px-56">
                <h4 className="text-3xl font-bold mt-10 subtitle">
                    Acerca de...
                </h4>
                <p className={stylePharagraph}>
                    Se presenta una Aplicación Web Dinámica, el cuál permite Gestionar los Paquetes ingresados en una empresa. Permite guardar los datos de cada paquete, así como modificar o eliminar cada uno de ellos.
                </p>
            </div>
            <div className="container mx-auto px-10 md:px-56">
                <h4 className="text-3xl font-bold mt-10 subtitle">
                    Tecnologías...
                </h4>
                <p className={stylePharagraph}>
                    &nbsp;Esta aplicación fue desarrollada con el framework de{" "}
                    <a href="https://reactjs.org/" className={styleLinks}>
                        React JS
                    </a>
                    , con el objetivo de practicar el uso de la librería. En
                    este proyecto se trabajo con{" "}
                    <a
                        href="https://reactjs.org/docs/hooks-intro.html"
                        className={styleLinks}
                    >
                        React Hooks
                    </a>
                    , y además se usó{" "}
                    <a
                        href="https://reactrouter.com/en/main"
                        className={styleLinks}
                    >
                        React Router
                    </a>{" "}
                    para trabajar con con rutas y parámetros sobre la
                    aplicación.
                </p>
            </div>

            <div className="container mx-auto px-10 md:px-56 mb-14">
                <h4 className="text-3xl font-bold mt-4 subtitle">
                    Acerca del desarrollador...
                </h4>
                <p className={stylePharagraph}>
                    Autor:{" "}
                    <a
                        href="https://www.instagram.com/briansleonel/"
                        className={styleLinks}
                    >
                        González Brian Leonel
                    </a>
                </p>
                <p className={stylePharagraph}>
                    Email:{" "}
                    <a
                        href="mailto:gonzalezbrianleonel76@gmail.com"
                        className={styleLinks}
                    >
                        gonzalezbrianleonel76@gmail.com
                    </a>
                </p>
                <p className={stylePharagraph}>
                    Github:{" "}
                    <a
                        href="https://github.com/briansleonel"
                        className={styleLinks}
                    >
                        briansleonel
                    </a>
                </p>
            </div>
        </>
    );
};

export default AboutUs;
