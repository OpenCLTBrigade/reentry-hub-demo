import React from 'react';
import { Typography, Link} from '@material-ui/core';

/**
 * Checks if a choice is in values.
 * @param {object} values The current form values.
 * @param {string} choice The value to check for.
 * @returns {boolean}
 */
export function checked(values, choice) {
  if (values === undefined) {
    return false;
  }
  else if (values.includes(choice)) {
    return true;
  }
  else {
    return false;
  }
}


/**
 * Parses a string for markdown-like links and replaces them with Material UI Link components.
 * @param {string} string The string to parse for links.
 * @returns {component} A typography component with embedded links.
 */
export function checkForLinks(string) {
  return (
    <Typography>
      {(() => {
        let stringMatch = string.split(/(?=\[.*\]\(.*\))/g);
        
        stringMatch = stringMatch.map((chunk) => {
          if (chunk[0] !== '[') {
            return chunk;
          }

          let url = chunk.match(/\(.*\)/g)[0].slice(1, -1);
          let label = chunk.match(/\[.*\]/g)[0].slice(1, -1);
          
          return <Link key={label} target='_blank' href={url}>{label}</Link>
        })

        return stringMatch;
      })()}
    </Typography>
  )
}

/**
 * Formats all keys in an object to a query string.
 * @param {object} params An object of parameters
 * @returns {string} A formatted query string
 */
export function encodeQueryString(params) {
  let queryString = '?'
  const arr = [];

  for (let key in params) {
    arr.push(`${key}=${params[key]}`)
  }

  queryString += arr.join('&')

  return queryString;
}

/**
 * Transforms a query string into an object
 * @param {string} queryString A properly formatted query string
 * @returns {object} An object containing all keys and values from the input string
 */
export function decodeQueryString(queryString) {
  let arr = queryString.slice(1).split('&');
  const returnedObject = {};

  arr.forEach(string => {
    let parts = string.split('=')
    if (string !== '') {
      returnedObject[parts[0]] = parts[1].trim()
    }
  });

  return returnedObject;
}