import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import FormularioPaquete from "../components/FormularioPaquete";
import TablePaquetes from "../components/TablePaquetes";
import { getPaquetes, updatePaquetes } from "../controllers/paquete";

const paquetes = await getPaquetes();

const GestionPaquetes = () => {
    const [paquetesData, setPaquetesData] = useState([]);

    const [paquete, setPaquete] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        peso: "",
        cp: "",
    });

    useEffect(() => {
        loadPaquetes();
    }, [paquetes])

    async function loadPaquetes() {
        const paquetes = await getPaquetes();
        setPaquetesData(paquetes);
    }

    async function removePaquete (index) {
        const resp = confirm("¿Eliminar paquete?");
        if(resp) {
            const paquetesUpdate = paquetesData.filter((p, i) => {
                return i !== index;
            })
            const statusUpdate = await updatePaquetes(paquetesUpdate);
            statusUpdate ? loadPaquetes() : console.log("No se actualizó");
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="md:flex">
                {/*
                <FormularioPaquete paquete={paquete} setPaquete={setPaquete} paquetesData={paquetesData} setPaquetesData={setPaquetesData} /> */}
                
                <TablePaquetes
                    paquetesData={paquetesData}
                    removePaquete={removePaquete}
                    setPaquete={setPaquete}
                />
            </div>
        </div>
    );
};

export default GestionPaquetes;
