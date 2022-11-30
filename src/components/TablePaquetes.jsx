import { useEffect, useState } from "react";

import { TrashIcon, PencilSquareIcon, PlusIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const TablePaquetes = (props) => {
    const { paquetesData, removePaquete } = props;

    const navigate = useNavigate();

    const onHandleClickAgregar = () => {
        navigate("/formulario")
    }

    return (
        <div className="md:w-screen">
            <div className="mb-5">
                <p className="text-3xl text-center mb-5 text-slate-800 underline underline-offset-4">
                    Listado de paquetes
                </p>
                <button type="button" className="bg-blue-800 p-1 text-white hover:bg-blue-700  cursor-pointer transition-all rounded-md flex items-center mx-5" title="Agregar paquete" onClick={() => onHandleClickAgregar()}>
                    <PlusIcon className="h-6 w-6"/><span className="text-sm mx-2">Agregar</span>
                </button>
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHead />
                    <TableBody
                        paquetesData={paquetesData}
                        removePaquete={removePaquete}
                        navigate={navigate}
                    />
                </table>
            </div>
        </div>
    );
};

const TableHead = () => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Nombre
                </th>
                <th scope="col" className="py-3 px-6">
                    Apellido
                </th>
                <th scope="col" className="py-3 px-6">
                    Direccion
                </th>
                <th scope="col" className="py-3 px-6">
                    C.P.
                </th>
                <th scope="col" className="py-3 px-6">
                    Peso
                </th>
                <th scope="col" className="py-3 px-6">
                    Acción
                </th>
            </tr>
        </thead>
    );
};

const TableBody = (props) => {
    const { paquetesData, removePaquete, navigate } = props;

    

    function editPaquete(id) {
        const resp = confirm("¿Editar paquete?");
        if (resp) navigate(`/formulario/${id}`);
    }

    const rowsTable = paquetesData.map((element, index) => {
        return (
            <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700"
            >
                <td className="py-4 px-6">{element.nombre}</td>
                <td className="py-4 px-6">{element.apellido}</td>
                <td className="py-4 px-6">{element.direccion}</td>
                <td className="py-4 px-6">{element.cp}</td>
                <td className="py-4 px-6">{element.peso} Kg.</td>
                <td className="py-4 px-6 flex gap-2">
                    <button
                        className="bg-red-600 p-2 text-white uppercase hover:bg-red-500  cursor-pointer transition-all rounded-md" title="Eliminar paquete"
                        onClick={() => removePaquete(index)}
                    >
                        <TrashIcon className="h-4 w-4" />
                    </button>

                    <button
                        className="bg-yellow-500 p-2 text-white uppercase hover:bg-yellow-400  cursor-pointer transition-all rounded-md" title="Editar paquete"
                        onClick={() => editPaquete(element.id)}
                    >
                        <PencilSquareIcon className="h-4 w-4" />
                    </button>
                </td>
            </tr>
        );
    });

    return <tbody>{rowsTable}</tbody>;
};

export default TablePaquetes;
