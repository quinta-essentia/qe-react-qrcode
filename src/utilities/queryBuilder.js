import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import isObject from 'lodash/isObject';
import keys from 'lodash/keys';
import upperFirst from 'lodash/upperFirst';
import isArray from 'lodash/isArray';
import gql from 'graphql-tag';

/**
 *
 * @param {string} operationName operation name camelcase no dashes allowed
 * @param {array} resolvers array of resolver objects { resolverName: string, resolverVariables: array, fields: array }
 * @param {enum} opertationMethod query / mutation / subscription
 * @param {array} variables variables to be passed to a query
 * @description isRequired fields in query are described with '!' so when you pass varibale which is required make sure that include ! as well (type: 'ID!')
 * @example
 * buildQuery({
     opertationMethod: 'query',
     operationName: 'someOperationname',
     variables: [{ key: 'id', value: 1, type: 'ID!'}],
     resolvers: [
      {
        resolverName: 'getSomething',
        resolverVariables: [{ key: 'id', value: 1, type: 'ID!'}],
        fields: [
            'id',
            'name',
            {
                items: [
                    'name',
                    'id',
                    {
                        subitems:
                        [
                            'name',
                            'id'
                        ]
                    }
                ]
            }
        ]
      }
    ]
   })
 */
const buildQuery = ({ resolvers, variables, opertationMethod, operationName }) => {
  console.log(`${opertationMethod} ${upperFirst(operationName)}${operationTypeVariablesAdapter(variables, true)} {${buildResolvers(resolvers)}
    }`
  );
  const buildedQuery = gql`${opertationMethod} ${upperFirst(operationName)}${operationTypeVariablesAdapter(variables, true)} {${buildResolvers(resolvers)}
  }`;
  console.log(buildedQuery);
  return buildedQuery;
};

function formatFields (fields) {
  let fieldsAdapter = '';
  for (let i = 0; i < fields.length; i++) {
    if (isObject(fields[i])) {
      fieldsAdapter += `
      ${keys(fields[i])[0]} {${formatFields(fields[i][keys(fields[i])[0]])}
      }`;
    } else {
      fieldsAdapter += `
      ${fields[i]}`;
    }
  }
  return fieldsAdapter;
}

function buildResolvers (resolvers) {
  let str = '';
  forEach(resolvers, ({ resolverName, resolverVariables, fields }) => {
    str += `
    ${resolverName}${operationTypeVariablesAdapter(resolverVariables)} {  ${formatFields(fields)}
    }`;
  });
  return str;
}

function operationTypeVariablesAdapter (variables, isMethod) {
  if (isEmpty(variables)) return '';
  let methodString = '(';
  let variablesString = '(';
  if (isArray(variables)) {
    forEach(variables, ({ key, value, type }) => {
      methodString = enhancedConcat(methodString, { key, type });
      variablesString = enhancedVariablesConcat(variablesString, { key });
    });
  } else {
    variablesString += `${variables.key}: {${variables[variables.key]}}`;
  }
  return isMethod ? `${methodString})` : `${variablesString})`;
}

function enhancedConcat (string, { key, type }) {
  if (isEmpty(string)) return `$${key}: ${type}`;
  return `${string}, $${key}: ${type}`;
}

function enhancedVariablesConcat (string, { key }) {
  if (isEmpty(string)) return `${key}: $${key}`;
  return `${string}, ${key}: $${key}`;
}

export {
  buildQuery,
};
