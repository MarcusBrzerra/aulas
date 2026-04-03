import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Cards";

function Notas(){
    return <>
        <Sidebar />
        <main>
            <Topbar />
            <h3>Bem vindo ao portal do aluno</h3>
            <section>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </main>
    </>;
}

export default Notas;