import React, { createContext, useContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

const socketURL = "https://wazzup-server.herokuapp.com/"
const SocketContext = createContext()

export const useSocket = () => {
    return useContext(SocketContext)
}

export const SocketProvider = ({ id, children }) => {
    // STATE
    const [socket, setSocket] = useState()

    // LIFECYCLE
    useEffect(() => {
        const newSocket = io(socketURL, { query: {id} })
        setSocket(newSocket)

        return () => newSocket.close()
    }, [id])

    // RENDER
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
