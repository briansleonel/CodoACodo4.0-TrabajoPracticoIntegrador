import { useState } from "react";
import FormularioLocalForage from "../components/FormularioLocalForage";
import { getPaquetes } from "../controllers/paquete";

const paquetesData = await getPaquetes();

const PageFormulario = (props) => {
    const [paquete, setPaquete] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        peso: "",
        cp: "",
    });

    return (
        <div className="container mx-auto mt-10">
            <div className="">
                <FormularioLocalForage paquete={paquete} setPaquete={setPaquete} paquetesData={paquetesData} />
            </div>
        </div>
    );
}

export default PageFormulario;