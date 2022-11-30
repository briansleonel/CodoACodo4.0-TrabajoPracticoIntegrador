import PaqueteImg from "../assets/paquete.jpg"

const Home = () => {
    return(
        <>
            <div className="bg-[url('/paquete.jpg')] h-screen bg-center bg-no-repeat bg-cover justify-center items-center contenedor flex flex-col">
                <h1 className="text-5xl font-bold text-center">¡Te damos la bienvenida!</h1>

                <p className="text-xl m-10 md:m-32 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure maiores alias beatae culpa, eos quasi? Consequuntur ab consectetur quam deleniti veniam quis, itaque culpa alias animi perferendis nisi distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit alias architecto est assumenda quibusdam ut fuga eligendi itaque explicabo, atque veniam corrupti aspernatur harum nam sequi consequatur. Dolorum, non sunt.</p>
            </div>
        </>
    );
};

export default Home;
