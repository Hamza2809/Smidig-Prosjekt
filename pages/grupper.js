import AppLayout from 'components/AppLayout';
import AllStudents from "../components/AllStudents";
import Paramatere from "../components/Paramatere";

export default function GroupsPage() {
    return (
        <AppLayout title="atcampus - Grupper">
            <main className="m-4">
                <h1 className="text-xl lg:text-2xl">Grupper</h1>

              <div className="mt-8">
                <Paramatere />
              </div>

            </main>
        </AppLayout>
    );
}
