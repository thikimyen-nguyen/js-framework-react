import { Footer } from "../Footer";
import { Header } from "../Header";
import style from './index.module.css';

export function Layout() {
    return (
        <div className={style.pageWrapper}>
            <Header />
            <main className={style.pageBody} >Hello</main>
            <Footer />
        </div>
       
    );
}