import AppLayout from 'components/AppLayout';
import TabBar from "../components/TabBar/TabBar";

export default function MinProfilPage() {
  return (
    <AppLayout title="atcampus - Kollokviegruppe">
      <header className="m-4">
        <h1 className="text-xl lg:text-2xl">Min profil</h1>
        <div className="mt-8">

          <TabBar
            tabs={[
              { name: 'Alle studenter',
                selected: false,
                href: '/studybuddy',
              },
              {
                name: 'Kollokviegruppe',
                selected: false,
                href: '/kollokvie'
              },
              { name: 'Min profil',
                selected: true,
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