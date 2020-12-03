export interface ErrorsWatcherAwareState {
  errorsReducer: ErrorOccurredActionPayload;
}
export interface ErrorOccurredActionPayload {
  errorMessage: string;
}
