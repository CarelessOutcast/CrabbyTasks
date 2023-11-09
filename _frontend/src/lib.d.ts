/*************************************************************************
 * File: lib.d.ts
 *
 * Logic: This file contains a TypeScript declaration module for SVG files,
 * allowing them to be imported and used in the application.
 *
 * Type: Declaration Module
*************************************************************************/

declare module '*.svg' { 
  const content: any; 
  export default content;
}
