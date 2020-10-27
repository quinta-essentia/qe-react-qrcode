import {
  buildQuery,
} from './queryBuilder';

describe('Query builder', () => {
  test('buildQuery', () => {
    expect(buildQuery({
      opertationMethod: 'query',
      operationName: 'someOperationname',
      variables: [{ key: 'id', value: 1, type: 'ID!' }],
      resolvers: [
        {
          resolverName: 'getSomething',
          resolverVariables: [{ key: 'id', value: 1, type: 'ID!' }],
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
        },
        {
          resolverName: 'getSomethingElse',
          resolverVariables: [{ key: 'id', value: 1, type: 'ID!' }],
          fields: [
            'id',
            'name',
            {
              asddd: [
                'name',
                'id',
                {
                  asdasdasasdasd:
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
    }))
      .toEqual(
   `query SomeOperationname($id: ID!) {
    getSomething(id: $id) {  
      id
      name
      items: {
      name
      id
      subitems: {
      name
      id
      }
      }
    getSomethingElse(id: $id) {  
      id
      name
      asddd: {
      name
      id
      asdasdasasdasd: {
      name
      id
      }
      }
    }
  }`);
  });
});
