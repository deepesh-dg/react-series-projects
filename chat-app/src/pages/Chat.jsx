import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import appwriteService from "../appwrite/config";
import { setMsg, addMsg, editMsg, deleteMsg } from "../store/chatSlice";
import { Chats } from "../components";

export default function Chat() {
    const dispatch = useDispatch();

    useEffect(() => {
        appwriteService.getMsgs().then((msgs) => {
            if (msgs) {
                dispatch(setMsg(msgs.documents));
            }
        });

        // Subscribe WebSocket
        const unsubscribe = appwriteService.subscribeMsgs((res) => {
            const status = {
                create: "databases.*.collections.*.documents.*.create",
                update: "databases.*.collections.*.documents.*.update",
                delete: "databases.*.collections.*.documents.*.delete",
            };

            if (res.events.includes(status.create)) {
                dispatch(addMsg(res.payload));
            } else if (res.events.includes(status.update)) {
                dispatch(editMsg(res.payload));
            } else if (res.events.includes(status.delete)) {
                dispatch(deleteMsg(res.payload.$id));
            }
        });

        if (unsubscribe) return unsubscribe;
    }, [dispatch]);

    return <Chats />;
}
