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
                                <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">Emne:</div>
                                <div>{user.emne}</div>
                                <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">Ambisjoner:</div>
                                <div>{user.ambisjoner}</div>
                                <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">Arbeidssted:</div>
                                <div>{user.arbeidsSted}</div>
                                <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">Arbeidsmengde:</div>
                                <div>{user.arbeidsMengde}</div>
                                <div className="w-full mt-8 flex flex-row justify-center hover:cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="32" height="32" fill="currentColor"
                                         className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path
                                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-2" width="32" height="32" fill="currentColor"
                                         className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg>
                                </div>


                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
