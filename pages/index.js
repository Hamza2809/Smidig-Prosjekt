import AppLayout from 'components/AppLayout';
import RoundedSearch from 'components/RoundedSearch';

export default function HomePage() {
    return (
        <AppLayout title={'atcampus - Oversikt'}>
            <main className="m-4">
                <h1 className="text-xl lg:text-2xl">
                    {' '}
                    DETTE ER OVERSIKT SIDEN, search bar skal være øverst i egen
                    nav og denne skriften skal bort
                </h1>

                <div className="mt-8">
                    <RoundedSearch
                        name={'search'}
                        placeholder={'søk i spørsmål & svar her'}
                    />
                </div>
            </main>
        </AppLayout>
    );
}
