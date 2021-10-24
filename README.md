
# We'll find the types from styled-components using @types/styled-components
npm i styled-component @types/styled-components


# We'll find the types from react-router-dom using @types/react-router-dom
npm i history react-router-dom@next @types/react-router-dom


# Started application by deleting all files in src except
# index.tsx and react-app-env.d.ts

 
# From this : https://github.com/weibenfalk/react-rmdb-v3-starter-files
# Navigate to Finished App
# Navigate to react-rmdb-finished-hooks
# Copy .env file into project 
# Then Navigate to src
# Copy all files and folders except index index.js

# In /SearchBar/index
<!-- 
type Props = {
 setSearchTerm: React.Dispatch<React.SetStateAction<string>>
} -->
# Note : React.Dispatch<React.SetStateAction<string>> is a type for State setter function..  setSearchTerm uses string.. other state can use bool if needed
# Note 2: we got type of setSearchTerm from Home.tsx.. When you hover mouse over setSearchTerm you'll see the type of it.. copy it and use it in /SearchBar/index
