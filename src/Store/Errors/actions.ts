import { FSAAuto } from "flux-standard-action";
import { ErrorOccurredActionPayload } from "./interfaces";

export const ERROR_OCCURRED = "ERROR_OCCURRED";

export type ErrorOccurredAction = FSAAuto<
  typeof ERROR_OCCURRED,
  ErrorOccurredActionPayload
>;

export const errorOccurredAction = (
  payload: ErrorOccurredActionPayload
): ErrorOccurredAction => ({
  type: ERROR_OCCURRED,
  payload,
});
