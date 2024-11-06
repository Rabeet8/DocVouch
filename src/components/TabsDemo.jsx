"use client";

import { Tabs } from "./Tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Proof Of Integrity",
      value: "Proof Of Integrity",
      content: (
        <div className="w-full overflow-hidden relative h-70% rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>
            The system doesn’t store the document itself but a hash of it. This
            hash is a cryptographic representation that changes with any
            modification to the document, allowing verification of its
            integrity.
          </p>
        </div>
      ),
    },
    {
      title: "Transparency and Trust",
      value: "Transparency and Trust",
      content: (
        <div className="w-full overflow-hidden relative h-70% rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>
            Blockchain records are visible and accessible to all users, allowing
            for public verification of document timestamps without relying on a
            central authority. This increases transparency and builds trust
            among users.
          </p>
        </div>
      ),
    },
    {
      title: "Immutability",
      value: "Immutability",
      content: (
        <div className="w-full overflow-hidden relative h-70% rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>
            Since blockchains are inherently tamper-resistant, once a document's
            hash is stored on the blockchain, it cannot be altered or deleted.
            This ensures a permanent and trustworthy record of the document's
            existence.
          </p>
        </div>
      ),
    },
    {
      title: "Privacy",
      value: "Privacy",
      content: (
        <div className="w-full overflow-hidden relative h-70% rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-blue-900">
          <p>
            Only the hash of the document is stored on the blockchain, not the
            document itself. This prevents sensitive information from being
            publicly accessible while still allowing verifiable proof of
            existence.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
