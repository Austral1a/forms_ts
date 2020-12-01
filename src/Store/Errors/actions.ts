import { FSAAuto } from "flux-standard-action";
import { ErrorOccurredActionPayload } from "./interfaces";

export const ERROR_OCCURRED: string = "ERROR_OCCURRED";

export type ErrorOccurredCommit = FSAAuto<
  typeof ERROR_OCCURRED,
  ErrorOccurredActionPayload
>;

export const errorOccurredAction = (
  payload: ErrorOccurredActionPayload
): ErrorOccurredCommit => ({
  type: ERROR_OCCURRED,
  payload,
});
