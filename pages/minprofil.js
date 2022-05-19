import AppLayout from 'components/AppLayout';
import TabBar from "../components/TabBar/TabBar";
import MyProfile from "../components/MyProfile";

export default function MinProfilPage() {
  return (
    <AppLayout title="atcampus - Kollokviegruppe">
      <main className="m-4">
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

        <div className="mt-8">
          <MyProfile />
        </div>

      </main>
    </AppLayout>
  );
}