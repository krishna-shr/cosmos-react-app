## Folder Structure of a Component

```
container
    └──config
        └──webpack
            ├──webpack.config.js
            └──webpack.config.prod.js
    └──libs/crystal
          └──src
              └──lib
                  └──molecules
                        └──Button                   (component name)
                            ├──index.ts             (top level exports/re-exports)
                            ├──Button.tsx           (Button implementation)
                            ├──Button.stories.tsx   (Button components for stories)
                            ├──Button.config.ts     (Config override for MUI Button globally)
                            ├──Button.styled.tsx    (Providing styles for component through styled components)
                            ├──ButtonProps.d.ts     (Providing typings for props and elements used in component)
                            ├──Button.spec.tsx      (Test cases for the component)
```
