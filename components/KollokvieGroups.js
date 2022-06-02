import { useState } from 'react';

export default function KollokvieGroup() {
    const [groups] = useState([
        {
            id: 1,
            groupName: 'Interaksjons gjengen',
            studyName: 'Interaksjonsdesign',
            beskrivelse:
                'Vi er en gruppe på tre personer som studerer interaksjonsdesign. Vi møtes en dag i uka.',
            ambisjoner: 'A',
            arbeidsSted: 'Hybrid',
            arbeidsMengde: '40-60 timer'
        },
        {
            id: 2,
            groupName: 'Frontend kollokvie 1',
            studyName: 'Frontend og mobilutvikling',
            beskrivelse:
                'Vi er en gruppe på tre personer som studerer Frontend og mobilutvikling. Vi møtes tre dager i uka.',
            ambisjoner: 'A-C',
            arbeidsSted: 'Fysisk',
            arbeidsMengde: '20-40 timer'
        },
        {
            id: 3,
            groupName: 'Programmering gruppe 3',
            studyName: 'Programmering',
            beskrivelse:
                'Vi er en gruppe på tre personer som studerer programmering. Vi møtes når det passer i uka.',
            ambisjoner: 'Bestått til D',
            arbeidsSted: 'Over Nett',
            arbeidsMengde: '10-20 timer'
        },
        {
            id: 4,
            groupName: 'Lærer kollokvie 1',
            studyName: 'Lærerutdanning 1.-7.',
            beskrivelse:
                'Vi er en gruppe på tre personer som studerer lærerutdanning. Vi møtes en dag i uka.',
            ambisjoner: 'Bestått til D',
            arbeidsSted: 'Hybrid',
            arbeidsMengde: '20-40 timer'
        },
        {
            id: 5,
            groupName: 'Programmering gruppe 1',
            studyName: 'Programmering',
            beskrivelse:
                'Vi er en gruppe på tre personer som studerer programmering. Vi møtes når det passer i løpet av en uke.',
            ambisjoner: 'A-C',
            arbeidsSted: 'Fysisk',
            arbeidsMengde: '10-20 timer'
        },
        {
            id: 6,
            groupName: 'Frontend Kollokvie 2',
            studyName: 'Frontend og mobilutvikling',
            beskrivelse:
                'Vi er en gruppe på fire personer som studerer Frontend og mobilutvikling. Vi møtes to dager i uka.',
            ambisjoner: 'A-C',
            arbeidsSted: 'Hybrid',
            arbeidsMengde: '20-40 timer'
        },
        {
            id: 7,
            groupName: 'Interaksjonsdesign Kollokvie 2',
            studyName: 'Interaksjonsdesign',
            beskrivelse:
                'Vi er en gruppe på fem personer som studerer interaksjonsdesign. Vi møtes flere dager i uka.',
            ambisjoner: 'Bestått til D',
            arbeidsSted: 'Fysisk',
            arbeidsMengde: '40-60 timer'
        },
        {
            id: 8,
            groupName: 'Programmering gruppe 4',
            studyName: 'Programmering',
            beskrivelse:
                'Vi er en gruppe på to personer som studerer programmering. Vi møtes ofte i løpet av uka og forventer mye arbeid.',
            ambisjoner: 'A',
            arbeidsSted: 'Hybrid',
            arbeidsMengde: '40-60 timer'
        },
        {
            id: 9,
            groupName: 'Lærer kollokvie 2',
            studyName: 'Lærerutdanning 1.-7.',
            beskrivelse:
                'Vi er en gruppe på fem personer som studerer lærerutdanning. Vi møtes to dager i uka.',
            ambisjoner: 'A-C',
            arbeidsSted: 'Fysik',
            arbeidsMengde: '40-60 timer'
        },
        {
            id: 10,
            groupName: 'Interaksjonsdesign Kollokvie 3',
            studyName: 'Interaksjonsdesign',
            beskrivelse:
                'Vi er en gruppe på fire personer som studerer interaksjonsdesign. Vi møtes en dag i uka.',
            ambisjoner: 'A-C',
            arbeidsSted: 'Over Nett',
            arbeidsMengde: '40-60 timer'
        }
    ]);

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
                {groups &&
                    groups
                        .filter((group) => {
                            if (
                                ambition.length &&
                                group.ambisjoner !== ambition
                            )
                                return false;
                            if (
                                workplace.length &&
                                group.arbeidsSted !== workplace
                            )
                                return false;
                            if (
                                workload.length &&
                                group.arbeidsMengde !== workload
                            )
                                return false;

                            return true;
                        })
                        .map((user) => (
                            <div className="flex flex-row flex-wrap">
                                <div
                                    className="card bg-white flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl w-64 m-4"
                                    key={user.id}
                                >
                                    <div className="name text-gray-800 text-xl font-medium mt-4">
                                        {user.groupName}
                                    </div>
                                    <div className="name text-gray-800 text-xl font-medium">
                                        {user.studyName}
                                    </div>

                                    <div className="mt-2 items-center font-medium mt-4">
                                        Beskrivelse:
                                    </div>
                                    <div>{user.beskrivelse}</div>
                                    <div className="mt-2 items-center font-medium mt-4">
                                        Ambisjoner:
                                    </div>
                                    <div>{user.ambisjoner}</div>
                                    <div className="mt-2 items-center font-medium mt-4">
                                        Arbeidssted:
                                    </div>
                                    <div>{user.arbeidsSted}</div>
                                    <div className="mt-2 items-center font-medium mt-4">
                                        Arbeidsmengde:
                                    </div>
                                    <div>{user.arbeidsMengde}</div>
                                </div>
                            </div>
                        ))}
            </div>
        </>
    );
}
