interface StringDictionary {
  readonly [key: string]: string;
}

interface TranslationsDictionary {
  readonly [key: string]: StringDictionary;
}

export const translations: TranslationsDictionary = {
  button: {
    closeText: "Close",
    editText: "Edit",
    deleteText: "Delete",
    createText: "Create",
  },
  field: {
    firstNameText: "First Name",
    lastNameText: "Last Name",
    emailText: "Email",
    positionText: "Position",
    actionsText: "Actions",
    passwordText: "Password",
    qa: "QA",
    dev: "Developer",
    manager: "Manager",
    chosePositionText: "Chose position",
  },
  modal: {
    deleteConfirm: "Are you sure you want to delete that employee?",
  },
};
