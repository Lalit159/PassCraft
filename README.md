# What is this ?

Generate a random-password with some customisations

# Installation

`npm i passcraft --save`

Then ...

```
import {passcraft} from 'passcraft';

const randomPass = passcraft(length=10, includeUppercase = true, includeLowercase = true, includeNUmbers = true, includeSymbols = false) 

```
- Note: These values are default values when nothing is passed