/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchedulePattern = /* GraphQL */ `
  mutation CreateSchedulePattern(
    $input: CreateSchedulePatternInput!
    $condition: ModelSchedulePatternConditionInput
  ) {
    createSchedulePattern(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateSchedulePattern = /* GraphQL */ `
  mutation UpdateSchedulePattern(
    $input: UpdateSchedulePatternInput!
    $condition: ModelSchedulePatternConditionInput
  ) {
    updateSchedulePattern(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteSchedulePattern = /* GraphQL */ `
  mutation DeleteSchedulePattern(
    $input: DeleteSchedulePatternInput!
    $condition: ModelSchedulePatternConditionInput
  ) {
    deleteSchedulePattern(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
