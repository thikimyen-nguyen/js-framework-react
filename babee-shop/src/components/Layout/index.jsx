import { ContactForm } from "../ContactForm";
import { Footer } from "../Footer";
import { Header } from "../Header";
import style from './index.module.css';

export function Layout() {
    return (
        <div className={style.pageWrapper}>
            <Header />
            <main className={style.pageBody} >
                <ContactForm />
            </main>
            <Footer />
        </div>
       
    );
}