import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import AppJumbotron from "../components/AppJumbotron";

export default function HomePage() {

    return (
        <>
            <AppHeader />
            <main>
                <AppJumbotron />
            </main>
            <AppFooter />
        </>
    )
}