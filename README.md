# Create An ERC721 Token.

## Task

create a contract for erc721 token that will generate nft for creator wallet,
nft include images as media resource and is compatible with opesea (to have ability sell on this marketplace).
Also owner of nft has ability change nft name (like it was in cryptokitties),
price for name change is 0.05 ETH that is be transferred to the initial wallet of the contract creator

## Quickstart

Right now this Task only works with rinkeby. Run the following.

Then you can get started with:

### Clone The Repo and migrate

```
https://github.com/dagogodboss/nftTokenTask
cd nftTokenTask
npm install
truffle migrate --reset --network rinkeby
```

This will deploy your GameAnime NFT!

### Generate a character

You can now try it out:

```bash
truffle exec scripts/fund-contract.js --network rinkeby
truffle exec scripts/generate-character.js --network rinkeby
truffle exec scripts/get-character.js --network rinkeby
```

This will create a new character with random stats!
Depending how often you deploy, you can pick which character by changing the [`dnd.getCharacterOverView(1)`](contracts/GameAnime.sol) command in `get-character.js` to swap the `0` out with whatever `tokenId` of the character you like.

# Deploy to Opensea

Once we have our NFTs created, we need to give them a `tokenURI`. TokenURIs are the standard for showing the data of NFTs to the world. This makes it easier to store things like images since we don't have to waste the gas of adding them on-chain.

The [TokenURI](https://eips.ethereum.org/EIPS/eip-721) represents a URL or other unique identifier, and it is an `.json` file with a few parameters.

```
{
    "name": "Name for it ",
    "description": "Anything you want",
    "image": "https://ipfs.io/ipfs/HASH_HERE?file.png",
    "attributes": [...]
}
```

We are going to be storing these images and meta data in IPFS. You'll need both:

1. [IPFS](https://ipfs.io/)
2. [IPFS companion](https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch?hl=en)
3. [Pinata](https://pinata.cloud/pinataupload)

IPFS is a peer to peer network for storing files. It's free and open sourced, and we can use it to host our tokenURI. The IPFS companion let's us view IPFS data natively in our browsers like Brave or Chrome. And Pinata allows us to keep our IPFS files up even when our node is down (don't worry about that for now)

Once our IPFS node is up, we can start adding files to it. We first want to upload the image of our NFT. What does this D&D character look like? Add it to your IPFS node and then "Pin" it. Once pinned, you can get the CID of the pinned file, and make sure it stays pinned by pinning it on your Pinata account. Don't worry, it's free! This will just help keep the data up even when our IPFS node is down.

Once we have the image pinned and up, we can get the link for that image. It'll look a little something like this:

`https://ipfs.io/ipfs/QmTgqnhFBMkfT9s8PHKcdXBn1f5bG3Q5hmBaR4U6hoTvb1?filename=Chainlink_Elf.png`

This is a real link, and if you click it and nothing renders, your IPFS companion might not be working, or your IPFS node is down.

Once we have our image, we can add it to our metadata `.json` file, and add our stats in there. You can see some samples in the `metadata` folder. We want to use the values of our characters that we got off-chain, so be sure to verify what the random numbers you got on etherscan! Once we have the .json metadata file, we want to add that to IPFS as well, and pin it too!

This metadata json file is going to be our `tokenURI`, so we will modify our `set-token-uri.js` with the `tokenId` of the NFT we are giving a picture to, and adding the ipfs tokenURI.

Then we just run it like:

```
truffle exec scripts/set-token-uri.js --network rinkeby
```

Now, we can get the address of our NFT and head on over to the opensea testnet marketplace to see if we did it correctly. If done correctly, it'll look [something like this](https://testnets.opensea.io/assets/GameAnime-v9).

### To Change the Name of the NFT token Minted

```
truffle exec scripts/change-name-nft.js --network rinkeby
```

this will change the name of character you created and it will cost 0.05 ETH it takes two argument `id` of NFT and the new `name`.
