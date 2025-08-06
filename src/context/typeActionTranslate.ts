export interface ActionTranslateContextType {
  language: any | null | undefined;
  changeLanguage: (language: "pt"|"en") => void;
  translate:any
}
export const defaultActionTranslateContext: ActionTranslateContextType = {
  language: undefined,
  changeLanguage: Function,
  translate: {}
};

export interface Props {
  children: React.ReactNode;
}
