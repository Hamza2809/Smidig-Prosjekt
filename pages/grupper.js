import AppLayout from 'components/AppLayout';
import RoundedSearch from "../components/RoundedSearch";
import TextInputField from "../components/TextInputField";
import TopSearch from "../components/TopSearch";

export default function GroupsPage() {
    return (
        <AppLayout title="atcampus - Grupper">
            <main className="m-4">
                <h1 className="text-xl lg:text-2xl">Grupper</h1>
              <RoundedSearch />
              <TextInputField />
              <TopSearch />
            </main>
        </AppLayout>
    );
}
