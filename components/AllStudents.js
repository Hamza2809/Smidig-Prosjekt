import { useState } from 'react';

export default function AllStudents() {
    const users = useState([
        {
            id: 1,
            firstName: 'Ola',
            lastName: 'Nordmann',
            email: 'ola_nordmann@fake.no',
            emne: 'emne 1',
            ambisjoner: 'A',
            arbeidsSted: 'hybrid',
            arbeidsMengde: '20-40 timer'
        }
    ]);

    return (
        <div>
            <h3>React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
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
