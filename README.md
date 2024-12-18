# Next.js 15 Unused Variable Error

This repository demonstrates an uncommon error encountered in Next.js 15 related to unused variables in functional components.  In previous versions, declaring a variable without using it within the JSX would not have caused an issue.  However, Next.js 15 appears to have stricter rules regarding this.

## Bug Description

The error occurs when a variable is declared within a functional component but is not referenced within the component's JSX.  The resulting error prevents the page from rendering correctly. 

## Solution

To fix this, either use the variable within the JSX, or remove the unused declaration entirely.  If you need to declare a variable for later use outside the JSX, it is recommended to wrap the declaration inside of a conditional or an effect.