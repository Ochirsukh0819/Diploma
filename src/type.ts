import React, { ReactNode } from "react";

export interface InputType {
  labelName?: string;
  type: string;
  inputState: any;
  inputSetState: React.Dispatch<React.SetStateAction<any>>;
  isImage?: boolean;
  command?: boolean;
}

export interface UploadFileType {
  label: string;
  inputState: any;
  inputSetState: React.Dispatch<React.SetStateAction<any>>;
}

export interface FilterType {
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  filterData: any;
}

interface Option {
  value: string;
  label: string;
}

export interface SelectInputType {
  labelName: string;
  options: Option[];
  inputState: string;
  inputSetState: React.Dispatch<React.SetStateAction<string>>;
}

export interface ButtonType {
  buttonType?: "submit" | "reset" | "button" | undefined;
  buttonName: string;
  loading?: boolean;
}

export interface User {
  uid: string;
  email: string;
  token: string;
  userType?: string;
  studentId: string;
  userName?: string;
  tokenExpiration: 0;
}

export interface RegisterInput {
  userName: string;
  email: string;
  password: string;
  studentId: string;
}
export interface LoginInput {
  email: string;
  password: string;
}

export interface newpasswordType {
  email: string;
}

export interface LoginFormProps {
  onSubmit: (username: string, password: string) => string;
}

export interface DocumentType {
  id?: string;
  file?: File;
  fileUrl?: string;
  documentType: string;
  branch?: string;
  teacherName: string;
  studentName: string;
  studentId: string;
  title: string;
  rate: string;
  layout?: string;
  year?: string;
}

export interface DocumensByDocumentType {
  data: any;
  documentType: string;
}

export interface CarouselSpacingType {
  documentData: any;
  category?: string;
  type: string;
  year?: number;
  branchId?: string;
}

export interface DataType {
  branch?: string;
  documentType: string;
  downloadUrl: string;
  rate: string;
  studentId: string;
  studentName: string;
  teacher: string;
  title: string;
}

export interface DocumentInfoType {
  documentInfo: any;
}

export interface CardType {
  id?: string;
  documentType?: string;
  teacherName?: string;
  studentName?: string;
  studentId?: string;
  title?: string;
  rate?: string;
  year?: string;
  type: string;
  cardData?: any;
  checker?: boolean;
}

export interface ChartType {
  data: any;
  chartType: string;
}
