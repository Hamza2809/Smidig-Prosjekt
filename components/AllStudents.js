import { useState } from 'react';

export default function AllStudents() {
    const [users] = useState([
        {
            id: 1,
            firstName: 'Ola',
            lastName: 'Nordmann',
            email: 'ola_nordmann@fake.no',
            emne: 'Emne 1',
            ambisjoner: 'A',
            arbeidsSted: 'Hybrid',
            arbeidsMengde: '20-40 timer'
        },
        {
            id: 2,
            firstName: 'Kari',
            lastName: 'Nordmann',
            email: 'Kari_nordmann@fake.no',
            emne: 'Emne 3',
            ambisjoner: 'A-C',
            arbeidsSted: 'Fysisk',
            arbeidsMengde: '20-40 timer'
        },
        {
            id: 3,
            firstName: 'Mehmet',
            lastName: 'Simsek',
            email: 'arsenal_erbest@fake.no',
            emne: 'Emne 2',
            ambisjoner: 'Bestått til D',
            arbeidsSted: 'Over nett',
            arbeidsMengde: '10-20 timer'
        },
        {
            id: 4,
            firstName: 'Josefine',
            lastName: 'Hansen',
            email: 'hester_erbest@fake.no',
            emne: 'Emne 1',
            ambisjoner: 'A-C',
            arbeidsSted: 'Hybrid',
            arbeidsMengde: '40-60 timer'
        },
        {
            id: 5,
            firstName: 'Tormod',
            lastName: 'Larsen',
            email: 'tortilmod@fake.no',
            emne: 'Emne 1',
            ambisjoner: 'Bestått til D',
            arbeidsSted: 'Fysisk',
            arbeidsMengde: '40-60 timer'
        },
        {
            id: 6,
            firstName: 'Alisha',
            lastName: 'Dolartjali',
            email: 'kreativ_email@fake.no',
            emne: 'Emne 3',
            ambisjoner: 'A-C',
            arbeidsSted: 'Hybrid',
            arbeidsMengde: '20-40 timer'
        },
        {
            id: 7,
            firstName: 'Tony',
            lastName: 'Soprano',
            email: 'gabagool@fake.no',
            emne: 'Emne 1',
            ambisjoner: 'Bestått til D',
            arbeidsSted: 'Fysisk',
            arbeidsMengde: '10-20 timer'
        },
        {
            id: 8,
            firstName: 'Ann-Kari',
            lastName: 'Stiansen',
            email: 'Mannen_minerutro@fake.no',
            emne: 'Emne 2',
            ambisjoner: 'A',
            arbeidsSted: 'Over Nett',
            arbeidsMengde: '40-60 timer'
        },
        {
            id: 9,
            firstName: 'Lisa',
            lastName: 'Karstensen',
            email: 'hvorerdupappa@fake.no',
            emne: 'Emne 2',
            ambisjoner: 'A-C',
            arbeidsSted: 'Hybrid',
            arbeidsMengde: '20-40 timer'
        },
        {
            id: 10,
            firstName: 'Ronny-Johnny',
            lastName: 'Kristiansen',
            email: 'knustekneskåler@fake.no',
            emne: 'Emne 1',
            ambisjoner: 'A',
            arbeidsSted: 'Fysisk',
            arbeidsMengde: '10-20 timer'
        }
    ]);

    return (
        <div>
            <h3>React - Display a list of items</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Emne</th>
                        <th>Ambisjoner</th>
                        <th>Arbeids sted</th>
                        <th>Arbeids mengde</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    {user.firstName} {user.lastName}
                                </td>
                                <td>{user.email}</td>
                                <td>{user.emne}</td>
                                <td>{user.ambisjoner}</td>
                                <td>{user.arbeidsSted}</td>
                                <td>{user.arbeidsMengde}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
