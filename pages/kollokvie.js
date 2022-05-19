import AppLayout from 'components/AppLayout';
import TabBar from "../components/TabBar/TabBar";

export default function KollokviePage() {
  return (
    <AppLayout title="atcampus - Kollokviegruppe">
      <header className="m-4">
        <h1 className="text-xl lg:text-2xl">Kollokvie gruppe</h1>
        <div className="mt-8">

          <TabBar
            tabs={[
              { name: 'Alle studenter',
                selected: false,
                href: '/studybuddy',
              },
              {
                name: 'Kollokviegruppe',
                selected: true,
                href: '/kollokvie'
              },
              { name: 'Min profil',
                selected: false,
                href: '/minprofil' }
            ]}
          />

        </div>
      </header>
      <main className="m-4">
        <h1 className="text-xl lg:text-2xl"></h1>
      </main>
    </AppLayout>
  );
}