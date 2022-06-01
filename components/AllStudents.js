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

    const [subject, setSubject] = useState('');
    const handleSubjectChange = (event) => setSubject(event.target.value);

    const [ambition, setAmbition] = useState('');
    const handleAmbitionChange = (event) => setAmbition(event.target.value);

    const [workplace, setWorkplace] = useState('');
    const handleWorkplaceChange = (event) => setWorkplace(event.target.value);

    const [workload, setWorkload] = useState('');
    const handleWorkloadChange = (event) => setWorkload(event.target.value);

    return (
        <>
            <div className="flex space-x-10">
                <div>
                    <h3>Emne</h3>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value=""
                                checked={subject === ''}
                                onChange={handleSubjectChange}
                                className="mr-2"
                            />
                            Alle
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Emne 1"
                                checked={subject === 'Emne 1'}
                                onChange={handleSubjectChange}
                                className="mr-2"
                            />
                            Emne 1
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Emne 2"
                                checked={subject === 'Emne 2'}
                                onChange={handleSubjectChange}
                                className="mr-2"
                            />
                            Emne 2
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Emne 3"
                                checked={subject === 'Emne 3'}
                                onChange={handleSubjectChange}
                                className="mr-2"
                            />
                            Emne 3
                        </label>
                    </div>
                </div>

                <div>
                    <h3>Ambisjoner</h3>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value=""
                                checked={ambition === ''}
                                onChange={handleAmbitionChange}
                                className="mr-2"
                            />
                            Alle
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="A"
                                checked={ambition === 'A'}
                                onChange={handleAmbitionChange}
                                className="mr-2"
                            />
                            A
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="A-C"
                                checked={ambition === 'A-C'}
                                onChange={handleAmbitionChange}
                                className="mr-2"
                            />
                            A-C
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Bestått til D"
                                checked={ambition === 'Bestått til D'}
                                onChange={handleAmbitionChange}
                                className="mr-2"
                            />
                            Bestått til D
                        </label>
                    </div>
                </div>

                <div>
                    <h3>Arbeidssted</h3>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value=""
                                checked={workplace === ''}
                                onChange={handleWorkplaceChange}
                                className="mr-2"
                            />
                            Alle
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Fysisk"
                                checked={workplace === 'Fysisk'}
                                onChange={handleWorkplaceChange}
                                className="mr-2"
                            />
                            Fysisk
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="Hybrid"
                                checked={workplace === 'Hybrid'}
                                onChange={handleWorkplaceChange}
                                className="mr-2"
                            />
                            Hybrid
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value=" Over nett"
                                checked={workplace === ' Over nett'}
                                onChange={handleWorkplaceChange}
                                className="mr-2"
                            />
                            Over nett
                        </label>
                    </div>
                </div>

                <div>
                    <h3>Arbeidsmengde per uke</h3>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value=""
                                checked={workload === ''}
                                onChange={handleWorkloadChange}
                                className="mr-2"
                            />
                            Alle
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="10-20 timer"
                                checked={workload === '10-20 timer'}
                                onChange={handleWorkloadChange}
                                className="mr-2"
                            />
                            10-20 timer
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="20-40 timer"
                                checked={workload === '20-40 timer'}
                                onChange={handleWorkloadChange}
                                className="mr-2"
                            />
                            20-40 timer
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="40-60 timer"
                                checked={workload === '40-60 timer'}
                                onChange={handleWorkloadChange}
                                className="mr-2"
                            />
                            40-60 timer
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap">
                {users &&
                    users.filter(user => {
                        if (subject.length && user.emne !== subject) return false;
                        if (ambition.length && user.ambisjoner !== ambition) return false;
                        if (workplace.length && user.arbeidsSted !== workplace) return false;
                        if (workload.length && user.arbeidsMengde !== workload) return false;

                        return true;
                    }).map((user) => (
                        <div
                            className="card bg-white flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl w-128 m-4 "
                            key={user.id}>
                            <img
                                className="object-cover rounded-full h-36 w-36 mx-auto m-1 p-1 border-4 border-violet-400"
                                src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="Human Picture by Ike louie Natividad"
                            />
                            <div className="name text-gray-800 text-xl font-medium mt-4">
                                {user.firstName}
                            </div>
                            <div className="name text-gray-800 text-xl font-medium">
                                {user.lastName}
                            </div>
                            <div className="mt-2 text-sky-800">
                                {user.email}
                            </div>
                            <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">
                                Emne:
                            </div>
                            <div>{user.emne}</div>
                            <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">
                                Ambisjoner:
                            </div>
                            <div>{user.ambisjoner}</div>
                            <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">
                                Arbeidssted:
                            </div>
                            <div>{user.arbeidsSted}</div>
                            <div className="mt-2 items-center font-medium mt-4 font-semibold font-weight: 600">
                                Arbeidsmengde:
                            </div>
                            <div>{user.arbeidsMengde}</div>
                            <div className="bg-violet-400 text-white px-20 mt-4 pt-4 pb-2 flex flex-row justify-center rounded-2xl">
                                <div className="flex flex-row mx-1 hover:cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="currentColor"
                                        className="mx-2 bi bi-facebook"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </div>
                                <div className="flex flex-row mx-1 hover:cursor-pointer ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        fill="currentColor"
                                        className="bi bi-discord"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
