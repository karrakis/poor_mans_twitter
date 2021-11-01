# To build and serve:

## 1. In vue_root
```
yarn build
```

## 2. In project root (where manage.py is)
 ```
 python3 manage.py collectstatic
 python3 manage.py runserver
 ```

# Several decisions have been made which might benefit from explaining:

1. While it is possible to import Vue using a CDN link this does not appear to permit use of single file components.  Single file components are half the fun of Vue, and this was written on a weekend, so fun was mandatory.

  1b. This unfortunately murdered my plan to put this up on Heroku, because I couldn't figure out how to get Heroku to build and serve the "nested" application in the intended way (barring something silly like commiting static files to the git repo).

2. I lazily installed javascript tests in the vue folder and did no configuration work to pull the commands for test running out to the project root level, so the command to run js tests from project root is ./node_modules/.bin/jest and this command can only be run from within the vue_root folder - I realize this is annoying, it just wasn't annoying enough to fix.

3. All JS test files are neighbors with the components they test.  I dislike having tests isolated in their own folder for a number of reasons, but the primary one is that it makes it easier to forget to write them.

4. While the tweet textarea will not permit submit above 50 characters, it will also neglect to tell you why it isn't working, because I forgot error handling.  Alas, I'm out of weekend, but I wanted to assure you that I face-palmed over it just as hard as you will.
