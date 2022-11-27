import { useEffect, useState } from "react";

import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid";

const TablePaquetes = (props) => {
    const { paquetesData, removePaquete, setPaquete } = props;

    return (
        <div className="md:w-3/5 lg:w-3/5">
            <div>
                <p className="text-3xl text-center mb-5 text-slate-800 underline underline-offset-4">
                    Listado de paquetes
                </p>
            </div>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mx-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <TableHead />
                    <TableBody
                        paquetesData={paquetesData}
                        removePaquete={removePaquete}
                        setPaquete={setPaquete}
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
                    Peso
                </th>
                <th scope="col" className="py-3 px-6">
                    C.P.
                </th>
                <th scope="col" className="py-3 px-6">
                    Acción
                </th>
            </tr>
        </thead>
    );
};

const TableBody = (props) => {
    const { paquetesData, removePaquete, setPaquete } = props;

    const rowsTable = paquetesData.map((element, index) => {
        return (
            <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-700"
            >
                <td className="py-4 px-6">{element.nombre}</td>
                <td className="py-4 px-6">{element.apellido}</td>
                <td className="py-4 px-6">{element.peso} Kg.</td>
                <td className="py-4 px-6">{element.direccion}</td>
                <td className="py-4 px-6">{element.cp}</td>
                <td className="py-4 px-6 flex gap-2">
                    <button
                        className="bg-red-600 p-2 text-white uppercase hover:bg-red-500  cursor-pointer transition-all rounded-md"
                        onClick={() => removePaquete(index)}
                    >
                        <TrashIcon className="h-4 w-4" />
                    </button>

                    <button
                        className="bg-yellow-500 p-2 text-white uppercase hover:bg-yellow-400  cursor-pointer transition-all rounded-md"
                        onClick={() => setPaquete(element)}
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
