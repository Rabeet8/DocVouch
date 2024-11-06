import React from "react";

const ProofOfExistenceText = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {" "}
      {/* Flex container for centering */}
      <div className="max-w-6xl mx-auto p-8 overflow-hidden">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 font-serif">
          What is Proof-of-
          <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Existence
          </span>
          {" (PoE)?"}
        </h1>
        <div className="relative">
          {/* Large opening quote */}
          <div className="absolute -left-12 -top-8 text-8xl font-serif leading-none bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            " {/* Ensuring only one opening quote */}
          </div>

          <div className="text-2xl md:text-3xl font-serif font-bold leading-relaxed px-8 pt-8 text-black">
            {/* Adjusted padding */}
            <p className="mb-8">
              Proof of Existence will help to prove that a certain
              document/file/media was created on a particular date and time.
              Imagine you have invented a new technology, for example something
              like the Blockchain. You have all of the working materials and
              resources in a single PDF and this invention has a perspective to
              make you a Nobel laureate or at least a rich person. However, you
              are scared to share your invention with other people or companies
              as you feel that they may steal it and claim their rights for the
              invention.
            </p>
            <p className="mb-8">
              In this case, you would need to patent an idea, deal with loads of
              paperwork and delayed processes. Providing that you are not
              familiar with the procedure, it would also take plenty of time to
              understand how the whole mechanism works.
            </p>
            <p>
              That's where Proof-of-Existence comes into the game. You can get
              the ownership of your invention/idea/prediction and prove it
              everywhere, independent from your location.
            </p>
          </div>

          {/* Large closing quote */}
          <div className="absolute -right-12 -bottom-8 text-8xl font-serif leading-none bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            " {/* Ensuring only one closing quote */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProofOfExistenceText;
