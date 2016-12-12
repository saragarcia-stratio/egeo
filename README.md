# Egeo

EGEO is the open-source component library and branding guide used to build Stratio's UI. The purpose is to optimize the UI development time by providing consistent UI components.

Here, you'll find UI components and visual styles. Sometimes it makes sense to break the rules. The purpose of this document is to guide you, no to provide solutions for complex and unique design problems.

# This Repo

This repo includes the common module of angular 2 components, directives and services. There are two more repos that work with this:

* [https://github.com/Stratio/egeo-ui-base](egeo-ui-base) that includes Sass utilities and CSS base rules to begin build your own Egeo components.
* [https://github.com/Stratio/egeo-ui-fonts](egeo-ui-fonts) that includes the fonts used by the Egeo framework compiled in a specific CSS files to be included in your projects.

# How to Run

You can use Npm or Yarn to work with Egeo. If you want to use Yarn, it has to be installed first as a global dependency in your local machine.

```
sudo npm i -g yarn
```

Once Yarn is installed or Npm is ready, you can install Egeo using:

```
yarn
```

or

```
npm install
```

Finally, launch the project using

```
yarn start
```

or

```
npm run start
```

On finish, you will have a documentation website working on [http://localhost:8080](http://localhost:8080).
