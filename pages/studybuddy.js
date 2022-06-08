import AppLayout from 'components/AppLayout';
import TabBar from '../components/TabBar/TabBar';
import AllStudents from "../components/AllStudents";

export default function StudyBuddyPage() {
    return (
        <AppLayout title="atcampus - StudyBuddy">
            <main className="m-4">
                <h1 className="text-xl lg:text-2xl">Alle studenter</h1>
                <div className="mt-8">

                  <TabBar
                    tabs={[
                      { name: 'Alle studenter',
                        selected: true,
                        href: '/studybuddy',
                      },
                      {
                        name: 'Kollokviegruppe',
                        selected: false,
                        href: '/kollokvie',
                      },
                      { name: 'Min profil',
                        selected: false,
                        href: '/minprofil' }
                    ]}
                  />

                </div>

              <div className="mt-8">
                <AllStudents />
              </div>

            </main>

        </AppLayout>
    );
}
