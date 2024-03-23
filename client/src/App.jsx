import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div>
            <Header />
            <InfoHeader />
            <Cards />
        </div>
    );
}