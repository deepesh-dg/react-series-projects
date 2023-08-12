import React from "react";
import { useSelector } from "react-redux";
import { Container } from "..";
import ChatForm from "./ChatForm";
import Sent from "./Sent";
import Received from "./Received";

export default function Chats() {
    const chats = useSelector((state) => state.chat);
    const userData = useSelector((state) => state.auth.userData);

    if (!userData) return <></>;

    return (
        <div className="py-8">
            <Container>
                <div className="border rounded-lg p-4 bg-orange-50">
                    <div className="block mb-8">
                        {chats.map((chat) => {
                            if (chat.senderId === userData.$id) {
                                return <Sent {...chat} key={chat.$id} />;
                            }

                            return <Received {...chat} key={chat.$id} />;
                        })}
                    </div>

                    <div className="fixed inset-x-0 bottom-0 bg-white">
                        <Container>
                            <ChatForm />
                        </Container>
                    </div>
                </div>
            </Container>
        </div>
    );
}
