import React from "react";
import appwriteService from "../../appwrite/config";

export default function Sent({ $id, msg, attachmentId }) {
    const deleteMsg = () => {
        appwriteService.deleteMsg($id);
        if (attachmentId) appwriteService.deleteFile(attachmentId);
    };

    return (
        <div className="flex relative mb-2">
            <div className="block ml-auto text-right">
                <div className="inline-block py-2 px-4 bg-blue-600 text-white rounded-lg">
                    {attachmentId && (
                        <a
                            href={appwriteService.getFilePreview(attachmentId)}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            <img
                                className="max-w-sm"
                                src={appwriteService.getFilePreview(attachmentId)}
                                alt="attachment"
                            />
                        </a>
                    )}
                    <span className="inline-block">{msg}</span>
                </div>
                <br />
                <span
                    className="text-[12px] inline-block pr-1 hover:underline text-blue-700 cursor-pointer"
                    onClick={deleteMsg}
                >
                    delete
                </span>
            </div>
        </div>
    );
}
