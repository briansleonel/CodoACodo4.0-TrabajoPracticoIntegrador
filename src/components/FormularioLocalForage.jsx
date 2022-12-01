import { useEffect, useState } from "react";
import {
    getPaquete,
    getPaquetes,
    updatePaquetes,
} from "../controllers/paquete";

const minCharacters = 4;
const minCharactersDireccion = 10;

import { useNavigate, useParams } from "react-router-dom";

const validateForm = (input) => {
    let errors = {};

    const regExpNumeros = /^[0-9]+$/

    if (!input.nombre) {
        errors.nombre = "Campo requerido.";
    } else if(input.nombre.length < minCharacters) {
        errors.nombre = `Debe contener al menos ${minCharacters} caracteres.`
    }

    if (!input.apellido) {
        errors.apellido = "Campo requerido.";
    } else if(input.apellido.length < minCharacters) {
        errors.apellido = `Debe contener al menos ${minCharacters} caracteres.`
    }

    if (!input.direccion) {
        errors.direccion = "Campo requerido.";
    } else if(input.direccion.length < minCharactersDireccion) {
        errors.direccion = `Debe contener al menos ${minCharactersDireccion} caracteres.`
    }

    if (!input.peso) {
        errors.peso = "Campo requerido.";
    } else if(!regExpNumeros.exec(input.peso)) {
        errors.peso = "Ingrese solo números."
    }

    if (!input.cp) {
        errors.cp = "Campo requerido.";
    } else if(!regExpNumeros.exec(input.cp)) {
        errors.cp = "Ingrese solo números."
    }

    return errors;
};

const FormularioLocalForage = (props) => {
    const { paquete, setPaquete, paquetesData } = props;

    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        peso: "",
        cp: "",
    });

    const navigate = useNavigate();
    const params = useParams();

    /*
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
    */

    useEffect(() => {
        loadPaquete();
        /*
        if (Object.keys(paquete).length > 0) {
            setPaquete(paquete);
        }*/
    }, []);

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

    async function onHandleSubmit(event) {
        event.preventDefault();

        setErrors(
            validateForm({
                ...paquete,
                [event.target.name]: event.target.value,
            })
        );

        if (!Object.values(paquete).includes("")) {
            const resp = confirm("¿Guardar?");
            if (resp) {
                let statusUpdate;
                if (paquete.id) {
                    const paquetesActualizados = paquetesData.map((p, index) =>
                        p.id === paquete.id ? paquete : p
                    );
                    statusUpdate = await updatePaquetes(paquetesActualizados);
                } else {
                    paquete.id = paquetesData.length + 1;
                    paquetesData.push(paquete);
                    statusUpdate = await updatePaquetes(paquetesData);
                }
                if (statusUpdate) {
                    navigate("/gestion-paquetes");
                    //limpiarCampos();
                }
            }
        } else {
            alert("Por favor revise los campos");
        }
    }

    async function loadPaquete() {
        if (haveParams()) {
            let p = await getPaquete(params.id);
            if (p) {
                setPaquete(p);
            }
        }
    }

    function haveParams() {
        return params.id ? true : false;
    }

    function cancelButton() {
        const resp = confirm("¿Salir sin guardar los cambios?");
        if (resp) navigate("/gestion-paquetes");
        //limpiarCampos();
    }
    /*
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
    }*/

    return (
        <div className="md:w-1/2 lg:w-2/5 m-auto">
            {/*onSubmit={handleSubmit}*/}
            <form
                className="bg-zinc-200 shadow-xl rounded-lg p-5 mx-5 mb-10"
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
                        title={errors.nombre}
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
                        title={errors.apellido}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="direccion"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Dirección
                    </label>

                    <input
                        id="direccion"
                        name="direccion"
                        type="text"
                        placeholder="Dirección de envío"
                        className={
                            errors.direccion ? styleInputError : styleInput
                        }
                        value={paquete.direccion}
                        onChange={(event) => onHandleChange(event)}
                        title={errors.direccion}
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
                        title={errors.peso}
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
                        placeholder="Código postal"
                        className={errors.cp ? styleInputError : styleInput}
                        value={paquete.cp}
                        onChange={(event) => onHandleChange(event)}
                        title={errors.cp}
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

export default FormularioLocalForage;
