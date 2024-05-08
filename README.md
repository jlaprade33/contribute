# Leather Contribution Feature by Jeff LaPrade

To get this project up and running, just follow the simple steps below

### `npm install` (if you haven't already)
### `npm start`

## Make sure you have the Leather Browser extension downloaded or this app will not function properly.

#### Instructions to use this app:
- Click the `Contribute` Button and icon on the right side of the screen
- Select a `Contribution Amount` by clicking the arrows in the input box or typing in a value
- Click on a Charity option
- Follow the directions from the Leather Wallet Popup

## Assumptions I made during development

#### Follow styling elements of the Leather Wallet
-While I did not follow everything exactly (mostly due to time), I tried to make the look and feel be similar to the Leather Wallet. The Leather header at the top is a svg in the Original Leather Wallet, so I could not find the exact font

#### I used the same address key for every charity 
- I did this because it is test data, and I was unsure of what valid test addresses would be


## How I built this app

#### I created a TypeScript React app using tailwindcss for styling
- I figured that using tailwindcss would allow me to show that I can create components from scratch
- I created a `components` folder and `features` folder to organize the repo and make it easy to follow

#### API Connection
- I used the `sendTransfer` API call here, inputting the user designated contribution amount as well as the specific items address (although the address for each item is the same)

#### I created simple icons in Figma
- Leather by Jeff 
- Contribute icons in Figma

#### Time breakdown - 4 hours
- 30 minutes: planning and exploring the Leather app
- 1 hour: setting up the intial app and base components
- 1.5 hours: implementing charity cards, clicks, error handling, and final styles


## If I had more time...
- I would add more charities, and consider making the click on each card an expansion of the charity type. This way, I could include an explanation of the charity type
- I would create a more complex UX for selecting the contribution amount and allow for distinguishing between Bitcoin or STX
- I would add in the elements in the original Leather Wallet, for example the toggle showing Bitcoin and STX funds as well as the other icon options (Send, receive, buy, swap)
- I would clean up the fonts and make it match the Leather Wallet, as well as the Leather by Jeff on the top
- I would make the charity cards look nicer potentially with shadows, and improve the responsiveness

#### Check it out live in this review app hosted in AWS Amplify:
- https://main.da57jkzcp5mxj.amplifyapp.com/ 