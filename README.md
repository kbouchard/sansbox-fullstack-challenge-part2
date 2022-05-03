# Outlaw Fullstack Challenge

Time of the challenge: 30-60 minnutes.

** ⚠️ Before starting, please fork this sandbox**

## Part 1 : JSON / data manipulation

In this first part of the challenge you will have to process JSON data and save it into a file using a library called **jq**.

Reference: https://stedolan.github.io/jq/

1. Go to this online tool: https://jqplay.org/
2. Copy/paste the data from the `./public/db-dev-deals-200.json` file into the "JSON" field then do the following:

   1. Remove any "faulty deals" (deals without a `dealID`).
   2. Output only the following properties from the deals: `dealID, info, template, activity, variables, users`. (summarize the deals to these fields only, remove the rest)
   3. Copy the output into a file named `deals.json`.

## Part 2 : React

For the second part, we will use the data that we have processed to power an autocomplete.

1. Add the JSON file from last step in the `/public` folder.
2. Create a new page in the app call “Deals”.

   1. Add a link in the `<nav>` to access the new Deals page.
   2. Using any npm package you want, implement an autocomplete input field that will search deals from the JSON file using the deals names.
   3. Display the results in this format: `“({dealID}) : {name}”`
   4. When a deal in the result list is selected, display all its properties under the autocomplete.

And you're done! 🎉
