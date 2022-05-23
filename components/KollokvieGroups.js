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

    return (
        <div>
            <div>
                <div className="flex flex-row flex-wrap">
                    {groups &&
                        groups.map((user) => (
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
                        ))}
                </div>
            </div>
        </div>
    );
}
