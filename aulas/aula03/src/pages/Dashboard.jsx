import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Card from "../components/Cards";
import Layout from "./Layout";

function Dashboard(){
    return <>
        <Layout>
            <h3>Bem vindo ao portal do aluno</h3>
            <section>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </Layout>
    </>;
}

export default Dashboard;