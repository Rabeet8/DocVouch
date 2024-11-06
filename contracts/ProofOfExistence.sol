// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProofOfExistence {
    struct Document {
        bytes32 hash;
        uint256 timestamp;
        address owner;
    }

    mapping(bytes32 => Document) public documents;
    bytes32[] public documentHashes; // Array to store all notarized document hashes

    event DocumentNotarized(
        bytes32 indexed hash,
        uint256 timestamp,
        address indexed owner
    );

    function notarizeDocument(bytes32 documentHash) public {
        require(
            documents[documentHash].timestamp == 0,
            "Document already exists"
        );

        // Create the document
        documents[documentHash] = Document({
            hash: documentHash,
            timestamp: block.timestamp,
            owner: msg.sender
        });

        // Add the hash to the array of document hashes
        documentHashes.push(documentHash);

        // Emit the event
        emit DocumentNotarized(documentHash, block.timestamp, msg.sender);
    }

    function verifyDocument(
        bytes32 documentHash
    ) public view returns (uint256, address) {
        Document memory doc = documents[documentHash];
        require(doc.timestamp != 0, "Document does not exist");
        return (doc.timestamp, doc.owner);
    }

    function getAllNotarizedDocuments() public view returns (bytes32[] memory) {
        return documentHashes;
    }
}
