import { io } from "socket.io-client";

export const socket = io(`${import.meta.env.VITE_SOCKET_URL}/notifications`, {
  transports: ["websocket"],
  autoConnect: false,
  reconnection: true,
  reconnectionDelay: 1000,
});
