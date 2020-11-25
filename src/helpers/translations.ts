interface StringDictionary {
  readonly [key: string]: string;
}

interface ObjectDictionary {
  readonly [key: string]: StringDictionary;
}

export const translations: ObjectDictionary = {
  button: {
    closeText: "Close",
    submitType: "submit",
    buttonType: "button",
    textType: "text",
    editText: "Edit",
    deleteText: "Delete",
    createText: "Create",
  },
  field: {
    firstNameVal: "firstName",
    lastNameVal: "lastName",
    emailVal: "email",
    positionVal: "position",
    firstNameHolder: "First Name",
    lastNameHolder: "Last Name",
    emailHolder: "Email",
    positionsHolder: "Position",
    actionsHolder: "Actions",
    psdwVal: "password",
    pswdHolder: "Password",
    qa: "QA",
    dev: "Developer",
    manager: "Manager",
    inputTypeText: "text",
    inputTypePassword: "password",
  },
  modal: {
    deleteConfirm: "Are you sure you want to delete that employee?",
  },
};
