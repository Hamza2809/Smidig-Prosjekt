import AppLayout from 'components/AppLayout';
import TabBar from "../components/TabBar/TabBar";
import KollokvieGroup from "../components/KollokvieGroups";

export default function KollokviePage() {
  return (
    <AppLayout title="atcampus - Kollokviegruppe">
      <main className="m-4">
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

        <div className="mt-8">
          <KollokvieGroup />
        </div>

      </main>
    </AppLayout>
  );
}