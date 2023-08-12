import React, { useRef, useState } from "react";
import appwriteService from "../../appwrite/config";
import { useSelector } from "react-redux";

export default function ChatForm() {
    const [msg, setMsg] = useState("");
    const [file, setFile] = useState(null);

    const userData = useSelector((state) => state.auth.userData);

    const ref = useRef();

    const send = async (e) => {
        e.preventDefault();

        if (!userData || (!msg && !file)) return;

        let attachmentId;

        if (file) {
            const uploadedFile = await appwriteService.uploadFile(file);
            if (uploadedFile) attachmentId = uploadedFile.$id;
        }

        const status = await appwriteService.sendMsg({ senderId: userData.$id, msg, attachmentId });

        if (status) {
            setMsg("");
            setFile(null);
            ref.current.value = "";
        }
    };

    return (
        <div className="w-full">
            <form className="flex content-center" onSubmit={send}>
                <input
                    className="w-full py-2 px-4 outline-none bg-transparent border mr-2"
                    placeholder="Send Msg..."
                    value={msg}
                    onChange={(e) => setMsg(e.currentTarget.value)}
                />
                <input
                    ref={ref}
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="hidden"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                />
                <button
                    type="button"
                    className="bg-gray-200 mr-2 py-0.5 px-4 text-sm"
                    onClick={() => ref.current.click()}
                >
                    {file ? file.name : "+"}
                </button>
                <button className="shrink-0 bg-blue-600 text-white py-0.5 px-2 text-sm">Send</button>
            </form>
        </div>
    );
}
