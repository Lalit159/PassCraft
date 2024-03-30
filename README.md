# What is this ?

Generate a random-password with some customisations

# Installation

`npm i passcraft --save`

Then ...

```
import {passcraft} from 'passcraft';

const randomPass = passcraft(length, includeUppercase, includeLowercase, includeNUmbers, includeSymbols) 

```
- <b>Note</b>: When nothing is passed, the default values passed are length=10, includeUppercase = true, includeLowercase = true, includeNUmbers = true and includeSymbols = false
