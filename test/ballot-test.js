// SPDX-License-Identifier: GPL-3.0

/* Ethers.js is a JavaScript Library to interact with Ethereum */
/* Waffle is a Smart Contract Testing Library */
/* Requiring Chai which is an Assertions Library */
/* These Asserting Functions are called "Matchers", and comes from Waffle */
const { expect } = require("chai");
const { ethers } = require("hardhat");

/*
contract BallotTest {

    bytes32[] proposalNames;

    Ballot ballotToTest;
    function beforeAll () public {
        proposalNames.push(bytes32("candidate1"));
        ballotToTest = new Ballot(proposalNames);
    }

    function checkWinningProposal () public {
        ballotToTest.vote(0);
        Assert.equal(ballotToTest.winningProposal(), uint(0), "proposal at index 0 should be the winning proposal");
        Assert.equal(ballotToTest.winnerName(), bytes32("candidate1"), "candidate1 should be the winner name");
    }

    function checkWinninProposalWithReturnValue () public view returns (bool) {
        return ballotToTest.winningProposal() == 0;
    }
}
*/

/* Tests using Waffle are written with Mocha alongside with Chai */
describe("Ballot", function() {
    /* Using async Callback Function because interacting with the Ethereum Network and Smart Contracts are asynchronous Operations */
    /* The async Callback Function will returning the Values in a JavaScript Promise */
    /* This use of async will allow to await the Calls on the Smart Contract and the Hardhat Network node */
    it("Should give Right to Vote", async function() {
        const names = ["Michael", "Marie"];
        /* getContractFactory() is an Abstraction used to deploy new Smart Contracts */
        /* So Ballot is a Factory for Instances of the Smart Contract Ballot.sol */
        const Ballot = await ethers.getContractFactory("Ballot");
        /* Calling deploy() on a ContractFactory will start the Deployment, and return a Promise that resolves to a Smart Contract */
        /* The Object ballot has a Method for each Function of the Smart Contract Ballot.sol */
        const ballot = await Ballot.deploy(names);
        const addressVoter = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";

        /* Once the Contract is deployed, it is possible to call the Methods of the Smart Contract and use them to get the state of the Smart Contract */
        await ballot.deployed();
        /* Using Smart Contract Instance to call a Smart Contract Function in Solidity Code */
        //await ballot.giveRightToVote(addressVoter);
        //expect(await ballot.chairperson).to.equal(addressVoter);
        expect(ballot.address).to.equal(addressVoter);
    });



    /* To send a Transaction from an Account other than the default one */
    /*A Signer in Ethers.js is an object that represents an Ethereum account */
    /* It is used to send transactions to contracts and other accounts. */

    it("Should ..", async function() {
        /*getting a list of the first and second account in the node that the smart Contract runs */
        const [owner, addr1] = await ethers.getSigners();
        /* To execute a Contract Method from another Account */
        // await greeter.connect(addr1).setGreeting("Hallo, Erde!");
    });


});

