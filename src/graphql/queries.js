/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchedulePattern = /* GraphQL */ `
  query GetSchedulePattern($id: ID!) {
    getSchedulePattern(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listSchedulePatterns = /* GraphQL */ `
  query ListSchedulePatterns(
    $filter: ModelSchedulePatternFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchedulePatterns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
