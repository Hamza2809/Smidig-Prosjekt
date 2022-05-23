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
            <div>
                <div className="flex flex-row flex-wrap">
                    {users &&
                        users.map((user) => (
                            <div className="card bg-white flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl w-64 m-4" key={user.id}>
                                <div>
                                    <img className="object-cover rounded-full h-36 w-36 mx-auto m-1 p-1 border-4 border-pink-600"
                                      src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                         alt="profile"/>
                                </div>
                                <div className="name text-gray-800 text-xl font-medium mt-4" >
                                   {user.firstName}
                                </div>
                                <div className="name text-gray-800 text-xl font-medium" >
                                    {user.lastName}
                                </div>
                                <div className="mt-2 text-sky-800">{user.email}</div>
                                <div className="mt-2 items-center font-medium mt-4">Emne:</div>
                                <div>{user.emne}</div>
                                <div className="mt-2 items-center font-medium mt-4">Ambisjoner:</div>
                                <div>{user.ambisjoner}</div>
                                <div className="mt-2 items-center font-medium mt-4">Arbeidssted:</div>
                                <div>{user.arbeidsSted}</div>
                                <div className="mt-2 items-center font-medium mt-4">Arbeidsmengde:</div>
                                <div>{user.arbeidsMengde}</div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
