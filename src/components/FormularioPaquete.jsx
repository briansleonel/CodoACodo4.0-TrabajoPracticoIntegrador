import { useEffect, useState } from "react";

const validateForm = (input) => {
    let errors = {};

    if (!input.nombre) {
        errors.nombre = "Campo requerido.";
    }

    if (!input.apellido) {
        errors.apellido = "Campo requerido.";
    }

    if (!input.direccion) {
        errors.direccion = "Campo requerido.";
    }

    if (!input.peso) {
        errors.peso = "Campo requerido.";
    }

    if (!input.cp) {
        errors.cp = "Campo requerido.";
    }

    return errors;
};

const FormularioPaquete = (props) => {
    const { paquete, setPaquete, paquetesData, setPaquetesData } = props;

    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        peso: "",
        cp: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        setButtonDisabled(
            errors.nombre &&
                errors.apellido &&
                errors.direccion &&
                errors.peso &&
                errors.cp
                ? true
                : false
        );
    }, [errors]);

    useEffect(() => {
        if (Object.keys(paquete).length > 0) {
            setPaquete(paquete);
        }
    }, [paquete]);

    const styleInput =
        "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none focus:border-green-300 ";

    const styleInputError =
        "border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none focus:border-red-400 border-red-400";

    function onHandleChange(event) {
        setPaquete({
            ...paquete,
            [event.target.name]: event.target.value,
        });

        setErrors(
            validateForm({
                ...paquete,
                [event.target.name]: event.target.value,
            })
        );
    }

    function onHandleSubmit(event) {
        event.preventDefault();

        setErrors(
            validateForm({
                ...paquete,
                [event.target.name]: event.target.value,
            })
        );

        if (!Object.values(paquete).includes("")) {
            if (paquete.id) {
                const paquetesActualizados = paquetesData.map((p, index) =>
                    p.id === paquete.id ? paquete : p
                );
                setPaquetesData(paquetesActualizados);
            } else {
                paquete.id = paquetesData.length + 1;
                setPaquetesData([...paquetesData, paquete]);
            }
            limpiarCampos();
        }
    }

    function cancelButton() {
        limpiarCampos();
    }

    function limpiarCampos() {
        setPaquete({
            nombre: "",
            apellido: "",
            direccion: "",
            peso: "",
            cp: "",
        });

        setErrors({
            nombre: "",
            apellido: "",
            direccion: "",
            peso: "",
            cp: "",
        });
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            {/*onSubmit={handleSubmit}*/}
            <form
                className="bg-zinc-100 shadow-lg rounded-lg p-5 mx-5 mb-10"
                onSubmit={(e) => onHandleSubmit(e)}
            >
                <p className="text-3xl text-center mb-5 text-slate-800 underline underline-offset-4">
                    Paquete
                </p>

                <div className="mb-5">
                    <label
                        htmlFor="nombre"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre
                    </label>

                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Nombre del destinatario"
                        className={errors.nombre ? styleInputError : styleInput}
                        value={paquete.nombre}
                        onChange={(event) => onHandleChange(event)}
                    />

                    {/*errors.nombre ? (
                        <p className="text-red-500 text-xs text-end mt-2">
                            * {errors.nombre}
                        </p>
                    ) : (
                        <></>
                    )*/}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="apellido"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Apellido
                    </label>

                    <input
                        id="apellido"
                        name="apellido"
                        type="text"
                        placeholder="Apellido del destinatario"
                        className={
                            errors.apellido ? styleInputError : styleInput
                        }
                        value={paquete.apellido}
                        onChange={(event) => onHandleChange(event)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="direccion"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Direcci??n
                    </label>

                    <input
                        id="direccion"
                        name="direccion"
                        type="text"
                        placeholder="Direcci??n de env??o"
                        className={
                            errors.direccion ? styleInputError : styleInput
                        }
                        value={paquete.direccion}
                        onChange={(event) => onHandleChange(event)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="peso"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Peso
                    </label>

                    <input
                        id="peso"
                        name="peso"
                        type="text"
                        placeholder="Peso del paquete"
                        className={errors.peso ? styleInputError : styleInput}
                        value={paquete.peso}
                        onChange={(event) => onHandleChange(event)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="cp"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        C.P.
                    </label>

                    <input
                        id="cp"
                        name="cp"
                        type="text"
                        placeholder="C??digo postal"
                        className={errors.cp ? styleInputError : styleInput}
                        value={paquete.cp}
                        onChange={(event) => onHandleChange(event)}
                    />
                </div>

                <button className="bg-blue-600 w-full p-3 text-white uppercase font-bold hover:bg-blue-500  cursor-pointer transition-all rounded-md">
                    Guardar
                </button>

                <button
                    type="button"
                    className="bg-red-600 w-full mt-2 p-3 text-white uppercase font-bold hover:bg-red-500  cursor-pointer transition-all rounded-md"
                    onClick={() => cancelButton()}
                >
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default FormularioPaquete;
