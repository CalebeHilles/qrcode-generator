import type React from "react";

export interface FormData {
  ssid: string;
  pass: string;
  noPass: boolean;
  hidden: boolean;
}

export type SetFormData = React.Dispatch<React.SetStateAction<FormData>>;
