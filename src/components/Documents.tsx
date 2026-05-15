import { useState } from "react";
import {
    FaIdCard,
    FaFileAlt,
    FaFileContract,
    FaUniversity,
    FaEye,
} from "react-icons/fa";

export default function Documents() {
    const [selectedDoc, setSelectedDoc] = useState(null);

    const documentsData = [
        {
            title: "Original Degree (OD)",
            type: "Academic Certificate",
            status: "Available",
            date: "Issued",
            icon: <FaUniversity />,
            file: "/docs/od.pdf",
        },
        {
            title: "12th Marksheet",
            type: "Intermediate (MPC)",
            status: "Available",
            date: "2020",
            icon: <FaFileAlt />,
            file: "/docs/12th.pdf",
        },
        {
            title: "10th Marksheet",
            type: "SSC Certificate",
            status: "Available",
            date: "2018",
            icon: <FaFileAlt />,
            file: "/docs/10th.pdf",
        },
        {
            title: "Resume",
            type: "Professional CV",
            status: "Updated",
            date: "Latest",
            icon: <FaFileContract />,
            file: "/docs/resume.pdf",
        },
        {
            title: "Aadhaar Card",
            type: "Identity Proof",
            status: "Available",
            date: "Verified",
            icon: <FaIdCard />,
            file: "/docs/aadhaar.jpg",
        },
        {
            title: "PAN Card",
            type: "Tax Document",
            status: "Available",
            date: "Verified",
            icon: <FaIdCard />,
            file: "/docs/pan.png",
        },
    ];

    return (
        <section
            className="py-24 bg-gradient-to-b from-gray-50 to-white"
            style={{ fontFamily: "'serif', sans-serif" }}
        >
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold text-gray-900 mb-5">
                        Documents
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {documentsData.map((doc, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Header */}
                            <div className="flex items-start gap-5 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl">
                                    {doc.icon}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        {doc.title}
                                    </h3>
                                    <p className="text-gray-500 italic">{doc.type}</p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex justify-between bg-gray-50 border rounded-2xl px-5 py-4 mb-6">
                                <span className="font-semibold text-gray-600">Status</span>
                                <span className="text-green-700 font-bold">
                                    {doc.status}
                                </span>
                            </div>

                            {/* View Button */}
                            <button
                                onClick={() => setSelectedDoc(doc)}
                                className="flex items-center justify-center gap-2 px-6 py-3 mx-auto 
             w-fit border border-gray-300 text-gray-800 
             rounded-2xl hover:bg-gray-100 transition-all duration-200"
                            >
                                <FaEye />
                                View Document
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {selectedDoc && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-4xl p-4 relative">

                        {/* Close */}
                        <button
                            onClick={() => setSelectedDoc(null)}
                            className="absolute top-3 right-4 text-gray-600 text-xl"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <h2 className="text-xl font-bold mb-4">
                            {selectedDoc.title}
                        </h2>

                        {/* Document Preview */}
                        <div className="w-full h-[70vh] flex items-center justify-center">
                            {selectedDoc.file.endsWith(".pdf") ? (
                                <iframe
                                    src={selectedDoc.file}
                                    className="w-full h-full rounded-lg"
                                />
                            ) : (
                                <img
                                    src={selectedDoc.file}
                                    alt="document"
                                    className="max-h-full rounded-lg shadow"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}