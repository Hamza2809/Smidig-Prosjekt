import AppLayout from 'components/AppLayout';
import TabBar from '../components/TabBar/TabBar';

export default function FontsPage() {
    return (
        <AppLayout title="atcampus - StudyBuddy">
            <header className="m-4">
                <h1 className="text-xl lg:text-2xl">StudyBuddy side</h1>
                <div className="mt-4"></div>
            </header>

            <main>
                <div className="mt-8">
                    <h2 className="text-lg lg:text-xl mb-4">
                        her skal info om folk inn
                    </h2>

                    <TabBar
                        tabs={[
                            { name: 'Tab 1', selected: true, href: '#1' },
                            {
                                name: 'Lorem Ipsum 2',
                                selected: false,
                                href: '#2'
                            },
                            { name: 'Tab 3', selected: false, href: '#3' }
                        ]}
                    />
                </div>
            </main>
        </AppLayout>
    );
}
