import React from "react";
import appwriteService from "../../appwrite/config";

export default function Received({ msg, senderId, attachmentId }) {
    return (
        <div className="block relative mb-2">
            <span className="inline-block py-2 px-4 bg-gray-200 rounded-lg">
                <span className="text-blue-600">@{senderId}</span>
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
                <span className="block">{msg}</span>
            </span>
        </div>
    );
}
