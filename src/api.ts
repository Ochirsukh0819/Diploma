import { LoginInput, newpasswordType, RegisterInput, User } from "./type";
import axios from "axios";
import { app } from "./firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  getIdToken,
  sendPasswordResetEmail,
} from "firebase/auth";
import { DocumentType } from "./type";
import { userInfo } from "os";

const DIPLOMA_API_URL = "http://localhost:8080";
const ML_NLP = "http://172.104.34.197/nlp-web-demo/tts";
const auth = getAuth(app);

//  User information

export function getUser(): User | null {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = decodeJwt(token);

    const userInfo: User = {
      uid: decoded["user_id"],
      email: decoded["email"],
      token: token,
      userType: "",
      studentId: decoded["studentId"],
      userName: decoded["name"],
      tokenExpiration: decoded["exp"] || 0,
    };

    localStorage.setItem("user", JSON.stringify(userInfo));

    return userInfo;
  } catch (error) {
    console.debug(error);
    return null;
  }
}

// user login and register

export async function registerUser({
  userName,
  email,
  password,
  studentId,
}: RegisterInput): Promise<any> {
  try {
    const response = await axios.post(
      `${DIPLOMA_API_URL}/createUser`,
      {
        email: email,
        password: password,
        userName: userName,
        customClaims: { studentId: studentId },
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error(error);
    return error.response.data;
  }
}

export async function login({ email, password }: LoginInput): Promise<string> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userToken = await getIdToken(userCredential.user);

    return userToken;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return "error";
      }
      return error.response?.data?.message || "error";
    }
    return "error";
  }
}

export async function changePassword({
  email,
}: newpasswordType): Promise<string> {
 
  try {
    const res = sendPasswordResetEmail(auth, email)
      .then(() => {
        return "success";
      })
      .catch((error) => {
        return "error";
      });
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return "error";
      }
      return error.response?.data?.message || "error";
    }
    return "error";
  }
}

export function decodeJwt(token: string) {
  const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  const decodedPayload = decodeURIComponent(escape(atob(base64)));
  return JSON.parse(decodedPayload);
}

// Documents
export async function createDocument(
  file: File,
  documentType: string,
  branch: string,
  teacher: string,
  studentName: string,
  studentId: string,
  title: string,
  rate: string,
  year: string,
  keyword: string
): Promise<string> {
  try {
    const documentData: any = new FormData();
    documentData.append("recfile", file);
    documentData.append("documentType", documentType);
    documentData.append("branch", branch);
    documentData.append("teacher", teacher);
    documentData.append("studentName", studentName);
    documentData.append("studentId", studentId);
    documentData.append("title", title);
    documentData.append("rate", rate);
    documentData.append("year", year);
    documentData.append("state", "disproved");
    documentData.append("keyword", keyword);

    const response = await axios.post(
      `http://localhost:8080/createDocument`,
      documentData,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response.status === 201) {
      return "success";
    } else {
      return "error";
    }
  } catch (error) {
    console.debug(error);
    return "error";
  }
}

export async function getDocumentData() {
  try {
    const respone = await axios.get(`${DIPLOMA_API_URL}/getDocuments`);
    return respone.data;
  } catch (error) {
    console.debug(error);
  }
}

export async function getDocumentById(id: string) {
  try {
    const respone = await axios.get(
      `${DIPLOMA_API_URL}/document-request?id=${id}`
    );
    return respone.data;
  } catch (error) {
    console.debug(error);
  }
}

export async function getDocumentByType(documentType: string) {
  try {
    const response = await axios.post(
      `${DIPLOMA_API_URL}/documentType-request`,
      {
        documentType: documentType,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.debug(error);
  }
}

// StudentCreation
export async function createStudentCreation(
  text: string,
  link: any,
  imageFile1: File,
  imageFile2: File,
  imageFile3: File
): Promise<string> {
  const userInfo = getUser();

  try {
    const documentData: any = new FormData();
    documentData.append("text", text);
    documentData.append("userID", userInfo?.uid);
    documentData.append("studentName", userInfo?.userName);
    documentData.append("studentNumber", userInfo?.email);
    documentData.append("imageFiles", imageFile1);
    documentData.append("imageFiles", imageFile2);
    documentData.append("imageFiles", imageFile3);
    documentData.append("link", link);

    const response = await axios.post(
      `http://localhost:8080/createStudentCreation`,
      documentData,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response.status === 201) {
      return "success";
    } else {
      return "error";
    }
  } catch (error) {
    console.debug(error);
    return "error";
  }
}

export async function getStudentCreation() {
  try {
    const respone = await axios.get(`${DIPLOMA_API_URL}/getStudentCreation`);
    return respone.data;
  } catch (error) {
    console.debug(error);
  }
}

export async function getCreationId(id: string) {
  try {
    const respone = await axios.get(
      `${DIPLOMA_API_URL}/creation-request?id=${id}`
    );
    return respone.data;
  } catch (error) {
    console.debug(error);
  }
}

export async function createComment(
  uuid?: string,
  text?: string,
  rateValue?: number
) {
  try {
    const response = await axios.post(
      `${DIPLOMA_API_URL}/createComment`,
      {
        uuid: uuid,
        text: text,
        rateValue: rateValue,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    return "success";
  } catch (error) {
    console.debug(error);
  }
}

export async function getCommentId(uuid?: string) {
  try {
    const response = await axios.post(
      `${DIPLOMA_API_URL}/comment-request`,
      {
        commentId: uuid,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.debug(error);
  }
}
