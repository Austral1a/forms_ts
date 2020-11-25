import { FSAAuto } from "flux-standard-action";

export const ERROR_OCCURRED: string = "ERROR_OCCURRED";

interface ErrorOccurredPayload {
  errorMessage: string;
}

export type ErrorOccurredCommit = FSAAuto<
  typeof ERROR_OCCURRED,
  ErrorOccurredPayload
>;

export const errorOccurred = (errorMessage: string): ErrorOccurredCommit => ({
  type: ERROR_OCCURRED,
  payload: { errorMessage },
});
