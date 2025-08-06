export interface ActionTranslateContextType {
  language: "pt"|"en";
  changeLanguage: (language: "pt"|"en") => void;
  translate:any
}
export const defaultActionTranslateContext: ActionTranslateContextType = {
  language: "pt",
  changeLanguage: Function,
  translate: {}
};

export interface Props {
  children: React.ReactNode;
}
