import type { CSSProperties } from "react";

const firstName = 'Martin';
const lastName = 'Marmolejo';

const favoriteGame = ['GTA 5', 'Spider-Man', 'Mario Party'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'Mexico',
}

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
}

export function MyAwsomeApp() {
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGame.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p style={myStyles}>
                {JSON.stringify(address)}
            </p>
        </>
    )
}