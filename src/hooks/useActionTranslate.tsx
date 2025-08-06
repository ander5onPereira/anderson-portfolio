import { useContext } from "react";
import ActionTranslateContext from "../context/actionTranslateContent";
import { defaultActionTranslateContext } from "../context/typeActionTranslate";


export function useActionTranslate() {
  const context = useContext(ActionTranslateContext);

  if (context === defaultActionTranslateContext) {
    throw new Error('useActionTranslate must be used within a ActionTranslateProvider');
  }
  return context;
}
