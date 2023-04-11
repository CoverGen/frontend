# Quick Start

-   Clone the repo

    ### `git clone`

-   Open a terminal in the cloned directory and install the dependencies with Yarn

    ### `yarn`

-   Once the installation is done run the server using vite:
    ### `npm run dev`

# Pre-commit hook configuration

If the pre-commit hook isn't working in the first try, follow these steps to fixing it:

-   Delete the pre-commit file in .husky/ folder
-   Run the following command in the terminal to create the new pre-commit file:

    ### `yarn husky add .husky/precommit`

-   Once the file is created, open it and replace the line "undefined" with "npm run precommit"
-   Test the pre-commit hook making test commits
