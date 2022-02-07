export function Herolist() {
    const heroes = [
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' },
    ];

    const allHeroes = heroes.map((item) => {
        return (
            <li>
                <span>{item.id}</span>
                <span>{item.name}</span>
            </li>
        );
    });

    return (
        <>
            <h2>Heroes List</h2>
            <nav>
                <ul>
                    <li>{allHeroes}</li>
                </ul>
            </nav>
        </>
    );
}
