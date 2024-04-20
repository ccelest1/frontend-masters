# 04 - 14 - 2024
- Enterprise - project large enough where codebase grows to certain upper maxima, requiring intentional architecture, testing
    * set up intentional guard rails for protection (maintain consistency and ability to manage)
- Going to migrate non-trivial JS codebase to TS
    * simple version of Slack
    * currently in js state, with missing @type packages
    * understand how to keep up to date with the evolution of TS compiler versions
    - develop an understanding of strictness
        * tsconfig, linter (eslinter) - being able to get to flexible to strict
        * modern yarn for modern packages

# 04 - 17 - 24 ( Setup + Course Project )
- need to install volta
    * `curl https://get.volta.sh | bash`
    * `source ~/.bash_profile`
    * `volta install node`
    * `node`
        - installs up to date yarn, node

- src contains db.json to be a pseudo db for testing purposes, contain all messages/content
