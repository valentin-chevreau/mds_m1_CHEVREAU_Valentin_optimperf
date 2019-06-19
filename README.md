# AtlasMongodb cluster & API REST

## Architecture of the project

![The architecture](https://user-images.githubusercontent.com/32523957/59745654-90d1ac80-9275-11e9-87e9-c71452a0f21b.png)

## Mongodb

Create your cluster

To create your cluster, go to **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** and sign in with the `Start free` button.

Inquire your account datas and continue.

Then: 
1. Click on **Build a new cluster**
2. Select the **global configurations** (Plateform, Location, Cluster Tier and give it a cluster name...)

Here, I called my cluster `mdsOptimPerf`

3. Click on **Create cluster**


## Installation

1. Dépendencies

Use the `npm install -S` command to get them. 

This command install all dependencies needed in the project, which are presents in the `package.json` file.

2. Inquire your *Cluster URL* in `db.js` file in `config` directory or comment and uncomment the right configuration.

## Run

To run the app `npm run start`
